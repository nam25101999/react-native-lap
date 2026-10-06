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

export default function ProfileScreen({ onBack }) {
  const interests = [
    { id: '1', name: 'Games Online', color: '#5669FF' },
    { id: '2', name: 'Concert', color: '#F06354' },
    { id: '3', name: 'Music', color: '#F5A623' },
    { id: '4', name: 'Art', color: '#7C3AED' },
    { id: '5', name: 'Movie', color: '#29D697' },
    { id: '6', name: 'Others', color: '#00F0FF' },
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
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* PROFILE AVATAR & NAME */}
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300' }}
              style={styles.avatarImage}
            />
            <Text style={styles.userName}>Ashfak Sayem</Text>

            {/* STATS ROW */}
            <View style={styles.statsRow}>
              <View style={styles.statCol}>
                <Text style={styles.statNumber}>350</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.statCol}>
                <Text style={styles.statNumber}>346</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
            </View>

            {/* EDIT PROFILE BUTTON */}
            <TouchableOpacity style={styles.editProfileBtn} activeOpacity={0.8}>
              <Ionicons name="create-outline" size={18} color="#5669FF" />
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          {/* ABOUT ME SECTION */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>About Me</Text>
            <Text style={styles.aboutText}>
              Enjoy your favorite dishe and a lovely your friends and family and have a great time.
              Food from local food trucks will be available for purchase.{' '}
              <Text style={styles.readMoreText}>Read More ▾</Text>
            </Text>
          </View>

          {/* INTEREST SECTION */}
          <View style={styles.sectionContainer}>
            <View style={styles.interestHeaderRow}>
              <Text style={styles.sectionTitle}>Interest</Text>
              <TouchableOpacity style={styles.changeBtn}>
                <Ionicons name="create-outline" size={12} color="#5669FF" />
                <Text style={styles.changeBtnText}>CHANGE</Text>
              </TouchableOpacity>
            </View>

            {/* Category Pills */}
            <View style={styles.interestsWrap}>
              {interests.map((item) => (
                <View
                  key={item.id}
                  style={[styles.interestPill, { backgroundColor: item.color }]}
                >
                  <Text style={styles.interestText}>{item.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 10 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  backBtn: { width: 36, height: 36, justifyContent: 'center' },
  headerTitle: { fontSize: 20, fontWeight: '800', color: '#120D26', marginLeft: 8 },

  content: { paddingBottom: 40, alignItems: 'stretch' },

  profileSection: { alignItems: 'center', marginBottom: 28 },
  avatarImage: { width: 96, height: 96, borderRadius: 48, marginBottom: 14 },
  userName: { fontSize: 22, fontWeight: '800', color: '#120D26', marginBottom: 12 },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
    marginBottom: 20,
  },
  statCol: { alignItems: 'center' },
  statNumber: { fontSize: 16, fontWeight: '800', color: '#120D26' },
  statLabel: { fontSize: 12, color: '#747688', marginTop: 2 },
  divider: { width: 1, height: 28, backgroundColor: '#E4DFDF' },

  editProfileBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#5669FF',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 14,
    gap: 8,
  },
  editProfileText: { fontSize: 14, fontWeight: '700', color: '#5669FF' },

  sectionContainer: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#120D26', marginBottom: 8 },
  aboutText: { fontSize: 14, color: '#747688', lineHeight: 22 },
  readMoreText: { color: '#5669FF', fontWeight: '700' },

  interestHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  changeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    gap: 4,
  },
  changeBtnText: { fontSize: 11, fontWeight: '800', color: '#5669FF' },

  interestsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  interestPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  interestText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
});
