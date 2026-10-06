import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Lab3MainScreen({ navigation }) {
  const listBai = [
    {
      route: 'Lab3_Bai1',
      title: 'Bài 1: Bài Đọc - Lập Trình ESP32 (Blink)',
      desc: 'Hướng dẫn điều khiển LED nhấp nháy bằng ngôn ngữ C (Arduino) và Python (MicroPython)',
      badge: 'Bài Đọc Lí Thuyết',
      badgeColor: '#DBEAFE',
      badgeTextColor: '#1D4ED8',
    },
    {
      route: 'Lab3_Bai2',
      title: 'Bài 2: Bài Lab 11 - DHT11 & LED Non-Blocking',
      desc: 'Kết hợp nháy LED và đọc nhiệt độ, độ ẩm (DHT11/22) dùng millis() chạy song song',
      badge: 'Thực Hành Mô Phỏng',
      badgeColor: '#DCFCE7',
      badgeTextColor: '#15803D',
    },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {/* Banner Header */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="hardware-chip-outline" size={36} color="#DC2626" />
          </View>
          <Text style={styles.title}>Lab 3: Lập Trình ESP32 & IoT</Text>
          <Text style={styles.subtitle}>
            Điều khiển phần cứng ESP32, nhấp nháy LED (Blink) với C/Python & Lập trình đa tác vụ millis()
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Danh Sách Màn Hình Bài Học & Thực Hành</Text>

        {listBai.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => navigation.navigate(item.route)}
            activeOpacity={0.7}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.cardHeaderRow}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={[styles.badge, { backgroundColor: item.badgeColor }]}>
                  <Text style={[styles.badgeText, { color: item.badgeTextColor }]}>
                    {item.badge}
                  </Text>
                </View>
              </View>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        ))}

        {/* Tóm Tắt Nội Dung Bài Đọc */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>📌 Tóm Tắt Bài Đọc Lập Trình ESP32:</Text>
          <Text style={styles.summaryText}>
            • <Text style={styles.boldText}>Phần Cứng ESP32:</Text> Vi điều khiển tích hợp Wi-Fi, Bluetooth, các chân GPIO, ADC, PWM, UART/I2C.
          </Text>
          <Text style={styles.summaryText}>
            • <Text style={styles.boldText}>Ngôn ngữ C (Arduino Framework):</Text> Sử dụng hai hàm <Text style={styles.code}>setup()</Text> và <Text style={styles.code}>loop()</Text>, nạp qua Arduino IDE.
          </Text>
          <Text style={styles.summaryText}>
            • <Text style={styles.boldText}>Ngôn ngữ Python (MicroPython):</Text> Nạp firmware MicroPython, sử dụng thư viện <Text style={styles.code}>machine.Pin</Text> và vòng lặp <Text style={styles.code}>while True</Text> qua Thonny IDE.
          </Text>
          <Text style={styles.summaryText}>
            • <Text style={styles.boldText}>Bài Lab 11 Nâng Cao:</Text> Chạy song song nháy LED và đọc cảm biến DHT11/22 với <Text style={styles.code}>millis()</Text> không gây nghẽn chương trình (Non-blocking).
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#F8FAFC' },
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 16, paddingBottom: 40 },

  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: '800', color: '#0F172A', textAlign: 'center' },
  subtitle: { fontSize: 13, color: '#64748B', textAlign: 'center', marginTop: 4, lineHeight: 18 },

  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1E293B', marginBottom: 12 },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#0F172A', flex: 1 },
  badge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, marginLeft: 6 },
  badgeText: { fontSize: 11, fontWeight: '700' },
  cardDesc: { fontSize: 13, color: '#64748B', lineHeight: 18 },

  summaryContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  summaryTitle: { fontSize: 15, fontWeight: '700', color: '#0F172A', marginBottom: 10 },
  summaryText: { fontSize: 13, color: '#334155', marginBottom: 8, lineHeight: 20 },
  boldText: { fontWeight: '700', color: '#0F172A' },
  code: { color: '#0284C7', fontWeight: '600' },
});
