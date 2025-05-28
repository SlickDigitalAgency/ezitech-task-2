export interface PricingFeature {
  id: string;
  title: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
}

export interface PricingData {
  title: string;
  description: string;
  plans: PricingPlan[];
}