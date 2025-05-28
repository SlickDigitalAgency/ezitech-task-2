import { FC } from 'react';
import Pricings from '@/components/pricing/Pricings';
import Faqs from '@/components/faqs/Faqs';

const Pricing: FC = () => {
  return (
    <main className="min-h-screen">
      <Pricings />
      <Faqs />
    </main>
  );
};

export default Pricing;