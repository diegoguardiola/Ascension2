import React, { useState } from 'react';
import { View, Text, TextInput, Modal, Button, StyleSheet } from 'react-native';

const CreateExerciseModal = ({ visible, onClose }) => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');

  const handleSave = () => {
    // Logic to save the new exercise
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Create New Exercise</Text>
          <TextInput 
            placeholder="Exercise Name" 
            style={styles.input} 
            value={exerciseName} 
            onChangeText={setExerciseName}
          />
          <TextInput 
            placeholder="Exercise Description" 
            style={styles.input} 
            value={exerciseDescription} 
            onChangeText={setExerciseDescription}
          />
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={onClose} color="red" />
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
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 18,
    padding: 5,
  },
});

export default CreateExerciseModal;
