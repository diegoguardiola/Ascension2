import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ExerciseListModal from '../components/progress/strength/ExerciseListModal';
import ExerciseDetailModal from '../components/progress/strength/ExerciseDetailModal';
import singleExerciseData from '../components/data/singleExerciseData';
import RunsModal from '../components/progress/running/RunsModal';
import runnerStats from '../components/data/runnerStats';
import runData from '../components/data/runData';

const ProgressScreen = () => {
  const [exercisesModalVisible, setExercisesModalVisible] = useState(false);
  const [runsModalVisible, setRunsModalVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseDetailModalVisible, setExerciseDetailModalVisible] = useState(false);

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
    setExerciseDetailModalVisible(true);
    setExercisesModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Exercises" onPress={() => setExercisesModalVisible(true)} />
      <Button title="Runs" onPress={() => setRunsModalVisible(true)} />
      
      <ExerciseListModal
        visible={exercisesModalVisible}
        exercises={singleExerciseData}
        onSelect={handleExerciseSelect}
        onClose={() => setExercisesModalVisible(false)}
      />
      
      <ExerciseDetailModal
        visible={exerciseDetailModalVisible}
        exercise={selectedExercise}
        onClose={() => setExerciseDetailModalVisible(false)}
      />

      <RunsModal
        visible={runsModalVisible}
        stats={runnerStats}
        runs={runData}
        onClose={() => setRunsModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default ProgressScreen;
