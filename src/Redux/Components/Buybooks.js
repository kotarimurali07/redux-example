import React from "react";
import { connect } from "react-redux";
import { Buybook } from "../Actions/Actioncreators";
const Buybooks = (props) => {
  const { Noofbooks, _Buybook } = props;
  return (
    <div>
      <p>TOTAL NO OF BOOKS:{Noofbooks}</p>
      <button onClick={() => _Buybook()}>clickhere</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    Noofbooks: state.Noofbooks
    //Bookreducer:state.Bookreducer
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _Buybook: () => dispatch(Buybook())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buybooks);
