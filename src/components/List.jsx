import React from "react";
export default function List({ list, dispatch }) {
  return (
    <div>
      <ul>
        {list.map((txt, key) => (
          <li key={key}>
            <span>{txt}</span>
            <button
              onClick={() =>
                dispatch({ type: "list/delete", payload: { key } })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
