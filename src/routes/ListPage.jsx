import React, { useEffect } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";
import { connect } from "dva";
function ListPage({ list, dispatch }) {
  useEffect(() => {
    dispatch({ type: "list/getList" });
  }, []);
  return (
    <div>
      <Header dispatch={dispatch} />
      <List list={list} dispatch={dispatch} />
      <Footer list={list} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list
  };
};
export default connect(mapStateToProps)(ListPage);
