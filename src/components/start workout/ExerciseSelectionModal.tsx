import React from 'react';
import { View, Text, Modal, Button, TouchableOpacity, StyleSheet } from 'react-native';
import exerciseData from '../data/exerciseData';

const ExerciseSelectionModal = ({ visible, onClose, onSelectExercise }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Select an Exercise</Text>
          {exerciseData.map(exercise => (
            <TouchableOpacity 
              key={exercise.id} 
              style={styles.exerciseItem}
              onPress={() => {
                onSelectExercise(exercise); // Add exercise to the list
                onClose(); // Close the modal
              }}
            >
              <Text style={styles.exerciseText}>{exercise.name}</Text>
            </TouchableOpacity>
          ))}
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

export default ExerciseSelectionModal;
