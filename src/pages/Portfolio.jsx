import React from "react";
import Products from "../components/Products.jsx";

export default class Portfolio extends React.Component  {
  constructor(){
    super()
    this.state=({
        all_prod:true,
        all_app:true,
        all_books:true,
        all_brand:true
        
    })
  }

All_handler=()=>{
   this.setState({
      all_prod:true,
        all_app:true,
        all_books:true,
        all_brand:true
    })
}

  App_handler=()=>{
    this.setState({
      all_prod:false,
        all_app:true,
        all_books:false,
        all_brand:false
    })
  }

  Prod_handler=()=>{
    
    this.setState({
      all_prod:true,
        all_app:false,
        all_books:false,
        all_brand:false
      
        
    })
  }
  Brand_handler=()=>{
    this.setState({
      all_prod:false,
        all_app:false,
        all_books:false,
        all_brand:true
    })
  }
  Book_handler=()=>{
    this.setState({
      all_prod:false,
        all_app:false,
        all_books:true,
        all_brand:false
    })
  }

  render(){
  const appProd =[
    {
      id: 1,
      img: "/public/assets/images/app1.jpg",
    },
    {
      id: 2,
      img: "/public/assets/images/app2.jpg",
    },
    {
      id: 3,
      img: "/public/assets/images/app3.jpg",
    }
  ]

  const brand=[
    {
      id: 1,
      img: "/public/assets/images/branding1.jpg",
    }, {
      id: 2,
      img: "/public/assets/images/branding2.jpg",
    },
    {
      id: 3,
      img: "/public/assets/images/branding3.jpg",
    }
  ]

  const books=[
       {
      id: 1,
      img: "/public/assets/images/books1.jpg",
    },
       {
      id: 2,
      img: "/public/assets/images/books-2.jpg",
    },
    {
      id: 3,
      img: "/public/assets/images/books3.jpg",
    }

  ]
  const prod = [
   
    {
      id: 1,
      img: "/public/assets/images/product1.jpg",
    },
    
      {
      id: 2,
      img: "/public/assets/images/product2.jpg",
    },

    {
      id: 3,
      img: "/public/assets/images/product3.jpg",
    },
    
    
  ];


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="text-center mt-5">PORTFOLIO</h1>
            <h1 className="text-danger text-center ">____</h1>
            <p className="text-center mt-4 fw-bold text-secondary">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="row">
            <div className="col-md-12 text-center fw-bold g-5 ">
              <span className="mx-3"  onClick={()=>this.All_handler()} >ALL</span>
              <span className="mx-3" onClick={()=>this.App_handler()}>App</span>
              <span className="mx-3" onClick={()=>this.Prod_handler()}>Products</span>
              <span className="mx-3" onClick={()=>this.Brand_handler()}>Branding</span>
              <span className="mx-3" onClick={()=>this.Book_handler()}>Books</span>
            </div>
          </div>

          <div className="row m-auto">
            {
              this.state.all_prod ?
              prod.map((val, index, array) => {
                  return (
                      <div className="col-md-4" key={val.id}>
                  <Products img={val.img} />
                </div>
              );
            }):null
          }

            {
              this.state.all_app?
              appProd.map((val, index, array) => {
                  return (
                      <div className="col-md-4" key={val.id}>
                  <Products img={val.img} />
                </div>
              );
            }):null}

            {
              this.state.all_books?
              books.map((val, index, array) => {
                  return (
                      <div className="col-md-4" key={val.id}>
                  <Products img={val.img} />
                </div>
              );
            }):null}

            {
              this.state.all_brand?
              brand.map((val, index, array) => {
                  return (
                      <div className="col-md-4" key={val.id}>
                  <Products img={val.img} />
                </div>
              );
            }):null}

          </div>
        </div>
      </div>
    </>
  );
};
} 


