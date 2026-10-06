import React, { useState } from 'react';
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

export default function OrganizerProfileScreen({ onSelectEvent, onBack }) {
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'event' | 'reviews'

  const hostedEvents = [
    {
      id: 'o1',
      date: '1ST MAY - SAT - 2:00 PM',
      title: 'A virtual evening of smooth jazz',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300',
    },
    {
      id: 'o2',
      date: '1ST MAY - SAT - 2:00 PM',
      title: "Jo malone london's mother's day",
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300',
    },
    {
      id: 'o3',
      date: '1ST MAY - SAT - 2:00 PM',
      title: "Women's leadership conference",
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300',
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
          <View style={{ flex: 1 }} />
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="ellipsis-vertical" size={20} color="#120D26" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* PROFILE AVATAR & NAME */}
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300' }}
              style={styles.avatarImage}
            />
            <Text style={styles.userName}>David Silbia</Text>

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

            {/* ACTION BUTTONS: FOLLOW & MESSAGES */}
            <View style={styles.actionBtnRow}>
              <TouchableOpacity style={styles.followBtn} activeOpacity={0.85}>
                <Ionicons name="person-add-outline" size={16} color="#FFFFFF" />
                <Text style={styles.followBtnText}>Follow</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.messagesBtn} activeOpacity={0.85}>
                <Ionicons name="chatbubble-outline" size={16} color="#5669FF" />
                <Text style={styles.messagesBtnText}>Messages</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* TABS: ABOUT | EVENT | REVIEWS */}
          <View style={styles.tabsRow}>
            {['about', 'event', 'reviews'].map((tabId) => {
              const labelMap = { about: 'ABOUT', event: 'EVENT', reviews: 'REVIEWS' };
              const isSelected = activeTab === tabId;
              return (
                <TouchableOpacity
                  key={tabId}
                  style={[styles.tabBtn, isSelected && styles.tabBtnActive]}
                  onPress={() => setActiveTab(tabId)}
                >
                  <Text style={[styles.tabLabel, isSelected && styles.tabLabelActive]}>
                    {labelMap[tabId]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* TAB CONTENT */}
          {activeTab === 'about' && (
            <View style={styles.tabContent}>
              <Text style={styles.aboutText}>
                Enjoy your favorite dishe and a lovely your friends and family and have a great time.
                Food from local food trucks will be available for purchase.{' '}
                <Text style={styles.readMoreText}>Read More</Text>
              </Text>
            </View>
          )}

          {activeTab === 'event' && (
            <View style={styles.tabContent}>
              {hostedEvents.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.eventCard}
                  onPress={() => onSelectEvent(item)}
                  activeOpacity={0.85}
                >
                  <Image source={{ uri: item.image }} style={styles.cardImage} />
                  <View style={styles.cardInfo}>
                    <Text style={styles.cardDate}>{item.date}</Text>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {activeTab === 'reviews' && (
            <View style={styles.tabContent}>
              <Text style={styles.aboutText}>⭐ 4.9 Rating (128 Reviews from attendees)</Text>
            </View>
          )}
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

  content: { paddingBottom: 40, alignItems: 'stretch' },

  profileSection: { alignItems: 'center', marginBottom: 24 },
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

  actionBtnRow: { flexDirection: 'row', gap: 14, width: '100%' },
  followBtn: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#5669FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  followBtnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
  messagesBtn: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#5669FF',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  messagesBtnText: { color: '#5669FF', fontSize: 14, fontWeight: '700' },

  tabsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E4DFDF',
    marginBottom: 20,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabBtnActive: {
    borderBottomWidth: 2,
    borderColor: '#5669FF',
  },
  tabLabel: { fontSize: 13, fontWeight: '700', color: '#747688' },
  tabLabelActive: { color: '#5669FF' },

  tabContent: { gap: 14 },
  aboutText: { fontSize: 14, color: '#747688', lineHeight: 22 },
  readMoreText: { color: '#5669FF', fontWeight: '700' },

  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 12,
  },
  cardImage: { width: 70, height: 70, borderRadius: 12, resizeMode: 'cover' },
  cardInfo: { flex: 1 },
  cardDate: { fontSize: 11, fontWeight: '700', color: '#5669FF', marginBottom: 4 },
  cardTitle: { fontSize: 14, fontWeight: '800', color: '#120D26', lineHeight: 18 },
});
