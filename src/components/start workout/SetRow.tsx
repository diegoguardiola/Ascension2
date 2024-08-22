import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SetRow = ({ set, onChangeSet }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Set" 
        value={set.id.toString()} 
        editable={false} // Set number is not editable
      />
      <TextInput 
        style={styles.input} 
        placeholder="Weight" 
        keyboardType="numeric"
        value={set.weight}
        onChangeText={(text) => onChangeSet({ ...set, weight: text })}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Reps" 
        keyboardType="numeric"
        value={set.reps}
        onChangeText={(text) => onChangeSet({ ...set, reps: text })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 16,
  },
});

export default SetRow;
