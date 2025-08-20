import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface QuestionPack {
  id: string;
  title: string;
  image: { uri: string };
}

interface QuestionPacksProps {
  onSeeAllPress?: () => void;
}

const dummyPacks: QuestionPack[] = [
  { id: '1', title: '1st Date Questions', image: { uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' } },
  { id: '2', title: 'Would You Rather', image: { uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' } },
  { id: '3', title: 'Life Discussions', image: { uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' } },
  { id: '4', title: 'Funny Jokes', image: { uri: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80' } },
  { id: '5', title: 'Deep Conversations', image: { uri: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80' } },
  { id: '6', title: 'Icebreakers', image: { uri: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=400&q=80' } },
  { id: '7', title: 'Travel Talk', image: { uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' } },
  { id: '8', title: 'Random Questions', image: { uri: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=400&q=80' } },
  { id: '10', title: 'Friendship Goals', image: { uri: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80' } },
  { id: '11', title: 'Career Talks', image: { uri: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80' } },
  { id: '12', title: 'Dream Big', image: { uri: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80' } },
  { id: '13', title: 'Food Lovers', image: { uri: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80' } },
  { id: '15', title: 'Music Vibes', image: { uri: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&q=80' } },
  { id: '16', title: 'Sports Fans', image: { uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80' } },
  { id: '17', title: 'Book Club', image: { uri: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80' } },
  { id: '18', title: 'Adventure Time', image: { uri: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400&q=80' } },
  { id: '19', title: 'Mindfulness', image: { uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80' } },
  { id: '21', title: 'Creative Minds', image: { uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80' } },
  { id: '22', title: 'Health & Wellness', image: { uri: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80' } },
  { id: '23', title: 'Party Starters', image: { uri: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&q=80' } },
];

const ITEM_WIDTH = 167; // 151 image + ~16 margin

const QuestionPacks: React.FC<QuestionPacksProps> = ({ onSeeAllPress }) => {
  const flatListRef = useRef<FlatList<QuestionPack>>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;

    setOffsetX(contentOffset.x);
    setShowLeftArrow(contentOffset.x > 0);
    setShowRightArrow(contentOffset.x + layoutMeasurement.width < contentSize.width - 10);
  };

  const scrollBy = (direction: 'left' | 'right') => {
    if (flatListRef.current) {
      const newOffset =
        direction === 'right'
          ? offsetX + ITEM_WIDTH * 2
          : offsetX - ITEM_WIDTH * 2;

      flatListRef.current.scrollToOffset({
        offset: Math.max(0, newOffset),
        animated: true,
      });
    }
  };

  return (
    <>
      <View style={styles.categoriesRow}>
        <Text style={styles.sectionTitle}>Questions Packs</Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.carouselContainer}>
  <FlatList
    ref={flatListRef}
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
    onScroll={handleScroll}
    scrollEventThrottle={16}
    contentContainerStyle={{ paddingLeft: 17, paddingRight: 17 }}
  />

  {showLeftArrow && (
    <TouchableOpacity
      onPress={() => scrollBy('left')}
      style={[styles.arrowButton, styles.leftArrow]}
    >
      <LinearGradient
        colors={['#F66733', 'rgba(224, 36, 65, 0.8)', 'rgba(235, 70, 58, 0)' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientButton}
      >
        <View style={{marginLeft: 30}}>
        <Icon name="chevron-left" size={24} color="#FFF" />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )}

  {showRightArrow && (
    <TouchableOpacity
      onPress={() => scrollBy('right')}
      style={[styles.arrowButton, styles.rightArrow]}
    >
      <LinearGradient
        colors={['rgba(235, 70, 58, 0)', 'rgba(224, 36, 65, 0.8)', '#F66733']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientButton}
      >
        <View style={{marginRight: 30}}>
        <Icon name="chevron-right" size={24} color="#FFF" />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )}
</View>
    </>
  );
};

const styles = StyleSheet.create({
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 17,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#0F1113',
    marginLeft: 25,
    marginBottom: 7
  },
  seeAll: {
    color: '#716E6E',
    fontWeight: '500',
    fontSize: 11,
    paddingBottom: 2,
    borderBottomColor: '#716E6E',
    borderBottomWidth: 1
  },
  carouselContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  packsList: {
    marginTop: 8,
    marginBottom: 8
  },
  packItem: {
    marginRight: 16,
    alignItems: 'center'
  },
  packImage: {
    width: 151,
    height: 159,
    borderRadius: 18,
    marginBottom: 6
  },
  packTitle: {
    color: '#23223C',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center'
  },
  leftArrow: {
    left: -50,
    top: '50%',
    transform: [{ translateY: -50 }]
  },
  rightArrow: {
    right: -50,
    top: '50%',
    transform: [{ translateY: -50 }]
  },
  arrowButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 28,
    opacity: 1,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
    top: '50%',
    transform: [{ translateY: -50 }]
  },
  // leftArrow: {
  //   left: 338, // This seems like a fixed position, you might want to adjust this
  // },
  // rightArrow: {
  //   right: 338, // This seems like a fixed position, you might want to adjust this
  // },
  gradientButton: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuestionPacks;
