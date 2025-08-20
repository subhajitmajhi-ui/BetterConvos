import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';

const ProfileScreen = () => {
  return (
    <MainContainer activeTab="profile">
    <View style={styles.container}>
      <Header userName="Test User" />
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Inbox"
          placeholderTextColor="#888"
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        {/* Contact list will go here */}
        {
          [
            {
              name: 'Jen',
              message: 'That\'s so cool, im jelly honestly...',
              image: 'https://randomuser.me/api/portraits/women/1.jpg',
              unread: 5,
            },
            {
              name: 'Toni',
              message: 'Nice to know...',
              image: 'https://randomuser.me/api/portraits/men/2.jpg',
              unread: 2,
            },
            {
              name: 'Eva',
              message: 'You don\'t talk much huh?...',
              image: 'https://randomuser.me/api/portraits/women/3.jpg',
              unread: 0,
            },
            {
              name: 'Ashley',
              message: 'Ok, impressed. What\'s your...',
              image: 'https://randomuser.me/api/portraits/women/4.jpg',
              unread: 3,
            },
            {
              name: 'Jane',
              message: 'Not likely lol. But maybe if you...',
              image: 'https://randomuser.me/api/portraits/women/5.jpg',
              unread: 1,
            },
            {
              name: 'Shelly',
              message: 'Talk to you soon...',
              image: 'https://randomuser.me/api/portraits/women/6.jpg',
              unread: 0,
            },
            {
              name: 'Angel',
              message: 'Ok cool...',
              image: 'https://randomuser.me/api/portraits/men/7.jpg',
              unread: 1,
            },
          ].map((contact, index) => (
            <View style={styles.contactContainer} key={index}>
              <Image source={{ uri: contact.image }} style={styles.contactImage} />
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactMessage}>{contact.message}</Text>
              </View>
              {contact.unread > 0 && (
                <View style={styles.unreadContainer}>
                  <Text style={styles.unreadCount}>{contact.unread}</Text>
                </View>
              )}
            </View>
          ))
        }
      </ScrollView>
    </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
  searchBarContainer: {
    padding: 20,
  },
  searchBar: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 15,
    color: '#888',
  },
  scrollContainer: {
    padding: 20,
    paddingVertical: 0,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 25,
    shadowColor: '#00000044',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactMessage: {
    fontSize: 14,
    color: '#888',
  },
  unreadContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
