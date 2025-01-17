import React from 'react';
import { View, Modal, Text, Button, StyleSheet } from 'react-native';
import GraphComponent from './GraphComponent';

const ExerciseModal = ({ visible, onClose, exercise }) => {
  if (!exercise) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{exercise.name} Progress</Text>
        <Text>Description: {exercise.description}</Text>
        
        <GraphComponent sessions={exercise.sessions} />

        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ExerciseModal;
