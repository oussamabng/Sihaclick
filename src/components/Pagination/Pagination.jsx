import React, { useState } from "react";

//? import arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

//? import css
import "./Pagination.css";

const Pagination = (props) => {
  const { isFrench, min, max, setMin, setCurrent, current, setMax } = props;
  const [currentPage, setPage] = useState(1)
  console.log({ max })
  return (
    <>
      {!isFrench ? (
        <div className="_pagination">
          <p>{!isFrench ? "Afficher les resultats" : "اعرض النتائج"} :</p>
          <Arrow isRight={false} onClick={() => (current > 1) && setCurrent(prevState => prevState - 1)} />
          <div className="_arrow ">
            <p>{current}</p>
          </div>
          <Arrow isRight onClick={() => setCurrent(prevState => prevState + 1)} />
        </div>
      ) : (
          <div className="_pagination">
            <Arrow isRight={false} onClick={() => current < max && (current > 1) && setCurrent(prevState => prevState - 1)} />
            <div className="_arrow ">
              <p>{current}</p>
            </div>
            <Arrow isRight onClick={() => setCurrent(prevState => prevState + 1)} />
            <p>{!isFrench ? "Afficher les resultats" : "اعرض النتائج"} :</p>
          </div>
        )}
    </>
  );
};

export default Pagination;
