import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ExerciseList = ({ exercises, onExercisePress }) => {
  return (
    <View style={styles.container}>
      {exercises.map(exercise => (
        <TouchableOpacity 
          key={exercise.id} 
          onPress={() => onExercisePress(exercise)} 
          style={styles.exerciseItem}
        >
          <Text style={styles.exerciseText}>{exercise.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  exerciseItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 5,
  },
  exerciseText: {
    fontSize: 18,
  },
});

export default ExerciseList;
