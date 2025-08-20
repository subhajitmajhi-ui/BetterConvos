import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import MainContainer from '../components/MainContainer';

const dummyResults = [
  { id: '1', name: 'Jen' },
  { id: '2', name: 'Toni' },
  { id: '3', name: 'Eva' },
  { id: '4', name: 'Ashley' },
  { id: '5', name: 'Jane' },
  { id: '6', name: 'Shelly' },
  { id: '7', name: 'Angel' },
];

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const filtered = dummyResults.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <MainContainer activeTab="search">
      <View style={styles.content}>
      <TextInput
        style={styles.input}
        placeholder="Search Inbox"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultText}>{item.name}</Text>
          </View>
        )}
      />
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1, backgroundColor: '#fff', padding: 16 },
  input: {
    backgroundColor: '#F3F5F7',
    borderRadius: 22,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 16,
    height: 44,
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultText: {
    fontSize: 16,
    color: '#23223C',
  },
});