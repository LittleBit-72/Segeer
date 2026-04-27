import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Profile from './src/screens/Profile';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Segeer - Profil</Text>
      </View>
      <Profile />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { height: 60, justifyContent: 'center', paddingHorizontal: 20, borderBottomWidth: 0.5, borderBottomColor: '#EEE' },
  headerTitle: { fontSize: 20, fontWeight: 'bold' }
});