import React, { useState } from 'react';
import { View, Button, Modal, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/exercise list/SearchBar';
import ExerciseList from '../components/exercise list/ExerciseList';
import ExerciseModal from '../components/exercise list/ExerciseModal';
import CreateExerciseModal from '../components/exercise list/CreateExerciseModal';
import exerciseData from '../components/data/exerciseListData';

const ExerciseListScreen = () => {
  const [isExerciseModalVisible, setExerciseModalVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isCreateExerciseModalVisible, setCreateExerciseModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the exercise list based on the search query
  const filteredExercises = exerciseData.filter(exercise =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExercisePress = (exercise) => {
    setSelectedExercise(exercise);
    setExerciseModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <ScrollView style={styles.scrollContainer}>
        <ExerciseList 
          exercises={filteredExercises} 
          onExercisePress={handleExercisePress} 
        />
      </ScrollView>
      
      <Button 
        title="Create New Exercise" 
        onPress={() => setCreateExerciseModalVisible(true)} 
      />

      {/* Modals */}
      <ExerciseModal 
        visible={isExerciseModalVisible} 
        exercise={selectedExercise} 
        onClose={() => setExerciseModalVisible(false)} 
      />
      
      <CreateExerciseModal 
        visible={isCreateExerciseModalVisible} 
        onClose={() => setCreateExerciseModalVisible(false)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    marginVertical: 20,
  },
});

export default ExerciseListScreen;