import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function BottomNavBar({ onTabPress, activeTab }: { onTabPress?: (tab: string) => void, activeTab?: string }) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => onTabPress?.('home')}>
        <Icon name="home-outline" size={28} color={activeTab === 'home' ? '#E94057' : '#A0A0A0'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress?.('search')}>
        <Icon name="magnify" size={28} color={activeTab === 'search' ? '#E94057' : '#A0A0A0'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress?.('favorites')}>
        <Icon name="heart-outline" size={28} color={activeTab === 'favorites' ? '#E94057' : '#A0A0A0'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress?.('groups')}>
        <Icon name="account-group-outline" size={28} color={activeTab === 'groups' ? '#E94057' : '#A0A0A0'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress?.('profile')}>
        <Icon name="account-circle-outline" size={28} color={activeTab === 'profile' ? '#E94057' : '#A0A0A0'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    elevation: 8,
    shadowColor: '#E94057',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    marginTop: 8,
  },
});