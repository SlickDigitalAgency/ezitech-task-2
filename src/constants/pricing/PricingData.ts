import { PricingData } from '@/types/pricing/PricingTypes';

export const pricingData: PricingData = {
  title: "Choose the Plan That's Right for You",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
  plans: [
    {
      id: '1',
      name: 'Standard License',
      price: 200,
      period: '/Month',
      features: [
        { id: '1', title: 'Performance Analytics System', included: true },
        { id: '2', title: 'Merlin Controller & Virtual Service', included: true },
        { id: '3', title: 'Advanced Individual Service', included: true },
        { id: '4', title: 'Seat duplicate Virtual Service & Insights', included: true }
      ],
      buttonText: 'Start Free Trial'
    },
    {
      id: '2',
      name: 'Enterprise License',
      price: 500,
      period: '/Month',
      features: [
        { id: '1', title: 'Performance Analytics System', included: true },
        { id: '2', title: 'Merlin Controller & Virtual Service', included: true },
        { id: '3', title: 'Advanced Individual Service', included: true },
        { id: '4', title: 'Seat duplicate Virtual Service & Insights', included: true }
      ],
      buttonText: 'Start Free Trial',
      isPopular: true
    }
  ]
};