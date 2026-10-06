import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingScreen({ onFinish, onSkip }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Explore Upcoming and\nNearby Events',
      subtitle: 'In publishing and graphic design, Lorem is a placeholder text commonly',
      type: 'home',
    },
    {
      id: 2,
      title: 'Web Have Modern Events\nCalendar Feature',
      subtitle: 'In publishing and graphic design, Lorem is a placeholder text commonly',
      type: 'calendar',
    },
    {
      id: 3,
      title: 'To Look Up More Events or\nActivities Nearby By Map',
      subtitle: 'In publishing and graphic design, Lorem is a placeholder text commonly',
      type: 'map',
    },
  ];

  const currentSlide = slides[activeSlide];

  const handleNext = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      onFinish();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* TOP HALF: PHONE UI MOCKUP PREVIEW */}
      <View style={styles.topSection}>
        <View style={styles.phoneMockup}>
          {/* Phone Header */}
          <View style={styles.phoneHeader}>
            <Text style={styles.phoneTime}>9:41</Text>
            <View style={styles.phoneIcons}>
              <Ionicons name="cellular" size={12} color="#000" />
              <Ionicons name="wifi" size={12} color="#000" style={{ marginHorizontal: 4 }} />
              <Ionicons name="battery-full" size={14} color="#000" />
            </View>
          </View>

          {/* Render preview screen depending on slide type */}
          {currentSlide.type === 'home' && (
            <ScrollView style={styles.mockupBody} showsVerticalScrollIndicator={false}>
              <View style={styles.mockupHeaderBlue}>
                <View style={styles.mockupLocRow}>
                  <Ionicons name="menu-outline" size={16} color="#FFF" />
                  <Text style={styles.mockupLocText}>Current Location ▾{'\n'}New York, USA</Text>
                  <Ionicons name="notifications-outline" size={16} color="#FFF" />
                </View>

                <View style={styles.mockupSearchBar}>
                  <Ionicons name="search-outline" size={14} color="#6B7280" />
                  <Text style={styles.mockupSearchText}>Search...</Text>
                  <View style={styles.mockupFilterBtn}>
                    <Ionicons name="options-outline" size={12} color="#FFF" />
                    <Text style={{ fontSize: 9, color: '#FFF', fontWeight: '700' }}>Filters</Text>
                  </View>
                </View>

                <View style={styles.mockupChipsRow}>
                  <View style={[styles.mockupChip, { backgroundColor: '#F06354' }]}>
                    <Text style={styles.chipText}>🏈 Sports</Text>
                  </View>
                  <View style={[styles.mockupChip, { backgroundColor: '#F5A623' }]}>
                    <Text style={styles.chipText}>🎵 Music</Text>
                  </View>
                  <View style={[styles.mockupChip, { backgroundColor: '#29D697' }]}>
                    <Text style={styles.chipText}>🍕 Food</Text>
                  </View>
                </View>
              </View>

              <View style={styles.mockupSectionTitle}>
                <Text style={{ fontSize: 11, fontWeight: '700', color: '#1F2937' }}>Upcoming Events</Text>
                <Text style={{ fontSize: 9, color: '#5669FF' }}>See All ▸</Text>
              </View>

              <View style={styles.mockupEventCard}>
                <View style={styles.mockupCardBanner}>
                  <View style={styles.dateBadge}>
                    <Text style={{ fontSize: 9, fontWeight: '800', color: '#EF4444' }}>10</Text>
                    <Text style={{ fontSize: 7, color: '#6B7280' }}>JUNE</Text>
                  </View>
                  <Ionicons name="bookmark" size={14} color="#F5A623" style={{ alignSelf: 'flex-end' }} />
                </View>

                <Text style={styles.mockupEventTitle}>International Jazz Day</Text>
                <Text style={styles.mockupEventSub}>👥 +20 Going</Text>
                <Text style={styles.mockupEventLoc}>📍 36 Guild Street London, UK</Text>
              </View>
            </ScrollView>
          )}

          {currentSlide.type === 'calendar' && (
            <ScrollView style={styles.mockupBody} showsVerticalScrollIndicator={false}>
              <View style={styles.calendarHeaderRow}>
                <Ionicons name="arrow-back" size={14} color="#000" />
                <Text style={{ fontSize: 13, fontWeight: '700', flex: 1, textAlign: 'center' }}>Calendar</Text>
                <Ionicons name="ellipsis-vertical" size={14} color="#000" />
              </View>

              <Text style={{ fontSize: 12, fontWeight: '800', textAlign: 'center', marginVertical: 8 }}>
                ‹   March 2021   ›
              </Text>

              <View style={styles.calendarGrid}>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
                  <Text key={i} style={styles.calDayHead}>{d}</Text>
                ))}
                {[31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3].map((num, idx) => {
                  const isHighlighted = num === 10 || num === 15 || num === 23 || num === 25;
                  const bgColor = num === 10 ? '#EF4444' : num === 15 ? '#F5A623' : num === 23 ? '#10B981' : num === 25 ? '#6366F1' : 'transparent';
                  return (
                    <View key={idx} style={[styles.calCell, isHighlighted && { backgroundColor: bgColor, borderRadius: 10 }]}>
                      <Text style={[styles.calNum, isHighlighted && { color: '#FFF', fontWeight: '800' }]}>{num}</Text>
                    </View>
                  );
                })}
              </View>

              <View style={styles.calEventItem}>
                <View style={[styles.calDotBox, { backgroundColor: '#F5A623' }]} />
                <View>
                  <Text style={{ fontSize: 9, color: '#FFF' }}>10:00 am - 12:30 pm</Text>
                  <Text style={{ fontSize: 11, fontWeight: '800', color: '#FFF' }}>Gala Music Festival</Text>
                </View>
              </View>
            </ScrollView>
          )}

          {currentSlide.type === 'map' && (
            <View style={styles.mockupBody}>
              <View style={styles.mapContainer}>
                {/* Search Header */}
                <View style={styles.mapSearchHeader}>
                  <Ionicons name="chevron-back" size={14} color="#000" />
                  <View style={styles.mapSearchBox}>
                    <Ionicons name="search-outline" size={12} color="#9CA3AF" />
                    <Text style={{ fontSize: 9, color: '#9CA3AF' }}>Search event, location ect.</Text>
                    <Ionicons name="options" size={12} color="#5669FF" />
                  </View>
                </View>

                {/* Map Pins */}
                <View style={styles.mapPinsArea}>
                  <View style={[styles.mapPinBubble, { top: 20, left: 10 }]}>
                    <View style={[styles.mapPinDot, { backgroundColor: '#5669FF' }]}>
                      <Ionicons name="musical-notes" size={10} color="#FFF" />
                    </View>
                    <Text style={styles.mapPinText}>Ticket: $30{'\n'}Music concert</Text>
                  </View>

                  <View style={[styles.mapPinBubble, { top: 70, right: 10 }]}>
                    <View style={[styles.mapPinDot, { backgroundColor: '#F06354' }]}>
                      <Ionicons name="football" size={10} color="#FFF" />
                    </View>
                    <Text style={styles.mapPinText}>Ticket: $30{'\n'}Football match</Text>
                  </View>

                  <View style={[styles.mapPinBubble, { top: 120, left: 10 }]}>
                    <View style={[styles.mapPinDot, { backgroundColor: '#29D697' }]}>
                      <Ionicons name="fast-food" size={10} color="#FFF" />
                    </View>
                    <Text style={styles.mapPinText}>Ticket: $30{'\n'}Food festival</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>

      {/* BOTTOM HALF: ROUNDED BLUE SHEET */}
      <View style={styles.bottomSheet}>
        <Text style={styles.sheetTitle}>{currentSlide.title}</Text>
        <Text style={styles.sheetSubtitle}>{currentSlide.subtitle}</Text>

        {/* Navigation Footer */}
        <View style={styles.footerRow}>
          <TouchableOpacity onPress={onSkip} activeOpacity={0.7}>
            <Text style={styles.skipBtnText}>Skip</Text>
          </TouchableOpacity>

          <View style={styles.dotsRow}>
            {slides.map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveSlide(index)}
                style={[
                  styles.dot,
                  index === activeSlide ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity onPress={handleNext} activeOpacity={0.7}>
            <Text style={styles.nextBtnText}>
              {activeSlide === slides.length - 1 ? 'Next' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  phoneMockup: {
    width: 260,
    height: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    borderWidth: 6,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  phoneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#FFFFFF',
  },
  phoneTime: { fontSize: 10, fontWeight: '800' },
  phoneIcons: { flexDirection: 'row', alignItems: 'center' },

  mockupBody: { flex: 1, padding: 8 },
  mockupHeaderBlue: {
    backgroundColor: '#4E65FF',
    borderRadius: 16,
    padding: 10,
    marginBottom: 8,
  },
  mockupLocRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  mockupLocText: { fontSize: 8, color: '#FFF', fontWeight: '600' },
  mockupSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  mockupSearchText: { fontSize: 9, color: '#9CA3AF', flex: 1, marginLeft: 4 },
  mockupFilterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5669FF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    gap: 2,
  },
  mockupChipsRow: { flexDirection: 'row', gap: 4 },
  mockupChip: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 10 },
  chipText: { fontSize: 8, color: '#FFF', fontWeight: '700' },

  mockupSectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  mockupEventCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  mockupCardBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#CEEBF7',
    height: 60,
    borderRadius: 8,
    padding: 4,
    marginBottom: 6,
  },
  dateBadge: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  mockupEventTitle: { fontSize: 10, fontWeight: '800', color: '#1F2937' },
  mockupEventSub: { fontSize: 8, color: '#5669FF', marginVertical: 2 },
  mockupEventLoc: { fontSize: 8, color: '#6B7280' },

  // Calendar Mockup
  calendarHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  calendarGrid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 },
  calDayHead: { width: '14.28%', fontSize: 7, fontWeight: '700', textAlign: 'center', color: '#6B7280', marginBottom: 2 },
  calCell: { width: '14.28%', height: 18, justifyContent: 'center', alignItems: 'center' },
  calNum: { fontSize: 8, color: '#1F2937' },
  calEventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5A623',
    padding: 6,
    borderRadius: 10,
    gap: 6,
  },
  calDotBox: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#FFF' },

  // Map Mockup
  mapContainer: { flex: 1, backgroundColor: '#F1F5F9', borderRadius: 16, padding: 8 },
  mapSearchHeader: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
  mapSearchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
    gap: 4,
  },
  mapPinsArea: { flex: 1, position: 'relative' },
  mapPinBubble: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 4,
    gap: 4,
    elevation: 2,
  },
  mapPinDot: { width: 16, height: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  mapPinText: { fontSize: 7, color: '#1F2937', fontWeight: '700' },

  // BOTTOM ROUNDED BLUE SHEET
  bottomSheet: {
    backgroundColor: '#5669FF',
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    paddingHorizontal: 28,
    paddingTop: 36,
    paddingBottom: 28,
  },
  sheetTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 12,
  },
  sheetSubtitle: {
    fontSize: 13,
    color: '#E0E7FF',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipBtnText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  nextBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    width: 8,
    backgroundColor: '#FFFFFF',
  },
  inactiveDot: {
    width: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});
