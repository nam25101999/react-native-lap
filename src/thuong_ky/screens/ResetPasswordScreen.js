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

export default function ResetPasswordScreen({ onSendSuccess, onBack }) {
  const [email, setEmail] = useState('abc@email.com');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* BACK ARROW */}
        <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={24} color="#120D26" />
        </TouchableOpacity>

        <Text style={styles.title}>Resset Password</Text>

        <Text style={styles.subtitle}>
          Please enter your email address to{'\n'}request a password reset
        </Text>

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

        {/* SEND BUTTON WITH CIRCULAR ARROW ICON */}
        <TouchableOpacity style={styles.sendBtn} onPress={onSendSuccess} activeOpacity={0.85}>
          <Text style={styles.sendBtnText}>SEND</Text>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, padding: 28, paddingTop: 20 },
  backBtn: { width: 38, height: 38, justifyContent: 'center', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: '800', color: '#120D26', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#120D26', lineHeight: 22, marginBottom: 28 },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 28,
  },
  textInput: { flex: 1, marginLeft: 10, fontSize: 14, color: '#120D26' },

  sendBtn: {
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
  sendBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800', letterSpacing: 1 },
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
});
