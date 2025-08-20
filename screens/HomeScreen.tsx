import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from '../components/MainContainer';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CategoryList from '../components/CategoryList';
import QuestionPacks from '../components/QuestionPacks';

const dummyStories = [
  { id: '1', name: 'You', image: { uri: 'https://randomuser.me/api/portraits/men/1.jpg' } },
  { id: '2', name: 'Jen', image: { uri: 'https://randomuser.me/api/portraits/women/2.jpg' } },
  { id: '3', name: 'Toni', image: { uri: 'https://randomuser.me/api/portraits/men/3.jpg' } },
  { id: '4', name: 'Eva', image: { uri: 'https://randomuser.me/api/portraits/women/4.jpg' } },
  { id: '5', name: 'Eva', image: { uri: 'https://randomuser.me/api/portraits/women/5.jpg' } },
  { id: '6', name: 'Eva', image: { uri: 'https://randomuser.me/api/portraits/women/6.jpg' } },
  { id: '7', name: 'Eva', image: { uri: 'https://randomuser.me/api/portraits/women/7.jpg' } },
  { id: '8', name: 'Eva', image: { uri: 'https://randomuser.me/api/portraits/women/8.jpg' } },
  { id: '9', name: 'Eva', image: { uri: 'https://randomuser.me/api/portraits/women/9.jpg' } },
  { id: '10', name: 'Eva', image: { uri: 'https://randomuser.me/api/portraits/women/10.jpg' } }
];



const categories = [
  { id: '1', name: 'Dating', active: true },
  { id: '2', name: 'Serious', active: false },
  { id: '3', name: 'Ice Breaker', active: false },
  { id: '4', name: 'Friendship', active: false },
  { id: '5', name: 'Adventure', active: false },
  { id: '6', name: 'Fun', active: false },
  { id: '7', name: 'Fun two', active: false },
];

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  const userName = 'User';

  const handleCategoryPress = (category: any) => {
    // Handle category selection here
    console.log('Category pressed:', category.name);
  };

  return (
    <MainContainer activeTab="home">
      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }} // extra space at bottom
      >
        <View style={styles.content}>
          {/* Header */}
          <Header userName={userName} />

          {/* Stories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesRow}>
            {dummyStories.map((story) => (
              <View key={story.id} style={styles.storyItem}>
                <View
                  style={styles.storyBorder}
                >
                  <View style={styles.storyInner}>
                    <Image source={story.image} style={styles.storyImage} />
                  </View>
                </View>
                <Text style={[Platform.OS === 'ios' && { paddingBottom: 0 }, styles.storyName]}>{story.name}</Text>
              </View>
            ))}
          </ScrollView>

          {/* For You */}
          <Text style={styles.sectionTitle}>For You</Text>
      <LinearGradient
        colors={['#E94057', '#F27121']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
            style={styles.quizCard}
          >
            <View style={styles.quizCardContainer}>
              <Text style={styles.quizQuestion}>
                What does it take to{'\n'}Mentally Stimulate you?
              </Text>
              <View style={styles.quizOptionsContainer}>
                <Text style={styles.quizOption}>A. Intelligence</Text>
                <Text style={styles.quizOption}>B. Humor</Text>
                <Text style={styles.quizOption}>C. Proven Success</Text>
                <Text style={styles.quizOption}>D. All of the above</Text>
              </View>
              <TouchableOpacity style={styles.quizButton}>
                <Text style={styles.quizButtonText}>Start Quiz</Text>
              </TouchableOpacity>
            </View>
      </LinearGradient>

          {/* Categories */}
          <View style={styles.categoriesRow}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <CategoryList 
            categories={categories}
            onCategoryPress={handleCategoryPress}
          />

          {/* Question Packs */}
          <QuestionPacks 
            onSeeAllPress={() => console.log('See all question packs pressed')}
          />
        </View>
      </ScrollView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1 },
  scrollContainer: {
    flex: 1,
  },
  storiesRow: { flexDirection: 'row', paddingLeft: 45, paddingTop: 11, paddingBottom: 0 },
  storyItem: { alignItems: 'center', marginRight: 11 },
  storyBorder: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#E94057'
  },
  storyInner: {
    borderRadius: 69 / 2,
    padding: 2,
  },
  storyImage: {
    width: 69,
    height: 69,
    borderRadius: 69 / 2,
  },
  storyName: {
    marginTop: 4,
    fontSize: 12,
    color: '#0F1113',
    lineHeight: 14,
    includeFontPadding: false,
  },
  sectionTitle: { fontSize: 24, fontWeight: 500, color: '#0F1113', marginLeft: 25, marginTop: 0, marginBottom: 7 },
  quizCard: {
    borderRadius: 22,
    marginHorizontal: 17,
    padding: 0
  },
  quizCardContainer: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    margin: 18,
  },
  quizQuestion: { color: '#fff', fontSize: 24, fontWeight: 500, lineHeight: 35, marginBottom: 10 },
  quizOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quizOption: {
    width: '48%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start', 
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    color: '#fff'
  },
  quizButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    alignSelf: 'flex-end',
    marginTop: 12,
    justifyContent: 'center', 
    alignItems: 'center',
    width: 152,
    height: 46,
  },
  quizButtonText: { 
    color: '#0F1113', 
    fontWeight: '400', 
    fontSize: 16 
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 17,
    marginTop: 10,
  },
  seeAll: { color: '#716E6E', fontWeight: '500', fontSize: 11, paddingBottom: 2, borderBottomColor: '#716E6E', borderBottomWidth: 1 },
});
