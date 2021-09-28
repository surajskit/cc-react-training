import React from "react";

const ListCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
      <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, type, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {type}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ListCard;
