import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ExerciseDetailsModal from './ExerciseDetailsModal';
import SetRow from './SetRow';

const ExerciseItem = ({ exercise, onUpdateSets, index }) => {
  const [isDetailsModalVisible, setDetailsModalVisible] = useState(false);
  const [sets, setSets] = useState(exercise.sets || []);

  const addSet = () => {
    const newSet = { id: sets.length + 1, weight: '', reps: '' };
    const updatedSets = [...sets, newSet];
    setSets(updatedSets);
    onUpdateSets(index, updatedSets);
  };

  const removeSet = (id) => {
    const updatedSets = sets.filter(set => set.id !== id);
    setSets(updatedSets);
    onUpdateSets(index, updatedSets);
  };

  const updateSet = (id, updatedSet) => {
    const updatedSets = sets.map(set => (set.id === id ? updatedSet : set));
    setSets(updatedSets);
    onUpdateSets(index, updatedSets);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Button title="⋮" onPress={() => setDetailsModalVisible(true)} />
      </View>

      <FlatList
        data={sets}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => (
              <Button title="Delete" onPress={() => removeSet(item.id)} color="red" />
            )}
          >
            <SetRow 
              set={item} 
              onChangeSet={(updatedSet) => updateSet(item.id, updatedSet)}
            />
          </Swipeable>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No sets added yet.</Text>}
      />

      <Button title="Add Set" onPress={addSet} />

      {/* Exercise Details Modal */}
      <ExerciseDetailsModal 
        visible={isDetailsModalVisible} 
        onClose={() => setDetailsModalVisible(false)} 
        exercise={exercise}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ExerciseItem;