import React from 'react';
import { View, Modal, Text, Button, StyleSheet } from 'react-native';

interface StrengthProgressModalProps {
  visible: boolean;
  onClose: () => void;
}

const StrengthProgressModal: React.FC<StrengthProgressModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Strength Progress</Text>
        <Text>Here you can track and view your strength progress.</Text>
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

export default StrengthProgressModal;
