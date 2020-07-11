import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import defaultStyle from "../constant/styles";
import routes from "./NavigationRoute";

const Stack = createStackNavigator();

export default class NavigationProvider extends React.PureComponent {
  render() {
    const defaultHeaderOptions = {
      headerStyle: {
        backgroundColor: defaultStyle.secondaryColor,
      },
      headerTintColor: defaultStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerBackTitle: "Title",
    };

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {routes.map((route) => (
            <Stack.Screen
              key={`key_${route.name}`}
              name={route.name}
              component={route.component}
              options={{
                ...defaultHeaderOptions,
                ...route.options,
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
