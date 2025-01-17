import React, { useState } from 'react';
import { View, Button, Modal, ScrollView, StyleSheet } from 'react-native';
import colors from '../assets/colors';
import ProfileSection from '../components/home/ProfileSection';
import WorkoutSummarySection from '../components/home/WorkoutSummarySection';
import profileData from '../components/data/profileData';

const HomeScreen = () => {
 

  return (
    <View style={styles.container}>
      <ProfileSection 
        firstName={profileData.firstName}  
        lastName={profileData.lastName}    
      />    
      <WorkoutSummarySection></WorkoutSummarySection>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background
  },
});

export default HomeScreen;
