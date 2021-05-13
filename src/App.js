import "./styles.css";
import Buybooks from "./Redux/Components/Buybooks";
import { Provider } from "react-redux";
import Store from "./Redux/Store/Store";
export default function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <h1>REDUX</h1>
        <h2>BOOK STORE EXAMPLE</h2>
        <Buybooks />
      </div>
    </Provider>
  );
}
