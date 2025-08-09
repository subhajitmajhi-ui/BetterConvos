import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavBar from '../components/BottomNavBar';

const dummyStories = [
  { id: '1', name: 'You', image: { uri: 'https://randomuser.me/api/portraits/men/1.jpg' } },
  { id: '2', name: 'Jen', image: { uri: 'https://randomuser.me/api/portraits/women/2.jpg' } },
  { id: '3', name: 'Toni', image: { uri: 'https://randomuser.me/api/portraits/men/3.jpg' } },
  { id: '4', name: 'Eva', image: { uri: 'https://randomuser.me/api/portraits/women/4.jpg' } },
];

const dummyPacks = [
  { id: '1', title: '1st Date Questions', image: { uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' } },
  { id: '2', title: 'Would You Rather', image: { uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' } },
  { id: '3', title: 'Life Discussions', image: { uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' } },
];

import type { RouteProp } from '@react-navigation/native';

type HomeScreenRouteProp = RouteProp<{ params: { userName?: string } }, 'params'>;

interface HomeScreenProps {
  route: HomeScreenRouteProp;
}

const Stack = createNativeStackNavigator();

export default function HomeScreen({ route }: HomeScreenProps) {
  const userName = route?.params?.userName || 'User';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hey, {userName}!</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.headerIcon}>💬</Text>
          <Text style={styles.headerIcon}>❤️</Text>
          <Text style={styles.headerIcon}>≡</Text>
          {/* <Image
            source={require('https://randomuser.me/api/portraits/men/5.jpg')}
            style={styles.profilePic}
          /> */}
        </View>
      </View>
      <View style={styles.progressBar} />

      {/* Stories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesRow}>
        {dummyStories.map((story) => (
          <View key={story.id} style={styles.storyItem}>
            <Image source={story.image} style={styles.storyImage} />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* For You */}
      <Text style={styles.sectionTitle}>For You</Text>
      <LinearGradient
        colors={['#E94057', '#F27121']}
        style={styles.quizCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.quizQuestion}>
          What does it take to{'\n'}Mentally Stimulate you?
        </Text>
        <Text style={styles.quizOption}>A. Intelligence</Text>
        <Text style={styles.quizOption}>B. Humor</Text>
        <Text style={styles.quizOption}>C. Proven Success</Text>
        <Text style={styles.quizOption}>C. All of the above</Text>
        <TouchableOpacity style={styles.quizButton}>
          <Text style={styles.quizButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Categories */}
      <View style={styles.categoriesRow}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesList}>
        <TouchableOpacity style={styles.categoryActive}>
          <Text style={styles.categoryActiveText}>Dating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Serious</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Ice Breaker</Text>
        </TouchableOpacity>
      </View>

      {/* Question Packs */}
      <View style={styles.categoriesRow}>
        <Text style={styles.sectionTitle}>Questions Packs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyPacks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.packItem}>
            <Image source={item.image} style={styles.packImage} />
            <Text style={styles.packTitle}>{item.title}</Text>
          </View>
        )}
        style={styles.packsList}
      />

      {/* Bottom Navigation */}
      <BottomNavBar onTabPress={(tab) => {
        // handle tab navigation here
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 8,
  },
  greeting: { fontSize: 22, fontWeight: 'bold', color: '#23223C' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  headerIcon: { fontSize: 20, marginHorizontal: 6 },
  profilePic: { width: 32, height: 32, borderRadius: 16, marginLeft: 6 },
  progressBar: {
    height: 4,
    backgroundColor: '#E94057',
    marginHorizontal: 18,
    borderRadius: 2,
    marginBottom: 8,
  },
  storiesRow: { flexDirection: 'row', marginBottom: 8, paddingLeft: 12 },
  storyItem: { alignItems: 'center', marginRight: 18 },
  storyImage: { width: 54, height: 54, borderRadius: 27, borderWidth: 2, borderColor: '#E94057' },
  storyName: { marginTop: 4, fontSize: 13, color: '#23223C' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#23223C', marginLeft: 18, marginTop: 10 },
  quizCard: {
    margin: 18,
    borderRadius: 22,
    padding: 18,
    shadowColor: '#E94057',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  quizQuestion: { color: '#fff', fontSize: 17, fontWeight: 'bold', marginBottom: 10 },
  quizOption: { color: '#fff', fontSize: 15, marginBottom: 2 },
  quizButton: {
    backgroundColor: '#F3F5F7',
    borderRadius: 18,
    alignSelf: 'flex-end',
    marginTop: 12,
    paddingHorizontal: 22,
    paddingVertical: 7,
  },
  quizButtonText: { color: '#23223C', fontWeight: 'bold', fontSize: 15 },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 8,
  },
  seeAll: { color: '#E94057', fontWeight: '500', fontSize: 14 },
  categoriesList: { flexDirection: 'row', marginLeft: 18, marginTop: 8, marginBottom: 8 },
  categoryActive: {
    backgroundColor: '#fff',
    borderColor: '#E94057',
    borderWidth: 2,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginRight: 10,
  },
  categoryActiveText: { color: '#E94057', fontWeight: 'bold', fontSize: 15 },
  category: {
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginRight: 10,
  },
  categoryText: { color: '#23223C', fontSize: 15 },
  packsList: { marginLeft: 18, marginTop: 8, marginBottom: 8 },
  packItem: { marginRight: 16, alignItems: 'center' },
  packImage: { width: 110, height: 110, borderRadius: 18, marginBottom: 6 },
  packTitle: { color: '#23223C', fontWeight: '500', fontSize: 14, textAlign: 'center' },
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
  bottomNavIcon: { fontSize: 26, color: '#E94057' },
  bottomProfilePic: { width: 32, height: 32, borderRadius: 16 },
});