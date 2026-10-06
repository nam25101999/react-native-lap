import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Lab2MainScreen({ navigation }) {
  // State quản lý sinh viên đang được chọn (Mặc định chọn SV003 như trong hình mẫu)
  const [selectedId, setSelectedId] = useState('SV003');

  // Danh sách sinh viên mẫu
  const students = [
    { id: 'SV002', mssv: 'SV002', ten: 'Lê Văn Cường', lop: 'IT26A', status: 'Tạm nghỉ' },
    { id: 'SV003', mssv: 'SV003', ten: 'Lê Văn Cường', lop: 'IT26B', status: 'Đang học' },
    { id: 'SV004', mssv: 'SV004', ten: 'Trần Thị Mai', lop: 'IT26B', status: 'Đang học' },
  ];

  // Tìm sinh viên đang chọn
  const selectedStudent = students.find((s) => s.id === selectedId);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* ==================================================================== */}
        {/* 1. TOP HEADER (Nút Back + Bài 19 + Subtitle)                         */}
        {/* ==================================================================== */}
        <View style={styles.topHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.goBack?.()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={20} color="#1F2937" />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle}>Bài 19</Text>
            <Text style={styles.headerSubtitle}>Mini Project sinh viên</Text>
          </View>
        </View>

        {/* ==================================================================== */}
        {/* 2. TIÊU ĐỀ MÀN HÌNH                                                  */}
        {/* ==================================================================== */}
        <Text style={styles.mainTitle}>DANH SÁCH SINH VIÊN</Text>

        {/* ==================================================================== */}
        {/* 3. THÔNG BÁO SINH VIÊN ĐANG CHỌN                                    */}
        {/* ==================================================================== */}
        <View style={styles.selectedBanner}>
          <Text style={styles.selectedBannerLabel}>
            Đang chọn:{' '}
            <Text style={styles.selectedBannerValue}>
              {selectedStudent ? selectedStudent.ten : 'Chưa chọn'}
            </Text>
          </Text>
        </View>

        {/* ==================================================================== */}
        {/* 4. DANH SÁCH THẺ SINH VIÊN (Dùng Style Array & Style with Condition)    */}
        {/* ==================================================================== */}
        <View style={styles.listContainer}>
          {students.map((item) => {
            const isSelected = selectedId === item.id;
            const isDotActive = item.status === 'Đang học';

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.85}
                onPress={() => setSelectedId(item.id)}
                /* MẢNG STYLE CÓ ĐIỀU KIỆN (&&): [styleGoc, isSelected && styleKhiChon] */
                style={[
                  styles.card,
                  isSelected && styles.cardSelected,
                ]}
              >
                {/* Tên sinh viên (Hiển thị khi được chọn theo mẫu) */}
                {isSelected && (
                  <Text style={[styles.studentName, styles.studentNameSelected]}>
                    {item.ten}
                  </Text>
                )}

                {/* Mã số sinh viên & Lớp */}
                <Text style={styles.cardDetailText}>MSSV: {item.mssv}</Text>
                <Text style={styles.cardDetailText}>Lớp: {item.lop}</Text>

                {/* Trạng thái sinh viên: MẢNG STYLE CÓ ĐIỀU KIỆN 3 NGÔI (? :) */}
                <View style={styles.statusContainer}>
                  <Text
                    style={[
                      styles.statusDot,
                      isDotActive ? styles.dotActive : styles.dotInactive,
                    ]}
                  >
                    •
                  </Text>
                  <Text
                    style={[
                      styles.statusText,
                      isDotActive ? styles.textActive : styles.textInactive,
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>

                {/* Dòng chữ "Đã chọn sinh viên" khi thẻ được chọn (Style có điều kiện &&) */}
                {isSelected && (
                  <Text style={styles.selectedFooterText}>
                    Đã chọn sinh viên
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ============================================================================
// STYLESHEET CHI TIẾT THEO CHUẨN HÌNH ẢNH MẪU
// ============================================================================
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },

  // --- Top Header ---
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 1,
  },

  // --- Main Title ---
  mainTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 0.5,
    marginBottom: 16,
  },

  // --- Selected Student Banner ---
  selectedBanner: {
    marginBottom: 16,
  },
  selectedBannerLabel: {
    fontSize: 15,
    color: '#1E293B',
    fontWeight: '500',
  },
  selectedBannerValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1D4ED8',
  },

  // --- Student List & Cards ---
  listContainer: {
    marginBottom: 24,
  },
  // Style mặc định của Thẻ Sinh Viên
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 1,
  },
  // Style khi Thẻ Sinh Viên ĐƯỢC CHỌN (Ghi đè bằng Mảng Style)
  cardSelected: {
    borderColor: '#1D4ED8',
    borderWidth: 1.5,
    backgroundColor: '#EFF6FF', // Nền xanh nhạt như trong hình mẫu
  },

  // Tên sinh viên
  studentName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 6,
  },
  studentNameSelected: {
    color: '#1D4ED8',
  },

  // Chi tiết MSSV & Lớp
  cardDetailText: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
    fontWeight: '500',
  },

  // Dòng trạng thái (Dot + Text)
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statusDot: {
    fontSize: 18,
    marginRight: 6,
    lineHeight: 20,
  },
  dotActive: {
    color: '#16A34A', // Xanh lục cho "Đang học"
  },
  dotInactive: {
    color: '#6B7280', // Xám cho "Tạm nghỉ"
  },
  statusText: {
    fontSize: 14,
    fontWeight: '700',
  },
  textActive: {
    color: '#16A34A',
  },
  textInactive: {
    color: '#6B7280',
  },

  // Footer text "Đã chọn sinh viên"
  selectedFooterText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1D4ED8',
    marginTop: 12,
  },
});
