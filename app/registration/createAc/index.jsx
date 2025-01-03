import {
  Button,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import BackHeader from "../../../src/components/BackHeader";
import { screenHeight, screenWidth } from "../../../src/utils/constants";
import { TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "../../../src/components/ActionButton";
import ReactNativeModal from "react-native-modal";
import { useRouter } from "expo-router";

const CreateAccount = () => {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleBackPress = () => {
    router.back();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    // console.log("modal visible", isModalVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        topPadding: screenHeight * 0.07,
      }}
    >
      <BackHeader backAction={handleBackPress} />
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
          Enter your mobile number to verify your account.
        </Text>
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          marginTop: screenHeight * 0.02,
          backgroundColor: "#FFFFFF",
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "Poppins",
            textAlign: "left",
            width: screenWidth * 0.9,
            color: "black",
            marginBottom: screenHeight * 0.01,
          }}
        >
          Phone
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: screenWidth * 0.02,
          }}
        >
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "#D4D4D4",
              padding: screenHeight * 0.01,
              width: screenWidth * 0.2,
              borderRadius: 10,
              fontSize: 18,
              paddingVertical: screenHeight * 0.015,
            }}
            placeholder="+91"
            value={countryCode}
            onChangeText={setCountryCode}
            keyboardType="phone-pad"
          />
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "#D4D4D4",
              padding: screenHeight * 0.01,
              width: screenWidth * 0.68,
              borderRadius: 10,
              fontSize: 18,
              paddingVertical: screenHeight * 0.015,
            }}
            placeholder="Mobile Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholderTextColor={"#D4D4D4"}
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

            marginTop: screenHeight * 0.02,
          }}
        >
          Password
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="lock-closed" size={24} color="#D4D4D4" />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#D4D4D4"
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.showHideButton}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#D4D4D4"
            />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: screenWidth * 0.9,
          justifyContent: "flex-end",
          paddingBottom: screenHeight * 0.1,
        }}
      >
        <ActionButton
          text="Next"
          type="primary"
          action={() => {
            toggleModal();
          }}
        />
      </View>

      <ReactNativeModal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: screenWidth * 0.05,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity
            onPress={toggleModal}
            style={{
              width: screenWidth * 0.9,
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="close-outline"
              size={28}
              color="gray"
              style={{ alignSelf: "flex-end", marginRight: screenWidth * 0.05 }}
            />
          </TouchableOpacity>

          <Image
            style={{
              width: screenWidth * 0.4,
              height: screenHeight * 0.2,
            }}
            source={require("../../../src/assets/illustrations/verify-illustration.png")}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              lineHeight: 36,
              fontFamily: "Poppins",
              textAlign: "center",
              width: "100%",
              marginVertical: screenHeight * 0.02,
            }}
          >
            Verify your phone number before we send code
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: screenWidth * 0.01,
            }}
          >
            <Text>is this correct? </Text>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {phoneNumber}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              gap: screenWidth * 0.02,
              marginTop: screenHeight * 0.04,
              marginBottom: screenHeight * 0.04,
            }}
          >
            <ActionButton
              text="Yes"
              type="primary"
              action={() => {
                toggleModal();
                router.push("registration/verifyPhone");
              }}
            />
            <ActionButton
              text="No"
              type="secondary"
              action={() => {
                console.log("no");
                toggleModal();
              }}
            />
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D4D4D4",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: screenHeight * 0.015,
  },
  showHideButton: {
    padding: 10,
  },
});
