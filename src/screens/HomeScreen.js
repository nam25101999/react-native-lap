import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AssignmentCard from '../components/AssignmentCard';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header Chào Mừng */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingText}>Xin chào 👋</Text>
            <Text style={styles.headerTitle}>Quản Lý Bài Tập</Text>
            <Text style={styles.headerSubtitle}>React Native - IT23M - LTDD2</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Ionicons name="person-circle-outline" size={44} color="#4F46E5" />
          </View>
        </View>

        {/* Thống kê bài tập */}
        <View style={styles.statsRow}>
          <View style={[styles.statBox, { backgroundColor: '#EEF2FF' }]}>
            <Ionicons name="document-text-outline" size={24} color="#4F46E5" />
            <Text style={styles.statCount}>5</Text>
            <Text style={styles.statLabel}>Tổng số mục</Text>
          </View>

          <View style={[styles.statBox, { backgroundColor: '#ECFDF5' }]}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#10B981" />
            <Text style={[styles.statCount, { color: '#10B981' }]}>1</Text>
            <Text style={styles.statLabel}>Lab 1 Đã xong</Text>
          </View>

          <View style={[styles.statBox, { backgroundColor: '#FFFBEB' }]}>
            <Ionicons name="time-outline" size={24} color="#F59E0B" />
            <Text style={[styles.statCount, { color: '#F59E0B' }]}>4</Text>
            <Text style={styles.statLabel}>Các Lab khác</Text>
          </View>
        </View>

        {/* Mục Bài Tập Học Phần */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Bài Tập Học Phần</Text>
        </View>

        <AssignmentCard
          title="Bài Tập Thường Kỳ"
          subtitle="Các bài kiểm tra quá trình và bài tập thực hành hàng tuần."
          iconName="calendar-outline"
          iconColor="#4F46E5"
          badgeText="Hàng tuần"
          badgeColor="#EEF2FF"
          badgeTextColor="#4F46E5"
          onPress={() => navigation.navigate('ThuongKy')}
        />

        <AssignmentCard
          title="Bài Tập Giữa Kỳ"
          subtitle="Báo cáo đồ án môn học và bài thi đánh giá giữa kỳ."
          iconName="trophy-outline"
          iconColor="#8B5CF6"
          badgeText="Quan trọng"
          badgeColor="#F3E8FF"
          badgeTextColor="#8B5CF6"
          onPress={() => navigation.navigate('GiuaKy')}
        />

        {/* Mục Bài Tập Lab */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Danh Sách Bài Lab</Text>
          <Text style={styles.sectionSub}>3 Bài Lab</Text>
        </View>

        <AssignmentCard
          title="Lab 1: Cấu trúc & Component SPEC"
          subtitle="Component Header (IT23M LTDD2), Section Props, 7 Khái niệm Cốt lõi."
          iconName="code-slash-outline"
          iconColor="#10B981"
          badgeText="Hoàn thành"
          badgeColor="#D1FAE5"
          badgeTextColor="#065F46"
          onPress={() => navigation.navigate('Lab1')}
        />

        <AssignmentCard
          title="Lab 2: State & Tương Tác Component"
          subtitle="Quản lý useState, useEffect, Props và các sự kiện nút nhấn."
          iconName="layers-outline"
          iconColor="#F59E0B"
          badgeText="Chưa làm"
          badgeColor="#FEF3C7"
          badgeTextColor="#92400E"
          onPress={() => navigation.navigate('Lab2')}
        />

        <AssignmentCard
          title="Lab 3: Form, FlatList & API"
          subtitle="Nhập dữ liệu với TextInput, danh sách FlatList & kết nối API."
          iconName="cloud-download-outline"
          iconColor="#EF4444"
          badgeText="Chưa làm"
          badgeColor="#FEE2E2"
          badgeTextColor="#991B1B"
          onPress={() => navigation.navigate('Lab3')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    marginTop: 2,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#4F46E5',
    fontWeight: '600',
    marginTop: 2,
  },
  avatarContainer: {
    backgroundColor: '#FFFFFF',
    padding: 4,
    borderRadius: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statCount: {
    fontSize: 20,
    fontWeight: '800',
    color: '#4F46E5',
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 11,
    color: '#4B5563',
    fontWeight: '500',
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 8,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  sectionSub: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
});
