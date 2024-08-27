import React, { useState } from 'react';
import { View, Button, Modal, ScrollView, StyleSheet } from 'react-native';
import ProfileSection from '../components/home/ProfileSection';
import WorkoutList from '../components/home/WorkoutList';
import WorkoutModal from '../components/home/WorkoutModal';
import ProfileEditModal from '../components/home/ProfileEdit';

const HomeScreen = () => {
  const [isWorkoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isProfileEditModalVisible, setProfileEditModalVisible] = useState(false);

  const handleWorkoutPress = (workout) => {
    setSelectedWorkout(workout);
    setWorkoutModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ProfileSection onEditPress={() => setProfileEditModalVisible(true)} />
      
      <ScrollView style={styles.scrollContainer}>
        <WorkoutList onWorkoutPress={handleWorkoutPress} />
      </ScrollView>
      

      {/* Modals */}
      <WorkoutModal 
        visible={isWorkoutModalVisible} 
        workout={selectedWorkout} 
        onClose={() => setWorkoutModalVisible(false)} 
      />
      
      <ProfileEditModal 
        visible={isProfileEditModalVisible} 
        onClose={() => setProfileEditModalVisible(false)} 
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

export default HomeScreen;
