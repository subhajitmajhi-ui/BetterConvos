import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hey, {userName}!</Text>
        <View style={styles.headerIcons}>
          <Image source={require('../assets/icons/chat_icon.png')} style={styles.headerIcon} />
          <Image source={require('../assets/icons/black_heart_icon.png')} style={styles.headerIcon} />
          <Image source={require('../assets/icons/menu_icon.png')} style={styles.headerIcon} />
        </View>
      </View>
      <LinearGradient
        colors={['#E94057', '#F27121']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Platform.OS === 'ios' ? 50 : 60,
    backgroundColor: '#fff',
    // paddingTop: 60,
    paddingHorizontal: 45,
    // backgroundColor: '#fff',
    paddingBottom: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 20,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    // width: 25,
    // height: 25,
    marginLeft: 15,
  },
  progressBar: {
    height: 5,
    borderRadius: 2.5,
  },
});

export default Header;
