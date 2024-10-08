import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import FreestyleWorkoutModal from '../components/start workout/weight lifting/freestyle workout/FreestyleWorkoutModal';
import TemplateListModal from '../components/start workout/weight lifting/from template/TemplateListModal';
import CreateTemplateModal from '../components/start workout/weight lifting/create template/CreateTemplateModal';

const StartWorkoutScreen = () => {
  const [isFreestyleModalVisible, setFreestyleModalVisible] = useState(false);
  const [isTemplateListModalVisible, setTemplateListModalVisible] = useState(false);
  const [isCreateTemplateModalVisible, setCreateTemplateModalVisible] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const handleStartFreestyleWorkout = () => {
    setStartTime(Date.now()); // Set the start time
    setFreestyleModalVisible(true); // Open the modal
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Start a Freestyle Workout" 
        onPress={handleStartFreestyleWorkout}  
      />
      
      <Button 
        title="Start Workout from Template" 
        onPress={() => setTemplateListModalVisible(true)} 
      />
      
      <Button 
        title="Create Template" 
        onPress={() => setCreateTemplateModalVisible(true)} 
      />

      {/* Modals */}
      <FreestyleWorkoutModal 
        visible={isFreestyleModalVisible} 
        onClose={() => setFreestyleModalVisible(false)} 
        startTime={startTime}
      />
      
      <TemplateListModal 
        visible={isTemplateListModalVisible} 
        onClose={() => setTemplateListModalVisible(false)} 
      />
      
      <CreateTemplateModal 
        visible={isCreateTemplateModalVisible} 
        onClose={() => setCreateTemplateModalVisible(false)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default StartWorkoutScreen;
