import React, { PureComponent } from "react";
import { View, ScrollView, Text, ActivityIndicator, Image } from "react-native";
import get from "lodash.get";
import { capitalizeWord } from "../../utils/string.util";
import TextValue from "../../components/TextValue/TextValue.component";

import config from "./DetailPage.config";
import styles from "./DetailPage.styles";

import defaultStyle from "../../constant/styles";

class DetailPage extends PureComponent {
  componentDidMount() {
    const {
      getPokemon,
      route: {
        params: { pokemonId }, // get pokemon id pushed by navigation
      },
    } = this.props;
    getPokemon(pokemonId).then((result) => {
      this.props.navigation.setOptions({
        title: `Detail Pokemon: ${capitalizeWord(result.name)}`,
      });
    });
  }

  renderPokemonImages = (data) => (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: get(data, "sprites.front_default"),
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: get(data, "sprites.back_default"),
        }}
      />
    </View>
  );

  renderGeneralInfo = (data) => (
    <View style={styles.detailContainer}>
      <TextValue label="Base Experience" value={get(data, "base_experience")} />

      <TextValue label="Height" value={get(data, "height")} />

      <TextValue label="Weight" value={get(data, "weight")} />
    </View>
  );

  renderListInfo = (title, list, key) => (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>{title}</Text>
      <Text style={styles.listItem}>
        {list.map((item, index) =>
          index === 0
            ? get(item, `${key}.name`)
            : `, ${get(item, `${key}.name`)}`
        )}
      </Text>
    </View>
  );

  renderStats = (data) => (
    <View style={styles.statContainer}>
      <Text style={styles.statTitle}>Stats</Text>
      {get(data, "stats", []).map((stat) => (
        <TextValue
          label={capitalizeWord(get(stat, "stat.name"))}
          value={get(stat, "base_stat")}
        />
      ))}
    </View>
  );

  render() {
    const { data, loading } = this.props.pokemon;
    if (loading)
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={defaultStyle.primaryColor} />
        </View>
      );
    return (
      <ScrollView contentContainerStyle={styles.content}>
        {this.renderPokemonImages(data)}
        {this.renderGeneralInfo(data)}
        {this.renderListInfo("Types", get(data, "types", []), "type")}
        {this.renderStats(data)}
        {this.renderListInfo(
          "Abilities",
          get(data, "abilities", []),
          "ability"
        )}
        {this.renderListInfo("Moves", get(data, "moves", []), "move")}
      </ScrollView>
    );
  }
}

DetailPage.displayName = config.displayName;
DetailPage.defaultProps = config.defaultProps;
DetailPage.propTypes = config.propTypes;

export default DetailPage;
