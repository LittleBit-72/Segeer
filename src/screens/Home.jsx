// src/screens/Home.jsx
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import UsageStats from '../components/UsageStats';
import AppItem from '../components/AppItem';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <UsageStats />
      <View style={styles.section}>
        <Text style={styles.title}>Analisis Tidur</Text>
        <AppItem name="Deep Sleep" time="4h 12m" percent="35%" color="#4A90E2" />
        <AppItem name="Light Sleep" time="3h 45m" percent="32%" color="#50E3C2" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  section: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 }
});

export default Home;