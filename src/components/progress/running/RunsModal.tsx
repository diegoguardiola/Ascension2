import React from 'react';
import { Modal, View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const RunsModal = ({ visible, stats, runs, onClose }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.runItem} onPress={() => console.log('Run selected:', item.id)}>
      <Text style={styles.runDate}>{item.id}</Text>
      <Text>Total Miles: {item.totalMiles}</Text>
      <Text>Time: {item.time}</Text>
      <Text>Min per Mile: {item.minPerMile}</Text>
      <Text>Calories: {item.calories}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Runner Stats</Text>
        <View style={styles.statsContainer}>
          <Text>Total Runs: {stats.totalRuns}</Text>
          <Text>Total Time: {stats.totalTime}</Text>
          <Text>Total Distance: {stats.totalDistance} km</Text>
          <Text>Total Calories: {stats.totalCalories}</Text>
        </View>

        <Text style={styles.title}>Run History</Text>
        <FlatList
          data={runs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  runItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  runDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RunsModal;
