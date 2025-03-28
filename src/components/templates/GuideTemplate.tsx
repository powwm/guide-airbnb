import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';
import {
  Home as HomeIcon,
  LocalParking as ParkingIcon,
  Wifi as WifiIcon,
  Kitchen as KitchenIcon,
  LocalLaundryService as LaundryIcon,
  Pool as PoolIcon,
  DirectionsCar as CarIcon,
  Restaurant as RestaurantIcon,
  ShoppingBag as ShoppingIcon,
  LocalHospital as HospitalIcon,
  Security as SecurityIcon,
  Pets as PetsIcon,
  SmokingRooms as SmokingIcon,
  EventNote as RulesIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { commonStyles } from '../../styles/templates';

// Composants stylisés
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: '#FFFFFF',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: theme.spacing(2),
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    backgroundColor: theme.palette.primary.main,
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const AmenityIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '40px',
  color: theme.palette.primary.main,
}));

interface GuideTemplateProps {
  style: 'premium' | 'family' | 'minimalist' | 'rustic';
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

const GuideTemplate: React.FC<GuideTemplateProps> = ({
  style,
  propertyName,
  hostName,
  checkInTime,
  checkOutTime,
  address,
  amenities,
  rules,
  localAttractions,
  emergencyContacts,
}) => {
  const { t } = useTranslation();

  const getAmenityIcon = (amenity: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      wifi: <WifiIcon />,
      parking: <ParkingIcon />,
      kitchen: <KitchenIcon />,
      laundry: <LaundryIcon />,
      pool: <PoolIcon />,
      pets: <PetsIcon />,
      smoking: <SmokingIcon />,
    };

    return iconMap[amenity.toLowerCase()] || <HomeIcon />;
  };

  return (
    <Box>
      <HeroSection>
        <Container>
          <Typography variant="h1" gutterBottom>
            {propertyName}
          </Typography>
          <Typography variant="h5">
            {t('guide.welcomeMessage', { hostName })}
          </Typography>
        </Container>
      </HeroSection>

      <Container>
        {/* Informations essentielles */}
        <Box sx={commonStyles.section}>
          <SectionTitle variant="h2">
            {t('guide.essentialInfo')}
          </SectionTitle>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={commonStyles.card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {t('guide.checkInOut')}
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={t('guide.checkIn')}
                        secondary={checkInTime}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('guide.checkOut')}
                        secondary={checkOutTime}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={commonStyles.card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {t('guide.address')}
                  </Typography>
                  <Typography>{address}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Équipements */}
        <Box sx={commonStyles.section}>
          <SectionTitle variant="h2">
            {t('guide.amenities')}
          </SectionTitle>
          <Grid container spacing={3}>
            {amenities.map((amenity, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AmenityIcon>{getAmenityIcon(amenity)}</AmenityIcon>
                      <Typography variant="h6">{amenity}</Typography>
                    </Box>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Règles de la maison */}
        <Box sx={commonStyles.section}>
          <SectionTitle variant="h2">
            {t('guide.houseRules')}
          </SectionTitle>
          <Card sx={commonStyles.card}>
            <CardContent>
              <List>
                {rules.map((rule, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <RulesIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={rule} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>

        {/* Attractions locales */}
        <Box sx={commonStyles.section}>
          <SectionTitle variant="h2">
            {t('guide.localAttractions')}
          </SectionTitle>
          <Grid container spacing={4}>
            {localAttractions.map((attraction, index) => (
              <Grid item xs={12} md={4} key={index}>
                <FeatureCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {attraction.name}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {attraction.description}
                    </Typography>
                    <Typography variant="body2">
                      {t('guide.distance')}: {attraction.distance}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contacts d'urgence */}
        <Box sx={commonStyles.section}>
          <SectionTitle variant="h2">
            {t('guide.emergencyContacts')}
          </SectionTitle>
          <Card sx={commonStyles.card}>
            <CardContent>
              <Grid container spacing={3}>
                {emergencyContacts.map((contact, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Typography variant="h6" gutterBottom>
                      {contact.type}
                    </Typography>
                    <Typography>{contact.name}</Typography>
                    <Typography color="primary">{contact.phone}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Bouton d'action */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => window.print()}
          >
            {t('guide.printGuide')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GuideTemplate; 