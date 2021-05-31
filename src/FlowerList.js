import React, { Component } from "react";
import flower from "./flower.json";
import { Link } from "react-router-dom";
import './FlowerList.css';

class FlowerList extends Component {
//   constructor() {
//     super();
//   }

  render() {
    return (
    <div>
      <center>Click to get details</center>
        <div className="flex-container">
          {flower.map((value) => {
            const n = value.name;
            return (
              <div>
                <Link to={{ pathname: "/flowerDetail", fstate: { fname: n } }}>
                  <img src={value.url} alt="url" width="250px" height="150px" />
                </Link>
              </div>
            );
          })}
          </div>
    </div>
    );
  }
}
export default FlowerList;
