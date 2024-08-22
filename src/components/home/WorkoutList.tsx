import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const workouts = [
  { id: 1, name: 'Workout A', details: 'Details for Workout A' },
  { id: 2, name: 'Workout B', details: 'Details for Workout B' },
  // Add more workouts as needed
];

const WorkoutList = ({ onWorkoutPress }) => {
  return (
    <View style={styles.container}>
      {workouts.map(workout => (
        <TouchableOpacity 
          key={workout.id} 
          onPress={() => onWorkoutPress(workout)} 
          style={styles.workoutItem}
        >
          <Text style={styles.workoutText}>{workout.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  workoutItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  workoutText: {
    fontSize: 18,
  },
});

export default WorkoutList;
