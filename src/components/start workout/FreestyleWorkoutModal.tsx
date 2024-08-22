import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import ExerciseSelectionModal from './ExerciseSelectionModal';
import SelectedExerciseList from './SelectedExerciseList';
const FreestyleWorkoutModal = ({ visible, onClose }) => {
  const [isExerciseSelectionModalVisible, setExerciseSelectionModalVisible] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleAddExercise = (exercise) => {
    setSelectedExercises([...selectedExercises, exercise]);
    setExerciseSelectionModalVisible(false);
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Button title="Finish" onPress={onClose} />

          {/* Selected Exercises */}
          <SelectedExerciseList exercises={selectedExercises} />

          <Button 
            title="Add Exercise" 
            onPress={() => setExerciseSelectionModalVisible(true)} 
          />
          <Button 
            title="Cancel Workout" 
            onPress={onClose} 
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
