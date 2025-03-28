import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTemplateTheme } from '../../styles/templates';
import GuideTemplate from './GuideTemplate';

interface MinimalistGuideProps {
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

const MinimalistGuide: React.FC<MinimalistGuideProps> = (props) => {
  const theme = createTemplateTheme('minimalist');

  return (
    <ThemeProvider theme={theme}>
      <GuideTemplate style="minimalist" {...props} />
    </ThemeProvider>
  );
};

export default MinimalistGuide; 