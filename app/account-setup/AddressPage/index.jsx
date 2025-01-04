import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import BackHeader from "../../../src/components/BackHeader";
import { screenHeight, screenWidth } from "../../../src/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "../../../src/components/ActionButton";
import { router } from "expo-router";

const AddressPage = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const handleBackPress = () => {
    router.back();
  };
  const handleNextClick = () => {
    router.navigate("account-setup/PersonalInfo");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <BackHeader stage={2} backAction={handleBackPress} />
      <View
        style={{
          marginTop: screenHeight * 0.08,
          gap: screenHeight * 0.004,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 36,
            fontFamily: "Poppins",
            textAlign: "left",
            width: screenWidth * 0.9,
          }}
        >
          Home Address
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "Poppins",
            textAlign: "left",
            width: screenWidth * 0.9,
            color: "#333333",
          }}
        >
          This info need to be accurate with your ID document.
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: "Poppins",
          textAlign: "left",
          width: screenWidth * 0.9,
          color: "black",

          marginTop: screenHeight * 0.05,
        }}
      >
        Email
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="mail-outline" size={24} color="#D4D4D4" />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Mr. John Doe"
          value={address}
          onChangeText={setAddress}
          placeholderTextColor="#D4D4D4"
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: "Poppins",
          textAlign: "left",
          width: screenWidth * 0.9,
          color: "black",

          marginTop: screenHeight * 0.01,
        }}
      >
        City
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="mail-outline" size={24} color="#D4D4D4" />
        </View>

        <TextInput
          style={styles.input}
          placeholder="City, State"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="#D4D4D4"
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: "Poppins",
          textAlign: "left",
          width: screenWidth * 0.9,
          color: "black",

          marginTop: screenHeight * 0.01,
        }}
      >
        Postcode
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="mail-outline" size={24} color="#D4D4D4" />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Ex: 00000"
          value={postcode}
          onChangeText={setPostcode}
          placeholderTextColor="#D4D4D4"
        />
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          position: "absolute",
          bottom: 0,
          paddingBottom: screenHeight * 0.1,
        }}
      >
        <ActionButton text="Continue" type="primary" action={handleNextClick} />
      </View>
    </View>
  );
};

export default AddressPage;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#D4D4D4",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: screenWidth * 0.9,
    // paddingVertical: 10,
  },
  iconContainer: {
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: screenHeight * 0.015,
  },
});
