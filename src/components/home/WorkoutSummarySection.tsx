import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Totals from "../data/workoutSummaryData";
import colors from "../../assets/colors";

const WorkoutSummaryComponent = () => {
  const [headerTitles, setHeaderTitles] = useState({
    col1: "Last Week",
    col2: "This Week",
  });
  const [selectedData, setSelectedData] = useState({
    col1: Totals.find((item) => item.timeRange === "Last Week"),
    col2: Totals.find((item) => item.timeRange === "This Week"),
  });

  // Function to handle button presses
  const updateTableData = (buttonKey) => {
    if (buttonKey === "weekly") {
      setHeaderTitles({ col1: "Last Week", col2: "This Week" });
      setSelectedData({
        col1: Totals.find((item) => item.timeRange === "Last Week"),
        col2: Totals.find((item) => item.timeRange === "This Week"),
      });
    } else if (buttonKey === "monthly") {
      setHeaderTitles({ col1: "Last Month", col2: "This Month" });
      setSelectedData({
        col1: Totals.find((item) => item.timeRange === "Last Month"),
        col2: Totals.find((item) => item.timeRange === "This Month"),
      });
    } else if (buttonKey === "yearly") {
      setHeaderTitles({ col1: "Last Year", col2: "This Year" });
      setSelectedData({
        col1: Totals.find((item) => item.timeRange === "Last Year"),
        col2: Totals.find((item) => item.timeRange === "This Year"),
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => updateTableData("weekly")}
        >
          <Text style={styles.buttonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => updateTableData("monthly")}
        >
          <Text style={styles.buttonText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => updateTableData("yearly")}
        >
          <Text style={styles.buttonText}>Yearly</Text>
        </TouchableOpacity>
      </View>

      {/* Table */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.row}>
          <Text style={[styles.leftColumn, styles.headerColumn]}>Metrics</Text>
          <Text style={[styles.column, styles.headerColumn]}>
            {headerTitles.col1}
          </Text>
          <Text style={[styles.column, styles.headerColumn]}>
            {headerTitles.col2}
          </Text>
        </View>
        {/* Table Data */}
        {["activities", "totalDistance", "avgPage", "totalWeight", "totalTime"].map(
          (metric, index) => (
            <View style={styles.row} key={index}>
              <Text style={styles.leftColumn}>
                {metric
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </Text>
              <Text style={styles.column}>{selectedData.col1[metric]}</Text>
              <Text style={styles.column}>{selectedData.col2[metric]}</Text>
            </View>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
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
    backgroundColor: colors.primary,
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

export default WorkoutSummaryComponent;
