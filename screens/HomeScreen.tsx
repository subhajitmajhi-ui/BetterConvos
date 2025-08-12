import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from '../components/MainContainer';

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

const dummyPacks = [
  { id: '1', title: '1st Date Questions', image: { uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' } },
  { id: '2', title: 'Would You Rather', image: { uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' } },
  { id: '3', title: 'Life Discussions', image: { uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' } },
];

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  const userName = 'User';
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollRight = () => {
    scrollViewRef.current?.scrollTo({ x: 200, animated: true });
  };

  const options = [
    'Ice Breaker',
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5'
  ];

  return (
    <MainContainer activeTab="home">
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          {/* Header */}
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

      {/* Stories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesRow}>
          {dummyStories.map((story) => (
            <View key={story.id} style={styles.storyItem}>
              <LinearGradient
                colors={['#E94057', '#F27121']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.storyBorder}
              >
                <View style={styles.storyInner}>
                  <Image source={story.image} style={styles.storyImage} />
                </View>
              </LinearGradient>
              <Text style={[Platform.OS === 'ios' && { paddingBottom: 55 }, styles.storyName]}>{story.name}</Text>
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

        <View style={styles.wrapper}>
          <View style={styles.scrollContainer}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
            >
              <TouchableOpacity style={styles.categoryActive}>
                <Text style={styles.categoryActiveText}>Dating</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Serious</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Ice Breaker</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Friendship</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Adventure</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Fun</Text>
              </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity
              style={styles.fixedIconButton}
              onPress={handleScrollRight}
            >
              <Text>{'>'}</Text>
            </TouchableOpacity>
          </View>
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
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1 },
  headerContainer: {
    paddingTop: 60,
    paddingHorizontal: 45,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  greeting: { fontSize: 24, fontWeight: 700, color: '#0F1113' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  headerIcon: { marginHorizontal: 6 },
  profilePic: { width: 32, height: 32, borderRadius: 16, marginLeft: 6 },
  progressBar: {
    height: 7,
    backgroundColor: '#E94057',
    marginHorizontal: 18,
    borderRadius: 24,
    marginBottom: 17,
  },
  storiesRow: { flexDirection: 'row', paddingLeft: 45, paddingTop: 11, paddingBottom: 0 },
  storyItem: { alignItems: 'center', marginRight: 11 },
  storyBorder: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
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
    shadowColor: '#E94057',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
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
  // categoriesList: { flexDirection: 'row', marginLeft: 18, marginTop: 8, marginBottom: 8 },
  // categoryActive: {
  //   backgroundColor: '#fff',
  //   borderColor: '#E94057',
  //   borderWidth: 2,
  //   borderRadius: 18,
  //   paddingHorizontal: 18,
  //   paddingVertical: 6,
  //   marginRight: 10,
  // },
  // categoryActiveText: { color: '#E94057', fontWeight: 'bold', fontSize: 15 },
  wrapper: { 
    marginVertical: 8,
    position: 'relative',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoriesList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 40, // Make space for the fixed button
  },
  fixedIconButton: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 6,
    borderWidth: 1,
    borderColor: '#E94057',
    zIndex: 1,
  },
  
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
    backgroundColor: '#f0f0f0',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginRight: 10,
  },
  categoryText: { color: '#333', fontSize: 15 },
  iconButton: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 6,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E94057',
  },


  // category: {
  //   backgroundColor: '#fff',
  //   borderColor: '#E0E0E0',
  //   borderWidth: 1,
  //   borderRadius: 18,
  //   paddingHorizontal: 18,
  //   paddingVertical: 6,
  //   marginRight: 10,
  // },
  // categoryText: { color: '#23223C', fontSize: 15 },
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