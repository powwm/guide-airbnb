import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTemplateTheme } from '../../styles/templates';
import GuideTemplate from './GuideTemplate';

interface RusticGuideProps {
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

const RusticGuide: React.FC<RusticGuideProps> = (props) => {
  const theme = createTemplateTheme('rustic');

  return (
    <ThemeProvider theme={theme}>
      <GuideTemplate style="rustic" {...props} />
    </ThemeProvider>
  );
};

export default RusticGuide; 