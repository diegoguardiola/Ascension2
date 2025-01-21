import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import colors from '../../assets/colors';

const DailyNutritionTracker = ({ calorieGoal, macros }) => {
  const [totalCalories, setTotalCalories] = useState(0); // Tracks consumed calories

  // Sample data for macros
  const macroData = [
    { key: 1, label: 'Protein', value: macros.protein, color: '#FF6384' },
    { key: 2, label: 'Carbs', value: macros.carbs, color: '#36A2EB' },
    { key: 3, label: 'Fats', value: macros.fats, color: '#FFCE56' },
  ];

  // Prepare data for the PieChart
  const pieData = macroData
    .filter((macro) => macro.value > 0)
    .map((macro) => ({
      key: macro.key,
      value: macro.value,
      svg: { fill: macro.color },
      arc: { outerRadius: '100%', cornerRadius: 10 },
    }));

  // Calculate calorie progress percentage
  const caloriePercentage = Math.min((totalCalories / calorieGoal) * 100, 100);

  return (
    <View style={styles.container}>
      {/* Left Section: Pie Chart */}
      <View style={styles.chartContainer}>
        <PieChart style={styles.pieChart} data={pieData} />
        <View style={styles.chartLabels}>
          {macroData.map((macro) => (
            <Text key={macro.key} style={{ color: macro.color, marginBottom: 5 }}>
              {macro.label}: {macro.value}g
            </Text>
          ))}
        </View>
      </View>

      {/* Bottom Section: Calorie Bar */}
      <View style={styles.calorieBarContainer}>
        <Text style={styles.calorieText}>
          {totalCalories}/{calorieGoal} kcal
        </Text>
        <View style={styles.progressBarBackground}>
          <Animated.View
            style={[
              styles.progressBarFill,
              { width: `${caloriePercentage}%` },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: colors.layerOne,
    borderRadius: 8
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pieChart: {
    height: 150,
    width: 150,
  },
  chartLabels: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  calorieBarContainer: {
    marginTop: 20,
  },
  calorieText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  progressBarBackground: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#4caf50',
  },
});

export default DailyNutritionTracker;
