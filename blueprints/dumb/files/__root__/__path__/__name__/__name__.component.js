import React from 'react';
import { View } from 'react-native';

import config from './<%= pascalEntityName %>.config';
import styles from './<%= pascalEntityName %>.styles';

const <%= pascalEntityName %> = ({...props}) => {
  return (
    <View>
      This in dumb component
    </View>
  );
}

<%= pascalEntityName %>.displayName = config.displayName;
<%= pascalEntityName %>.defaultProps = config.defaultProps;
<%= pascalEntityName %>.propTypes = config.propTypes;

export default <%= pascalEntityName %>;
