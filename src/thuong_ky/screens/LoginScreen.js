import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EventHubLogo from '../components/EventHubLogo';

export default function LoginScreen({ onLoginSuccess, onGoToSignUp, onGoToForgotPassword }) {
  const [email, setEmail] = useState('abc@email.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* LOGO */}
        <View style={styles.logoRow}>
          <EventHubLogo size="large" />
        </View>

        <Text style={styles.title}>Sign in</Text>

        {/* EMAIL INPUT */}
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={20} color="#807A7A" />
          <TextInput
            style={styles.textInput}
            placeholder="abc@email.com"
            placeholderTextColor="#807A7A"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        {/* PASSWORD INPUT */}
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="#807A7A" />
          <TextInput
            style={styles.textInput}
            placeholder="Your password"
            placeholderTextColor="#807A7A"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#807A7A"
            />
          </TouchableOpacity>
        </View>

        {/* REMEMBER ME & FORGOT PASSWORD ROW */}
        <View style={styles.optionsRow}>
          <View style={styles.rememberRow}>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              trackColor={{ false: '#D1D5DB', true: '#5669FF' }}
              thumbColor="#FFFFFF"
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>

          <TouchableOpacity onPress={onGoToForgotPassword}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* SIGN IN BUTTON WITH CIRCULAR ARROW ICON */}
        <TouchableOpacity style={styles.signInBtn} onPress={onLoginSuccess} activeOpacity={0.85}>
          <Text style={styles.signInBtnText}>SIGN IN</Text>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        {/* OR DIVIDER */}
        <Text style={styles.orText}>OR</Text>

        {/* SOCIAL LOGIN BUTTONS */}
        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.85}>
          <Ionicons name="logo-google" size={20} color="#EA4335" />
          <Text style={styles.socialBtnText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.85}>
          <Ionicons name="logo-facebook" size={20} color="#1877F2" />
          <Text style={styles.socialBtnText}>Login with Facebook</Text>
        </TouchableOpacity>

        {/* SIGN UP LINK */}
        <View style={styles.signUpRow}>
          <Text style={styles.noAccText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={onGoToSignUp}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { padding: 28, paddingTop: 40, alignItems: 'stretch' },
  logoRow: { alignItems: 'center', marginBottom: 28 },
  title: { fontSize: 24, fontWeight: '800', color: '#120D26', marginBottom: 20 },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 16,
  },
  textInput: { flex: 1, marginLeft: 10, fontSize: 14, color: '#120D26' },

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberRow: { flexDirection: 'row', alignItems: 'center' },
  rememberText: { fontSize: 13, color: '#120D26', fontWeight: '500', marginLeft: 4 },
  forgotText: { fontSize: 13, color: '#5669FF', fontWeight: '600' },

  signInBtn: {
    backgroundColor: '#5669FF',
    height: 56,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  signInBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800', letterSpacing: 1 },
  arrowCircle: {
    position: 'absolute',
    right: 14,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  orText: { textAlign: 'center', color: '#9D9898', fontWeight: '700', marginVertical: 20 },

  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: 14,
    height: 52,
    marginBottom: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  socialBtnText: { fontSize: 14, fontWeight: '600', color: '#120D26' },

  signUpRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  noAccText: { fontSize: 14, color: '#120D26' },
  signUpLink: { fontSize: 14, color: '#5669FF', fontWeight: '700' },
});
