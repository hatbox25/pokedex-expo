import { connect } from 'react-redux';

import <%= pascalEntityName %> from './<%= pascalEntityName %>.component';

const mapStateToProps = state => ({
  value: state.someState,
});
const mapDispatchToProps = { someAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(<%= pascalEntityName %>);
