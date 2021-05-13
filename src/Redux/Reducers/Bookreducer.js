import Initialstate from "./Initialstate";
import ACTION from "../Actions/Actiontypes";
const Bookreducer = (state = Initialstate, action) => {
  switch (action.type) {
    case ACTION.BUY_BOOK:
      return {
        ...state,
        Noofbooks: state.Noofbooks - 1
      };
    default:
      return state;
  }
};
export default Bookreducer;
