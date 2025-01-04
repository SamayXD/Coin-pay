import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { screenWidth, screenHeight, Colors } from "../../src/utils/constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const BackHeader = ({ backAction, stage }) => {
  const stageRank = [0.25, 0.5, 0.75, 1];

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backAction}>
        <Ionicons name="chevron-back" size={24} color={"gray"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={backAction}
        style={{
          backgroundColor: "transparent",
          borderBottomWidth: 4,
          borderBottomColor: Colors.primaryAccent,
          width:
            stage < 5 ? screenWidth * stageRank[stage - 1] * 0.5 : screenWidth,
          height: screenHeight * 0.07,
          position: "absolute",
          borderBottomEndRadius: 3,
        }}
      />
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
    borderBottomWidth: 4,
    height: screenHeight * 0.07,
  },
});
