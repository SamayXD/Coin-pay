import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth } from "../../../src/utils/constants";

const ChatScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#98FF98",
        width: screenWidth,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "black",
        }}
      >
        ChatScreen
      </Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
