import React, { useState } from "react";
import { connect } from "dva";
function Header({ dispatch }) {
  const [txt, setTxt] = useState("");
  const handleAdd = () => {
    if (!!txt) {
      dispatch({ type: "list/add", payload: { txt } });
      setTxt("");
    }
  };
  return (
    <div>
      <input type="text" value={txt} onChange={e => setTxt(e.target.value)} />
      <input type="button" value="Add" onClick={handleAdd} />
    </div>
  );
}
export default connect()(Header);
