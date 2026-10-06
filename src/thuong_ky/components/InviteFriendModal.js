import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InviteFriendModal({ visible, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState(['f1', 'f3', 'f5', 'f7']);

  const friends = [
    { id: 'f1', name: 'Alex Lee', followers: '2k Followers', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' },
    { id: 'f2', name: 'Micheal Ulasi', followers: '56 Followers', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: 'f3', name: 'Cristofer', followers: '300 Followers', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
    { id: 'f4', name: 'David Silbia', followers: '5k Followers', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: 'f5', name: 'Ashfak Sayem', followers: '402 Followers', avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150' },
    { id: 'f6', name: 'Rocks Velkeinjen', followers: '893 Followers', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
    { id: 'f7', name: 'Roman Kutepov', followers: '225 Followers', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150' },
    { id: 'f8', name: 'Cristofer Nolan', followers: '322 Followers', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150' },
  ];

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const filtered = friends.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />

        <View style={styles.sheetContainer}>
          <View style={styles.dragHandle} />
          <Text style={styles.sheetTitle}>Invite Friend</Text>

          {/* SEARCH BAR */}
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#9CA3AF"
              value={query}
              onChangeText={setQuery}
            />
            <Ionicons name="search-outline" size={18} color="#5669FF" />
          </View>

          {/* FRIENDS LIST */}
          <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
            {filtered.map((item) => {
              const isChecked = selectedIds.includes(item.id);
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.friendRow}
                  onPress={() => toggleSelect(item.id)}
                  activeOpacity={0.7}
                >
                  <Image source={{ uri: item.avatar }} style={styles.avatarImg} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.friendName}>{item.name}</Text>
                    <Text style={styles.friendSub}>{item.followers}</Text>
                  </View>

                  <View
                    style={[
                      styles.checkCircle,
                      isChecked ? styles.checkCircleActive : styles.checkCircleInactive,
                    ]}
                  >
                    {isChecked && <Ionicons name="checkmark" size={14} color="#FFFFFF" />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* FLOATING INVITE BUTTON WITH CIRCULAR ARROW */}
          <TouchableOpacity style={styles.inviteBtn} onPress={onClose} activeOpacity={0.85}>
            <Text style={styles.inviteBtnText}>INVITE</Text>
            <View style={styles.arrowCircle}>
              <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  backdrop: { flex: 1 },
  sheetContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 28,
    maxHeight: '82%',
    position: 'relative',
  },
  dragHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E4DFDF',
    alignSelf: 'center',
    marginBottom: 16,
  },
  sheetTitle: { fontSize: 20, fontWeight: '800', color: '#120D26', marginBottom: 16 },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 16,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#120D26' },

  listContent: { gap: 14, paddingBottom: 80 },
  friendRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  avatarImg: { width: 44, height: 44, borderRadius: 22 },
  friendName: { fontSize: 15, fontWeight: '800', color: '#120D26' },
  friendSub: { fontSize: 12, color: '#747688', marginTop: 2 },

  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkCircleActive: { backgroundColor: '#5669FF' },
  checkCircleInactive: { borderWidth: 1.5, borderColor: '#D1D5DB' },

  inviteBtn: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
    backgroundColor: '#5669FF',
    height: 54,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  inviteBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800', letterSpacing: 1 },
  arrowCircle: {
    position: 'absolute',
    right: 14,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
