import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import colors from '../assets/colors';
import ProfileSection from '../components/home/ProfileSection';
import WorkoutSummarySection from '../components/home/WorkoutSummarySection';
import DailyNutritionTracker from '../components/home/MacroSection';
import profileData from '../components/data/profileData';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Profile Section */}
      <ProfileSection
        firstName={profileData.firstName}
        lastName={profileData.lastName}
      />
      {/* Workout Summary Section */}
      <WorkoutSummarySection />
      {/* Daily Nutrition Tracker */}
      <DailyNutritionTracker
        calorieGoal={2000}
        macros={{ protein: 120, carbs: 250, fats: 60 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: 20, // Add padding inside the ScrollView
  },
});

export default HomeScreen;
