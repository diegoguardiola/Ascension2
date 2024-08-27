import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ProgressSectionProps {
  title: string;
  onPress: () => void;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProgressSection;
