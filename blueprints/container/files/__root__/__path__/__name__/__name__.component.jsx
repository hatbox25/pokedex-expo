import React, { PureComponent } from 'react';
import { View } from 'react-native';

import config from './<%= pascalEntityName %>.config';
import styles from './<%= pascalEntityName %>.styles';

class <%= pascalEntityName %> extends PureComponent {
  componentDidMount() {
    // place your API or redux action call here
    const { update } = this.props;
    update('called');
  }

  render() {
    return (
      <View>
        This is smart component
      </View>
    );
  }
}

<%= pascalEntityName %>.displayName = config.displayName;
<%= pascalEntityName %>.defaultProps = config.defaultProps;
<%= pascalEntityName %>.propTypes = config.propTypes;

export default <%= pascalEntityName %>;
