export interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
}

export interface IntegrationsProps {
  title: string;
  description?: string;
  integrations: Integration[];
}

export interface IntegrationSingleData {
  id: string;
  name: string;
  description: string;
  icon: string;
  steps: string[];
  advantages: string[];
}

export interface IntegrationSingleProps {
  integration: IntegrationSingleData;
}