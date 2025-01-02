import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.navigate("onboarding");
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return <></>;
};

export default index;

const styles = StyleSheet.create({});
