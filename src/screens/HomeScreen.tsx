import React, { useState } from 'react';
import { View, Button, Modal, ScrollView, StyleSheet } from 'react-native';
import ProfileSection from '../components/home/ProfileSection';
import WorkoutList from '../components/home/WorkoutList';
import WorkoutModal from '../components/home/WorkoutModal';
import ProfileEditModal from '../components/home/ProfileEdit';
import profileData from '../components/data/profileData';
import Badges from '../components/home/Badges';
import statsData from '../components/data/statsData';
import workoutData from '../components/data/workoutData';

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
      <ProfileSection 
        firstName={profileData.firstName}  
        lastName={profileData.lastName}    
        onEditPress={() => setProfileEditModalVisible(true)} 
      />
      <Badges {...statsData} />
      <ScrollView style={styles.scrollContainer}>
        <WorkoutList 
          workouts={workoutData}  // Pass workout data to the WorkoutList component
          onWorkoutPress={handleWorkoutPress} 
        />
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
};;

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
