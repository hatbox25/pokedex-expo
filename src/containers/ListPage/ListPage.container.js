import { connect } from "react-redux";

import ListPage from "./ListPage.component";

import {
  getPokemonList,
  getPokemonByType,
} from "../../redux/actions/list.action";

const mapStateToProps = (state) => ({
  pokemons: state.list,
});
const mapDispatchToProps = { getPokemonList, getPokemonByType };

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
