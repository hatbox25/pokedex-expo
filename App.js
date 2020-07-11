import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import NavigationProvider from "./src/navigation/NavigationProvider";

console.disableYellowBox = true;

// eslint-disable-next-line no-undef
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <NavigationProvider />
      </Provider>
    );
  }
}
