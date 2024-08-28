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

   // Calculate total statistics
   const totalWorkouts = workoutData.length;
   const totalCals = workoutData.reduce((total, workout) => total + workout.totalCal, 0);
 
   const totalTimeInSeconds = workoutData.reduce((total, workout) => {
     const [startH, startM, startS] = workout.startTime.split(':').map(Number);
     const [endH, endM, endS] = workout.endTime.split(':').map(Number);
     const workoutTime = (endH * 3600 + endM * 60 + endS) - (startH * 3600 + startM * 60 + startS);
     return total + workoutTime;
   }, 0);
 
   const totalTime = `${Math.floor(totalTimeInSeconds / 3600)}h ${Math.floor((totalTimeInSeconds % 3600) / 60)}m`;
 
   // Sum the totalMiles directly from each run workout
  const totalMiles = workoutData.reduce((total, workout) => {
    if (workout.type === 'run') {
      return total + workout.totalMiles;
    }
    return total;
  }, 0);

   // Calculate total weight lifted
  const totalWeight = workoutData.reduce((total, workout) => {
    if (workout.type === 'strength') {
      return total + workout.data.reduce((exerciseTotal, exercise) => {
        return exerciseTotal + exercise.sets.reduce((setTotal, set) => {
          return setTotal + (set.weight * set.reps);
        }, 0);
      }, 0);
    }
    return total;
  }, 0);

  return (
    <View style={styles.container}>
      <ProfileSection 
        firstName={profileData.firstName}  
        lastName={profileData.lastName}    
        onEditPress={() => setProfileEditModalVisible(true)} 
      />
      <Badges
        workouts={totalWorkouts}
        totalTime={totalTime}
        totalCals={totalCals}
        totalMiles={totalMiles}
        totalWeight={totalWeight} // Pass total weight to Badges component
      />
      <ScrollView style={styles.scrollContainer}>
        <WorkoutList 
          workouts={workoutData}  
          onWorkoutPress={handleWorkoutPress} 
        />
      </ScrollView>

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
