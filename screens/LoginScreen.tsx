import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignIn = () => {
    // Dummy check, always navigates to Home
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/better-convos-logo.png')} style={styles.logo} />
      <Text style={styles.title}>BETTER CONVOS</Text>
      <Text style={styles.subtitle}>Long Distance? No Problem.</Text>

      <Text style={styles.infoText}>
        Fill out the information below in order to access your account.
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword((prev) => !prev)}
        >
          <Text>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={['#E94057', '#F27121']}
        style={styles.signInButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity style={styles.signInTouchable} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Text style={styles.orText}>Or sign in with</Text>

      {Platform.OS === 'android' ? (
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleIcon}>G</Text>
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleIcon}></Text>
          <Text style={styles.googleText}>Continue with Apple</Text>
        </TouchableOpacity>
      )}

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign Up here</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 75,
  },
  logo: {
    width: 160,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#23223C',
  },
  subtitle: {
    fontSize: 13,
    color: '#23223C',
    marginBottom: 24,
    fontStyle: 'italic',
  },
  infoText: {
    color: '#7A7A7A',
    fontSize: 14,
    marginBottom: 18,
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 44,
    backgroundColor: '#F3F5F7',
    borderRadius: 22,
    paddingHorizontal: 18,
    marginBottom: 14,
    fontSize: 16,
    color: '#23223C',
  },
  passwordContainer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 18,
    top: 12,
  },
  signInButton: {
    width: 300,
    borderRadius: 22,
    marginBottom: 18,
  },
  signInTouchable: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  orText: {
    color: '#7A7A7A',
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 22,
    width: 300,
    paddingVertical: 10,
    marginBottom: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  googleIcon: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 8,
  },
  googleText: {
    fontSize: 16,
    color: '#23223C',
  },
  signupContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  signupText: {
    color: '#23223C',
    fontSize: 14,
  },
  signupLink: {
    color: '#E94057',
    fontSize: 14,
    fontWeight: '500',
  },
  forgotPassword: {
    color: '#23223C',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 8,
  },
});
