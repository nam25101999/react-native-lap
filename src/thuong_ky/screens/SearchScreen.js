import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({ onSelectEvent, onBack }) {
  const [query, setQuery] = useState('');

  const searchResults = [
    {
      id: 's1',
      date: '1ST MAY - SAT - 2:00 PM',
      title: 'A virtual evening of smooth jazz',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300',
    },
    {
      id: 's2',
      date: '1ST MAY - SAT - 2:00 PM',
      title: "Jo malone london's mother's day",
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300',
    },
    {
      id: 's3',
      date: '1ST MAY - SAT - 2:00 PM',
      title: "Women's leadership conference",
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300',
    },
    {
      id: 's4',
      date: '1ST MAY - SAT - 2:00 PM',
      title: 'International kids safe parents night out',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300',
    },
    {
      id: 's5',
      date: '1ST MAY - SAT - 2:00 PM',
      title: 'International gala music festival',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300',
    },
  ];

  const filteredResults = searchResults.filter((r) =>
    r.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={22} color="#120D26" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Search</Text>
        </View>

        {/* SEARCH INPUT BAR WITH FILTERS PILL */}
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#5669FF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#9CA3AF"
            value={query}
            onChangeText={setQuery}
          />
          <TouchableOpacity style={styles.filterPill}>
            <Ionicons name="options-outline" size={14} color="#FFFFFF" />
            <Text style={styles.filterPillText}>Filters</Text>
          </TouchableOpacity>
        </View>

        {/* SEARCH RESULTS LIST */}
        <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
          {filteredResults.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.resultCard}
              onPress={() => onSelectEvent(item)}
              activeOpacity={0.85}
            >
              <Image source={{ uri: item.image }} style={styles.resultImage} />
              <View style={styles.resultInfo}>
                <Text style={styles.resultDate}>{item.date}</Text>
                <Text style={styles.resultTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
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

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 48,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14, color: '#120D26' },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5669FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 4,
  },
  filterPillText: { fontSize: 11, fontWeight: '700', color: '#FFFFFF' },

  listContent: { gap: 14, paddingBottom: 40 },
  resultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  resultImage: { width: 70, height: 70, borderRadius: 12, resizeMode: 'cover' },
  resultInfo: { flex: 1 },
  resultDate: { fontSize: 11, fontWeight: '700', color: '#5669FF', marginBottom: 4 },
  resultTitle: { fontSize: 14, fontWeight: '800', color: '#120D26', lineHeight: 18 },
});
