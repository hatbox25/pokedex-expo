import { connect } from "react-redux";

import DetailPage from "./DetailPage.component";

import { getPokemon } from "../../redux/actions/detail.action";

const mapStateToProps = (state) => ({
  pokemon: state.detail,
});
const mapDispatchToProps = { getPokemon };

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
