export const COLORS = {
  primary: '#3498db',      // Bleu principal
  secondary: '#2ecc71',    // Vert secondaire
  tertiary: '#e74c3c',     // Rouge tertiaire
  button: '#0961F5',

  // Couleurs de fond
  background: '#F5F9FF',   // Gris très clair
  card: '#FFFFFF',         // Blanc pour les cartes
  
  // Texte
  text: '#2c3e50', 
  logotitle: '#545454', 
  textLogin: '#202244',       // Texte principal
  textLight: '#7f8c8d',    // Texte secondaire
  
  // États
  success: '#2ecc71',      // Vert succès
  error: '#e74c3c',        // Rouge erreur
  warning: '#f1c40f',      // Jaune warning
  
  // Utilitaires
  border: '#dcdde1',       // Couleur de bordure
  shadow: '#000000',       // Couleur d'ombre
  overlay: 'rgba(0,0,0,0.5)', // Overlay semi-transparent
};

export const SIZES = {
  // Typographie
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,

  // Espacement
  padding: {
    small: 8,
    medium: 16,
    large: 24,
  },
  margin: {
    small: 8,
    medium: 16,
    large: 24,
  },
  radius: {
    small: 4,
    medium: 8,
    large: 12,
  },
};

export const FONTS = {
  regular: 'rubik-regular',
  medium: 'rubik-medium',
  bold: 'rubik-bold',
  light: 'rubik-light',
  semiBold: 'rubik-semibold',
  extraBold: 'rubik-extrabold',
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 6,
  },
};

export default { COLORS, SIZES, FONTS, SHADOWS }; 