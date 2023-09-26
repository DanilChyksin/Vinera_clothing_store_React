import React, { Component } from "react";
import CategoriItem from "./CategoriItem";

export class ShowCategory extends React.Component {
  render() {
    return (
      <div className="current-category-wrapper">
        <h2 className="current-category">{this.props.currentCategory}</h2>
        <div className="current-category-line"></div>
        <div className="current-items">
          {this.props.items.map((el) => (
            <CategoriItem item={el} key={el.key} />
          ))}
        </div>
      </div>
    );
  }
}

export default ShowCategory;
