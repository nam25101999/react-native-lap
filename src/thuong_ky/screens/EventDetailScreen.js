import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShareModal from '../components/ShareModal';
import InviteFriendModal from '../components/InviteFriendModal';

export default function EventDetailScreen({ event, onBack, onGoToOrganizer }) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const currentEvent = event || {
    title: 'International Band Music Concert',
    date: '14 December, 2021',
    time: 'Tuesday, 4:00PM - 9:00PM',
    location: '36 Guild Street London, UK',
    venue: 'Gala Convention Center',
    price: '$120',
    organizer: 'Ashfak Sayem',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600',
    description:
      'Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase.',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* SHARE MODAL SHEET */}
      <ShareModal visible={isShareOpen} onClose={() => setIsShareOpen(false)} />

      {/* INVITE FRIEND MODAL */}
      <InviteFriendModal visible={isInviteOpen} onClose={() => setIsInviteOpen(false)} />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* EVENT COVER IMAGE WITH OVERLAY ACTIONS */}
        <View style={styles.bannerContainer}>
          <Image source={{ uri: currentEvent.image }} style={styles.bannerImage} />
          <View style={styles.bannerOverlay}>
            <TouchableOpacity style={styles.iconBackBtn} onPress={onBack} activeOpacity={0.8}>
              <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <Text style={styles.headerTitleText}>Event Details</Text>

            <TouchableOpacity
              style={styles.iconBackBtn}
              onPress={() => setIsShareOpen(true)}
              activeOpacity={0.8}
            >
              <Ionicons name="share-social-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* ATTENDEES FLOATING PILL */}
          <View style={styles.attendeesPill}>
            <View style={styles.avatarsRow}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' }}
                style={[styles.avatarImg, { zIndex: 3 }]}
              />
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' }}
                style={[styles.avatarImg, { marginLeft: -10, zIndex: 2 }]}
              />
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' }}
                style={[styles.avatarImg, { marginLeft: -10, zIndex: 1 }]}
              />
            </View>
            <Text style={styles.goingText}>+20 Going</Text>
            <TouchableOpacity
              style={styles.invitePillBtn}
              onPress={() => setIsInviteOpen(true)}
            >
              <Text style={styles.invitePillText}>Invite</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* EVENT MAIN DETAILS */}
        <View style={styles.bodyContent}>
          <Text style={styles.eventTitle}>{currentEvent.title}</Text>

          {/* Date Info */}
          <View style={styles.infoRow}>
            <View style={styles.iconSquare}>
              <Ionicons name="calendar" size={22} color="#5669FF" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoRowTitle}>{currentEvent.date}</Text>
              <Text style={styles.infoRowSub}>{currentEvent.time}</Text>
            </View>
          </View>

          {/* Location Info */}
          <View style={styles.infoRow}>
            <View style={styles.iconSquare}>
              <Ionicons name="location" size={22} color="#5669FF" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoRowTitle}>{currentEvent.venue || 'Gala Convention Center'}</Text>
              <Text style={styles.infoRowSub}>{currentEvent.location}</Text>
            </View>
          </View>

          {/* Organizer Info (Tapping opens Organizer Profile!) */}
          <TouchableOpacity
            style={styles.infoRow}
            onPress={onGoToOrganizer}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' }}
              style={styles.organizerAvatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.infoRowTitle}>{currentEvent.organizer || 'Ashfak Sayem'}</Text>
              <Text style={styles.infoRowSub}>Organizer</Text>
            </View>
            <TouchableOpacity style={styles.followBtn} onPress={onGoToOrganizer}>
              <Text style={styles.followBtnText}>Follow</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {/* About Event */}
          <Text style={styles.aboutHeader}>About Event</Text>
          <Text style={styles.aboutText}>{currentEvent.description}</Text>
        </View>
      </ScrollView>

      {/* BOTTOM BUY TICKET BUTTON */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.buyBtn} activeOpacity={0.85}>
          <Text style={styles.buyBtnText}>BUY TICKET {currentEvent.price || '$120'}</Text>
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
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  contentContainer: { paddingBottom: 100 },

  bannerContainer: { height: 260, position: 'relative' },
  bannerImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  bannerOverlay: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBackBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleText: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },

  attendeesPill: {
    position: 'absolute',
    bottom: -22,
    left: 30,
    right: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarsRow: { flexDirection: 'row', alignItems: 'center' },
  avatarImg: { width: 28, height: 28, borderRadius: 14, borderWidth: 1.5, borderColor: '#FFF' },
  goingText: { fontSize: 13, fontWeight: '700', color: '#5669FF', marginLeft: 10, flex: 1 },
  invitePillBtn: {
    backgroundColor: '#5669FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
  },
  invitePillText: { fontSize: 12, fontWeight: '700', color: '#FFFFFF' },

  bodyContent: { padding: 20, paddingTop: 40 },
  eventTitle: { fontSize: 24, fontWeight: '800', color: '#120D26', marginBottom: 20 },

  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 18 },
  iconSquare: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  organizerAvatar: { width: 44, height: 44, borderRadius: 22 },
  infoRowTitle: { fontSize: 15, fontWeight: '800', color: '#120D26' },
  infoRowSub: { fontSize: 12, color: '#747688', marginTop: 2 },
  followBtn: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },
  followBtnText: { color: '#5669FF', fontSize: 12, fontWeight: '700' },

  aboutHeader: { fontSize: 18, fontWeight: '800', color: '#120D26', marginTop: 12, marginBottom: 8 },
  aboutText: { fontSize: 14, color: '#747688', lineHeight: 22 },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
  },
  buyBtn: {
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
  buyBtnText: { color: '#FFFFFF', fontWeight: '800', fontSize: 15, letterSpacing: 1 },
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
