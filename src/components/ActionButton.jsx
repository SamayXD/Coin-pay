import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../utils/constants";
const ActionButton = ({ type, text, action }) => {
  const thisType = type;
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        backgroundColor: thisType === "primary" ? "#304FFE" : "#FFFFFF",
        padding: 16,
        borderRadius: 50,
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        borderColor: thisType === "primary" ? "#304FFE" : Colors.primaryAccent,
        borderWidth: 2,
      }}
    >
      <Text
        style={{
          color: thisType === "primary" ? "#FFFFFF" : Colors.primaryAccent,
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 24,
          fontFamily: "Poppins",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({});
