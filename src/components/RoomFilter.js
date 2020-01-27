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
    let people = this.getUnique(rooms, "capacity");
    people = people.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
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
          <div className="form-group">
            <label htmlFor="capacity">capacity</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              type="slider"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              id="price"
              type="range"
              min={min_price}
              max={max_price}
              onChange={handleChange}
              value={price}
              className="form-control"
              name="price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="Number"
                name="min_size"
                id="size"
                value={min_size}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="Number"
                name="max_size"
                id="size"
                value={max_size}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </form>
      </section>
    );
  }

  getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };
}
