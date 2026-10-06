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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen({ onSignUpSuccess, onGoToLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* BACK ARROW */}
        <TouchableOpacity style={styles.backBtn} onPress={onGoToLogin} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={24} color="#120D26" />
        </TouchableOpacity>

        <Text style={styles.title}>Sign up</Text>

        {/* FULL NAME */}
        <View style={styles.inputBox}>
          <Ionicons name="person-outline" size={20} color="#807A7A" />
          <TextInput
            style={styles.textInput}
            placeholder="Full name"
            placeholderTextColor="#807A7A"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* EMAIL */}
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

        {/* PASSWORD */}
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

        {/* CONFIRM PASSWORD */}
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="#807A7A" />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm password"
            placeholderTextColor="#807A7A"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons
              name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#807A7A"
            />
          </TouchableOpacity>
        </View>

        {/* SIGN UP BUTTON WITH CIRCULAR ARROW ICON */}
        <TouchableOpacity style={styles.signUpBtn} onPress={onSignUpSuccess} activeOpacity={0.85}>
          <Text style={styles.signUpBtnText}>SIGN UP</Text>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        {/* OR DIVIDER */}
        <Text style={styles.orText}>OR</Text>

        {/* SOCIAL BUTTONS */}
        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.85}>
          <Ionicons name="logo-google" size={20} color="#EA4335" />
          <Text style={styles.socialBtnText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.85}>
          <Ionicons name="logo-facebook" size={20} color="#1877F2" />
          <Text style={styles.socialBtnText}>Login with Facebook</Text>
        </TouchableOpacity>

        {/* ALREADY HAVE ACCOUNT */}
        <View style={styles.signInRow}>
          <Text style={styles.alreadyAccText}>Already have an account? </Text>
          <TouchableOpacity onPress={onGoToLogin}>
            <Text style={styles.signInLink}>Signin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { padding: 28, paddingTop: 20 },
  backBtn: { width: 38, height: 38, justifyContent: 'center', marginBottom: 12 },
  title: { fontSize: 24, fontWeight: '800', color: '#120D26', marginBottom: 20 },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 14,
  },
  textInput: { flex: 1, marginLeft: 10, fontSize: 14, color: '#120D26' },

  signUpBtn: {
    backgroundColor: '#5669FF',
    height: 56,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  signUpBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800', letterSpacing: 1 },
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

  orText: { textAlign: 'center', color: '#9D9898', fontWeight: '700', marginVertical: 16 },

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
  },
  socialBtnText: { fontSize: 14, fontWeight: '600', color: '#120D26' },

  signInRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 16 },
  alreadyAccText: { fontSize: 14, color: '#120D26' },
  signInLink: { fontSize: 14, color: '#5669FF', fontWeight: '700' },
});
