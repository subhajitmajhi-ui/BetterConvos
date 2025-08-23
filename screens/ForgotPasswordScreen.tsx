import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  const handleSendLink = () => {
    // Implement your password reset logic here
    // For example, you can use Firebase or your own backend to send a password reset link to the user's email
    if (!email) {
      Alert.alert('Please enter your email address.');
      return;
    }

    // Simulate sending a password reset link
    Alert.alert('Password reset link sent to your email address.');
  };

  const handleLogin = () => {
    // Implement your navigation to the login screen here
    navigation.navigate('Login');
  };

  return (
    <LinearGradient
      colors={['#E02441', '#F66733']}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <ImageBackground
        source={require('../assets/icons/forgot_password_bg.jpg')}
        style={styles.imageContainer}
        resizeMode="cover"
      >
          <View style={styles.card}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.description}>
              We will send you a link to reset your password. Enter your account email address
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#A2AAB0"
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleSendLink}>
              <Text style={styles.buttonText}>Send Link</Text>
            </TouchableOpacity>
            <Text style={styles.passwordReset}>Password reset link sent.</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginLink}>Click here to login.</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingTop: 36,
    paddingHorizontal: 28,
    paddingBottom: 30,
    marginHorizontal: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#57636C',
    textAlign: 'center',
    marginBottom: 36,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    minWidth: '100%',
    height: 38,
    backgroundColor: '#F1F4F8',
    borderRadius: 50,
    marginBottom: 13,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 50,
    width: '100%',
    minWidth: '100%',
    alignItems: 'center',
    marginBottom: 13,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 500,
  },
  passwordReset: {
    fontSize: 14,
    fontWeight: 500,
    color: '#57636C',
  },
  loginLink: {
    color: '#E02441',
    fontSize: 14,
  },
});

export default ForgotPasswordScreen;
