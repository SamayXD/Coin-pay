import { StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  screenHeight,
  screenWidth,
  Colors,
} from "../../../src/utils/constants";
import BackHeader from "../../../src/components/BackHeader";
import { router } from "expo-router";
import ActionButton from "../../../src/components/ActionButton";

const PinSetup = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleBackPress = () => {
    router.back();
  };

  const handleNext = () => {
    router.navigate("home");
  };

  const handlePinChange = (text, index) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <BackHeader stage={4} backAction={handleBackPress} />
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
          Create Passcode
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

      <View style={styles.pinContainer}>
        {Array(4)
          .fill()
          .map((_, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[
                styles.pinInput,

                pin[index] ? styles.filledPin : styles.emptyPin,
              ]}
              value={pin[index]}
              onChangeText={(text) => handlePinChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              secureTextEntry={true}
            />
          ))}
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          marginBottom: screenHeight * 0.1,
        }}
      >
        <ActionButton text="Continue" action={handleNext} type="primary" />
      </View>
    </View>
  );
};

export default PinSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  pinContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: screenWidth * 0.01,
    marginTop: screenHeight * 0.05,
  },
  pinInput: {
    width: screenWidth * 0.15,
    height: screenWidth * 0.15,
    borderRadius: screenWidth * 0.075,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  emptyPin: {
    backgroundColor: "#F4F4F4",
    color: "gray",
  },
  filledPin: {
    // backgroundColor: "#333333",
    color: "black",
  },
});
