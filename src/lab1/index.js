import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// ============================================================================
// 1. COMPONENT HEADER
// Hiển thị Text: "Chào mừng IT23M đến với LTDD2"
// ============================================================================
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Chào mừng IT23M đến với LTDD2</Text>
    </View>
  );
};

// ============================================================================
// 2. COMPONENT SECTION
// Hiển thị title và description nhận qua Props
// ============================================================================
const Section = ({ title, description }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDesc}>{description}</Text>
    </View>
  );
};

// ============================================================================
// 3. MÀN HÌNH CHÍNH LAB 1
// ============================================================================
const Lab1Screen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Component Header */}
      <Header />

      {/* Component Section hiển thị title và description */}
      <Section
        title="Bài Học 1: Tổng Quan React Native"
        description="Tìm hiểu các thành phần cơ bản View, Text, StyleSheet và Flexbox Layout."
      />

      <Section
        title="Bài Học 2: State & Props"
        description="Truyền dữ liệu giữa các Component bằng Props và quản lý trạng thái ứng dụng."
      />
    </ScrollView>
  );
};

export default Lab1Screen;

// ============================================================================
// STYLESHEET
// ============================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 16,
  },
  // Header Style
  headerContainer: {
    backgroundColor: '#4F46E5',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  // Section Style
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4F46E5',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 18,
  },
});
