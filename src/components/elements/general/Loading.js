import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <ThreeDots
        height="55"
        width="80"
        radius="9"
        color="#465293"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: " 0 auto" }}
        visible={true}
      />
    </div>
  );
}

export default Loading;
