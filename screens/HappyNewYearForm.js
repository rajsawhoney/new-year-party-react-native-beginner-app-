import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  StatusBar,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HappyNewYearForm({ navigation }) {
  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground
          source={{
            uri:
              "https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?size=626&ext=jpg&ga=GA1.2.1937569697.1617235200",
          }}
          style={{ width: windowWidth, height: "60%" }}
        />
        <Animatable.View style={styles.subContainer} animation="zoomInDown">
          <Text style={styles.subContainerHeader}>Happy New Year 2078</Text>
          <Text style={styles.subContainerSubHeader}>
            Please fill this form in order to take part in 2078 New Year Party
          </Text>
          <ScrollView>
            {/* Full Name */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Full Name"
                keyboardType="default"
              />
            </View>
            {/* Email */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Email"
                keyboardType="email-address"
              />
            </View>
            {/* Phone Number */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Phone Number"
                keyboardType="phone-pad"
              />
            </View>
            {/* Gender */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Gender</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Gender"
                keyboardType="default"
              />
            </View>
            {/* Birthdate */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Birthdate</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Birthdate"
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Party")}>
              <View style={styles.buttonWrapper}>
                <Text style={{ color: "#ffff", textAlign: "center" }}>
                  SUBMIT
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerTxt: {
    fontSize: 30,
    color: "white",
    paddingTop: 20,
    textAlign: "center",
  },
  subContainerSubHeader: {
    fontSize: 15,
    color: "rgb(212, 122, 12)",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 20,
    marginHorizontal: 30,
    borderBottomWidth: 1.5,
    borderBottomColor: "rgb(14, 118, 138)",
  },
  subContainerHeader: {
    fontSize: 30,
    color: "rgb(22, 121, 9)",
    textAlign: "center",
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  subContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 80,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: windowWidth,
    maxHeight: windowHeight - 150,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  inputWrapper: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "purple",
  },
  inputLabel: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
