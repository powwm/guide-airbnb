import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Composants stylisés
const TemplateCard = styled(Card)(({ theme }) => ({
  height: '100%',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[4],
  },
  '&.selected': {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

const ColorOption = styled(Box)<{ color: string }>(({ color }) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  backgroundColor: color,
  cursor: 'pointer',
  margin: '0 8px',
  border: '2px solid #fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  '&.selected': {
    border: '2px solid #000',
  },
}));

const FontOption = styled(Paper)<{ selected?: boolean }>(({ theme, selected }) => ({
  padding: theme.spacing(2),
  cursor: 'pointer',
  backgroundColor: selected ? theme.palette.primary.light : theme.palette.background.paper,
  color: selected ? '#fff' : theme.palette.text.primary,
}));

const PreviewContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  minHeight: 400,
}));

// Modèles disponibles
const templates = [
  {
    id: 'modern',
    name: 'Modern',
    image: '/templates/modern.jpg',
  },
  {
    id: 'classic',
    name: 'Classic',
    image: '/templates/classic.jpg',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    image: '/templates/minimal.jpg',
  },
];

// Options de couleurs
const colors = [
  { id: 'primary', name: 'Primary', value: '#FF385C' },
  { id: 'secondary', name: 'Secondary', value: '#00A699' },
  { id: 'dark', name: 'Dark', value: '#1F2937' },
  { id: 'light', name: 'Light', value: '#F3F4F6' },
];

// Options de polices
const fonts = [
  { id: 'inter', name: 'Inter', value: 'Inter' },
  { id: 'roboto', name: 'Roboto', value: 'Roboto' },
  { id: 'open-sans', name: 'Open Sans', value: 'Open Sans' },
  { id: 'montserrat', name: 'Montserrat', value: 'Montserrat' },
];

const SelectTemplate: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFont, setSelectedFont] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId);
  };

  const handleFontSelect = (fontId: string) => {
    setSelectedFont(fontId);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleFinalize = () => {
    console.log('Selected options:', {
      template: selectedTemplate,
      color: selectedColor,
      font: selectedFont,
    });
    navigate('/payment');
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        {t('selectTemplate.title')}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {t('selectTemplate.subtitle')}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {templates.map((template) => (
              <Grid item xs={12} sm={6} md={4} key={template.id}>
                <TemplateCard
                  className={selectedTemplate === template.id ? 'selected' : ''}
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={template.image}
                    alt={template.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{template.name}</Typography>
                  </CardContent>
                </TemplateCard>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Tabs value={activeTab} onChange={handleTabChange}>
              <Tab label={t('selectTemplate.customize')} />
              <Tab label={t('selectTemplate.preview')} />
            </Tabs>

            {activeTab === 0 && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {t('selectTemplate.colors')}
                </Typography>
                <Box sx={{ display: 'flex', mb: 4 }}>
                  {colors.map((color) => (
                    <ColorOption
                      key={color.id}
                      color={color.value}
                      className={selectedColor === color.id ? 'selected' : ''}
                      onClick={() => handleColorSelect(color.id)}
                    />
                  ))}
                </Box>

                <Typography variant="h6" gutterBottom>
                  {t('selectTemplate.fonts')}
                </Typography>
                <Grid container spacing={2}>
                  {fonts.map((font) => (
                    <Grid item xs={6} sm={3} key={font.id}>
                      <FontOption
                        selected={selectedFont === font.id}
                        onClick={() => handleFontSelect(font.id)}
                      >
                        <Typography style={{ fontFamily: font.value }}>
                          {font.name}
                        </Typography>
                      </FontOption>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {activeTab === 1 && (
              <PreviewContainer>
                <Typography variant="h5" gutterBottom>
                  {t('selectTemplate.preview')}
                </Typography>
                {/* Aperçu du modèle sélectionné */}
                <Box sx={{ mt: 2 }}>
                  <Typography>
                    {t('selectTemplate.previewContent')}
                  </Typography>
                </Box>
              </PreviewContainer>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 24 }}>
            <Typography variant="h6" gutterBottom>
              {t('selectTemplate.summary')}
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                {t('selectTemplate.selectedTemplate')}:{' '}
                {templates.find((t) => t.id === selectedTemplate)?.name || t('selectTemplate.none')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('selectTemplate.selectedColor')}:{' '}
                {colors.find((c) => c.id === selectedColor)?.name || t('selectTemplate.none')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('selectTemplate.selectedFont')}:{' '}
                {fonts.find((f) => f.id === selectedFont)?.name || t('selectTemplate.none')}
              </Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              onClick={handleFinalize}
              disabled={!selectedTemplate || !selectedColor || !selectedFont}
            >
              {t('selectTemplate.finalize')}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelectTemplate; 