import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Menerima props 'name', 'time', 'percent', dan 'color'
const AppItem = ({ name, time, percent, color }) => {
  return (
    <View style={styles.row}>
      <View style={styles.appIcon} /> 
      <View style={styles.infoContainer}>
        <View style={styles.textRow}>
          <Text style={styles.appName}>{name}</Text>
          <Text style={styles.appTime}>{time}</Text>
        </View>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: percent, backgroundColor: color }]} />
        </View>
        <Text style={styles.percentText}>{percent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginBottom: 20, alignItems: 'center' },
  appIcon: { width: 50, height: 50, borderRadius: 12, backgroundColor: '#EEE', marginRight: 15 },
  infoContainer: { flex: 1 },
  textRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  appName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  appTime: { fontSize: 14, color: '#666' },
  progressBg: { height: 8, backgroundColor: '#F0F0F0', borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },
  percentText: { textAlign: 'right', fontSize: 10, color: '#999', marginTop: 2 }
});

export default AppItem;