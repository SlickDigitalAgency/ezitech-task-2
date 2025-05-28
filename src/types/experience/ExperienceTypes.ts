export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface ExperienceData {
  title: string;
  subtitle: string;
  features: Feature[];
  dashboardImage: string;
}