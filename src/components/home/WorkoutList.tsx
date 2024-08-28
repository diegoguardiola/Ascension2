import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WorkoutList = ({ workouts, onWorkoutPress }) => {
  return (
    <View style={styles.container}>
      {workouts.map(workout => (
        <TouchableOpacity 
          key={workout.id} 
          onPress={() => onWorkoutPress(workout)} 
          style={styles.workoutItem}
        >
          <Text style={styles.workoutText}>{workout.type.charAt(0).toUpperCase() + workout.type.slice(1)} Workout - {workout.date}</Text>
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
