export interface Metric {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface ExcellenceData {
  title: string;
  description: string;
  metrics: Metric[];
}