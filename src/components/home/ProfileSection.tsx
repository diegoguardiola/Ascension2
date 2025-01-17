import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

interface StatsProps {
  firstName: string;
  lastName: string;
}

const ProfileSection: React.FC<StatsProps> = ({ firstName, lastName }) => {
  return (
    <View style={styles.profileContainer}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/100' }} 
        style={styles.profilePic} 
      />
      <View style={styles.nameContainer}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{firstName}</Text>
          <Text style={styles.nameText}>{lastName}</Text>
        </View>
        <Text style={styles.totalWorkouts}>Total Workouts: </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  nameContainer: {
    marginLeft: 15,
    flexDirection: 'column',
    marginTop: '5%',
  },
  name: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: fonts.size.title,
    fontFamily: fonts.style.main,
    color: colors.text,
  },
  totalWorkouts: {
    fontSize: fonts.size.header2,
    fontFamily: fonts.style.main,
    color: colors.text,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default ProfileSection;
