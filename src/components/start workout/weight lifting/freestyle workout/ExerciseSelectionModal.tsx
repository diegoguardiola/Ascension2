import React from 'react';
import { View, Text, Modal, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import exerciseData from '../../../data/exerciseData';

const ExerciseSelectionModal = ({ visible, onClose, onSelectExercise }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Top Bar with Cancel Button */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Select an Exercise</Text>
          
          {/* Scrollable List of Exercises */}
          <ScrollView contentContainerStyle={styles.exerciseList}>
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
          </ScrollView>

          {/* Bottom Bar or any other fixed footer (optional) */}
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginTop: 40,
  },
  cancelButton: {
    color: 'red',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  exerciseList: {
    paddingBottom: 20, // Space at the bottom of the list
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
