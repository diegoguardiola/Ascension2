import React from 'react';
import { View, Modal, Text, Button, StyleSheet } from 'react-native';

interface NutritionProgressModalProps {
  visible: boolean;
  onClose: () => void;
}

const NutritionProgressModal: React.FC<NutritionProgressModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Nutrition Progress</Text>
        <Text>Here you can track and view your nutrition progress.</Text>
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
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default NutritionProgressModal;
