import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ShareModal({ visible, onClose }) {
  const shareOptions = [
    { id: '1', name: 'Copy Link', icon: 'copy-outline', color: '#6B7280' },
    { id: '2', name: 'WhatsApp', icon: 'logo-whatsapp', color: '#25D366' },
    { id: '3', name: 'Facebook', icon: 'logo-facebook', color: '#1877F2' },
    { id: '4', name: 'Messenger', icon: 'chatbubble-ellipses', color: '#A855F7' },
    { id: '5', name: 'Twitter', icon: 'logo-twitter', color: '#1DA1F2' },
    { id: '6', name: 'Instagram', icon: 'logo-instagram', color: '#E1306C' },
    { id: '7', name: 'Skype', icon: 'logo-skype', color: '#00AFF0' },
    { id: '8', name: 'Message', icon: 'chatbox-outline', color: '#10B981' },
  ];

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />

        <View style={styles.sheetContainer}>
          <View style={styles.dragHandle} />
          <Text style={styles.sheetTitle}>Share with friends</Text>

          <View style={styles.gridContainer}>
            {shareOptions.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.gridItem}
                onPress={onClose}
                activeOpacity={0.7}
              >
                <View style={[styles.iconBox, { backgroundColor: '#F1F5F9' }]}>
                  <Ionicons name={item.icon} size={24} color={item.color} />
                </View>
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.cancelBtn} onPress={onClose} activeOpacity={0.8}>
            <Text style={styles.cancelBtnText}>CANCEL</Text>
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
  },
  dragHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E4DFDF',
    alignSelf: 'center',
    marginBottom: 16,
  },
  sheetTitle: { fontSize: 20, fontWeight: '800', color: '#120D26', marginBottom: 20 },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  gridItem: {
    width: '22%',
    alignItems: 'center',
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  itemText: { fontSize: 11, color: '#747688', textAlign: 'center', fontWeight: '500' },

  cancelBtn: {
    backgroundColor: '#F1F5F9',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtnText: { fontSize: 14, fontWeight: '800', color: '#64748B' },
});
