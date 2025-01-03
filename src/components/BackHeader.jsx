import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth, screenHeight, Colors } from "../../src/utils/constants";

const BackHeader = () => {
  return (
    <View style={styles.header}>
      <Text>[back]</Text>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: screenWidth,
    padding: screenWidth * 0.05,
    borderBottomColor: "#D1D1D6",
    borderBottomWidth: 2,
    height: screenHeight * 0.07,
  },
});
