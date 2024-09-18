import React from 'react';
import {
  Modal,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';

const ExerciseListModal = ({ visible, exercises, onSelect, onClose }) => (
  <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Select an Exercise</Text>
      <ScrollView>
        {exercises.map((exercise) => (
          <TouchableOpacity
            key={exercise.id}
            onPress={() => onSelect(exercise)}
            style={styles.exerciseItem}
          >
            <Text style={styles.exerciseName}>{exercise.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button title="Close" onPress={onClose} />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  exerciseName: {
    fontSize: 18,
  },
});

export default ExerciseListModal;
