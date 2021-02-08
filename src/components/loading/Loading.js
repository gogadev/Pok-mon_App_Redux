import React from "react";

import loadingImg from "../../assets/loading.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
