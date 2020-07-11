import React from "react";
import { View, Text } from "react-native";

import config from "./TextValue.config";
import styles from "./TextValue.styles";

const TextValue = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

TextValue.displayName = config.displayName;
TextValue.defaultProps = config.defaultProps;
TextValue.propTypes = config.propTypes;

export default TextValue;
