import React from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HappyNewYearForm from "./screens/HappyNewYearForm";
import Icon from "react-native-vector-icons/FontAwesome";
import PartyPage from "./screens/PartyPage";
import PartyDetail from "./screens/PartyDetailPage";
import Welcome from "./screens/Welcome";
import CreateParty from "./screens/CreateParty";
import { Avatar, Title } from "react-native-paper";
const Stack = createStackNavigator();

const headerLeft = () => (
  <View
    style={{ flexDirection: "row", paddingVertical: 15, paddingHorizontal: 5 }}
  >
    <Avatar.Image
      source={{
        uri:
          "https://lh3.googleusercontent.com/ogw/ADGmqu-nuV0ZgVE5_03umB6O1Bk_SO-Kty1FV9yFHhHbqg=s32-c-mo",
      }}
      size={40}
    />
    <View style={{ marginLeft: 15, flexDirection: "column" }}>
      <Title>Razz Sawhoney</Title>
    </View>
  </View>
);

const data = [
  {
    title: "Have a wonderful days ahead!",
    description: "Enjoy your days to come and motivate others too",
    image:
      "https://1.bp.blogspot.com/-eYsS8ZkoBlI/YEPdPzCjDyI/AAAAAAAAZ5c/HUN5cZq4E50WXEUWu98d-ndVXwi9AuTJwCLcBGAsYHQ/s1662/Happy%2BNew%2BYear%2B2078%2BImages%2B%25286%2529.jpg",
  },
  {
    title: "Happy New Year!",
    description: "Enjoy your days to come and motivate others too",
    image:
      "https://wilstar.com/wp-content/uploads/2020/12/new-years-day-1-e1607420497339.jpg",
  },
  {
    title: "Have a good life!",
    description: "Enjoy your days to come and motivate others too",
    image:
      "https://www.mayaprakash.com.np/wp-content/uploads/2020/12/Happy-New-Year-2021.jpg",
  },
  {
    title: "Stay Safe and Healthy!",
    description: "Enjoy your days to come and motivate others too",
    image: "https://vclock.com/timer/new-years-day/2078/image.jpg",
  },
  {
    title: "Always follow good Peoples",
    description: "Enjoy your days to come and motivate others too",
    image:
      "https://images.twinkl.co.uk/tw1n/image/private/s--bAsacYBM--/q_auto:eco,w_740/v1/u/event/image/fireworks-1404647285rwt-1596457006.jpg",
  },
  {
    title: "Enjoy the life like there is no tomorrow!",
    description: "Enjoy your days to come and motivate others too",
    image:
      "https://www.aspirantsg.com/wp-content/uploads/2018/12/Marina-Bay-Countdown-2018-AspirantSG.jpg",
  },
  {
    title: "Try to hack the things where you feel the Happiness!",
    description: "Enjoy your days to come and motivate others too",
    image:
      "https://interfacio.com/wp-content/uploads/Singapore-2021-fireworks.jpg",
  },
];

function App() {
  const [list, setList] = React.useState(data);
  const headerRight = () => (
    <View
      style={{
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Icon
        style={{ paddingHorizontal: 10 }}
        name="search"
        size={25}
        color="rgb(8, 8, 8)"
      />
      <Icon
        style={{ paddingHorizontal: 10 }}
        name="filter"
        size={25}
        color="rgb(8, 8, 8)"
      />
      <CreateParty
        opener={
          <Icon
            style={{ paddingHorizontal: 10 }}
            name="pencil"
            size={25}
            color="rgb(8, 8, 8)"
          />
        }
        setList={setList}
      />
    </View>
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: "HNY-2078 BS",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="HNYForm"
        component={HappyNewYearForm}
        options={{
          title: "New Year Party Form",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="Party"
        options={{
          title: null,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerLeft: headerLeft,
          headerRight: headerRight,
        }}
      >
        {(props) => <PartyPage {...props} data={list} />}
      </Stack.Screen>
      <Stack.Screen
        name="PartyDetail"
        component={PartyDetail}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerLeft: headerLeft,
          headerRight: headerRight,
        }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
