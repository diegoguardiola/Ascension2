import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

const ExerciseDetailsModal = ({ visible, onClose, exercise }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Exercise Details</Text>
          <Text>Name: {exercise.name}</Text>
          <Text>Description: {exercise.description}</Text>
          {/* Add more exercise details if needed */}
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
});

export default ExerciseDetailsModal;
