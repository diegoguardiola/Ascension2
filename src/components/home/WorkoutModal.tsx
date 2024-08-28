import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

const WorkoutModal = ({ visible, workout, onClose }) => {
  if (!workout) return null;

  const renderWorkoutDetails = () => {
    if (workout.type === "run") {
      return (
        <View>
          <Text style={styles.detail}>Type: {workout.type}</Text>
          <Text style={styles.detail}>Date: {workout.date}</Text>
          <Text style={styles.detail}>Start Time: {workout.startTime}</Text>
          <Text style={styles.detail}>End Time: {workout.endTime}</Text>
          <Text style={styles.detail}>Average HR: {workout.avgHR} bpm</Text>
          <Text style={styles.detail}>Total Calories: {workout.totalCal} kcal</Text>
          <Text style={styles.detail}>Intervals:</Text>
          {workout.data.map((interval, index) => (
            <Text key={index} style={styles.intervalDetail}>
              Interval {interval.interval}: {interval.distance} km in {interval.time}
            </Text>
          ))}
        </View>
      );
    } else if (workout.type === "strength") {
      return (
        <View>
          <Text style={styles.detail}>Type: {workout.type}</Text>
          <Text style={styles.detail}>Date: {workout.date}</Text>
          <Text style={styles.detail}>Start Time: {workout.startTime}</Text>
          <Text style={styles.detail}>End Time: {workout.endTime}</Text>
          <Text style={styles.detail}>Average HR: {workout.avgHR} bpm</Text>
          <Text style={styles.detail}>Total Calories: {workout.totalCal} kcal</Text>
          <Text style={styles.detail}>Exercises:</Text>
          {workout.data.map((exercise, index) => (
            <View key={index} style={styles.exerciseContainer}>
              <Text style={styles.exerciseTitle}>{exercise.name}</Text>
              <Text style={styles.detail}>Description: {exercise.description}</Text>
              {exercise.sets.map((set, setIndex) => (
                <Text key={setIndex} style={styles.setDetail}>
                  Set {setIndex + 1}: {set.weight} lbs x {set.reps} reps
                </Text>
              ))}
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Workout Details</Text>
          {renderWorkoutDetails()}
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  intervalDetail: {
    fontSize: 14,
    marginLeft: 10,
  },
  exerciseContainer: {
    marginTop: 10,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  setDetail: {
    fontSize: 14,
    marginLeft: 10,
  },
});

export default WorkoutModal;
