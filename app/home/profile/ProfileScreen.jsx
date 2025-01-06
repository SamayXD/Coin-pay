import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth } from "../../../src/utils/constants";

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFD1DC",
        width: screenWidth,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "black",
        }}
      >
        ProfileScreen
      </Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
