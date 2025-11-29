export enum SlideType {
  TITLE = 'TITLE',
  LIST = 'LIST',
  MATRIX = 'MATRIX',
  CHART = 'CHART',
  TABLE = 'TABLE',
  SPLIT = 'SPLIT',
  COMPARISON = 'COMPARISON',
  CASE_STUDY = 'CASE_STUDY',
  FINAL = 'FINAL'
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
}

export interface RiskRegisterItem {
  id: string;
  risk: string;
  prob: string;
  impact: string;
  priority: string;
  strategy: string;
  owner: string;
  status: string;
}

export interface KPITableItem {
  metric: string;
  target: string;
  actual: string;
  status: string;
}

export interface ComparisonItem {
  title: string;
  subtitle?: string;
  points: string[];
  type?: 'success' | 'failure' | 'neutral';
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string[];
  chartData?: ChartDataPoint[];
  tableData?: RiskRegisterItem[] | KPITableItem[];
  visualConfig?: any;
  section?: string;
  comparisonData?: {
    left: ComparisonItem;
    right: ComparisonItem;
  };
}