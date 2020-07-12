import PropTypes from "prop-types";

const displayName = "TextValue";
const propTypes = {
  label: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const defaultProps = {
  label: "label",
  value: "Value",
};

export default { displayName, propTypes, defaultProps };
