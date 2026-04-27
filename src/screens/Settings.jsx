import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <ArrowLeft color="#000" size={24} />
        <Text style={styles.backText}> Kembali</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Pengaturan Akun</Text>
      <View style={styles.option}>
        <Text>Notifikasi Tidur</Text>
      </View>
      <View style={styles.option}>
        <Text>Tema Aplikasi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20 },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backText: { fontSize: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  option: { padding: 15, borderBottomWidth: 0.5, borderBottomColor: '#EEE' }
});

export default Settings;