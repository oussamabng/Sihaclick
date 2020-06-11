import React from "react";

//? import arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

//? import css
import "./Pagination.css";

const Pagination = (props) => {
  const { isFrench } = props;
  return (
    <>
      {!isFrench ? (
        <div className="_pagination">
          <p>{!isFrench ? "Afficher les resultats" : "اعرض النتائج"} :</p>
          <Arrow isRight={false} />
          <div className="_arrow ">
            <p>1</p>
          </div>
          <Arrow isRight />
        </div>
      ) : (
        <div className="_pagination">
          <Arrow isRight={false} />
          <div className="_arrow ">
            <p>1</p>
          </div>
          <Arrow isRight />
          <p>{!isFrench ? "Afficher les resultats" : "اعرض النتائج"} :</p>
        </div>
      )}
    </>
  );
};

export default Pagination;
