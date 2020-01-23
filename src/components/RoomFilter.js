import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

export default class RoomFilter extends Component {
  static contextType = RoomContext;

  render() {
    const {
      handleChange,
      type,
      capacity,
      price,
      min_price,
      max_price,
      min_size,
      max_size,
      breakfast,
      pets
    } = this.context;

    const { rooms } = this.props;
    let types = this.getUnique(rooms, "type");
    types = ["all", ...types];

    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types.map((type, index) => (
                <option value={type} key={index}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </form>
      </section>
    );
  }

  getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };
}
