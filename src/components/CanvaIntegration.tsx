import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const TemplateCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const PreviewImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

interface CanvaTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  pageCount: number;
  price: number;
}

interface CanvaIntegrationProps {
  onSelect: (templateId: string) => void;
}

const CanvaIntegration: React.FC<CanvaIntegrationProps> = ({ onSelect }) => {
  const { t } = useTranslation();
  const [selectedTemplate, setSelectedTemplate] = useState<CanvaTemplate | null>(null);
  const [loading, setLoading] = useState(false);

  const templates: CanvaTemplate[] = [
    {
      id: 'luxury-villa',
      name: t('canva.templates.luxuryVilla.name'),
      description: t('canva.templates.luxuryVilla.description'),
      thumbnail: '/templates/luxury-villa.jpg',
      pageCount: 25,
      price: 49.99,
    },
    {
      id: 'family-home',
      name: t('canva.templates.familyHome.name'),
      description: t('canva.templates.familyHome.description'),
      thumbnail: '/templates/family-home.jpg',
      pageCount: 20,
      price: 39.99,
    },
    {
      id: 'modern-loft',
      name: t('canva.templates.modernLoft.name'),
      description: t('canva.templates.modernLoft.description'),
      thumbnail: '/templates/modern-loft.jpg',
      pageCount: 22,
      price: 44.99,
    },
    {
      id: 'rustic-cabin',
      name: t('canva.templates.rusticCabin.name'),
      description: t('canva.templates.rusticCabin.description'),
      thumbnail: '/templates/rustic-cabin.jpg',
      pageCount: 20,
      price: 39.99,
    },
  ];

  const handleTemplateSelect = async (templateId: string) => {
    setLoading(true);
    try {
      // Simuler un délai pour l'intégration avec Canva
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSelect(templateId);
    } catch (error) {
      console.error('Error selecting template:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h5" gutterBottom align="center">
        {t('canva.title')}
      </Typography>
      <Typography variant="body1" paragraph align="center" color="text.secondary">
        {t('canva.description')}
      </Typography>

      <Grid container spacing={4}>
        {templates.map((template) => (
          <Grid item xs={12} sm={6} md={3} key={template.id}>
            <TemplateCard>
              <PreviewImage
                image={template.thumbnail}
                title={template.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {template.name}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {template.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t('canva.pageCount', { count: template.pageCount })}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  ${template.price}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleTemplateSelect(template.id)}
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={24} />
                  ) : (
                    t('canva.selectTemplate')
                  )}
                </Button>
              </CardContent>
            </TemplateCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Comment ça marche ?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              1. Choisissez votre template
            </Typography>
            <Typography color="text.secondary">
              Sélectionnez parmi nos templates professionnels de 20 à 25 pages
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              2. Personnalisez dans Canva
            </Typography>
            <Typography color="text.secondary">
              Modifiez le contenu, ajoutez vos photos et personnalisez le design
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              3. Exportez et partagez
            </Typography>
            <Typography color="text.secondary">
              Téléchargez votre guide en PDF ou partagez-le directement avec vos invités
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CanvaIntegration; 