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
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  IconButton,
  Tooltip,
  SelectChangeEvent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import InfoIcon from '@mui/icons-material/Info';
import WifiIcon from '@mui/icons-material/Wifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PoolIcon from '@mui/icons-material/Pool';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import ElevatorIcon from '@mui/icons-material/Elevator';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupIcon from '@mui/icons-material/Group';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const FormSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const StepIcon = styled(Box)(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  marginRight: theme.spacing(1),
  fontWeight: 'bold',
}));

const AmenityCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));

const AmenityIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  marginRight: theme.spacing(2),
}));

const GuideForm: React.FC = () => {
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
  });

  const steps = [
    { label: t('guideForm.steps.general'), icon: <HomeIcon /> },
    { label: t('guideForm.steps.description'), icon: <DescriptionIcon /> },
    { label: t('guideForm.steps.rules'), icon: <GavelIcon /> },
    { label: t('guideForm.steps.photos'), icon: <InfoIcon /> },
  ];

  const amenitiesList = [
    { id: 'wifi', label: t('guideForm.amenitiesList.wifi'), icon: <WifiIcon /> },
    { id: 'kitchen', label: t('guideForm.amenitiesList.kitchen'), icon: <KitchenIcon /> },
    { id: 'pool', label: t('guideForm.amenitiesList.pool'), icon: <PoolIcon /> },
    { id: 'parking', label: t('guideForm.amenitiesList.parking'), icon: <LocalParkingIcon /> },
    { id: 'ac', label: t('guideForm.amenitiesList.ac'), icon: <AcUnitIcon /> },
    { id: 'tv', label: t('guideForm.amenitiesList.tv'), icon: <TvIcon /> },
    { id: 'washer', label: t('guideForm.amenitiesList.washer'), icon: <LocalLaundryServiceIcon /> },
    { id: 'dryer', label: t('guideForm.amenitiesList.dryer'), icon: <LocalLaundryServiceIcon /> },
    { id: 'elevator', label: t('guideForm.amenitiesList.elevator'), icon: <ElevatorIcon /> },
    { id: 'gym', label: t('guideForm.amenitiesList.gym'), icon: <FitnessCenterIcon /> },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleAmenityToggle = (amenityId: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter((id) => id !== amenityId)
        : [...prev.amenities, amenityId],
    }));
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('guideForm.propertyName')}
                value={formData.propertyName}
                onChange={handleInputChange('propertyName')}
                InputProps={{
                  startAdornment: <LocationCityIcon sx={{ mr: 1, color: 'primary.main' }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>{t('guideForm.propertyType')}</InputLabel>
                <Select
                  value={formData.propertyType}
                  onChange={handleInputChange('propertyType')}
                  label={t('guideForm.propertyType')}
                >
                  <MenuItem value="house">{t('guideForm.propertyTypes.house')}</MenuItem>
                  <MenuItem value="apartment">{t('guideForm.propertyTypes.apartment')}</MenuItem>
                  <MenuItem value="studio">{t('guideForm.propertyTypes.studio')}</MenuItem>
                  <MenuItem value="villa">{t('guideForm.propertyTypes.villa')}</MenuItem>
                  <MenuItem value="other">{t('guideForm.propertyTypes.other')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t('guideForm.capacity')}
                type="number"
                value={formData.capacity}
                onChange={handleInputChange('capacity')}
                InputProps={{
                  startAdornment: <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />,
                }}
              />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label={t('guideForm.description')}
                value={formData.description}
                onChange={handleInputChange('description')}
                InputProps={{
                  startAdornment: <DescriptionIcon sx={{ mr: 1, color: 'primary.main' }} />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                {t('guideForm.amenities')}
              </Typography>
              <Grid container spacing={2}>
                {amenitiesList.map((amenity) => (
                  <Grid item xs={12} sm={6} md={4} key={amenity.id}>
                    <AmenityCard>
                      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                        <AmenityIcon>
                          {amenity.icon}
                        </AmenityIcon>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.amenities.includes(amenity.id)}
                              onChange={() => handleAmenityToggle(amenity.id)}
                              color="primary"
                            />
                          }
                          label={amenity.label}
                          sx={{ flex: 1 }}
                        />
                      </CardContent>
                    </AmenityCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label={t('guideForm.rules')}
                value={formData.rules}
                onChange={handleInputChange('rules')}
                InputProps={{
                  startAdornment: <GavelIcon sx={{ mr: 1, color: 'primary.main' }} />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label={t('guideForm.attractions')}
                value={formData.attractions}
                onChange={handleInputChange('attractions')}
                InputProps={{
                  startAdornment: <InfoIcon sx={{ mr: 1, color: 'primary.main' }} />,
                }}
              />
            </Grid>
          </Grid>
        );

      case 3:
        return (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label={t('guideForm.specialInstructions')}
                value={formData.specialInstructions}
                onChange={handleInputChange('specialInstructions')}
                InputProps={{
                  startAdornment: <InfoIcon sx={{ mr: 1, color: 'primary.main' }} />,
                }}
              />
            </Grid>
          </Grid>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
        {t('guideForm.title')}
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 8 }}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconProps={{
                icon: (
                  <StepIcon>
                    {index + 1}
                  </StepIcon>
                ),
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <FormSection elevation={2}>
        {renderStepContent(activeStep)}
      </FormSection>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          startIcon={<ArrowBackIcon />}
          size="large"
        >
          {t('guideForm.back')}
        </Button>
        <Button
          variant="contained"
          onClick={activeStep === steps.length - 1 ? () => navigate('/payment') : handleNext}
          endIcon={activeStep === steps.length - 1 ? <CheckCircleIcon /> : <ArrowForwardIcon />}
          size="large"
        >
          {activeStep === steps.length - 1 ? t('guideForm.continue') : t('guideForm.next')}
        </Button>
      </Box>
    </Container>
  );
};

export default GuideForm; 