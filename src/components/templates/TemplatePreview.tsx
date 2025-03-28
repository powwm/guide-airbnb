import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PremiumGuide from './PremiumGuide';
import FamilyGuide from './FamilyGuide';
import MinimalistGuide from './MinimalistGuide';
import RusticGuide from './RusticGuide';

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

const PreviewDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: '90vw',
    width: '100%',
    height: '90vh',
    margin: theme.spacing(2),
  },
}));

interface TemplatePreviewProps {
  onSelect: (template: string) => void;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ onSelect }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const templates = [
    {
      id: 'premium',
      name: 'Premium',
      description: 'Un design élégant et sophistiqué pour les propriétés haut de gamme',
      image: '/templates/premium.jpg',
      component: PremiumGuide,
    },
    {
      id: 'family',
      name: 'Familial',
      description: 'Un style chaleureux et accueillant parfait pour les familles',
      image: '/templates/family.jpg',
      component: FamilyGuide,
    },
    {
      id: 'minimalist',
      name: 'Minimaliste',
      description: 'Un design épuré et moderne pour les espaces contemporains',
      image: '/templates/minimalist.jpg',
      component: MinimalistGuide,
    },
    {
      id: 'rustic',
      name: 'Rustique',
      description: 'Un style chaleureux et authentique pour les propriétés traditionnelles',
      image: '/templates/rustic.jpg',
      component: RusticGuide,
    },
  ];

  const handlePreview = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleClose = () => {
    setSelectedTemplate(null);
  };

  const handleSelect = (templateId: string) => {
    onSelect(templateId);
    handleClose();
  };

  const renderPreview = () => {
    if (!selectedTemplate) return null;

    const template = templates.find(t => t.id === selectedTemplate);
    if (!template) return null;

    const TemplateComponent = template.component;
    return (
      <TemplateComponent
        propertyName="Villa de Luxe"
        hostName="Marie"
        checkInTime="15:00"
        checkOutTime="11:00"
        address="123 Rue de la Plage, 75001 Paris"
        amenities={['WiFi', 'Piscine', 'Cuisine équipée', 'Parking']}
        rules={[
          'Pas de fête après 22h',
          'Interdiction de fumer',
          'Animaux non acceptés',
        ]}
        localAttractions={[
          {
            name: 'Plage',
            description: 'Magnifique plage de sable fin',
            distance: '5 minutes à pied',
          },
          {
            name: 'Centre-ville',
            description: 'Zone commerçante et restaurants',
            distance: '10 minutes en voiture',
          },
        ]}
        emergencyContacts={[
          {
            name: 'Marie',
            phone: '+33 6 12 34 56 78',
            type: 'Hôte',
          },
          {
            name: 'Urgences',
            phone: '112',
            type: 'Services d\'urgence',
          },
        ]}
      />
    );
  };

  return (
    <Box>
      <Grid container spacing={4}>
        {templates.map((template) => (
          <Grid item xs={12} sm={6} md={3} key={template.id}>
            <TemplateCard>
              <PreviewImage
                image={template.image}
                title={template.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {template.name}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {template.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handlePreview(template.id)}
                  >
                    Aperçu
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleSelect(template.id)}
                  >
                    Sélectionner
                  </Button>
                </Box>
              </CardContent>
            </TemplateCard>
          </Grid>
        ))}
      </Grid>

      <PreviewDialog
        open={!!selectedTemplate}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
      >
        <DialogTitle>
          Aperçu du template {templates.find(t => t.id === selectedTemplate)?.name}
        </DialogTitle>
        <DialogContent>
          {renderPreview()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fermer</Button>
          <Button
            variant="contained"
            onClick={() => selectedTemplate && handleSelect(selectedTemplate)}
          >
            Sélectionner ce template
          </Button>
        </DialogActions>
      </PreviewDialog>
    </Box>
  );
};

export default TemplatePreview; 