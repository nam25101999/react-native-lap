import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ChiTietDoAnScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi Tiết Đồ Án Giữa Kỳ</Text>
      <Text style={styles.subtitle}>Bạn có thể viết mã nguồn giao diện đồ án tại src/giua_ky/ChiTietDoAnScreen.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9FAFB', padding: 20 },
  title: { fontSize: 20, fontWeight: '700', color: '#1F2937', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center' },
});
