import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatsProps {
    workouts: number;
    totalTime: string;
    totalCals: number;
    totalMiles: number;
    totalWeight: number; // Include totalWeight in props
}

const Badges: React.FC<StatsProps> = ({ workouts, totalTime, totalCals, totalMiles, totalWeight }) => {
    return (
        <View style={styles.badgesContainer}>
            <View style={styles.badge}>
                <Text style={styles.badgeLabel}>Workouts:</Text>
                <Text style={styles.badgeValue}>{workouts}</Text>
            </View>
            <View style={styles.badge}>
                <Text style={styles.badgeLabel}>Total Time:</Text>
                <Text style={styles.badgeValue}>{totalTime}</Text>
            </View>
            <View style={styles.badge}>
                <Text style={styles.badgeLabel}>Total Cals:</Text>
                <Text style={styles.badgeValue}>{totalCals}</Text>
            </View>
            <View style={styles.badge}>
                <Text style={styles.badgeLabel}>Total Miles:</Text>
                <Text style={styles.badgeValue}>{totalMiles}</Text>
            </View>
            <View style={styles.badge}>
                <Text style={styles.badgeLabel}>Total Weight:</Text>
                <Text style={styles.badgeValue}>{totalWeight} lbs</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    badgesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    badge: {
        alignItems: 'center',
    },
    badgeLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    badgeValue: {
        fontSize: 14,
    },
});

export default Badges;
