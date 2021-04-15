import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function PartyPage({ navigation, data }) {
  return (
    <View style={styles.root}>
      <Animatable.View animation="fadeInDown">
        <ScrollView>
          {data.map((item) => (
            <TouchableWithoutFeedback
              key={item.title}
              onPress={() => navigation.navigate("PartyDetail", item)}
            >
              <View style={styles.card}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.image}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 10,
  },
  card: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 10,
    shadowRadius: 10,
    shadowColor: "gray",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 4,
  },
  title: {
    fontSize: 25,
    color: "#262620",
    fontWeight: "bold",
  },

  description: {
    fontSize: 15,
  },
});
