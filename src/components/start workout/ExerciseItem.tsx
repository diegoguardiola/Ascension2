import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ExerciseDetailsModal from './ExerciseDetailsModal';
import SetRow from './SetRow';

const ExerciseItem = ({ exercise }) => {
  const [isDetailsModalVisible, setDetailsModalVisible] = useState(false);
  const [sets, setSets] = useState([]);

  const addSet = () => {
    setSets([...sets, { id: sets.length + 1, weight: '', reps: '' }]);
  };

  const removeSet = (id) => {
    setSets(sets.filter(set => set.id !== id));
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
            <SetRow set={item} onChangeSet={(updatedSet) => {
              setSets(sets.map(s => (s.id === item.id ? updatedSet : s)));
            }} />
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