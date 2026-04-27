import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// Import hook navigasi dari Bab 5 [cite: 1133]
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  // Inisialisasi hook navigasi agar tombol dapat berfungsi [cite: 1134]
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Layout Header Profil dari Bab 4 [cite: 1069] */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar} />
        <Text style={styles.name}>User Segeer</Text>
        <Text style={styles.email}>user@segeer.com</Text>
      </View>
      
      {/* Layout Statistik dari Bab 4 [cite: 1069] */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statVal}>28</Text>
          <Text style={styles.statLabel}>Hari Sehat</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statVal}>8h</Text>
          <Text style={styles.statLabel}>Rata-rata</Text>
        </View>
      </View>

      {/* Tombol navigasi menggunakan logika Stack Navigation Bab 5 [cite: 1135] */}
      <TouchableOpacity 
        style={styles.btnEdit}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.btnText}>Buka Pengaturan</Text>
      </TouchableOpacity>
    </View>
  );
};

// Mengembalikan pengaturan Flexbox sesuai analisis Bab 4 [cite: 1082, 1084]
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF', 
    alignItems: 'center', 
    padding: 40 
  },
  profileHeader: { 
    alignItems: 'center', 
    marginBottom: 30 
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    backgroundColor: '#EEE', 
    marginBottom: 15 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold' 
  },
  email: { 
    color: '#888' 
  },
  statsRow: { 
    flexDirection: 'row', 
    gap: 40, 
    marginVertical: 20 
  },
  statItem: { 
    alignItems: 'center' 
  },
  statVal: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  statLabel: { 
    fontSize: 12, 
    color: '#666' 
  },
  btnEdit: { 
    backgroundColor: '#2D2D3A', 
    paddingHorizontal: 30, 
    paddingVertical: 12, 
    borderRadius: 25 
  },
  btnText: { 
    color: '#FFF', 
    fontWeight: 'bold' 
  }
});

export default Profile;