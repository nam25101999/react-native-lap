import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import EventHubLogo from '../components/EventHubLogo';
import { Ionicons } from '@expo/vector-icons';

export default function SplashScreen({ onNext }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Content centered */}
      <TouchableOpacity
        style={styles.contentContainer}
        activeOpacity={0.9}
        onPress={onNext}
      >
        <View style={styles.logoBox}>
          <EventHubLogo size="large" />
          <View style={styles.dimensionBadge}>
            <Text style={styles.dimensionText}>242 × 58</Text>
          </View>
        </View>

        <View style={styles.promptHint}>
          <Text style={styles.hintText}>Chạm vào màn hình để bắt đầu Onboarding</Text>
          <Ionicons name="arrow-forward-circle-outline" size={24} color="#5669FF" style={{ marginTop: 6 }} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoBox: {
    borderWidth: 1.5,
    borderColor: '#00F0FF',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    position: 'relative',
  },
  dimensionBadge: {
    position: 'absolute',
    bottom: -14,
    backgroundColor: '#00A3FF',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
  },
  dimensionText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  promptHint: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  hintText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
});
