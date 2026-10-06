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

export default function Lab3Bai2Screen({ navigation }) {
  // Trạng thái mô phỏng Cảm biến DHT11 và Đèn LED Non-Blocking
  const [temperature, setTemperature] = useState(26.5);
  const [humidity, setHumidity] = useState(65.0);
  const [ledState, setLedState] = useState(false);
  const [logMessages, setLogMessages] = useState([
    'Serial Monitor initialized at 115200 baud...',
    'DHT11 sensor initialized on GPIO4',
  ]);

  // Kiểm tra nếu nhiệt độ > 30°C thì nháy LED cảnh báo nhanh (100ms)
  const isHighTemp = temperature > 30.0;
  const ledInterval = isHighTemp ? 100 : 500;

  // 1. Loop mô phỏng nháy LED bằng millis() (Non-blocking)
  useEffect(() => {
    const ledTimer = setInterval(() => {
      setLedState((prev) => !prev);
    }, ledInterval);
    return () => clearInterval(ledTimer);
  }, [ledInterval]);

  // 2. Loop mô phỏng đọc cảm biến DHT11 mỗi 2 giây (2000ms)
  useEffect(() => {
    const dhtTimer = setInterval(() => {
      // Đọc ngẫu nhiên biến động nhẹ nhiệt độ & độ ẩm
      const newTemp = +(temperature + (Math.random() * 0.4 - 0.2)).toFixed(1);
      const newHum = +(humidity + (Math.random() * 1.0 - 0.5)).toFixed(1);
      setTemperature(newTemp);
      setHumidity(newHum);

      // Thêm log vào Serial Monitor ảo
      const logLine = `Nhiệt độ: ${newTemp} °C   |   Độ ẩm: ${newHum} %`;
      setLogMessages((prev) => [logLine, ...prev.slice(0, 4)]);
    }, 2000);

    return () => clearInterval(dhtTimer);
  }, [temperature, humidity]);

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
              <Text style={styles.tagText}>Bài Lab 11 - Thực Hành IoT</Text>
            </View>
            <Text style={styles.headerTitle}>ESP32 + DHT11 & LED Non-Blocking</Text>
          </View>
        </View>

        {/* ==================================================================== */}
        {/* 2. MÔ PHỎNG SERIAL MONITOR & CẢM BIẾN THEO THỜI GIAN THỰC            */}
        {/* ==================================================================== */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📊 Mô Phỏng Cảm Biến DHT11 (GPIO4) & LED (GPIO2)</Text>

          {/* Hàng chỉ số Nhiệt Độ & Độ Ẩm */}
          <View style={styles.statsRow}>
            {/* Nhiệt độ */}
            <View style={[styles.statBox, isHighTemp && styles.statBoxWarning]}>
              <Ionicons
                name="thermometer-outline"
                size={28}
                color={isHighTemp ? '#EF4444' : '#2563EB'}
              />
              <Text style={styles.statLabel}>Nhiệt Độ</Text>
              <Text
                style={[
                  styles.statValue,
                  { color: isHighTemp ? '#EF4444' : '#2563EB' },
                ]}
              >
                {temperature} °C
              </Text>
              {isHighTemp && (
                <Text style={styles.warningTag}>⚠️ Quá nhiệt (&gt;30°C)</Text>
              )}
            </View>

            {/* Độ ẩm */}
            <View style={styles.statBox}>
              <Ionicons name="water-outline" size={28} color="#10B981" />
              <Text style={styles.statLabel}>Độ Ẩm</Text>
              <Text style={[styles.statValue, { color: '#10B981' }]}>
                {humidity} %
              </Text>
            </View>
          </View>

          {/* Đèn LED nhấp nháy song song */}
          <View style={styles.ledStatusRow}>
            <View
              style={[
                styles.ledDot,
                ledState ? styles.ledDotOn : styles.ledDotOff,
              ]}
            />
            <Text style={styles.ledStatusLabel}>
              LED GPIO2:{' '}
              <Text style={{ fontWeight: '800' }}>
                {ledState ? 'HIGH (SÁNG)' : 'LOW (TẮT)'}
              </Text>{' '}
              ({ledInterval}ms / nháy)
            </Text>
          </View>

          {/* Nút bấm giả lập tăng/giảm nhiệt độ */}
          <View style={styles.simBtnRow}>
            <TouchableOpacity
              style={styles.simBtn}
              onPress={() => setTemperature(26.5)}
            >
              <Text style={styles.simBtnText}>Giả lập Bình Thường (26.5°C)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.simBtn, styles.simBtnWarning]}
              onPress={() => setTemperature(34.0)}
            >
              <Text style={[styles.simBtnText, { color: '#FFFFFF' }]}>
                Giả lập Quá Nhiệt (34.0°C)
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ==================================================================== */}
        {/* 3. SERIAL MONITOR SIMULATOR LOGS                                     */}
        {/* ==================================================================== */}
        <View style={styles.card}>
          <View style={styles.consoleHeader}>
            <Ionicons name="terminal-outline" size={18} color="#38BDF8" />
            <Text style={styles.consoleTitle}>Serial Monitor (Baud 115200)</Text>
          </View>
          <View style={styles.consoleBox}>
            {logMessages.map((msg, idx) => (
              <Text key={idx} style={styles.consoleText}>
                &gt; {msg}
              </Text>
            ))}
          </View>
        </View>

        {/* ==================================================================== */}
        {/* 4. MÃ NGUỒN C CƠ BẢN DÙNG MILLIS() NON-BLOCKING                       */}
        {/* ==================================================================== */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>💻 Mã Nguồn C Arduino (Non-Blocking millis)</Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeLine}>
              <Text style={styles.codeKeyword}>#include</Text> &lt;DHT.h&gt;
            </Text>
            <Text style={styles.codeLine}>
              <Text style={styles.codeKeyword}>#define</Text> DHTPIN 4
            </Text>
            <Text style={styles.codeLine}>
              <Text style={styles.codeKeyword}>#define</Text> DHTTYPE DHT11
            </Text>
            <Text style={styles.codeLine}>
              DHT <Text style={styles.codeFunc}>dht</Text>(DHTPIN, DHTTYPE);
            </Text>
            <Text style={styles.codeLine}>const int LED_PIN = 2;</Text>
            <Text style={styles.codeLine} />
            <Text style={styles.codeLine}>
              <Text style={styles.codeKeyword}>void</Text> <Text style={styles.codeFunc}>loop</Text>() &#123;
            </Text>
            <Text style={styles.codeLine}>
              {'  '}unsigned long current = millis();
            </Text>
            <Text style={styles.codeLine}>
              {'  '}<Text style={styles.codeComment}>// Nháy LED không dùng delay()</Text>
            </Text>
            <Text style={styles.codeLine}>
              {'  '}if (current - ledPrev &gt;= 500) &#123;
            </Text>
            <Text style={styles.codeLine}>
              {'    '}ledState = !ledState;
            </Text>
            <Text style={styles.codeLine}>
              {'    '}digitalWrite(LED_PIN, ledState);
            </Text>
            <Text style={styles.codeLine}>{'  '}&#125;</Text>
            <Text style={styles.codeLine}>&#125;</Text>
          </View>
        </View>
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
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 2,
  },
  tagText: { fontSize: 11, fontWeight: '700', color: '#15803D' },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#1F2937' },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#0F172A', marginBottom: 14 },

  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 14 },
  statBox: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statBoxWarning: { backgroundColor: '#FEF2F2', borderColor: '#FCA5A5' },
  statLabel: { fontSize: 12, color: '#64748B', marginTop: 4, fontWeight: '600' },
  statValue: { fontSize: 20, fontWeight: '800', marginTop: 2 },
  warningTag: { fontSize: 10, fontWeight: '700', color: '#DC2626', marginTop: 4 },

  ledStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 14,
  },
  ledDot: { width: 14, height: 14, borderRadius: 7, marginRight: 10 },
  ledDotOn: { backgroundColor: '#F59E0B' },
  ledDotOff: { backgroundColor: '#9CA3AF' },
  ledStatusLabel: { fontSize: 13, color: '#1E293B' },

  simBtnRow: { flexDirection: 'row', gap: 8 },
  simBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
  },
  simBtnWarning: { backgroundColor: '#EF4444' },
  simBtnText: { fontSize: 12, fontWeight: '700', color: '#334155' },

  consoleHeader: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
  consoleTitle: { fontSize: 14, fontWeight: '700', color: '#0F172A' },
  consoleBox: {
    backgroundColor: '#0F172A',
    borderRadius: 10,
    padding: 12,
    minHeight: 90,
  },
  consoleText: { fontSize: 12, color: '#38BDF8', fontFamily: 'Platform', marginBottom: 4 },

  codeBlock: { backgroundColor: '#0F172A', borderRadius: 10, padding: 14 },
  codeLine: { fontSize: 12, color: '#E2E8F0', fontFamily: 'Platform' },
  codeKeyword: { color: '#F43F5E', fontWeight: '700' },
  codeFunc: { color: '#38BDF8', fontWeight: '700' },
  codeComment: { color: '#64748B', italic: true },
});
