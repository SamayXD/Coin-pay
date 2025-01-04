import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import BackHeader from "../../../src/components/BackHeader";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  Colors,
  screenHeight,
  screenWidth,
} from "../../../src/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "../../../src/components/ActionButton";
import { router } from "expo-router";
import ReactNativeModal from "react-native-modal";

const PersonalInfo = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Selected date:", date);
  };

  const handleBackPress = () => {
    router.back();
  };
  const handleNextClick = () => {
    router.navigate("account-setup/CountryPick");
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
          Add your personal info
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
        Full Name
      </Text>
      <View style={styles.inputContainer}>
        {/* <View style={styles.iconContainer}>
          <Ionicons name="mail-outline" size={24} color="#D4D4D4" />
        </View> */}

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
        Username
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="at" size={24} color={Colors.primary} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="#D4D4D4"
        />
      </View>
      <Text style={styles.label}>Date of Birth</Text>

      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setIsModalVisible(true)}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="calendar-clear-outline" size={24} color="#D4D4D4" />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="MM/DD/YYYY"
            value={date.toLocaleDateString()}
            placeholderTextColor="#D4D4D4"
            editable={false}
            pointerEvents="none"
          />
        </View>
      </TouchableOpacity>
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
      <ReactNativeModal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 20,
            padding: screenWidth * 0.1,
          }}
        >
          <Text>Modal</Text>
          <DateTimePicker value={date} mode="date" onChange={onChange} />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default PersonalInfo;

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
  label: {
    fontFamily: "Poppins",
    textAlign: "left",
    width: screenWidth * 0.9,
    color: "black",
    marginTop: screenHeight * 0.01,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    // borderWidth: 2,
    // borderColor: "#D4D4D4",
    padding: screenHeight * 0.01,
    width: screenWidth * 0.68,
    // borderRadius: 10,
    fontSize: 18,
    paddingVertical: screenHeight * 0.015,
  },
});
