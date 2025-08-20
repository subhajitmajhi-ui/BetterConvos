import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';


export default function BottomNavBar({ onTabPress, activeTab }: { onTabPress?: (tab: string) => void, activeTab?: string }) {
  return (

    <LinearGradient
        colors={['#E02441', '#F56733']}
        style={styles.bottomNav}
      >
        <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => onTabPress?.('home')}>
        <Image source={require('../assets/icons/home_main.png')} style={styles.iconBottomBar} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress?.('search')}>
        <Image source={require('../assets/icons/mag_icon_main.png')} style={styles.iconBottomBar} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress?.('favorites')}>
        {/* <Icon name="heart-outline" size={35} color={activeTab === 'favorites' ? '#E94057' : '#A0A0A0'} /> */}
        <Image source={require('../assets/icons/white_heart_main.png')} style={styles.iconBottomBar} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress?.('groups')}>
        {/* <Icon name="account-group-outline" size={35} color={activeTab === 'groups' ? '#E94057' : '#A0A0A0'} /> */}
        <Image source={require('../assets/icons/people_main.png')} style={styles.iconBottomBar} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress?.('profile')}>
        {/* <Icon name="account-circle-outline" size={35} color={activeTab === 'profile' ? '#E94057' : '#A0A0A0'} /> */}
        <Image source={require('../assets/icons/pexel.png')} style={styles.iconBottomBar} />
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 95,
    backgroundColor: '#fff',
    borderTopLeftRadius: 49,
    borderTopRightRadius: 49,
    elevation: 8,
    shadowColor: '#E94057',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    marginTop: 8,
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 50,
  },
  iconBottomBar: {
    width: 35,
    height: 35,
  },
});