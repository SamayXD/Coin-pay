import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import BackHeader from "../../../src/components/BackHeader";
import {
  Colors,
  screenHeight,
  screenWidth,
} from "../../../src/utils/constants";
import ActionButton from "../../../src/components/ActionButton";

const VerifyPhone = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <BackHeader />
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
          Confirm your phone
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
          We have sent a verification code to your phone number. Please enter
          the code below.
        </Text>
      </View>

      <View style={styles.container}>
        {Array(6)
          .fill()
          .map((_, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[styles.input, otp[index] ? styles.filledInput : null]}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              value={otp[index]}
            />
          ))}
      </View>

      <View
        style={{
          width: screenWidth * 0.9,
          marginTop: screenHeight * 0.04,
          backgroundColor: "#FFFFFF",
          flex: 1,
          flexDirection: "row",
          gap: screenWidth * 0.02,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "Poppins",
            textAlign: "center",

            color: "#333333",
          }}
        >
          Didn't receive the code?
        </Text>
        <TouchableOpacity
          style={{
            height: screenHeight * 0.06,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontFamily: "Poppins",
              color: Colors.primaryAccent,
            }}
          >
            Resend
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          marginTop: screenHeight * 0.05,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: screenHeight * 0.1,
        }}
      >
        <ActionButton text="Verify" type="primary" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: screenHeight * 0.04,
    width: screenWidth * 0.75,
  },
  input: {
    width: screenWidth * 0.1,
    height: screenHeight * 0.06,
    borderBottomWidth: 1.5,
    borderColor: "#CCCCCC",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Poppins",
  },
  filledInput: {
    borderColor: Colors.primaryAccent,
    color: Colors.primaryAccent,
    fontWeight: "600",
  },
});

export default VerifyPhone;
