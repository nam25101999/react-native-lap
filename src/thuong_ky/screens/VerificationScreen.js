import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VerificationScreen({ onVerifySuccess, onBack }) {
  const [code, setCode] = useState(['4', '4', '', '']);

  const handleDigitChange = (val, idx) => {
    const newCode = [...code];
    newCode[idx] = val;
    setCode(newCode);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* BACK ARROW */}
        <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={24} color="#120D26" />
        </TouchableOpacity>

        <Text style={styles.title}>Verification</Text>

        <Text style={styles.subtitle}>
          We’ve send you the verification{'\n'}code on +1 2620 0323 7631
        </Text>

        {/* 4 OTP DIGIT BOXES */}
        <View style={styles.otpRow}>
          {code.map((digit, idx) => {
            const isFocused = idx === 2; // Active border on 3rd box matching screenshot
            return (
              <View
                key={idx}
                style={[
                  styles.otpBox,
                  isFocused && styles.otpBoxFocused,
                ]}
              >
                <TextInput
                  style={styles.otpInput}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={(val) => handleDigitChange(val, idx)}
                />
              </View>
            );
          })}
        </View>

        {/* CONTINUE BUTTON WITH CIRCULAR ARROW ICON */}
        <TouchableOpacity style={styles.continueBtn} onPress={onVerifySuccess} activeOpacity={0.85}>
          <Text style={styles.continueBtnText}>CONTINUE</Text>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        {/* RESEND TIMER */}
        <View style={styles.resendRow}>
          <Text style={styles.resendText}>
            Re-send code in <Text style={styles.timerText}>0:20</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, padding: 28, paddingTop: 20 },
  backBtn: { width: 38, height: 38, justifyContent: 'center', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: '800', color: '#120D26', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#120D26', lineHeight: 22, marginBottom: 32 },

  otpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 36 },
  otpBox: {
    width: 60,
    height: 60,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  otpBoxFocused: {
    borderColor: '#5669FF',
    borderWidth: 1.5,
  },
  otpInput: {
    fontSize: 22,
    fontWeight: '800',
    color: '#120D26',
    textAlign: 'center',
  },

  continueBtn: {
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
  continueBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800', letterSpacing: 1 },
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

  resendRow: { alignItems: 'center', marginTop: 24 },
  resendText: { fontSize: 14, color: '#120D26' },
  timerText: { color: '#5669FF', fontWeight: '700' },
});
