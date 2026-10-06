import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FilterModal({ visible, onClose, onApply }) {
  const [selectedCategory, setSelectedCategory] = useState('sports');
  const [selectedTime, setSelectedTime] = useState('tomorrow');

  const categories = [
    { id: 'sports', name: 'Sports', icon: 'football' },
    { id: 'music', name: 'Music', icon: 'musical-notes' },
    { id: 'art', name: 'Art', icon: 'color-palette' },
    { id: 'food', name: 'Food', icon: 'fast-food' },
  ];

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />

        <View style={styles.sheetContainer}>
          {/* Drag Handle */}
          <View style={styles.dragHandle} />

          <Text style={styles.sheetTitle}>Filter</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* CATEGORY CIRCLES */}
            <View style={styles.categoriesRow}>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <TouchableOpacity
                    key={cat.id}
                    style={styles.catCol}
                    onPress={() => setSelectedCategory(cat.id)}
                    activeOpacity={0.8}
                  >
                    <View
                      style={[
                        styles.catCircle,
                        isSelected ? styles.catCircleActive : styles.catCircleInactive,
                      ]}
                    >
                      <Ionicons
                        name={cat.icon}
                        size={22}
                        color={isSelected ? '#FFFFFF' : '#807A7A'}
                      />
                    </View>
                    <Text
                      style={[
                        styles.catLabel,
                        isSelected && { color: '#5669FF', fontWeight: '700' },
                      ]}
                    >
                      {cat.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* TIME & DATE */}
            <Text style={styles.sectionHeader}>Time & Date</Text>
            <View style={styles.timeChipsRow}>
              {['today', 'tomorrow', 'this_week'].map((timeId) => {
                const labelMap = { today: 'Today', tomorrow: 'Tomorrow', this_week: 'This week' };
                const isSelected = selectedTime === timeId;
                return (
                  <TouchableOpacity
                    key={timeId}
                    style={[
                      styles.timeChip,
                      isSelected ? styles.timeChipActive : styles.timeChipInactive,
                    ]}
                    onPress={() => setSelectedTime(timeId)}
                  >
                    <Text
                      style={[
                        styles.timeChipText,
                        isSelected && styles.timeChipTextActive,
                      ]}
                    >
                      {labelMap[timeId]}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* CHOOSE FROM CALENDAR INPUT BUTTON */}
            <TouchableOpacity style={styles.calendarInputBtn}>
              <Ionicons name="calendar-outline" size={20} color="#5669FF" />
              <Text style={styles.calendarInputText}>Choose from calender</Text>
              <Ionicons name="chevron-forward" size={16} color="#5669FF" />
            </TouchableOpacity>

            {/* LOCATION INPUT */}
            <Text style={styles.sectionHeader}>Location</Text>
            <TouchableOpacity style={styles.locationInputBtn}>
              <View style={styles.locationIconBox}>
                <Ionicons name="location" size={18} color="#5669FF" />
              </View>
              <Text style={styles.locationInputText}>New York, USA</Text>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </TouchableOpacity>

            {/* PRICE RANGE */}
            <View style={styles.priceHeaderRow}>
              <Text style={styles.sectionHeader}>Select price range</Text>
              <Text style={styles.priceRangeText}>$20-$120</Text>
            </View>

            {/* Price Histogram Bars Representation */}
            <View style={styles.histogramArea}>
              {[15, 25, 40, 65, 90, 110, 85, 60, 45, 30, 20, 10].map((h, i) => (
                <View
                  key={i}
                  style={[
                    styles.histBar,
                    { height: h * 0.4 },
                    i >= 2 && i <= 9 ? { backgroundColor: '#5669FF' } : { backgroundColor: '#E4DFDF' },
                  ]}
                />
              ))}
            </View>

            {/* Slider track representation */}
            <View style={styles.sliderTrack}>
              <View style={styles.sliderFill} />
              <View style={[styles.sliderThumb, { left: '20%' }]}>
                <Ionicons name="code-flat" size={12} color="#5669FF" />
              </View>
              <View style={[styles.sliderThumb, { right: '20%' }]}>
                <Ionicons name="code-flat" size={12} color="#5669FF" />
              </View>
            </View>

            {/* RESET & APPLY BUTTONS */}
            <View style={styles.btnRow}>
              <TouchableOpacity style={styles.resetBtn} onPress={onClose} activeOpacity={0.8}>
                <Text style={styles.resetBtnText}>RESET</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.applyBtn}
                onPress={() => {
                  if (onApply) onApply();
                  onClose();
                }}
                activeOpacity={0.85}
              >
                <Text style={styles.applyBtnText}>APPLY</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    maxHeight: '85%',
  },
  dragHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E4DFDF',
    alignSelf: 'center',
    marginBottom: 16,
  },
  sheetTitle: { fontSize: 22, fontWeight: '800', color: '#120D26', marginBottom: 20 },

  categoriesRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  catCol: { alignItems: 'center' },
  catCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    borderWidth: 1,
  },
  catCircleActive: { backgroundColor: '#5669FF', borderColor: '#5669FF' },
  catCircleInactive: { backgroundColor: '#FFFFFF', borderColor: '#E4DFDF' },
  catLabel: { fontSize: 12, color: '#747688' },

  sectionHeader: { fontSize: 16, fontWeight: '800', color: '#120D26', marginBottom: 12 },

  timeChipsRow: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  timeChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  timeChipActive: { backgroundColor: '#5669FF', borderColor: '#5669FF' },
  timeChipInactive: { backgroundColor: '#FFFFFF', borderColor: '#E4DFDF' },
  timeChipText: { fontSize: 13, color: '#807A7A', fontWeight: '600' },
  timeChipTextActive: { color: '#FFFFFF', fontWeight: '700' },

  calendarInputBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 24,
  },
  calendarInputText: { flex: 1, marginLeft: 10, fontSize: 13, color: '#807A7A', fontWeight: '500' },

  locationInputBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 24,
  },
  locationIconBox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationInputText: { flex: 1, marginLeft: 10, fontSize: 14, fontWeight: '700', color: '#120D26' },

  priceHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  priceRangeText: { fontSize: 14, color: '#5669FF', fontWeight: '800' },

  histogramArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 50,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  histBar: { width: 14, borderRadius: 4 },

  sliderTrack: {
    height: 4,
    backgroundColor: '#E4DFDF',
    borderRadius: 2,
    marginVertical: 12,
    position: 'relative',
    justifyContent: 'center',
  },
  sliderFill: { position: 'absolute', left: '20%', right: '20%', height: 4, backgroundColor: '#5669FF' },
  sliderThumb: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
  },

  btnRow: { flexDirection: 'row', gap: 14, marginTop: 24 },
  resetBtn: {
    flex: 1,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetBtnText: { fontSize: 14, fontWeight: '800', color: '#120D26' },
  applyBtn: {
    flex: 1,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtnText: { fontSize: 14, fontWeight: '800', color: '#FFFFFF' },
});
