import React from 'react';
import { View, Text, Modal, Button, TouchableOpacity, StyleSheet } from 'react-native';

const templates = [
  { id: 1, name: 'Full Body Workout' },
  { id: 2, name: 'Upper Body Workout' },
  { id: 3, name: 'Lower Body Workout' },
  // Add more templates as necessary
];

const TemplateListModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Select a Workout Template</Text>
          {templates.map(template => (
            <TouchableOpacity 
              key={template.id} 
              style={styles.templateItem}
              onPress={() => {
                // Logic to start a workout using the selected template
                console.log(`Starting workout: ${template.name}`);
                onClose(); // Close the modal after selection
              }}
            >
              <Text style={styles.templateText}>{template.name}</Text>
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
  templateItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 5,
  },
  templateText: {
    fontSize: 18,
  },
});

export default TemplateListModal;
