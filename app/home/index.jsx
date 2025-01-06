import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Colors, screenHeight, screenWidth } from "../../src/utils/constants";
import { ScreenTransition } from "react-native-reanimated";
import HomeMainScreen from "../home/main-home/HomeMainScreen";
import StatsScreen from "../home/stats/StatsScreen";
import ChatScreen from "../home/chat/ChatScreen";
import ProfileScreen from "../home/profile/ProfileScreen";
import ScanScreen from "../home/scan/ScanScreen";
import { StatusBar } from "expo-status-bar";

const Screens = ({ currentScreen }) => {
  console.log(currentScreen);
  return currentScreen === "home" ? (
    <HomeMainScreen />
  ) : currentScreen === "stats" ? (
    <StatsScreen />
  ) : currentScreen === "chat" ? (
    <ChatScreen />
  ) : currentScreen === "profile" ? (
    <ProfileScreen />
  ) : currentScreen === "scan" ? (
    <ScanScreen />
  ) : null;
};

const home = () => {
  const [currentScreen, setCurrentScreen] = React.useState("home");

  const activeIcons = {
    home: "home-sharp",
    stats: "pie-chart-sharp",
    chat: "chatbubbles-sharp",
    profile: "person-sharp",
    scan: "scan",
  };

  const inactiveIcons = {
    home: "home-outline",
    stats: "pie-chart-outline",
    chat: "chatbubbles-outline",
    profile: "person-outline",
    scan: "scan",
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
      }}
    >
      {/* Main Home */}
      <View
        style={{
          flex: 1,
        }}
      >
        <Screens currentScreen={currentScreen} />
      </View>

      {/* Bottom Navigation */}
      <View
        style={{
          backgroundColor: "#FFFFFF",

          borderRadius: 15,
          width: screenWidth * 0.9,
          height: screenHeight * 0.08,
          position: "absolute",
          bottom: screenHeight * 0.05,
          overflow: "visible",
          // zIndex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => setCurrentScreen("home")}
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: screenHeight * 0.02,
          }}
        >
          <Ionicons
            name={
              currentScreen === "home" ? activeIcons.home : inactiveIcons.home
            }
            size={24}
            color={currentScreen === "home" ? Colors.primaryAccent : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentScreen("stats")}
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: screenHeight * 0.02,
          }}
        >
          <Ionicons
            name={
              currentScreen === "stats"
                ? activeIcons.stats
                : inactiveIcons.stats
            }
            size={24}
            color={currentScreen === "stats" ? Colors.primaryAccent : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("scan")}>
          <View
            style={{
              backgroundColor: Colors.primaryAccent,

              alignItems: "center",
              marginHorizontal: 10,
              borderRadius: 10,
              padding: screenHeight * 0.02,

              felx: 1,
              // zIndex: 2,
              // overflow: "visible",
            }}
          >
            <Ionicons
              name={
                currentScreen === "scan" ? activeIcons.scan : inactiveIcons.scan
              }
              size={24}
              color="white"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentScreen("chat")}
          style={{
            flex: 1,
            alignItems: "center",

            paddingVertical: screenHeight * 0.02,
          }}
        >
          <Ionicons
            name={
              currentScreen === "chat" ? activeIcons.chat : inactiveIcons.chat
            }
            size={24}
            color={currentScreen === "chat" ? Colors.primaryAccent : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentScreen("profile")}
          style={{
            flex: 1,
            paddingVertical: screenHeight * 0.02,
            alignItems: "center",
          }}
        >
          <Ionicons
            name={
              currentScreen === "profile"
                ? activeIcons.profile
                : inactiveIcons.profile
            }
            size={24}
            color={currentScreen === "profile" ? Colors.primaryAccent : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
