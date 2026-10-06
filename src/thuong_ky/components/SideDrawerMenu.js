import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SideDrawerMenu({ isOpen, onClose, onNavigate, onSignOut }) {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'profile', title: 'My Profile', icon: 'person-outline' },
    { id: 'message', title: 'Message', icon: 'chatbox-ellipses-outline', badge: 3 },
    { id: 'calendar', title: 'Calendar', icon: 'calendar-outline' },
    { id: 'bookmark', title: 'Bookmark', icon: 'bookmark-outline' },
    { id: 'contact', title: 'Contact Us', icon: 'mail-outline' },
    { id: 'settings', title: 'Settings', icon: 'settings-outline' },
    { id: 'help', title: 'Helps & FAQs', icon: 'help-circle-outline' },
  ];

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />

      <View style={styles.drawerContainer}>
        <ScrollView contentContainerStyle={styles.drawerContent} showsVerticalScrollIndicator={false}>
          {/* USER PROFILE HEADER */}
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200' }}
              style={styles.avatarImage}
            />
            <Text style={styles.userName}>Ashfak Sayem</Text>
          </View>

          {/* MENU ITEMS */}
          <View style={styles.menuList}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItemRow}
                onPress={() => {
                  onClose();
                  if (onNavigate) onNavigate(item.id);
                }}
                activeOpacity={0.7}
              >
                <Ionicons name={item.icon} size={22} color="#120D26" />
                <Text style={styles.menuItemText}>{item.title}</Text>
                {item.badge ? (
                  <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{item.badge}</Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            ))}

            {/* SIGN OUT */}
            <TouchableOpacity
              style={styles.menuItemRow}
              onPress={() => {
                onClose();
                onSignOut();
              }}
              activeOpacity={0.7}
            >
              <Ionicons name="log-out-outline" size={22} color="#120D26" />
              <Text style={styles.menuItemText}>Sign Out</Text>
            </TouchableOpacity>
          </View>

          {/* UPGRADE PRO BANNER */}
          <TouchableOpacity style={styles.upgradeBtn} activeOpacity={0.85}>
            <Ionicons name="crown" size={20} color="#00F0FF" />
            <Text style={styles.upgradeText}>Upgrade Pro</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
    flexDirection: 'row',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  drawerContainer: {
    width: '78%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  drawerContent: {
    flexGrow: 1,
  },
  profileHeader: {
    marginBottom: 32,
  },
  avatarImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#120D26',
  },
  menuList: {
    gap: 20,
    flex: 1,
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#120D26',
    flex: 1,
  },
  badgeContainer: {
    backgroundColor: '#F5A623',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  upgradeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F8FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    gap: 10,
    marginTop: 28,
  },
  upgradeText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#00C4D8',
  },
});
