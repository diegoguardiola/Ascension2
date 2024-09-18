import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import ExerciseSelectionModal from './ExerciseSelectionModal';
import SelectedExerciseList from './SelectedExerciseList';

const FreestyleWorkoutModal = ({ visible, onClose, startTime }) => {
  const [isExerciseSelectionModalVisible, setExerciseSelectionModalVisible] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);

      return () => clearInterval(interval); // Clear interval when the modal closes
    }
  }, [visible, startTime]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600); // Calculate total hours
    const minutes = Math.floor((totalSeconds % 3600) / 60); // Calculate remaining minutes after extracting hours
    const seconds = totalSeconds % 60; // Calculate remaining seconds after extracting hours and minutes
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  

  const handleAddExercise = (exercise) => {
    setSelectedExercises([...selectedExercises, { ...exercise, sets: [] }]);
    setExerciseSelectionModalVisible(false);
  };

  const resetWorkoutData = () => {
    setSelectedExercises([]);
    setElapsedTime(0);
  };

  const handleFinishWorkout = () => {
    const workoutData = {
      totalTime: formatTime(elapsedTime),
      rawTime: elapsedTime,  // if you need raw milliseconds as well
      exercises: selectedExercises.map(exercise => ({
        name: exercise.name,
        sets: exercise.sets.map(set => ({
          setNumber: set.id,
          weight: set.weight,
          reps: set.reps
        }))
      })),
    };

    console.log('Workout Data:', JSON.stringify(workoutData, null, 2));
    
    // Close the modal and reset data after logging the data
    resetWorkoutData();
    onClose();
  };

  // Handle cancel workout
  const handleCancelWorkout = () => {
    // Reset data and close the modal
    resetWorkoutData();
    onClose();
  };

  const handleUpdateExerciseSets = (exerciseIndex, updatedSets) => {
    const updatedExercises = [...selectedExercises];
    updatedExercises[exerciseIndex].sets = updatedSets;
    setSelectedExercises(updatedExercises);
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Button title="Finish" onPress={handleFinishWorkout} />
          <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>

          {/* Selected Exercises */}
          <SelectedExerciseList 
            exercises={selectedExercises} 
            onUpdateExerciseSets={handleUpdateExerciseSets} 
          />

          <Button 
            title="Add Exercise" 
            onPress={() => setExerciseSelectionModalVisible(true)} 
          />
          <Button 
            title="Cancel Workout" 
            onPress={handleCancelWorkout} 
            color="red" 
          />
        </View>
      </View>

      {/* Exercise Selection Modal */}
      <ExerciseSelectionModal 
        visible={isExerciseSelectionModalVisible} 
        onClose={() => setExerciseSelectionModalVisible(false)} 
        onSelectExercise={handleAddExercise} 
      />
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
});

export default FreestyleWorkoutModal;
