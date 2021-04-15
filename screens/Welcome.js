import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: "#fff",
            },
          ]}
        >
          Get Connected to world
        </Text>
        <Text style={styles.text}>Join the new year party now</Text>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("HNYForm")}
          >
            <MaterialIcons name="navigate-next" color="#fff" size={20} />
            <Text style={styles.login_txt}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Welcome;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(125, 67, 139)",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "rgb(22, 61, 97)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#ffcf",
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  login_txt: {
    color: "orange",
    marginTop: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 6,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    borderWidth: 0.5,
    borderColor: "#fff",
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
