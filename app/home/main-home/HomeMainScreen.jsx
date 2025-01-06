import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth } from "../../../src/utils/constants";
import { StatusBar } from "expo-status-bar";

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
      <Text
        style={{
          fontSize: 24,
          color: "black",
        }}
      >
        MainHome
      </Text>
    </View>
  );
};

export default MainHomeScreen;

const styles = StyleSheet.create({});
