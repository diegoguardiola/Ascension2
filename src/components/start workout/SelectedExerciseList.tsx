import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExerciseItem from './ExerciseItem';

const SelectedExerciseList = ({ exercises }) => {
  if (exercises.length === 0) {
    return <Text style={styles.noExercisesText}>No exercises added yet.</Text>;
  }

  return (
    <View style={styles.container}>
      {exercises.map((exercise, index) => (
        <ExerciseItem key={index} exercise={exercise} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  noExercisesText: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default SelectedExerciseList;
