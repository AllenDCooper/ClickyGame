import React from "react";

export function CardList({ children }) {
    return (
      <div className="container">
          {children}
      </div>
    );
  }
  
  export function CardListItem(props) {
      const styleImg={
        position: "relative",
        float: "left",
        width:  "200px",
        height: "300px",
        margin: "10px",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "black",
        backgroundSize: "cover",
        backgroundImage: "url(" + props.src + ")"
      }
    return <div style={styleImg}>
        {/* <img src={props.src} key={props.key} className="card-img-top img-fluid" alt="..."/> */}
      </div>
  }

