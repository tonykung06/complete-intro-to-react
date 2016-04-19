const {createStore, compose} = require('redux');
const {connect} = require('react-redux');
const {shows} = require('../public/data');

const SET_SEARCH_TERM = 'setSearchTerm';
const initialState = {
  searchTerm: '',
  shows
};

const reduceSearchTerm = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {
    searchTerm: action.value
  });

  return newState;
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action);
    default:
      return state;
  }
};

// const store = createStore(rootReducer);
// setup redux devtool
const store = createStore(rootReducer, initialState, compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
));

// could create different connectors for different components, i.e. a connector should cater for the need of a component
// ,so this could be defined in component files
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  shows: state.shows
});
const mapDispatchToProps = dispatch => {
  return {
    setSearchTerm(searchTerm) {
      dispatch({
        type: SET_SEARCH_TERM,
        value: searchTerm
      });
    }
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);

module.exports = {
  connector,
  store,
  rootReducer
};
