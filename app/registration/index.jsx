import { StyleSheet, Text, View, Image } from "react-native";
import { screenWidth, screenHeight, Colors } from "../../src/utils/constants";
import React from "react";
import ActionButton from "../../src/components/ActionButton";

const Registration = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text>[back]</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../src/assets/illustrations/create-ac.png")}
        />
      </View>

      <Text style={styles.title}>Create your Coinpay account</Text>
      <Text style={styles.subtitle}>
        Coinpay is a digital wallet that allows you to send and receive money
        from anywhere in the world.
      </Text>

      <View style={styles.buttonContainer}>
        <ActionButton text={"Sign up"} type={"primary"} />
        <ActionButton text={"Log in"} type={"secondary"} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>By continuing, you accept our</Text>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Terms of Service</Text>
          <Text style={styles.text}>and</Text>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: screenWidth * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: screenWidth,
    padding: 20,
    borderBottomColor: "#D1D1D6",
    borderBottomWidth: 2,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth,
    padding: 20,
  },
  image: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.3,
    marginTop: screenHeight * 0.05,
  },
  title: {
    fontSize: 34,
    fontWeight: "600",
    fontFamily: "Poppins",
    textAlign: "center",
    width: screenWidth * 0.8,
    marginTop: screenHeight * 0.05,
    marginBottom: screenHeight * 0.02,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Poppins",
    textAlign: "center",
    width: screenWidth * 0.9,
    color: "#333333",
    marginBottom: screenHeight * 0.02,
  },
  buttonContainer: {
    width: "100%",
    gap: 10,
    justifyContent: "space-between",
  },
  footer: {
    alignItems: "center",
    marginTop: screenHeight * 0.05,
    justifyContent: "center",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  linkText: {
    color: Colors.primaryAccent,
    textDecorationLine: "underline",
    lineHeight: 24,
    fontWeight: "500",
  },
  text: {
    lineHeight: 24,
  },
});
