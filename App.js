import React, { useState } from 'react'; 
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UsageStats from './src/components/UsageStats';
import AppItem from './src/components/AppItem';

export default function App() {
  // 1. Inisialisasi State untuk menyimpan data monitoring Segeer
  const [sleepData, setSleepData] = useState([
    { id: 1, title: 'Deep Sleep', duration: '4h 12m', ratio: '35%', theme: '#4A90E2' },
    { id: 2, title: 'Light Sleep', duration: '3h 45m', ratio: '32%', theme: '#50E3C2' },
    { id: 3, title: 'REM Sleep', duration: '1h 52m', ratio: '16%', theme: '#B2A4FF' },
    { id: 4, title: 'Awake', duration: '0h 40m', ratio: '6%', theme: '#FF8A8A' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Segeer Monitoring</Text>
      </View>

      <ScrollView>
        <UsageStats />
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Analisis Fase Tidur</Text>
        </View>

        <View style={styles.listContainer}>
          {/* 2. Mengirimkan data State ke Komponen Anak melalui Props */}
          {sleepData.map((item) => (
            <AppItem 
              key={item.id}
              name={item.title}
              time={item.duration}
              percent={item.ratio}
              color={item.theme}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { height: 60, justifyContent: 'center', paddingHorizontal: 20, borderBottomWidth: 0.5, borderBottomColor: '#EEE' },
  headerTitle: { fontSize: 22, fontWeight: '800', color: '#000' },
  sectionHeader: { paddingHorizontal: 20, marginVertical: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  listContainer: { paddingHorizontal: 20 }
});