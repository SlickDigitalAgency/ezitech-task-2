import React from 'react';
import Integration from '@/components/integrations/Integration';
import IntegrationSingle from '@/components/integrations/IntegrationSingle';
import { integrations } from '@/constants/integrations/IntegrationData';
import { figmaIntegration } from '@/constants/integrations/IntegrationSingleData';

const IntegrationsSingle: React.FC = () => {
  // For demo purposes, we're showing the Figma integration details
  // In a real app, this would be determined by the route/URL
  const showSingleIntegration = true;

  return (
    <>
      {showSingleIntegration ? (
        <IntegrationSingle integration={figmaIntegration} />
      ) : (
        <Integration
          title="How To Integrate With Spydea"
          integrations={integrations}
        />
      )}
    </>
  );
};

export default IntegrationsSingle;