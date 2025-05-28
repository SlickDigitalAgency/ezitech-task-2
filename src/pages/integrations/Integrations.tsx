import React from 'react';
import Integration from '@/components/integrations/Integration';
import { integrations } from '@/constants/integrations/IntegrationData';

const Integrations: React.FC = () => {
  return (
    <Integration
      title="How To Integrate With Spydea"
      integrations={integrations}
    />
  );
};

export default Integrations;