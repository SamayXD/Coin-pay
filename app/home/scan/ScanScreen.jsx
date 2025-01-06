import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth } from "../../../src/utils/constants";

const ScanScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A7C7E7",
        width: screenWidth,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "black",
        }}
      >
        ScanScreen
      </Text>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({});
