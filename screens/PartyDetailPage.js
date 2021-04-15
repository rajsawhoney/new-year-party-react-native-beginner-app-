import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function PartyDetail({ route, navigation }) {
  const { image, title, description } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description}. Each property can be run through an interpolation
          first. An interpolation maps input ranges to output ranges, typically
          using a linear interpolation but also supports easing functions. By
          default, it will extrapolate the curve beyond the ranges given, but
          you can also have it clamp the output value.For example, you may want
          to think about your Animated.Value as going from 0 to 1, but animate
          the position from 150px to 0px and the opacity from 0 to 1. This can
          be done by modifying style from the example above like so: easing
          functions. By default, it will extrapolate the curve beyond the ranges
          given, but you can also have it clamp the output value. For example,
          you may want to think about your Animated.Value as going from 0 to 1,
          but animate the position from 150px to 0px and the opacity from 0 to
          1. This can be done by modifying style from the example above like so:
        </Text>
        <Button title="Go Back" onPress={() => navigation.navigate("Party")} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  description: {
    fontSize: 17,
    paddingHorizontal: 15,
    paddingVertical: 20,
    color: "#0009",
  },
});
