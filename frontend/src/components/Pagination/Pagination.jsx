import React from "react";

//? import arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

//? import css
import "./Pagination.css";

const Pagination = (props) => {
  const { number } = props;
  return (
    <div className="_pagination">
      <p>Afficher les resultats :</p>
      <Arrow isRight={false} />
      <div className="_arrow ">
        <p>1</p>
      </div>
      <Arrow isRight />
    </div>
  );
};

export default Pagination;
