import React, { useEffect, useRef } from 'react';
// Import Animated dari react-native
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import UsageStats from '../components/UsageStats';
import AppItem from '../components/AppItem';

const Home = () => {
  const navigation = useNavigation();

  // Inisialisasi nilai awal animasi (Bab 6)
  const fadeAnim = useRef(new Animated.Value(0)).current; // Opacity mulai dari 0 (tidak terlihat)
  const slideAnim = useRef(new Animated.Value(30)).current; // Posisi mulai dari bawah (30px)

  useEffect(() => {
    // Menjalankan animasi secara bersamaan (Parallel) saat komponen dimuat
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1, // Berubah menjadi sepenuhnya terlihat (transparansi 1)
        duration: 1000, // Durasi 1 detik (1000ms)
        useNativeDriver: true, // Menggunakan native driver untuk performa optimal
      }),
      Animated.timing(slideAnim, {
        toValue: 0, // Bergeser kembali ke posisi semula (0px)
        duration: 800, // Durasi 0.8 detik
        useNativeDriver: true,
      }),
    ]).start(); // Memulai animasi
  }, [fadeAnim, slideAnim]);

  return (
    <ScrollView style={styles.container}>
      {/* Bungkus bagian yang ingin dianimasikan dengan Animated.View */}
      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
        {/* Komponen Statistik */}
        <UsageStats />

        <View style={styles.section}>
          <Text style={styles.title}>Analisis Tidur</Text>
          
          {/* Daftar Komponen Fase Tidur */}
          <AppItem name="Deep Sleep" time="4h 12m" percent="35%" color="#4A90E2" />
          <AppItem name="Light Sleep" time="3h 45m" percent="32%" color="#50E3C2" />

          {/* Tombol Navigasi */}
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.navigate('Tips')}
          >
            <Text style={styles.navButtonText}>Lihat Tips Tidur Lengkap →</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  section: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  navButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F0F2F5',
    borderRadius: 10,
    alignItems: 'center',
  },
  navButtonText: { color: '#2D2D3A', fontWeight: '600' }
});

export default Home;