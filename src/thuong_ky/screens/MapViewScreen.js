import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MapViewScreen({ onSelectEvent, onBack }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* TOP SEARCH & TARGET HEADER */}
        <View style={styles.topHeader}>
          <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.7}>
            <Ionicons name="chevron-back" size={20} color="#120D26" />
          </TouchableOpacity>

          <View style={styles.searchBox}>
            <Ionicons name="search-outline" size={16} color="#9CA3AF" />
            <Text style={styles.searchText}>Find for food or restaurant...</Text>
          </View>

          <TouchableOpacity style={styles.targetBtn}>
            <Ionicons name="navigate-circle-outline" size={22} color="#5669FF" />
          </TouchableOpacity>
        </View>

        {/* CATEGORIES ROW */}
        <View style={styles.categoriesRow}>
          <View style={[styles.catChip, { backgroundColor: '#FFFFFF' }]}>
            <Ionicons name="football" size={14} color="#F06354" />
            <Text style={[styles.catText, { color: '#F06354' }]}>Sports</Text>
          </View>
          <View style={[styles.catChip, { backgroundColor: '#FFFFFF' }]}>
            <Ionicons name="musical-notes" size={14} color="#F5A623" />
            <Text style={[styles.catText, { color: '#F5A623' }]}>Music</Text>
          </View>
          <View style={[styles.catChip, { backgroundColor: '#FFFFFF' }]}>
            <Ionicons name="fast-food" size={14} color="#29D697" />
            <Text style={[styles.catText, { color: '#29D697' }]}>Food</Text>
          </View>
        </View>

        {/* MAP BACKGROUND SIMULATION */}
        <View style={styles.mapArea}>
          {/* Map pins */}
          <View style={[styles.mapPin, { top: '25%', left: '30%' }]}>
            <Ionicons name="musical-notes" size={14} color="#5669FF" />
          </View>

          <View style={[styles.mapPin, { top: '35%', right: '25%' }]}>
            <Ionicons name="fast-food" size={14} color="#29D697" />
          </View>

          <View style={[styles.mapPin, { top: '55%', left: '40%' }]}>
            <Ionicons name="football" size={14} color="#F06354" />
          </View>

          <View style={[styles.mapPin, { top: '45%', right: '35%' }]}>
            <Ionicons name="color-palette" size={14} color="#00F0FF" />
          </View>

          {/* Floating Filter Action */}
          <TouchableOpacity style={styles.floatingFilterBtn}>
            <Ionicons name="options" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* BOTTOM EVENT CARD PREVIEW */}
        <TouchableOpacity
          style={styles.bottomPreviewCard}
          onPress={() =>
            onSelectEvent &&
            onSelectEvent({
              title: "Jo Malone London's Mother's Day Presents",
              date: 'Wed, Apr 28 - 5:30 PM',
              location: 'Radius Gallery • Santa Cruz, CA',
              image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300',
            })
          }
          activeOpacity={0.85}
        >
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300' }}
            style={styles.previewImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.previewDate}>Wed, Apr 28 - 5:30 PM</Text>
            <Text style={styles.previewTitle} numberOfLines={2}>
              Jo Malone London's Mother's Day Presents
            </Text>
            <Text style={styles.previewLoc}>📍 Radius Gallery • Santa Cruz, CA</Text>
          </View>
          <Ionicons name="bookmark" size={18} color="#F06354" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, position: 'relative' },

  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    gap: 10,
    zIndex: 10,
  },
  backBtn: { width: 36, height: 36, justifyContent: 'center' },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchText: { fontSize: 13, color: '#9CA3AF', marginLeft: 6 },
  targetBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  categoriesRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    marginTop: 12,
    zIndex: 10,
  },
  catChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    gap: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 1,
  },
  catText: { fontSize: 12, fontWeight: '700' },

  mapArea: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    marginTop: -40,
    position: 'relative',
  },
  mapPin: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  floatingFilterBtn: {
    position: 'absolute',
    right: 20,
    bottom: 110,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  bottomPreviewCard: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  previewImage: { width: 70, height: 70, borderRadius: 14, resizeMode: 'cover' },
  previewDate: { fontSize: 11, fontWeight: '700', color: '#5669FF' },
  previewTitle: { fontSize: 13, fontWeight: '800', color: '#120D26', marginVertical: 2 },
  previewLoc: { fontSize: 11, color: '#747688' },
});
