import React from "react";

export function CardList({ children }) {
    return (
      <div className="card-deck">
          {children}
      </div>
    );
  }
  
  export function CardListItem(props) {
    return <div className="card"><img src={props.src} key={props.key} className="card-img-top" alt="..."/></div>
  }

