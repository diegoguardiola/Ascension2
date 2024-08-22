import React from 'react';
import { View, Text, TextInput, Modal, Button, StyleSheet } from 'react-native';

const MeasurementsModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Enter Measurements</Text>
          <TextInput placeholder="Weight" style={styles.input} keyboardType="numeric" />
          <TextInput placeholder="Body Measurements" style={styles.input} keyboardType="numeric" />
          {/* Add more inputs as necessary */}
          <Button title="Save" onPress={onClose} />
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
  }
})
   
export default MeasurementsModal;