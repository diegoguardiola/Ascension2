import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import dataSets from "../data/workoutSummaryData";
import colors from "../../assets/colors";

const SectionComponent = () => {
  const [selectedData, setSelectedData] = useState(dataSets.button1);
  const [headerTitles, setHeaderTitles] = useState({ col1: "Week", col2: "This Week" });

  // Static titles for the left-most column
  const rowTitles = ["Activities", "Total Distance", "Average Pace", "Total Weight"];

  // Function to handle button presses
  const handleButtonPress = (buttonKey) => {
    setSelectedData(dataSets[buttonKey]);

    // Update table header titles based on the button pressed
    const newHeaderTitles =
      buttonKey === "button1"
        ? { col1: "Last Week", col2: "This Week" }
        : buttonKey === "button2"
        ? { col1: "Last Month", col2: "This Month" }
        : { col1: "Last Year", col2: "This Year" };
    setHeaderTitles(newHeaderTitles);
  };

  return (
    <View style={styles.container}>
      {/* Header Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("button1")}
        >
          <Text style={styles.buttonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("button2")}
        >
          <Text style={styles.buttonText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("button3")}
        >
          <Text style={styles.buttonText}>Yearly</Text>
        </TouchableOpacity>
      </View>

      {/* Table */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.row}>
          <Text style={[styles.leftColumn, styles.headerColumn]}>Metrics</Text>
          <Text style={[styles.column, styles.headerColumn]}>{headerTitles.col1}</Text>
          <Text style={[styles.column, styles.headerColumn]}>{headerTitles.col2}</Text>
        </View>

        {/* Table Rows */}
        <FlatList
          data={selectedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.row}>
              {/* Static left column */}
              <Text style={styles.leftColumn}>{rowTitles[index]}</Text>
              {/* Dynamic columns */}
              <Text style={styles.column}>{item.col1}</Text>
              <Text style={styles.column}>{item.col2}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.layerOne,
    borderRadius: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  table: {
    backgroundColor: colors.layerOne,
    borderRadius: 8,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  leftColumn: {
    flex: 1.5, // Wider for the titles
    fontWeight: "bold",
    textAlign: "left",
    color: colors.text
  },
  column: {
    flex: 1,
    textAlign: "center",
    color: colors.text
  },
  headerColumn: {
    fontWeight: "bold",
    paddingVertical: 5,
  },
});

export default SectionComponent;

