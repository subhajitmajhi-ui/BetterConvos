import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Search: undefined;
  Favorites: undefined;
  Groups: undefined;
  Profile: undefined;
  ForgotPassword: undefined;
  Quiz: undefined;
};

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
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.questionText}>Question {currentQuestion + 1}/10</Text>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <TouchableOpacity key={index} style={styles.answerButton}>
          <Text style={styles.answerButtonText}>{answer}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      {currentQuestion !== 0 && (
        <TouchableOpacity style={[styles.backButton]} onPress={previousQuestion}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginTop: 20,
  },
  progressBarFill: {
    height: 8,
    backgroundColor: '#F44336',
    borderRadius: 4,
  },
  questionText: {
    fontSize: 14,
    color: '#757575',
    marginTop: 30,
  },
  question: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
    color: '#212121',
  },
  answerButton: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 24,
    marginTop: 12,
  },
  answerButtonText: {
    fontSize: 16,
    color: '#424242',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#F44336',
    padding: 16,
    borderRadius: 24,
    marginTop: 30,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 24,
    marginTop: 12,
  },
  backButtonText: {
    fontSize: 18,
    color: '#424242',
    fontWeight: '500',
    textAlign: 'center',
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
    color: '#757575',
  },
  closeButton: {
    fontSize: 20,
    color: '#757575',
    fontWeight: 'bold',
  },
});

export default Quiz;
