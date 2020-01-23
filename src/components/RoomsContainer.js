import { RoomContext } from "../context";
import Loading from "./Loading";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import React, { Component } from "react";

export default class RoomsContainer extends Component {
  static contextType = RoomContext;

  render() {
    const { loading, sorted_rooms, rooms } = this.context;

    if (loading) {
      return <Loading />;
    }

    return (
      <>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sorted_rooms} />
      </>
    );
  }
}
