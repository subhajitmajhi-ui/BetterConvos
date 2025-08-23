import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <View style={styles.popupContainer}>
        <LinearGradient
          colors={['#E02441', '#F66734']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.popupInner}> 
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="window-close" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Describe Your Personality</Text>
          <Text style={styles.description}>
            Help us understand you better so we can tailor your experience specifically to you!
          </Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Got it</Text>
          </TouchableOpacity>
          </View>
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
  },
  gradient: {
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 17,
  },
  popupInner: {
    width: '100%',
    paddingVertical: 38,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0F1113',
  },
});

export default Popup;
