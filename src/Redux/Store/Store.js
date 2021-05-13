import { createStore } from "redux";
import Bookreducer from "../Reducers/Bookreducer";

const store = createStore(Bookreducer);
export default store;
