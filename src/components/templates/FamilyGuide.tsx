import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTemplateTheme } from '../../styles/templates';
import GuideTemplate from './GuideTemplate';

interface FamilyGuideProps {
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

const FamilyGuide: React.FC<FamilyGuideProps> = (props) => {
  const theme = createTemplateTheme('family');

  return (
    <ThemeProvider theme={theme}>
      <GuideTemplate style="family" {...props} />
    </ThemeProvider>
  );
};

export default FamilyGuide; 