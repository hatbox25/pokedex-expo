import PropTypes from "prop-types";

const displayName = "TextValue";
const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
const defaultProps = {};

export default { displayName, propTypes, defaultProps };
