import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth } from "../../../src/utils/constants";

const StatsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFDAB9",
        width: screenWidth,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "black",
        }}
      >
        StatsScreen
      </Text>
    </View>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({});
