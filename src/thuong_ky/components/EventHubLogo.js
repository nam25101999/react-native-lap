import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EventHubLogo({ size = 'medium' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const iconSize = isLarge ? 56 : isSmall ? 28 : 42;
  const textSize = isLarge ? 34 : isSmall ? 18 : 26;

  return (
    <View style={styles.container}>
      {/* Icon Logo EventHub */}
      <View style={[styles.iconCircle, { width: iconSize, height: iconSize, borderRadius: iconSize / 2 }]}>
        <View style={[styles.innerE, { width: iconSize * 0.6, height: iconSize * 0.6, borderRadius: (iconSize * 0.6) / 2 }]}>
          <Text style={[styles.eText, { fontSize: iconSize * 0.45 }]}>e</Text>
        </View>
      </View>

      {/* Text Brand */}
      <Text style={[styles.brandText, { fontSize: textSize }]}>
        <Text style={styles.textVent}>vent</Text>
        <Text style={styles.textHub}>Hub</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    backgroundColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    // Box shadow
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  innerE: {
    borderWidth: 3,
    borderColor: '#00F0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eText: {
    fontWeight: '900',
    color: '#FFFFFF',
    fontStyle: 'italic',
    lineHeight: 24,
  },
  brandText: {
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  textVent: {
    color: '#5669FF',
  },
  textHub: {
    color: '#00F0FF',
  },
});
