import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTemplateTheme } from '../../styles/templates';
import GuideTemplate from './GuideTemplate';

interface PremiumGuideProps {
  propertyName: string;
  hostName: string;
  checkInTime: string;
  checkOutTime: string;
  address: string;
  amenities: string[];
  rules: string[];
  localAttractions: {
    name: string;
    description: string;
    distance: string;
  }[];
  emergencyContacts: {
    name: string;
    phone: string;
    type: string;
  }[];
}

const PremiumGuide: React.FC<PremiumGuideProps> = (props) => {
  const theme = createTemplateTheme('premium');

  return (
    <ThemeProvider theme={theme}>
      <GuideTemplate style="premium" {...props} />
    </ThemeProvider>
  );
};

export default PremiumGuide; 