import React from "react";
import "./Error.scss";
import error from "../../Image/Error.jpg";

const Error = () => {
  return (
    <div className="errorView">
      <img src={error} alt="error" />
      <div className="errorText">
        오류가 발생하였습니다.
        <br />
        잠시 후 재 접속 부탁드리겠습니다..
      </div>
    </div>
  );
};

export default Error;
