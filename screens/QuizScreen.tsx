import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const Quiz = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress(progress - 10);
    }
  };

  const questions = [
    {
      question: 'What best describes your relationship status?',
      answers: [
        'Single & not mingling',
        'Single & dating',
        'Committed Relationship',
        'Married',
      ],
    },
    {
      question: 'What is your favorite color?',
      answers: ['Red', 'Blue', 'Green', 'Yellow'],
    },
    {
      question: 'What is your favorite food?',
      answers: ['Pizza', 'Burger', 'Pasta', 'Sushi'],
    },
    {
      question: 'What is your favorite hobby?',
      answers: ['Reading', 'Writing', 'Coding', 'Gaming'],
    },
    {
      question: 'What is your favorite movie?',
      answers: ['Action', 'Comedy', 'Drama', 'Horror'],
    },
    {
      question: 'What is your favorite book?',
      answers: ['Fiction', 'Non-Fiction', 'Mystery', 'Thriller'],
    },
    {
      question: 'What is your favorite sport?',
      answers: ['Football', 'Basketball', 'Tennis', 'Soccer'],
    },
    {
      question: 'What is your favorite animal?',
      answers: ['Dog', 'Cat', 'Bird', 'Fish'],
    },
    {
      question: 'What is your favorite country?',
      answers: ['USA', 'Canada', 'UK', 'Australia'],
    },
    {
      question: 'What is your favorite city?',
      answers: ['New York', 'London', 'Paris', 'Tokyo'],
    },
  ];

  const nextQuestion = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(progress + 10);
    } else {
      // Handle quiz completion
      Alert.alert('Quiz completed!');
    }
  };

  const handleClose = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose}>
          <Text style={styles.headerText}>Do this later</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClose}>
          <Icon name="window-close" size={30} color="#D2D6D9" />
        </TouchableOpacity>
      </View>
      <Text style={styles.headingText}>Describe Your Personality</Text>
      <Text style={styles.questionText}>Question {currentQuestion + 1}/10</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      <View style={styles.questionSection}>
      {questions[currentQuestion].answers.map((answer, index) => (
        <TouchableOpacity key={index} style={styles.answerButton}>
          <Text style={styles.answerButtonText}>{answer}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={nextQuestion}>
        <LinearGradient
          colors={['#E02441', '#F66734']}
          style={styles.nextButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
      {currentQuestion !== 0 && (
        <TouchableOpacity style={[styles.backButton]} onPress={previousQuestion}>
          <Icon name="chevron-left" size={30} color="#CACED2" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  headingText: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    color: '#000000',
    marginTop: 17,
    marginBottom: 52,
  },
  progressBar: {
    height: 12,
    backgroundColor: '#EBECEF',
    borderRadius: 24,
    marginBottom: 32,
  },
  progressBarFill: {
    height: 12,
    backgroundColor: '#E02441',
    borderRadius: 24,
  },
  questionSection: {
    paddingHorizontal: 40,
  },
  questionText: {
    fontSize: 14,
    color: '#57636C',
    fontWeight: '500',
    marginBottom: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 55,
    color: '#212121',
    textAlign: 'center',
  },
  answerButton: {
    backgroundColor: '#F6F6F6',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  answerButtonText: {
    fontSize: 16,
    color: '#424242',
    textAlign: 'center',
  },
  nextButton: {
    // padding: 16,
    // borderRadius: 24,
    marginTop: 30,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    width: '100%',
    height: 64,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  backButton: {
    marginTop: 30,
    marginLeft: -20,
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#716E6E',
  },
  closeButton: {
    fontSize: 20,
    color: '#757575',
    fontWeight: 'bold',
  },
});

export default Quiz;
