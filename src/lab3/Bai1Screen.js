import React, { useState, useEffect } from 'react';
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

export default function Lab3Bai1Screen({ navigation }) {
  // Tab ngôn ngữ được chọn cho phần code (C hoặc Python)
  const [codeLanguage, setCodeLanguage] = useState('c'); // 'c' hoặc 'python'

  // Trạng thái mô phỏng LED Blink trên ứng dụng
  const [isLedOn, setIsLedOn] = useState(false);
  const [blinkSpeed, setBlinkSpeed] = useState(1000); // 1000ms hoặc 200ms
  const [isBlinking, setIsBlinking] = useState(true);

  // Effect mô phỏng LED nhấp nháy
  useEffect(() => {
    let interval = null;
    if (isBlinking) {
      interval = setInterval(() => {
        setIsLedOn((prev) => !prev);
      }, blinkSpeed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBlinking, blinkSpeed]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* ==================================================================== */}
        {/* 1. TOP HEADER                                                        */}
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
            <View style={styles.tagBadge}>
              <Text style={styles.tagText}>IoT & Embedded Systems</Text>
            </View>
            <Text style={styles.headerTitle}>Bài Đọc: Lập Trình ESP32</Text>
          </View>
        </View>

        {/* ==================================================================== */}
        {/* 2. MAIN TITLE BANNER                                                 */}
        {/* ==================================================================== */}
        <View style={styles.bannerCard}>
          <Ionicons name="hardware-chip-outline" size={40} color="#2563EB" />
          <Text style={styles.bannerTitle}>ĐIỀU KHIỂN LED NHẤP NHÁY (BLINK)</Text>
          <Text style={styles.bannerSubtitle}>
            Minh họa bằng ngôn ngữ C (Arduino Framework) & Python (MicroPython)
          </Text>
        </View>

        {/* ==================================================================== */}
        {/* 3. MÔ PHỎNG LED BLINK TƯƠNG TÁC (INTERACTIVE DEMO)                   */}
        {/* ==================================================================== */}
        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>💡 Mô Phỏng Đèn LED ESP32 (GPIO2)</Text>
          
          <View style={styles.ledDisplayRow}>
            {/* Đèn LED ảo */}
            <View
              style={[
                styles.ledCircle,
                isLedOn ? styles.ledCircleOn : styles.ledCircleOff,
              ]}
            >
              <Ionicons
                name="bulb"
                size={36}
                color={isLedOn ? '#F59E0B' : '#9CA3AF'}
              />
            </View>

            <View style={styles.ledInfoCol}>
              <Text style={styles.ledStatusText}>
                Trạng thái: <Text style={{ color: isLedOn ? '#D97706' : '#6B7280', fontWeight: '800' }}>{isLedOn ? 'HIGH (SÁNG)' : 'LOW (TẮT)'}</Text>
              </Text>
              <Text style={styles.ledSubText}>Tốc độ nhấp nháy: {blinkSpeed}ms</Text>
            </View>
          </View>

          {/* Điều khiển tốc độ mô phỏng */}
          <View style={styles.btnRow}>
            <TouchableOpacity
              style={[
                styles.speedBtn,
                blinkSpeed === 1000 && styles.speedBtnActive,
              ]}
              onPress={() => setBlinkSpeed(1000)}
            >
              <Text
                style={[
                  styles.speedBtnText,
                  blinkSpeed === 1000 && styles.speedBtnTextActive,
                ]}
              >
                1000ms (Chuẩn)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.speedBtn,
                blinkSpeed === 200 && styles.speedBtnActive,
              ]}
              onPress={() => setBlinkSpeed(200)}
            >
              <Text
                style={[
                  styles.speedBtnText,
                  blinkSpeed === 200 && styles.speedBtnTextActive,
                ]}
              >
                200ms (Nhanh)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.speedBtn,
                !isBlinking && styles.speedBtnStop,
              ]}
              onPress={() => setIsBlinking(!isBlinking)}
            >
              <Text style={styles.speedBtnText}>
                {isBlinking ? 'Tạm dừng' : 'Bắt đầu'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ==================================================================== */}
        {/* 4. NỘI DUNG BÀI ĐỌC DETAILED                                        */}
        {/* ==================================================================== */}

        {/* --- DÒNG 1: GIỚI THIỆU --- */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>1. Giới thiệu</Text>
          <Text style={styles.bodyText}>
            ESP32 là vi điều khiển tích hợp Wi-Fi và Bluetooth từ Espressif Systems. Bài toán điều khiển đèn LED nhấp nháy (Blink) là chương trình "Hello World" nhập môn cho phần cứng IoT.
          </Text>
        </View>

        {/* --- DÒNG 2: SƠ LƯỢC CÁC CHÂN GPIO --- */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>2. Sơ lược về các chân (Pin) ESP32</Text>
          
          <View style={styles.pinRow}>
            <Text style={styles.pinCategory}>Nguồn:</Text>
            <Text style={styles.pinDesc}>3V3, 5V/VIN, GND (đất)</Text>
          </View>
          <View style={styles.pinRow}>
            <Text style={styles.pinCategory}>Digital I/O:</Text>
            <Text style={styles.pinDesc}>GPIO2, GPIO4, GPIO5, GPIO12-19, GPIO21-23...</Text>
          </View>
          <View style={styles.pinRow}>
            <Text style={styles.pinCategory}>Input-only:</Text>
            <Text style={styles.pinDesc}>GPIO34, GPIO35, GPIO36, GPIO39 (Chỉ đọc)</Text>
          </View>
          <View style={styles.pinRow}>
            <Text style={styles.pinCategory}>Built-in LED:</Text>
            <Text style={styles.pinDesc}>Nối sẵn với chân GPIO2 trên đa số DevKit</Text>
          </View>
        </View>

        {/* --- DÒNG 3 & 4: MÃ NGUỒN C SƠ BỘ & MICROPYTHON --- */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>3. Code Minh Họa (C & MicroPython)</Text>

          {/* Tab Selector C vs Python */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tabBtn, codeLanguage === 'c' && styles.tabBtnActive]}
              onPress={() => setCodeLanguage('c')}
            >
              <Ionicons name="code-slash" size={16} color={codeLanguage === 'c' ? '#FFFFFF' : '#4B5563'} />
              <Text style={[styles.tabText, codeLanguage === 'c' && styles.tabTextActive]}>
                C (Arduino Framework)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tabBtn, codeLanguage === 'python' && styles.tabBtnActive]}
              onPress={() => setCodeLanguage('python')}
            >
              <Ionicons name="logo-python" size={16} color={codeLanguage === 'python' ? '#FFFFFF' : '#4B5563'} />
              <Text style={[styles.tabText, codeLanguage === 'python' && styles.tabTextActive]}>
                Python (MicroPython)
              </Text>
            </TouchableOpacity>
          </View>

          {/* Hiển thị Code block tương ứng */}
          {codeLanguage === 'c' ? (
            <View style={styles.codeBlock}>
              <Text style={styles.codeLine}>
                <Text style={styles.codeKeyword}>#define</Text> LED_PIN 2
              </Text>
              <Text style={styles.codeLine} />
              <Text style={styles.codeLine}>
                <Text style={styles.codeKeyword}>void</Text> <Text style={styles.codeFunc}>setup</Text>() &#123;
              </Text>
              <Text style={styles.codeLine}>
                {'  '}<Text style={styles.codeFunc}>pinMode</Text>(LED_PIN, OUTPUT);
              </Text>
              <Text style={styles.codeLine}>&#125;</Text>
              <Text style={styles.codeLine} />
              <Text style={styles.codeLine}>
                <Text style={styles.codeKeyword}>void</Text> <Text style={styles.codeFunc}>loop</Text>() &#123;
              </Text>
              <Text style={styles.codeLine}>
                {'  '}<Text style={styles.codeFunc}>digitalWrite</Text>(LED_PIN, HIGH);
              </Text>
              <Text style={styles.codeLine}>
                {'  '}<Text style={styles.codeFunc}>delay</Text>(1000);
              </Text>
              <Text style={styles.codeLine}>
                {'  '}<Text style={styles.codeFunc}>digitalWrite</Text>(LED_PIN, LOW);
              </Text>
              <Text style={styles.codeLine}>
                {'  '}<Text style={styles.codeFunc}>delay</Text>(1000);
              </Text>
              <Text style={styles.codeLine}>&#125;</Text>
            </View>
          ) : (
            <View style={styles.codeBlock}>
              <Text style={styles.codeLine}>
                <Text style={styles.codeKeyword}>from</Text> machine <Text style={styles.codeKeyword}>import</Text> Pin
              </Text>
              <Text style={styles.codeLine}>
                <Text style={styles.codeKeyword}>import</Text> time
              </Text>
              <Text style={styles.codeLine} />
              <Text style={styles.codeLine}>LED_PIN = 2</Text>
              <Text style={styles.codeLine}>
                led = <Text style={styles.codeFunc}>Pin</Text>(LED_PIN, Pin.OUT)
              </Text>
              <Text style={styles.codeLine} />
              <Text style={styles.codeLine}>
                <Text style={styles.codeKeyword}>while</Text> <Text style={styles.codeFunc}>True</Text>:
              </Text>
              <Text style={styles.codeLine}>
                {'  '}led.<Text style={styles.codeFunc}>value</Text>(1)
              </Text>
              <Text style={styles.codeLine}>
                {'  '}time.<Text style={styles.codeFunc}>sleep</Text>(1)
              </Text>
              <Text style={styles.codeLine}>
                {'  '}led.<Text style={styles.codeFunc}>value</Text>(0)
              </Text>
              <Text style={styles.codeLine}>
                {'  '}time.<Text style={styles.codeFunc}>sleep</Text>(1)
              </Text>
            </View>
          )}
        </View>

        {/* --- DÒNG 5: SO SÁNH HAI CÁCH TIẾP CẬN --- */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>4. So Sánh C (Arduino) vs Python (MicroPython)</Text>

          <View style={styles.compareRow}>
            <Text style={styles.compareLabel}>Cấu trúc:</Text>
            <Text style={styles.compareValue}>C: setup() & loop() | Python: vòng lặp while True</Text>
          </View>
          <View style={styles.compareRow}>
            <Text style={styles.compareLabel}>Thực thi:</Text>
            <Text style={styles.compareValue}>C: Biên dịch nhị phân | Python: Thông dịch trực tiếp</Text>
          </View>
          <View style={styles.compareRow}>
            <Text style={styles.compareLabel}>Thời gian:</Text>
            <Text style={styles.compareValue}>C: delay(1000) (ms) | Python: time.sleep(1) (giây)</Text>
          </View>
        </View>

        {/* --- NÚT CHUYỂN SANG BÀI LAB THỰC HÀNH --- */}
        <TouchableOpacity
          style={styles.nextLabBtn}
          onPress={() => navigation.navigate('Lab3_Bai2')}
          activeOpacity={0.8}
        >
          <Text style={styles.nextLabBtnText}>Xem Màn Hình Bài Lab 11 (DHT11 + LED)</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC' },
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  contentContainer: { padding: 16, paddingBottom: 40 },

  topHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  tagBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 2,
  },
  tagText: { fontSize: 11, fontWeight: '700', color: '#1D4ED8' },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#1F2937' },

  bannerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  bannerTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A', marginTop: 10, textAlign: 'center' },
  bannerSubtitle: { fontSize: 13, color: '#64748B', textAlign: 'center', marginTop: 4 },

  demoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  demoTitle: { fontSize: 15, fontWeight: '700', color: '#1E293B', marginBottom: 12 },
  ledDisplayRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  ledCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 2,
  },
  ledCircleOn: { backgroundColor: '#FEF3C7', borderColor: '#F59E0B' },
  ledCircleOff: { backgroundColor: '#F3F4F6', borderColor: '#D1D5DB' },
  ledInfoCol: { flex: 1 },
  ledStatusText: { fontSize: 15, color: '#1F2937' },
  ledSubText: { fontSize: 13, color: '#6B7280', marginTop: 2 },

  btnRow: { flexDirection: 'row', gap: 8 },
  speedBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
  },
  speedBtnActive: { backgroundColor: '#2563EB' },
  speedBtnStop: { backgroundColor: '#EF4444' },
  speedBtnText: { fontSize: 12, fontWeight: '700', color: '#475569' },
  speedBtnTextActive: { color: '#FFFFFF' },

  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionHeader: { fontSize: 16, fontWeight: '700', color: '#0F172A', marginBottom: 8 },
  bodyText: { fontSize: 14, color: '#334155', lineHeight: 22 },

  pinRow: { flexDirection: 'row', marginBottom: 6 },
  pinCategory: { width: 100, fontSize: 13, fontWeight: '700', color: '#2563EB' },
  pinDesc: { flex: 1, fontSize: 13, color: '#334155' },

  tabContainer: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  tabBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
  },
  tabBtnActive: { backgroundColor: '#1E293B' },
  tabText: { fontSize: 13, fontWeight: '600', color: '#4B5563' },
  tabTextActive: { color: '#FFFFFF' },

  codeBlock: {
    backgroundColor: '#0F172A',
    borderRadius: 10,
    padding: 14,
  },
  codeLine: { fontSize: 13, color: '#E2E8F0', fontFamily: 'Platform' },
  codeKeyword: { color: '#F43F5E', fontWeight: '700' },
  codeFunc: { color: '#38BDF8', fontWeight: '700' },

  compareRow: { marginBottom: 8 },
  compareLabel: { fontSize: 13, fontWeight: '700', color: '#0F172A' },
  compareValue: { fontSize: 13, color: '#475569', marginTop: 1 },

  nextLabBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 12,
    marginTop: 8,
    gap: 8,
  },
  nextLabBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
});
