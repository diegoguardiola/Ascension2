import React from 'react';
import {
  Modal,
  View,
  ScrollView,
  Text,
  Button,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const ExerciseDetailModal = ({ visible, exercise, onClose }) => {
  if (!exercise) return null;

  // Extract dates and total_volume for the graph
  const labels = exercise.sessions.map((session) =>
    new Date(session.date).toLocaleDateString()
  );
  const data = exercise.sessions.map((session) => session.total_volume);

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{exercise.name} Progress</Text>
        <ScrollView horizontal>
          <LineChart
            data={{
              labels: labels,
              datasets: [{ data: data }],
            }}
            width={Math.max(labels.length * 50, screenWidth)} // Adjust width based on data
            height={220}
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#0000ff',
              },
            }}
            bezier
            style={styles.chartStyle} // Apply style here
          />
        </ScrollView>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

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
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default ExerciseDetailModal;
