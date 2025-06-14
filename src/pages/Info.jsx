import React from "react";
import InfoBox from "../components/InfoBox";

const Info = () => {
  const prod = [
    {
      id: 1,
      img: "./src/assets/images/gem.png",
      count: "232",
      title: "Happy Clients",
    },
    {
      id: 2,
      img: "./src/assets/images/gem.png",
      count: "521",
      title: "Projects",
    },
    {
      id: 3,
      img: "./src/assets/images/gem.png",
      count: "1463",
      title: "Hours Of Support",
    },
    {
      id: 4,
      img: "./src/assets/images/gem.png",
      count: "15",
      title: "Hard Workers",
    },
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row g-4">
              {prod.map((val, index, array) => {
                return (
                  <div className="col-md-3" key={val.id}>
                    <InfoBox
                      img={val.img}
                      count={val.count}
                      title={val.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
