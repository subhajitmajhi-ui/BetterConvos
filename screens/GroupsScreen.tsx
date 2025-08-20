import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainContainer from '../components/MainContainer';

export default function GroupsScreen() {
  return (
    <MainContainer activeTab="groups">
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Groups</Text>
        </View>
        <View style={styles.centerContent}>
          <Text style={styles.placeholder}>Your conversation groups will appear here</Text>
        </View>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  content: { 
    flex: 1, 
    backgroundColor: '#fff', 
    paddingTop: 40 
  },
  header: {
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#23223C' 
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  placeholder: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
  },
});