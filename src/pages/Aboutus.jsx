import React from "react";
import Cards from "../components/Card.jsx";

function Aboutus() {
  const prod = [
    {
      id: 1,
      img: "/public/assets/images/gem.png",
      heading: "Corporis voluptates sit",
      info: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    },
    {
      id: 2,
      img: "/public/assets/images/gem.png",
      heading: "Ullamco laboris nisi",
      info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      id: 3,
      img: "/public/assets/images/gem.png",
      heading: "Labore consequatur",
      info: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    },
    {
      id: 4,
      img: "/public/assets/images/gem.png",
      heading: "Beatae veritatis",
      info: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pac",
    },
  ];

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row bg-dark">
          <div className="col-md-4 ">
            <div className="card bg-dark text-light mt-5 border-0">
              <div className="card-header ">
                <h1>Voluptatem dignissimos provident quasi</h1>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-outline-danger rounded-5 mx-1 px-4">
                  About us
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8 text-light">
            <div className="row">
              {prod.map((val, index, array) => {
                return (
                  <div className="col-md-6" key={val.id}>
                    <Cards
                      img={val.img}
                      heading={val.heading}
                      info={val.info}
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
}

export default Aboutus;
