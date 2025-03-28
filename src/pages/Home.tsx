import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SpeedIcon from '@mui/icons-material/Speed';
import PaletteIcon from '@mui/icons-material/Palette';
import EditIcon from '@mui/icons-material/Edit';

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(3),
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.contrastText,
}));

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            {t('home.title')}
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            {t('home.subtitle')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/form')}
              sx={{
                bgcolor: 'background.paper',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              {t('home.createGuide')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <FeatureIcon>
                <SpeedIcon sx={{ fontSize: 32 }} />
              </FeatureIcon>
              <Typography variant="h6" gutterBottom>
                {t('home.features.simple.title')}
              </Typography>
              <Typography color="text.secondary">
                {t('home.features.simple.description')}
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <FeatureIcon>
                <PaletteIcon sx={{ fontSize: 32 }} />
              </FeatureIcon>
              <Typography variant="h6" gutterBottom>
                {t('home.features.design.title')}
              </Typography>
              <Typography color="text.secondary">
                {t('home.features.design.description')}
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <FeatureIcon>
                <EditIcon sx={{ fontSize: 32 }} />
              </FeatureIcon>
              <Typography variant="h6" gutterBottom>
                {t('home.features.customization.title')}
              </Typography>
              <Typography color="text.secondary">
                {t('home.features.customization.description')}
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 