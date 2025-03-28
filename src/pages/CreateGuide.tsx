import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Composants stylisés
const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const StepContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(4),
}));

// Étapes du formulaire
const steps = ['general', 'description', 'rules', 'photos'];

// Liste des équipements disponibles
const amenities = [
  'wifi',
  'kitchen',
  'pool',
  'parking',
  'ac',
  'tv',
  'washer',
  'dryer',
  'elevator',
  'gym',
];

const CreateGuide: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: '',
    capacity: '',
    description: '',
    amenities: [] as string[],
    rules: '',
    attractions: '',
    specialInstructions: '',
    photos: [] as File[],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  const handleAmenityChange = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    navigate('/template');
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('createGuide.propertyName')}
                name="propertyName"
                value={formData.propertyName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>{t('createGuide.propertyType')}</InputLabel>
                <Select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  label={t('createGuide.propertyType')}
                >
                  <MenuItem value="house">{t('createGuide.propertyTypes.house')}</MenuItem>
                  <MenuItem value="apartment">{t('createGuide.propertyTypes.apartment')}</MenuItem>
                  <MenuItem value="studio">{t('createGuide.propertyTypes.studio')}</MenuItem>
                  <MenuItem value="villa">{t('createGuide.propertyTypes.villa')}</MenuItem>
                  <MenuItem value="other">{t('createGuide.propertyTypes.other')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('createGuide.capacity')}
                name="capacity"
                type="number"
                value={formData.capacity}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label={t('createGuide.description')}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                {t('createGuide.amenities')}
              </Typography>
              <FormGroup>
                {amenities.map((amenity) => (
                  <FormControlLabel
                    key={amenity}
                    control={
                      <Checkbox
                        checked={formData.amenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                      />
                    }
                    label={t(`createGuide.amenitiesList.${amenity}`)}
                  />
                ))}
              </FormGroup>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label={t('createGuide.rules')}
                name="rules"
                value={formData.rules}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label={t('createGuide.attractions')}
                name="attractions"
                value={formData.attractions}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label={t('createGuide.specialInstructions')}
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                {t('createGuide.photos')}
              </Typography>
              <Button variant="contained" component="label">
                {t('createGuide.uploadPhotos')}
                <input
                  type="file"
                  hidden
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    setFormData((prev) => ({
                      ...prev,
                      photos: [...prev.photos, ...files],
                    }));
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        {t('createGuide.title')}
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{t(`createGuide.steps.${step}`)}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <FormContainer>
        <StepContent>{renderStepContent(activeStep)}</StepContent>
        <ButtonContainer>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            {t('common.back')}
          </Button>
          <Button
            variant="contained"
            onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
          >
            {activeStep === steps.length - 1 ? t('common.finish') : t('common.next')}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default CreateGuide; 