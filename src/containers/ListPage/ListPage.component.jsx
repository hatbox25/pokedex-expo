import React, { PureComponent } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";

import { capitalizeWord } from "../../utils/string.util";

import config from "./ListPage.config";
import styles from "./ListPage.styles";

import defaultStyle from "../../constant/styles";

const POKEMON_TYPE = [
  {
    id: "4",
    name: "Poison",
  },
  {
    id: "5",
    name: "Ground",
  },
  {
    id: "9",
    name: "Steel",
  },
];

class ListPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bottomSheetOpen: false,
      selectedType: "",
    };

    this.bottomSheetRef = React.createRef();
  }
  componentDidMount() {
    // call api to get pokemon list in first time
    this._getPokemonList(true, false)();
  }

  _getPokemonList = (isRefresh, isAppend) => () => {
    if (!(isAppend && this.state.selectedType)) {
      // don't allow call api when endreact with selected filter
      const {
        pokemons: { data },
        getPokemonList,
      } = this.props;
      const params = {
        limit: 20,
        offset: !isRefresh ? data.length : 0,
      };
      this.setState({ selectedType: "" });
      getPokemonList(params, isAppend);
    }
  };

  _onClickPokemonItem = (url) => () => {
    console.log(url.split("/")[6]);
  };

  renderItem = ({ item: { name, url }, index }) => {
    return (
      <TouchableOpacity
        style={styles.itemRow(index)}
        onPress={this._onClickPokemonItem(url)}
      >
        <Text style={{ color: defaultStyle.secondaryColor }}>
          {capitalizeWord(name)}
        </Text>
        <Text style={{ color: defaultStyle.secondaryColor }}>{">"}</Text>
      </TouchableOpacity>
    );
  };

  renderBottomSheetHeader = () => {
    const { selectedType, bottomSheetOpen } = this.state;
    let headerText = "Pull for Filter by Type";
    if (bottomSheetOpen) {
      headerText = "Select Pokemon Type";
    } else if (selectedType) {
      headerText = `Selected type: ${this.state.selectedType}, pull to change`;
    }
    return (
      <View style={styles.bottomSheetHeader}>
        <Text style={{ color: defaultStyle.primaryColor }}>{headerText}</Text>
      </View>
    );
  };

  _onClickFilterItem = () => {
    this.setState({ selectedType: type.name }, () => {
      this.props.getPokemonByType(type.id);
      this.bottomSheetRef.current.snapTo(0); // to close bottom sheet
    });
  };

  renderFilterOption = (type) => () => (
    <TouchableOpacity
      testID={`filter_type_${type.name}`}
      style={styles.buttonOption(this.state.selectedType === type.name)}
      onPress={this._onClickFilterItem(type)}
    >
      <Text>{type.name}</Text>
    </TouchableOpacity>
  );

  renderBottomSheetContent = () => (
    <View style={styles.bottomSheetContent}>
      <View style={styles.optionRow}>
        {POKEMON_TYPE.map(this.renderFilterOption)}
      </View>
    </View>
  );

  _setBottomSheet = (bottomSheetOpen) => () => {
    this.setState({ bottomSheetOpen });
  };

  render() {
    const { data, loading } = this.props.pokemons;
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={loading}
          onRefresh={this._getPokemonList(true, false)}
          onEndReached={this._getPokemonList(false, true)}
          onEndReachedThreshold={0}
          style={{ width: "100%" }}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.url}
        />
        <BottomSheet
          ref={this.bottomSheetRef}
          enabledManualSnapping
          snapPoints={[32, 100]}
          onOpenEnd={this._setBottomSheet(true)}
          onCloseEnd={this._setBottomSheet(false)}
          renderContent={this.renderBottomSheetContent}
          renderHeader={this.renderBottomSheetHeader}
        />
      </View>
    );
  }
}

ListPage.displayName = config.displayName;
ListPage.defaultProps = config.defaultProps;
ListPage.propTypes = config.propTypes;

export default ListPage;
