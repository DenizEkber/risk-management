import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './data';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronRight, ChevronLeft, Maximize, Minimize, Grid, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentSlide = slides[currentSlideIndex];
  const totalSlides = slides.length;
  
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  const jumpToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setShowOverview(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showOverview) {
        if (e.key === 'Escape') setShowOverview(false);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, showOverview]);

  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div 
      className="h-screen w-screen flex flex-col bg-navy-900 text-white overflow-hidden selection:bg-accent-500 selection:text-white touch-pan-y relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-900/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[90px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-navy-800/80 backdrop-blur-md z-40 absolute top-0 w-full border-b border-navy-700 shadow-sm">
        <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            <span className="font-bold text-accent-400 tracking-widest text-xs md:text-sm uppercase truncate max-w-[200px] md:max-w-none">
              {currentSlide.section || "PRESENTATION"}
            </span>
        </div>
        <div className="flex items-center gap-4">
           <span className="font-mono text-gray-400 text-sm hidden sm:inline">{currentSlideIndex + 1} / {totalSlides}</span>
           <button onClick={() => setShowOverview(!showOverview)} className="text-gray-400 hover:text-white transition p-1 rounded hover:bg-navy-700" title="Slide Overview">
             {showOverview ? <X size={20} /> : <Grid size={20} />}
           </button>
           <button onClick={toggleFullscreen} className="text-gray-400 hover:text-white transition p-1 rounded hover:bg-navy-700 hidden sm:block" title="Fullscreen">
             {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
           </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden pt-16 pb-20 z-10">
        {showOverview && (
          <div className="absolute inset-0 z-50 bg-navy-900/95 backdrop-blur-xl overflow-y-auto p-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-white border-b border-gray-700 pb-4">Slides</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {slides.map((s, idx) => (
                <button 
                  key={s.id}
                  onClick={() => jumpToSlide(idx)}
                  className={`p-4 rounded-lg border text-left transition-all hover:scale-105 ${idx === currentSlideIndex ? 'border-accent-500 bg-navy-700 shadow-[0_0_15px_rgba(14,165,233,0.3)]' : 'border-navy-700 bg-navy-800 hover:border-gray-500'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-gray-500">#{s.id}</span>
                    <span className="text-[10px] uppercase bg-navy-900 px-1 rounded text-accent-400">{s.type}</span>
                  </div>
                  <p className="font-bold text-sm text-gray-200 line-clamp-2">{s.title}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {!showOverview && (
          <div key={currentSlide.id} className="h-full w-full max-w-7xl mx-auto px-4 md:px-0">
             <SlideRenderer slide={currentSlide} />
          </div>
        )}
      </main>

      {/* Bottom Bar */}
      <div className="h-16 bg-navy-900 border-t border-navy-800 flex items-center justify-between px-4 md:px-8 z-50 relative">
        <div className="absolute top-0 left-0 h-1 bg-navy-800 w-full group">
            <div 
              className="h-full bg-gradient-to-r from-accent-600 to-accent-400 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
              style={{ width: `${progress}%` }}
            ></div>
        </div>

        <button 
          onClick={prevSlide} 
          disabled={currentSlideIndex === 0}
          className="p-2 md:pr-4 rounded-full md:rounded-lg hover:bg-navy-800 transition disabled:opacity-30 disabled:cursor-not-allowed text-gray-300 hover:text-white flex items-center gap-2"
        >
          <ChevronLeft /> <span className="hidden md:inline font-medium">Back</span>
        </button>

        <div className="text-center hidden md:flex flex-col items-center">
           <p className="text-sm font-semibold text-gray-200 truncate max-w-md">{currentSlide.title}</p>
        </div>

        <button 
          onClick={nextSlide} 
          disabled={currentSlideIndex === totalSlides - 1}
          className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-medium transition flex items-center gap-2 shadow-lg shadow-accent-900/30 hover:shadow-accent-900/50 transform active:scale-95"
        >
          <span className="hidden md:inline">Next</span> <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;