import PropTypes from "prop-types";

const displayName = "ListPage";
const propTypes = {
  getPokemonList: PropTypes.func.isRequired,
  getPokemonByType: PropTypes.func.isRequired,
  pokemons: PropTypes.shape({
    data: PropTypes.array,
    loading: PropTypes.bool,
  }),
};
const defaultProps = {};

export default { displayName, propTypes, defaultProps };
