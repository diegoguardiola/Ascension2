import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

interface StatsProps {
  firstName: string;
  lastName: string;
  onEditPress: () => void;  
}

const ProfileSection: React.FC<StatsProps> = ({firstName, lastName, onEditPress }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/100' }} 
        style={styles.profilePic} 
      />
      <Text style={styles.name}>{firstName}</Text>
      <Text style={styles.name}>{lastName}</Text>
      <Button title="Edit Profile" onPress={onEditPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfileSection;
