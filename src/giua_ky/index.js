import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GiuaKyMainScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Ionicons name="trophy-outline" size={36} color="#8B5CF6" />
        <Text style={styles.title}>Thư Mục Bài Tập Giữa Kỳ</Text>
        <Text style={styles.subtitle}>Nơi lưu trữ các màn hình báo cáo đồ án giữa kỳ</Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('GiuaKy_ChiTiet')}
        activeOpacity={0.7}
      >
        <Ionicons name="journal-outline" size={24} color="#8B5CF6" style={{ marginRight: 12 }} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>Chi Tiết Đồ Án Giữa Kỳ</Text>
          <Text style={styles.cardDesc}>Xem mô tả đề tài, danh sách màn hình và yêu cầu</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  content: { padding: 20 },
  header: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 16, alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 20, fontWeight: '700', color: '#1F2937', marginTop: 8 },
  subtitle: { fontSize: 13, color: '#6B7280', textAlign: 'center', marginTop: 4 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  cardTitle: { fontSize: 15, fontWeight: '600', color: '#1F2937' },
  cardDesc: { fontSize: 13, color: '#6B7280', marginTop: 2 },
});
