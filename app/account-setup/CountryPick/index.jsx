import {
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import BackHeader from "../../../src/components/BackHeader";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ReactNativeModal from "react-native-modal";

import { screenHeight, screenWidth } from "../../../src/utils/constants";
import ActionButton from "../../../src/components/ActionButton";

const AccountSetup = () => {
  const [country, setCountry] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const countries = [
    { name: "Australia", code: "AU" },
    { name: "Bangladesh", code: "BD" },
    { name: "Brazil", code: "BR" },
    { name: "Canada", code: "CA" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Italy", code: "IT" },
    { name: "Japan", code: "JP" },
    { name: "Malaysia", code: "MY" },
    { name: "Mexico", code: "MX" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Pakistan", code: "PK" },
    { name: "Russia", code: "RU" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Singapore", code: "SG" },
    { name: "South Africa", code: "ZA" },
    { name: "South Korea", code: "KR" },
    { name: "Spain", code: "ES" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Thailand", code: "TH" },
    { name: "Turkey", code: "TR" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
  ];

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountryChange = (text) => {};

  const handleBackClick = () => {
    // router.navigate("registration/verifyPhone");

    router.back();
  };

  const handleNextClick = () => {
    router.navigate("account-verification");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <BackHeader backAction={handleBackClick} stage={2} />
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
          Country of Residence
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
        Country
      </Text>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.selectorText}>
          {selectedCountry ? selectedCountry.name : "Select Country"}
        </Text>
        <Ionicons name="chevron-down" size={24} color="#D4D4D4" />
      </TouchableOpacity>

      <ReactNativeModal
        swipeDirection={["down"]}
        onSwipeComplete={() => setIsModalVisible(false)}
        dragFromTopOnly={true}
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        animationInTiming={200}
        animationOutTiming={500}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: screenWidth * 0.1,
              backgroundColor: "gray",
              height: 5,
              borderRadius: 5,
              marginBottom: screenHeight * 0.02,
              alignSelf: "center",
              opacity: 0.5,
            }}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search countries..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          <FlatList
            data={filteredCountries}
            keyExtractor={(item, index) => index}
            style={
              {
                // paddingBottom: screenHeight * 0.1,
              }
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.countryItem}
                onPress={() => {
                  setSelectedCountry(item);
                  setIsModalVisible(false);
                }}
              >
                <Text style={styles.countryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ReactNativeModal>

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

export default AccountSetup;

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
  selector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    width: screenWidth * 0.9,
  },
  selectorText: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#333",
  },
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: screenHeight * 0.7,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  countryItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  countryName: {
    fontSize: 16,
    fontFamily: "Poppins",
  },
});
