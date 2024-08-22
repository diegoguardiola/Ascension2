import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import FreestyleWorkoutModal from '../components/start workout/FreestyleWorkoutModal';
import TemplateListModal from '../components/start workout/TemplateListModal';
import CreateTemplateModal from '../components/start workout/CreateTemplateModal';

const StartWorkoutScreen = () => {
  const [isFreestyleModalVisible, setFreestyleModalVisible] = useState(false);
  const [isTemplateListModalVisible, setTemplateListModalVisible] = useState(false);
  const [isCreateTemplateModalVisible, setCreateTemplateModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button 
        title="Start a Freestyle Workout" 
        onPress={() => setFreestyleModalVisible(true)} 
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
