// login.tsx

import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Pressable, TouchableOpacity, TextInput} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { SafeAreaView} from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { icons } from '../constants/icon';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import GoogleIcon from '../assets/images/icon/google.svg';

type LoginStackParamList = {
  AuthChoice: undefined;
  Info: undefined;
  Pin: undefined;
  Fingerprint: undefined;
  Success: undefined;
};


const ArrowIcon = () => (
  <View style={styles.arrowContainer}>
    <Ionicons name="arrow-forward" size={30} color={COLORS.button} />
  </View>
);

const Stack = createStackNavigator<LoginStackParamList>();

const AuthChoiceScreen = ({ navigation }: any) => (
  <SafeAreaView style={styles.container}>
  {/* Première moitié vide */}
  <View style={[{ flex: 1/4 }, styles.textContainer]} />

  {/* Deuxième moitié avec le texte */}
  <View style={[styles.half, styles.textContainer]}>
  <Text style={[styles.title, { marginBottom: '5%' }]}>Connectez-vous</Text>
    
      <TouchableOpacity 
        onPress={() => navigation.navigate('Info')} 
        style={styles.googleButton}
        activeOpacity={1}
      >
      <View style={styles.googleLogoContainer}>
          <Image source={icons.google1} style={styles.googleLogo} />
      </View>
      <Text style={styles.logotitle}>Continuer avec Google</Text>
      
    </TouchableOpacity>
    <Text style={styles.separator}>(Ou)</Text>
    
    <View style={styles.buttonContainer}>
    <CustomButton
      title="Se connecter avec un numéro de téléphone ou un email"  
      icon={<ArrowIcon />}
      onPress={() => navigation.navigate('Info')}
    />
    </View>
  
    <Text style={styles.footerText}>
      <Text style={[styles.logotitle1, {fontSize: 12}]}>Pas de compte ?</Text>{' '}
      <Text style={[styles.logotitle1, { color: COLORS.button, fontSize: 12 }]} onPress={() => navigation.navigate('Info')}>
      CRÉER UN COMPTE
    </Text>
</Text>

  </View>

  </SafeAreaView>

);

const InfoScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <View style={{ paddingLeft:"15%", paddingTop:"40%" }}>
      <Text style={styles.title}>Saisissez vos informations</Text>
      <Text style={[styles.subtitle, {marginBottom: 20, textAlign:'left'}]}>Se connecter</Text>
    </View>
    {/*Email*/}
    <View style={styles.inputContainer}>
      <Image source={icons.email} style={{marginRight:5}} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType='email-address'
      />
    </View>
  </View>
);

const PinScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Créez un code PIN</Text>
    {/* Champ de saisie pour le PIN */}
    <Button title="Continuer" onPress={() => navigation.navigate('Fingerprint')} />
  </View>
);

const FingerprintScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Enregistrez votre empreinte</Text>
    {/* Intégration de l'empreinte digitale */}
    <Button title="Continuer" onPress={() => navigation.navigate('Success')} />
  </View>
);

const SuccessScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Opération réussie !</Text>
    <Button title="Aller à l'accueil" onPress={() => navigation.replace('(tabs)')} />
  </View>
);

export default function LoginFlow() {
  return (
    <Stack.Navigator initialRouteName="AuthChoice" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthChoice" component={AuthChoiceScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="Pin" component={PinScreen} />
      <Stack.Screen name="Fingerprint" component={FingerprintScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  half: {
    flex: 1,
  },
  title: {
    fontFamily: 'jost-semibold',
    color: COLORS.textLogin,
    fontSize: 24,
  },
  logotitle: {
    fontFamily: 'mulish-extrabold',
    color: COLORS.logotitle,
    fontSize: 16,
  },
  logotitle1: {
    fontFamily: 'mulish-bold',
    color: COLORS.logotitle,
    fontSize: 16,
  },
  subtitle: {
    fontFamily: 'mulish-bold',
    fontSize: 14,
  },
  body: {
    fontFamily: 'mulish-regular',
    fontSize: 14,
  },
  logo: {
    width: 24,
    height: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '87%',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: 60,
    width: 360,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  orText: {
    marginBottom: 10,
    color: '#555',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  signupText: {
    color: '#777',
  },
  signupLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '87%',
    alignSelf: 'center',
  },
  footerText: {
    position: 'absolute',
    bottom: "8%",
    width: '100%',
    textAlign: 'center',
  },
  googlePart: {
    position: 'absolute',
    width: '46%',
    height: '46%',
    borderRadius: 2,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  googleLogoContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    elevation: 3,
  },
  separator: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
    color: '#666',
    fontFamily: 'mulish-bold',
  },
  arrowContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 3,
    elevation: 10,
  },
  googleLogoContainer1: {
    position: 'relative',
    width: 24,
    height: 24,
  },
  logoBase: {
    position: 'absolute',
    opacity: 0.8
  },
  googleLogo: {
    width: 24,
    height: 24,
  },
});
