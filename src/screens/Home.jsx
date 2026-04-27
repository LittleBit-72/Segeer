import React from 'react';
// Gabungkan semua import dari react-native dalam satu baris agar tidak error
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import komponen pendukung yang sudah dibuat di Bab sebelumnya
import UsageStats from '../components/UsageStats';
import AppItem from '../components/AppItem';

const Home = () => {
  // Inisialisasi hook navigation untuk berpindah halaman [cite: 883, 891]
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Komponen Statistik dari Bab 2 */}
      <UsageStats />

      <View style={styles.section}>
        <Text style={styles.title}>Analisis Tidur</Text>
        
        {/* Contoh Data Fase Tidur (Props & State dari Bab 3) */}
        <AppItem name="Deep Sleep" time="4h 12m" percent="35%" color="#4A90E2" />
        <AppItem name="Light Sleep" time="3h 45m" percent="32%" color="#50E3C2" />

        {/* Tombol Navigasi ke Halaman Tips (Article) [cite: 855, 893] */}
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Tips')}
        >
          <Text style={styles.navButtonText}>Lihat Tips Tidur Lengkap →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  section: { 
    padding: 20 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 15 
  },
  navButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F0F2F5',
    borderRadius: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#2D2D3A',
    fontWeight: '600',
  }
});

export default Home;