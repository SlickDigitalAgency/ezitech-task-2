export interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

export interface ExperienceSpeaksProps {
  title: string;
  description: string;
  stats: StatItem[];
}