import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AssignmentCard({
  title,
  subtitle,
  iconName,
  iconColor = '#4F46E5',
  badgeText,
  badgeColor = '#EEF2FF',
  badgeTextColor = '#4F46E5',
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.iconContainer, { backgroundColor: iconColor + '15' }]}>
        <Ionicons name={iconName} size={26} color={iconColor} />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          {badgeText && (
            <View style={[styles.badge, { backgroundColor: badgeColor }]}>
              <Text style={[styles.badgeText, { color: badgeTextColor }]}>{badgeText}</Text>
            </View>
          )}
        </View>
        <Text style={styles.subtitle} numberOfLines={2}>
          {subtitle}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  infoContainer: {
    flex: 1,
    marginRight: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
  },
});
