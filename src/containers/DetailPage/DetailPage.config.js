import PropTypes from "prop-types";

const displayName = "DetailPage";
const propTypes = {
  pokemon: PropTypes.shape({
    data: PropTypes.object,
    loading: PropTypes.loading,
  }),
  getPokemon: PropTypes.func.isRequired,
  route: PropTypes.object,
};
const defaultProps = {};

export default { displayName, propTypes, defaultProps };
