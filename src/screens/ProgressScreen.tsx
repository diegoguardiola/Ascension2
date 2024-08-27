import React, { useState } from 'react';
import { View, Button, Modal, ScrollView, StyleSheet, Text } from 'react-native';
import ProgressSection from '../components/progress/Progress';
import StrengthProgressModal from '../components/progress/Strength';
import NutritionProgressModal from '../components/progress/Nutrition';

const ProgressScreen = () => {
  const [isStrengthModalVisible, setStrengthModalVisible] = useState(false);
  const [isNutritionModalVisible, setNutritionModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <ProgressSection 
          title="Strength Progress" 
          onPress={() => setStrengthModalVisible(true)} 
        />
        <ProgressSection 
          title="Nutrition Progress" 
          onPress={() => setNutritionModalVisible(true)} 
        />
      </ScrollView>

      {/* Modals */}
      <StrengthProgressModal 
        visible={isStrengthModalVisible} 
        onClose={() => setStrengthModalVisible(false)} 
      />
      <NutritionProgressModal 
        visible={isNutritionModalVisible} 
        onClose={() => setNutritionModalVisible(false)} 
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

export default ProgressScreen;
