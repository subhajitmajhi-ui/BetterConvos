import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BottomNavBar from './BottomNavBar';
import { RootStackParamList } from '../types';

interface MainContainerProps {
  children: React.ReactNode;
  activeTab?: string;
}

export default function MainContainer({ children, activeTab = 'home' }: MainContainerProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTabPress = (tab: string) => {
    switch (tab) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'search':
        navigation.navigate('Search');
        break;
      case 'favorites':
        navigation.navigate('Favorites');
        break;
      case 'groups':
        navigation.navigate('Groups');
        break;
      case 'profile':
        navigation.navigate('Profile');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <BottomNavBar
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
  content: {
    flex: 1,
  },
});