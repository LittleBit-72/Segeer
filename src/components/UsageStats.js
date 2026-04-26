import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, fontType } from '../../assets/theme';
import { LayoutDashboard, TrendingUp } from 'lucide-react-native';

const UsageStats = () => {
  // Data dummy untuk simulasi grafik batang di gambar
  const data = [34, 29, 59, 38, 45, 22, 57, 48, 30, 26, 37, 19, 29, 27, 35, 62, 5, 42];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconRow}>
            <LayoutDashboard size={20} color={colors.white()} />
            <TrendingUp size={20} color={colors.white()} />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chartContainer}>
        {data.map((val, index) => (
          <View key={index} style={styles.barWrapper}>
            <Text style={styles.barLabel}>{val}m</Text>
            <View style={[styles.bar, { height: val * 1.5 }]} />
            <Text style={styles.barIndex}>{index}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.totalLabel}>Total Usage</Text>
          <Text style={styles.totalValue}>11h 49m 12s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2D2D3A', // Warna gelap seperti di gambar
    margin: 20,
    borderRadius: 20,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    backgroundColor: '#4A4A5A',
    borderRadius: 8,
    padding: 5,
    gap: 10,
  },
  chartContainer: {
    flexDirection: 'row',
    height: 150,
  },
  barWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 4,
  },
  bar: {
    width: 12,
    backgroundColor: '#B2A4FF', // Warna ungu seperti di gambar
    borderRadius: 3,
  },
  barLabel: {
    color: '#FFF',
    fontSize: 8,
    marginBottom: 4,
  },
  barIndex: {
    color: '#888',
    fontSize: 10,
    marginTop: 5,
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 0.5,
    borderTopColor: '#444',
    paddingTop: 10,
    alignItems: 'center',
  },
  totalLabel: {
    color: '#AAA',
    fontSize: 12,
    textAlign: 'center',
  },
  totalValue: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default UsageStats;