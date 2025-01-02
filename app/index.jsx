import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
const index = () => {
  const router = useRouter();

  return (
    <View>
      <Pressable
        onPress={() => {
          router.navigate("home");
        }}
      >
        <Text>EnterScreen</Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
