import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  TextField,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';

// Composants stylisés
const PreviewContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const ImageGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ImagePreview = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
});

const GuidePreview: React.FC = () => {
  const { t } = useTranslation();
  const [openShareDialog, setOpenShareDialog] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');

  const handleShare = () => {
    setOpenShareDialog(true);
  };

  const handleCloseShareDialog = () => {
    setOpenShareDialog(false);
    setEmailAddress('');
  };

  const handleShareSubmit = () => {
    // Ici, vous implémenteriez la logique de partage
    console.log('Sharing guide with:', emailAddress);
    handleCloseShareDialog();
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          {t('guidePreview.title')}
        </Typography>
        <Button
          variant="contained"
          startIcon={<ShareIcon />}
          onClick={handleShare}
        >
          {t('guidePreview.shareGuide')}
        </Button>
      </Box>

      <PreviewContainer>
        <Section>
          <Typography variant="h5" gutterBottom>
            {t('guidePreview.propertyDetails')}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                {t('guidePreview.propertyType')}
              </Typography>
              <Typography>Maison</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                {t('guidePreview.capacity')}
              </Typography>
              <Typography>4 personnes</Typography>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Typography variant="h5" gutterBottom>
            {t('guidePreview.description')}
          </Typography>
          <Typography>
            Magnifique maison avec vue panoramique sur la ville. Parfaitement équipée pour un séjour confortable.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" gutterBottom>
            {t('guidePreview.photos')}
          </Typography>
          <ImageGrid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <ImagePreview src="/placeholder.jpg" alt="Property" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ImagePreview src="/placeholder.jpg" alt="Property" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ImagePreview src="/placeholder.jpg" alt="Property" />
            </Grid>
          </ImageGrid>
        </Section>

        <Section>
          <Typography variant="h5" gutterBottom>
            {t('guidePreview.rules')}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {t('guidePreview.houseRules')}
          </Typography>
          <Typography>
            • Pas de fumeurs<br />
            • Pas d'animaux<br />
            • Respectez les voisins<br />
            • Éteignez les lumières en partant
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" gutterBottom>
            {t('guidePreview.amenities')}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Typography>• Wi-Fi</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography>• Cuisine</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography>• Climatisation</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography>• TV</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography>• Lave-linge</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography>• Parking</Typography>
            </Grid>
          </Grid>
        </Section>
      </PreviewContainer>

      <Dialog open={openShareDialog} onClose={handleCloseShareDialog}>
        <DialogTitle>{t('guidePreview.shareGuide')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={t('guidePreview.emailAddress')}
            type="email"
            fullWidth
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseShareDialog}>
            {t('guidePreview.cancel')}
          </Button>
          <Button onClick={handleShareSubmit} variant="contained">
            {t('guidePreview.share')}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default GuidePreview; 