import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Category {
  id: string;
  name: string;
  active: boolean;
}

interface CategoryListProps {
  categories: Category[];
  onCategoryPress?: (category: Category) => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SIDE_PADDING = 40;
const CATEGORY_MARGIN = 8;
const VISIBLE_CATEGORIES = 3;
const CATEGORY_WIDTH =
  (SCREEN_WIDTH - SIDE_PADDING * 2 - CATEGORY_MARGIN * (VISIBLE_CATEGORIES - 1)) /
  VISIBLE_CATEGORIES;

export default function CategoryList({ categories, onCategoryPress }: CategoryListProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  const handleScrollRight = () => {
    const newPosition =
      scrollPosition + (CATEGORY_WIDTH + CATEGORY_MARGIN) * VISIBLE_CATEGORIES;
    scrollViewRef.current?.scrollTo({ x: newPosition, animated: true });
  };

  const handleScrollLeft = () => {
    const newPosition =
      scrollPosition - (CATEGORY_WIDTH + CATEGORY_MARGIN) * VISIBLE_CATEGORIES;
    scrollViewRef.current?.scrollTo({ x: newPosition, animated: true });
  };

  const handleScroll = (event: any) => {
    const position = event.nativeEvent.contentOffset.x;
    setScrollPosition(position);
    setShowLeftArrow(position > 10);
    setShowRightArrow(position < contentWidth - SCREEN_WIDTH - 10);
  };

  const handleContentSizeChange = (w: number) => {
    setContentWidth(w);
  };

  const handleCategoryPress = (category: Category) => {
    onCategoryPress?.(category);
  };

  return (
    <View style={styles.wrapper}>
      {showLeftArrow && (
        <TouchableOpacity
          style={[styles.arrowGradientWrapper, styles.leftArrow]}
          onPress={handleScrollLeft}
        >
            <Image
              source={require('../assets/icons/move-backward.png')}
              style={[styles.arrowIcon]}
              resizeMode="contain"
            />
        </TouchableOpacity>
      )}

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onContentSizeChange={handleContentSizeChange}
        snapToInterval={CATEGORY_WIDTH + CATEGORY_MARGIN}
        decelerationRate="fast"
        snapToAlignment="center"
      >
        {categories.map((category) => {
          const isActive = category.active;
          return (
            <TouchableOpacity
              key={category.id}
              style={{ marginRight: CATEGORY_MARGIN }}
              onPress={() => handleCategoryPress(category)}
              activeOpacity={0.8}
            >
              {isActive ? (
                <View
                  style={[
                    styles.categoryActive,
                    { width: CATEGORY_WIDTH },
                  ]}
                >
                  <Text style={styles.categoryActiveText}>{category.name}</Text>
                </View>
              ) : (
                <View style={[styles.categoryInactive, { width: CATEGORY_WIDTH }]}>
                  <Text style={styles.categoryInactiveText}>{category.name}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {showRightArrow && (
        <TouchableOpacity
          style={[styles.arrowGradientWrapper, styles.rightArrow]}
          onPress={handleScrollRight}
        >
            <Image
              source={require('../assets/icons/move-forward.png')}
              style={[styles.arrowIcon]}
              resizeMode="contain"
            />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 4,
    position: 'relative',
  },
  categoriesList: {
    paddingHorizontal: SIDE_PADDING,
  },
  categoryActive: {
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#E02441',
    backgroundColor: '#fff',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryInactive: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#0F1113',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  categoryActiveText: {
    color: '#E02441',
    fontWeight: '400',
    fontSize: 14,
  },
  categoryInactiveText: {
    color: '#0F1113',
    fontSize: 14,
    opacity: 0.8,
  },
  arrowGradientWrapper: {
    position: 'absolute',
    top: 10,
    zIndex: 1,
  },
  arrowGradientCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftArrow: {
    left: 0,
  },
  rightArrow: {
    right: 0,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 10
  },
});
