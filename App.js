import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';

// Thư mục Thường kỳ
import ThuongKyMainScreen from './src/thuong_ky/index';
import ThuongKyBai1Screen from './src/thuong_ky/Bai1Screen';

// Thư mục Giữa kỳ
import GiuaKyMainScreen from './src/giua_ky/index';
import ChiTietDoAnScreen from './src/giua_ky/ChiTietDoAnScreen';

// Thư mục Lab 1
import Lab1Screen from './src/lab1/index';

// Thư mục Lab 2
import Lab2MainScreen from './src/lab2/index';
// Thư mục Lab 3
import Lab3MainScreen from './src/lab3/index';
import Lab3Bai1Screen from './src/lab3/Bai1Screen';
import Lab3Bai2Screen from './src/lab3/Bai2Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#FFFFFF' },
          headerTintColor: '#1F2937',
          headerTitleStyle: { fontWeight: '700' },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        {/* Thường kỳ */}
        <Stack.Screen name="ThuongKy" component={ThuongKyMainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ThuongKy_Bai1" component={ThuongKyBai1Screen} options={{ headerShown: false }} />

        {/* Giữa kỳ */}
        <Stack.Screen name="GiuaKy" component={GiuaKyMainScreen} options={{ title: 'Bài Tập Giữa Kỳ' }} />
        <Stack.Screen name="GiuaKy_ChiTiet" component={ChiTietDoAnScreen} options={{ title: 'Chi Tiết Đồ Án' }} />

        {/* Lab 1 */}
        <Stack.Screen name="Lab1" component={Lab1Screen} options={{ title: 'Lab 1 - Cấu Trúc & Component' }} />

        {/* Lab 2 */}
        <Stack.Screen name="Lab2" component={Lab2MainScreen} options={{ title: 'Lab 2 - Tổng Quan' }} />

        {/* Lab 3 */}
        <Stack.Screen name="Lab3" component={Lab3MainScreen} options={{ title: 'Lab 3 - Tổng Quan' }} />
        <Stack.Screen name="Lab3_Bai1" component={Lab3Bai1Screen} options={{ title: 'Lab 3 - Bài 1' }} />
        <Stack.Screen name="Lab3_Bai2" component={Lab3Bai2Screen} options={{ title: 'Lab 3 - Bài 2' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
