import React from 'react';
import { SlideData, SlideType } from '../types';
import { RiskMatrix, StrategyChart } from './Visuals';
import { ShieldAlert, Search, Calculator, FileText, Activity, Smartphone, PenTool, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface SlideRendererProps {
  slide: SlideData;
}

const IconMap: Record<string, any> = {
  ShieldAlert, Search, Calculator, FileText, Activity, Smartphone, PenTool
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  
  const renderIcon = () => {
    if (!slide.visualConfig?.icon) return null;
    const Icon = IconMap[slide.visualConfig.icon];
    return Icon ? <Icon size={120} className="text-accent-400 mb-6 animate-pulse" /> : null;
  };

  const renderContent = () => {
    switch (slide.type) {
      case SlideType.TITLE:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-in-up z-10 relative">
            <div className="p-6 bg-navy-800/50 rounded-full backdrop-blur-sm border border-accent-500/30">
              <ShieldAlert size={100} className="text-accent-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-300 drop-shadow-lg">
              {slide.title}
            </h1>
            <div className="w-32 h-1 bg-accent-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.8)]"></div>
            <h2 className="text-2xl md:text-3xl text-gray-200 font-light max-w-3xl">
              {slide.subtitle}
            </h2>
          </div>
        );

      case SlideType.LIST:
        return (
          <div className="flex flex-col h-full justify-center px-4 md:px-24">
            <h2 className="text-3xl md:text-5xl font-bold text-accent-400 mb-2">{slide.title}</h2>
            {slide.subtitle && <h3 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">{slide.subtitle}</h3>}
            <ul className="space-y-4 md:space-y-6">
              {slide.content?.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-4 text-lg md:text-2xl opacity-0 animate-fade-in-up fill-mode-forwards group"
                  style={{ animationDelay: `${idx * 150 + 100}ms` }}
                >
                  <ArrowRight className="mt-1 text-accent-500 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      
      case SlideType.SPLIT:
        return (
          <div className="flex flex-col md:flex-row h-full items-center">
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-400 mb-8">{slide.title}</h2>
              <ul className="space-y-5">
                {slide.content?.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-lg md:text-xl border-l-4 border-accent-500 pl-4 py-1 opacity-0 animate-fade-in-up fill-mode-forwards bg-navy-800/30 rounded-r-lg mb-2"
                    style={{ animationDelay: `${idx * 150 + 100}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center bg-navy-800/30 h-full p-8 backdrop-blur-sm">
              {renderIcon()}
            </div>
          </div>
        );

      case SlideType.COMPARISON:
        const { left, right } = slide.comparisonData!;
        const getBorderColor = (type?: string) => {
          if (type === 'success') return 'border-green-500';
          if (type === 'failure') return 'border-red-500';
          return 'border-accent-500';
        };
        const getTitleColor = (type?: string) => {
           if (type === 'success') return 'text-green-400';
           if (type === 'failure') return 'text-red-400';
           return 'text-accent-400';
        };

        return (
          <div className="flex flex-col h-full px-4 md:px-12 py-8">
             <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
                {slide.subtitle && <p className="text-gray-300">{slide.subtitle}</p>}
             </div>
             <div className="flex flex-col md:flex-row gap-6 flex-1 overflow-y-auto">
                {/* Left Column */}
                <div 
                  className={`glass-panel flex-1 rounded-xl border-t-4 p-6 opacity-0 animate-fade-in-up fill-mode-forwards ${getBorderColor(left.type)}`}
                  style={{ animationDelay: '100ms' }}
                >
                   <h3 className={`text-xl md:text-2xl font-bold mb-2 ${getTitleColor(left.type)}`}>{left.title}</h3>
                   {left.subtitle && <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">{left.subtitle}</p>}
                   <ul className="space-y-3">
                     {left.points.map((p, i) => (
                       <li key={i} className="flex gap-2 text-gray-200 opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: `${i * 100 + 300}ms` }}>
                         <div className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${left.type === 'success' ? 'bg-green-500' : left.type === 'failure' ? 'bg-red-500' : 'bg-accent-500'}`} />
                         <span>{p}</span>
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Right Column */}
                <div 
                  className={`glass-panel flex-1 rounded-xl border-t-4 p-6 opacity-0 animate-fade-in-up fill-mode-forwards ${getBorderColor(right.type)}`}
                  style={{ animationDelay: '200ms' }}
                >
                   <h3 className={`text-xl md:text-2xl font-bold mb-2 ${getTitleColor(right.type)}`}>{right.title}</h3>
                   {right.subtitle && <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">{right.subtitle}</p>}
                   <ul className="space-y-3">
                     {right.points.map((p, i) => (
                       <li key={i} className="flex gap-2 text-gray-200 opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: `${i * 100 + 400}ms` }}>
                         <div className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${right.type === 'success' ? 'bg-green-500' : right.type === 'failure' ? 'bg-red-500' : 'bg-accent-500'}`} />
                         <span>{p}</span>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </div>
        );

      case SlideType.MATRIX:
        return (
          <div className="flex flex-col h-full p-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-accent-400">{slide.title}</h2>
              <p className="text-gray-300">{slide.subtitle}</p>
            </div>
            <div className="flex-1 flex items-center justify-center animate-fade-in-up">
              <RiskMatrix />
            </div>
          </div>
        );

      case SlideType.CHART:
        return (
          <div className="flex flex-col h-full p-8 md:p-16">
             <h2 className="text-4xl font-bold text-accent-400 mb-2">{slide.title}</h2>
             <p className="text-gray-300 mb-8">{slide.subtitle}</p>
             <div className="flex-1 glass-panel rounded-xl p-6 shadow-inner animate-fade-in-up">
               {slide.chartData && <StrategyChart data={slide.chartData} />}
             </div>
          </div>
        );

      case SlideType.TABLE:
        return (
           <div className="flex flex-col h-full p-8 md:px-16 md:py-10">
             <h2 className="text-3xl font-bold text-accent-400 mb-6">{slide.title} <span className="text-gray-400 text-xl block md:inline md:ml-4">{slide.subtitle}</span></h2>
             <div className="overflow-x-auto glass-panel rounded-lg shadow-xl animate-fade-in-up">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-navy-950/80 text-accent-400 border-b border-navy-700">
                      {Object.values(slide.tableData![0]).map((header, i) => (
                        <th key={i} className="p-4 font-bold tracking-wider uppercase text-sm">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {slide.tableData!.slice(1).map((row, i) => (
                      <tr key={i} className="border-b border-navy-700/50 hover:bg-navy-700/50 transition">
                         <td className="p-4 font-mono text-gray-400">{row.id}</td>
                         <td className="p-4 font-medium text-gray-100">{row.risk}</td>
                         <td className="p-4 text-blue-300">{row.prob}</td>
                         <td className={`p-4 font-bold ${row.impact.includes('High') || row.impact.includes('Critical') ? 'text-red-400' : 'text-yellow-400'}`}>{row.impact}</td>
                         <td className="p-4">{row.priority}</td>
                         <td className="p-4 text-sm">{row.strategy}</td>
                         <td className="p-4 text-sm text-gray-400">{row.owner}</td>
                         <td className="p-4">
                           <span className={`px-2 py-1 rounded-full text-xs font-bold border ${row.status === 'Active' || row.status === 'Open' ? 'bg-green-900/50 text-green-300 border-green-700' : 'bg-gray-800 text-gray-300 border-gray-600'}`}>
                             {row.status}
                           </span>
                         </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
           </div>
        );

      case SlideType.CASE_STUDY:
        const isSuccess = slide.visualConfig?.status === 'success';
        return (
          <div className="flex flex-col h-full justify-center items-center p-8 text-center relative overflow-hidden animate-fade-in-up">
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${isSuccess ? 'from-green-500 to-green-300' : 'from-red-500 to-red-300'}`}></div>
            <div className="z-10 glass-panel p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl">
               <div className="flex justify-center mb-6">
                 {isSuccess ? <CheckCircle size={80} className="text-green-500" /> : <XCircle size={80} className="text-red-500" />}
               </div>
               <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
               <h3 className={`text-xl md:text-2xl mb-8 ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>{slide.subtitle}</h3>
               <div className="grid gap-4 text-left">
                  {slide.content?.map((item, idx) => (
                    <div key={idx} className="bg-navy-900/60 p-4 rounded-lg border-l-4 border-gray-600 animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
                      <p className="text-lg md:text-xl">{item}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        );

      case SlideType.FINAL:
        return (
           <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-pulse z-10">
             <h1 className="text-6xl font-bold text-accent-400">{slide.title}</h1>
             <p className="text-3xl text-gray-300">{slide.subtitle}</p>
             <div className="mt-12 p-6 glass-panel rounded-xl">
               <p className="text-gray-400">Presentation Ended</p>
             </div>
           </div>
        );

      default:
        return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <div className="w-full h-full">
      {renderContent()}
    </div>
  );
};