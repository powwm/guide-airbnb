import { createTheme } from '@mui/material/styles';

// Typographies
const typography = {
  fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.2,
  },
  h2: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1.3,
  },
  h3: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 600,
    fontSize: '1.75rem',
    lineHeight: 1.4,
  },
  body1: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
};

// Palettes de couleurs pour chaque style
export const colorPalettes = {
  premium: {
    primary: '#2C3E50', // Bleu foncé élégant
    secondary: '#E67E22', // Orange chaleureux
    background: '#F8F9FA', // Blanc cassé
    text: '#2C3E50',
    accent: '#C0392B', // Rouge profond
  },
  family: {
    primary: '#3498DB', // Bleu vif
    secondary: '#2ECC71', // Vert frais
    background: '#FFFFFF',
    text: '#2C3E50',
    accent: '#E74C3C', // Rouge vif
  },
  minimalist: {
    primary: '#2C3E50', // Gris foncé
    secondary: '#95A5A6', // Gris clair
    background: '#FFFFFF',
    text: '#2C3E50',
    accent: '#34495E', // Gris bleuté
  },
  rustic: {
    primary: '#8B4513', // Marron foncé
    secondary: '#DEB887', // Beige chaleureux
    background: '#F5F5DC', // Beige clair
    text: '#2C3E50',
    accent: '#CD853F', // Marron moyen
  },
};

// Création des thèmes pour chaque style
export const createTemplateTheme = (style: keyof typeof colorPalettes) => {
  const palette = colorPalettes[style];
  
  return createTheme({
    typography,
    palette: {
      primary: {
        main: palette.primary,
        light: palette.primary,
        dark: palette.primary,
      },
      secondary: {
        main: palette.secondary,
        light: palette.secondary,
        dark: palette.secondary,
      },
      background: {
        default: palette.background,
        paper: '#FFFFFF',
      },
      text: {
        primary: palette.text,
        secondary: palette.text,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
            padding: '8px 24px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            color: palette.primary,
          },
          h2: {
            color: palette.primary,
          },
          h3: {
            color: palette.primary,
          },
        },
      },
    },
  });
};

// Styles communs pour les sections
export const commonStyles = {
  section: {
    padding: '40px 0',
    backgroundColor: '#FFFFFF',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  grid: {
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
  },
  card: {
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '16px',
    color: 'primary.main',
  },
}; 