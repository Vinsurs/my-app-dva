import React from "react";

export default function Footer({ list }) {
  return (
    <div>
      <span>
        {list.length > 0
          ? `还有${list.length}条代办项，努力哦`
          : "恭喜你，已完成所有任务"}
      </span>
    </div>
  );
}
