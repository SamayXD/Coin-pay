import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Colors,
  screenHeight,
  screenWidth,
} from "../../../src/utils/constants";
import { StatusBar } from "expo-status-bar";

const TopSection = () => {
  return (
    <View style={{ flex: 1, width: screenWidth, backgroundColor: "#F7F7F7" }}>
      <View
        style={{
          backgroundColor: Colors.primary,
          height: screenHeight * 0.4,
          zIndex: 1,
        }}
      >
        <Text>Top Section</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: screenWidth * 0.85,
          flex: 1,
          borderWidth: 1,
          borderRadius: 10,
          height: screenHeight * 0.09,
          zIndex: 2,
          position: "absolute",
          top: screenHeight * 0.35,
          alignSelf: "center",
          borderColor: "white",
          elevation: 20,
        }}
      ></View>
    </View>
  );
};
const TransactionSection = () => {
  return (
    <View style={{ backgroundColor: "#F7F7F7", flex: 1, width: screenWidth }}>
      <Text>Transaction Section</Text>
    </View>
  );
};

const MainHomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E6E6FA",
        width: screenWidth,
      }}
    >
      <TopSection />
      <TransactionSection />
    </View>
  );
};

export default MainHomeScreen;

const styles = StyleSheet.create({});
