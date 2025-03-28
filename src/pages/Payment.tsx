import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
} from '@mui/material';
import CanvaIntegration from '../components/CanvaIntegration';

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    t('payment.steps.selectTemplate'),
    t('payment.steps.customize'),
    t('payment.steps.payment'),
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleTemplateSelect = (templateId: string) => {
    // Stocker le template sélectionné
    localStorage.setItem('selectedTemplate', templateId);
    handleNext();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center">
        {t('payment.title')}
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 6 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <Box>
          <CanvaIntegration onSelect={handleTemplateSelect} />
        </Box>
      )}

      {activeStep === 1 && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            {t('payment.customizeTitle')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('payment.customizeDescription')}
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button onClick={handleBack} sx={{ mr: 2 }}>
              {t('payment.back')}
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
            >
              {t('payment.continue')}
            </Button>
          </Box>
        </Box>
      )}

      {activeStep === 2 && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            {t('payment.paymentDetails')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('payment.selectedTemplate')}: {localStorage.getItem('selectedTemplate')}
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button onClick={handleBack} sx={{ mr: 2 }}>
              {t('payment.back')}
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate('/success')}
            >
              {t('payment.payNow')}
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Payment; 