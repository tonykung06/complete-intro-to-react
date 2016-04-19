import {createStore} from 'redux';
import {connect} from 'react-redux';

const SET_SEARCH_TERM = 'setSearchTerm';
const initialState = {
  searchTerm: ''
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

const store = createStore(rootReducer);

// could create different connectors for different components, i.e. a connector should cater for the need of a component
// ,so this could be defined in component files
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
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

export {
  connector,
  store
};
