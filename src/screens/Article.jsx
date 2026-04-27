// src/screens/Article.jsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const Article = () => {
  const tips = [
    { id: '1', title: 'Cara Tidur Nyenyak', desc: 'Tips meningkatkan kualitas tidur malam...' },
    { id: '2', title: 'Bahaya Begadang', desc: 'Dampak buruk kurang tidur bagi tubuh...' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tips Segeer</Text>
      <FlatList
        data={tips}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imgPlaceholder} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { flexDirection: 'row', backgroundColor: '#F8F9FA', borderRadius: 12, padding: 15, marginBottom: 15 },
  imgPlaceholder: { width: 70, height: 70, borderRadius: 10, backgroundColor: '#DDD' },
  cardContent: { marginLeft: 15, justifyContent: 'center' },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardDesc: { fontSize: 12, color: '#666' }
});

export default Article;