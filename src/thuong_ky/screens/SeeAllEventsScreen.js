import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SeeAllEventsScreen({ onSelectEvent, onGoToSearch, onBack }) {
  const events = [
    {
      id: 'e1',
      date: 'Wed, Apr 28 • 5:30 PM',
      title: "Jo Malone London's Mother's Day Presents",
      location: 'Radius Gallery - Santa Cruz, CA',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300',
    },
    {
      id: 'e2',
      date: 'Sat, May 1 • 2:00 PM',
      title: 'A Virtual Evening of Smooth Jazz',
      location: 'Lot 13 - Oakland, CA',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300',
    },
    {
      id: 'e3',
      date: 'Sat, Apr 24 • 1:30 PM',
      title: "Women's Leadership Conference 2021",
      location: '53 Bush St - San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300',
    },
    {
      id: 'e4',
      date: 'Fri, Apr 23 • 6:00 PM',
      title: 'International Kids Safe Parents Night Out',
      location: 'Lot 13 - Oakland, CA',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300',
    },
    {
      id: 'e5',
      date: 'Mon, Jun 21 • 10:00 PM',
      title: 'Collectivity Plays the Music of Jimi',
      location: 'Longboard Margarita Bar',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300',
    },
    {
      id: 'e6',
      date: 'Sun, Apr 25 • 10:15 AM',
      title: 'International Gala Music Festival',
      location: '36 Guild Street London, UK',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={22} color="#120D26" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Events</Text>

          <View style={styles.headerRightActions}>
            <TouchableOpacity onPress={onGoToSearch} activeOpacity={0.7}>
              <Ionicons name="search-outline" size={22} color="#120D26" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="ellipsis-vertical" size={20} color="#120D26" />
            </TouchableOpacity>
          </View>
        </View>

        {/* EVENTS LIST */}
        <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
          {events.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.eventCard}
              onPress={() => onSelectEvent(item)}
              activeOpacity={0.85}
            >
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardDate}>{item.date}</Text>
                <Text style={styles.cardTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.cardLoc} numberOfLines={1}>
                  📍 {item.location}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 10 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  backBtn: { width: 36, height: 36, justifyContent: 'center' },
  headerTitle: { fontSize: 20, fontWeight: '800', color: '#120D26', flex: 1, marginLeft: 8 },
  headerRightActions: { flexDirection: 'row', gap: 16, alignItems: 'center' },

  listContent: { gap: 14, paddingBottom: 40 },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardImage: { width: 80, height: 80, borderRadius: 14, resizeMode: 'cover' },
  cardInfo: { flex: 1 },
  cardDate: { fontSize: 11, fontWeight: '700', color: '#5669FF', marginBottom: 4 },
  cardTitle: { fontSize: 14, fontWeight: '800', color: '#120D26', lineHeight: 18, marginBottom: 4 },
  cardLoc: { fontSize: 11, color: '#747688' },
});
