export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case "ADD_BAND":
    console.log("ACTION", action)
      return { ...state, bands: state.bands.concat(action.payload)};
    default:
      return state
  }
};
