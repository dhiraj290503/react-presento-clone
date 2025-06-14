import React from "react";
import Scard from "../components/Scard";
// import gem from './src/assets/images/gem.png'

const Services = () => {
  const prod = [
    {
      id: 1,
      img: "../src/assets/images/gem.png",
      heading: "Lorem Ipsum",
      info: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      id: 2,
      img: "../src/assets/images/gem.png",
      heading: "Dolor Sitema",
      info: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
      id: 3,
      img: "../src/assets/images/gem.png",
      heading: "Sed ut perspiciatis",
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      id: 4,
      img: "../src/assets/images/gem.png",
      heading: "Magni Dolores",
      info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 5,
      img: "../src/assets/images/gem.png",
      heading: "Nemo Enim",
      info: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
      id: 6,
      img: "../src/assets/images/gem.png",
      heading: "Eiusmod Tempor",
      info: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    },
  ];

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12 mt-5 bg-dark">
            <h1 className="text-center text-light mt-5">SERVICES</h1>
            <h1 className="text-danger text-center ">____</h1>
            <p className="text-light text-center mt-4">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur veli
            </p>
          </div>

          <div className="container bg-dark">
            <div className="row bg-dark pt-4 ">
              {prod.map((val, index, array) => {
                return (
                  <div className="col-md-6" key={val.id}>
                    <Scard
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
};

export default Services;
