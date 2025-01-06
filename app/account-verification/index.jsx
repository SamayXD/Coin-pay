import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { screenHeight, screenWidth, Colors } from "../../src/utils/constants";
import BackHeader from "../../src/components/BackHeader";
import { router } from "expo-router";

const stages = [
  { id: 1, title: "Phone Verification" },
  { id: 2, title: "Document Check" },
  { id: 3, title: "Photo Verification" },
];

const StageItem = ({ number, title, isActive, isCompleted }) => (
  <View style={styles.stageItem}>
    <View style={[styles.numberCircle, isCompleted]}>
      <Text style={styles.numberText}>{number}</Text>
    </View>
    <View style={styles.stageContent}>
      <Text style={styles.stageTitle}>{title}</Text>
    </View>
    <View style={[styles.numberCircle, isCompleted && styles.completedCircle]}>
      {isCompleted ? (
        <Ionicons name="checkmark" size={16} color="white" />
      ) : (
        isActive && <ActivityIndicator color={Colors.primaryAccent} />
      )}
    </View>
  </View>
);

const AccountVerification = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStage < stages.length) {
        setCompletedStages((prev) => [...prev, currentStage]);
        setCurrentStage((prev) => prev + 1);
      } else {
        clearInterval(timer);
        router.push("account-verification/pin-setup");
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentStage]);

  const handleBackClick = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <BackHeader backAction={handleBackClick} stage={3} />
      <Image
        source={require("../../assets/ac-verify.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Setting up your account</Text>
      <Text style={styles.subtitle}>We are analyzing your data to verify</Text>

      <View style={styles.stagesList}>
        {stages.map((stage, index) => (
          <StageItem
            key={stage.id}
            number={stage.id}
            title={stage.title}
            isActive={currentStage === index}
            isCompleted={completedStages.includes(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default AccountVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: screenHeight * 0.05,
    paddingTop: screenHeight * 0.1,
  },
  stagesList: {
    width: screenWidth * 0.8,
    marginTop: screenHeight * 0.04,
  },
  stageItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  numberCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E3F2FD", // Light blue color
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  completedCircle: {
    backgroundColor: Colors.primaryAccent,
  },
  numberText: {
    fontSize: 16,

    color: Colors.primaryAccent,
  },
  stageContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  stageTitle: {
    fontSize: 16,
    color: "#333",
  },
  title: {
    fontSize: 30,
    width: screenWidth * 0.5,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.black,
    marginBottom: screenHeight * 0.02,
  },
  subtitle: {
    fontSize: 16,
    width: screenWidth * 0.7,
    textAlign: "center",
    color: "gray",
  },
  image: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.7,
    marginVertical: screenHeight * 0.03,
    resizeMode: "contain",
  },
});
