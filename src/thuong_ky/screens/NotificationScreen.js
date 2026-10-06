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

export default function NotificationScreen({ onBack }) {
  const [isEmpty, setIsEmpty] = useState(false);

  const notifications = [
    {
      id: 'n1',
      name: 'David Silbia',
      action: "Invite Jo Malone London's Mother's",
      time: 'Just now',
      hasButtons: true,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    },
    {
      id: 'n2',
      name: 'Adnan Safi',
      action: 'Started following you',
      time: '5 min ago',
      hasButtons: false,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    },
    {
      id: 'n3',
      name: 'Joan Baker',
      action: 'Invite A virtual Evening of Smooth Jazz',
      time: '20 min ago',
      hasButtons: true,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    },
    {
      id: 'n4',
      name: 'Ronald C. Kinch',
      action: 'Like you events',
      time: '1 hr ago',
      hasButtons: false,
      avatar: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100',
    },
    {
      id: 'n5',
      name: 'Clara Tolson',
      action: 'Join your Event Gala Music Festival',
      time: '9 hr ago',
      hasButtons: false,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    },
    {
      id: 'n6',
      name: 'Jennifer Fritz',
      action: 'Invite you International Kids Safe',
      time: 'Tue, 5:10 pm',
      hasButtons: true,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
    },
    {
      id: 'n7',
      name: 'Eric G. Prickett',
      action: 'Started following you',
      time: 'Wed, 3:30 pm',
      hasButtons: false,
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100',
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
          <Text style={styles.headerTitle}>Notification</Text>

          {/* Toggle view button */}
          <TouchableOpacity onPress={() => setIsEmpty(!isEmpty)} activeOpacity={0.7} style={{ marginRight: 12 }}>
            <Ionicons name={isEmpty ? 'list' : 'notifications-off-outline'} size={20} color="#5669FF" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="ellipsis-vertical" size={20} color="#120D26" />
          </TouchableOpacity>
        </View>

        {/* EMPTY STATE OR LIST STATE */}
        {isEmpty ? (
          <View style={styles.emptyContainer}>
            <View style={styles.bellGraphicCircle}>
              <Ionicons name="notifications" size={64} color="#5669FF" />
              <View style={styles.zeroBadge}>
                <Text style={styles.zeroBadgeText}>0</Text>
              </View>
            </View>

            <Text style={styles.emptyTitle}>No Notifications!</Text>
            <Text style={styles.emptySubtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            </Text>

            <TouchableOpacity style={styles.toggleStateBtn} onPress={() => setIsEmpty(false)}>
              <Text style={styles.toggleStateText}>Xem danh sách thông báo mẫu</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
            {notifications.map((item) => (
              <View key={item.id} style={styles.notifRow}>
                <Image source={{ uri: item.avatar }} style={styles.avatarImg} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.notifText}>
                    <Text style={styles.notifName}>{item.name} </Text>
                    {item.action}
                  </Text>

                  {/* Accept / Reject Buttons */}
                  {item.hasButtons && (
                    <View style={styles.actionBtnRow}>
                      <TouchableOpacity style={styles.rejectBtn}>
                        <Text style={styles.rejectBtnText}>Reject</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.acceptBtn}>
                        <Text style={styles.acceptBtnText}>Accept</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 10 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backBtn: { width: 36, height: 36, justifyContent: 'center' },
  headerTitle: { fontSize: 20, fontWeight: '800', color: '#120D26', flex: 1, marginLeft: 8 },

  listContent: { gap: 18, paddingBottom: 40 },
  notifRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  avatarImg: { width: 44, height: 44, borderRadius: 22 },
  notifText: { fontSize: 13, color: '#64748B', lineHeight: 18 },
  notifName: { fontWeight: '800', color: '#120D26' },
  timeText: { fontSize: 11, color: '#94A3B8', marginTop: 2 },

  actionBtnRow: { flexDirection: 'row', gap: 10, marginTop: 10 },
  rejectBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4DFDF',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
  },
  rejectBtnText: { fontSize: 12, fontWeight: '700', color: '#64748B' },
  acceptBtn: {
    backgroundColor: '#5669FF',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
  },
  acceptBtnText: { fontSize: 12, fontWeight: '700', color: '#FFFFFF' },

  // EMPTY STATE
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  bellGraphicCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 24,
  },
  zeroBadge: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroBadgeText: { color: '#FFFFFF', fontWeight: '800', fontSize: 13 },
  emptyTitle: { fontSize: 20, fontWeight: '800', color: '#120D26', marginBottom: 10 },
  emptySubtitle: { fontSize: 13, color: '#747688', textAlign: 'center', lineHeight: 20 },
  toggleStateBtn: { marginTop: 24, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10, backgroundColor: '#EEF2FF' },
  toggleStateText: { color: '#5669FF', fontSize: 12, fontWeight: '700' },
});
