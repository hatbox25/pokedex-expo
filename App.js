import React from "react";
import { StyleSheet, Text, ScrollView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detail")}
      />
    </ScrollView>
  );
}

function DetailScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Detail Screen</Text>
    </ScrollView>
  );
}
export default class App extends React.PureComponent {
  _testCall = () => {
    console.log("abcd");
  };

  componentDidMount() {
    this._testCall();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={HomeScreen}
            options={{
              title: "Browse Pokedex",
              headerStyle: {
                backgroundColor: "rgb(24,26,31)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
