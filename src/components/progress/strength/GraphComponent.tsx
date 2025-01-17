import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GraphComponent = ({ sessions }) => {
  return (
    <View style={styles.graphContainer}>
      <Text style={styles.graphTitle}>Volume Progress Over Time</Text>
      {sessions.map((session, index) => (
        <View key={index} style={styles.sessionContainer}>
          <Text>{session.date}: {session.total_volume} kg</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  graphContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sessionContainer: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});

export default GraphComponent;
