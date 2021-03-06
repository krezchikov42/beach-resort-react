import React, { Component } from "react";
// import items from "./data";
import Client from "./Contenful";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sorted_rooms: [],
      featured_rooms: [],
      loading: false,
      type: "all",
      capacity: 1,
      price: 0,
      min_price: 0,
      max_price: 0,
      min_size: 0,
      max_size: 0,
      breakfast: false,
      pets: false
    };
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "fields.price"
      });
      let rooms = this.formatData(response.items);
      let featured_rooms = rooms.filter(room => room.featured);
      let max_price = Math.max(...rooms.map(room => room.price));
      let max_size = Math.max(...rooms.map(room => room.size));
      console.log(max_price);
      this.setState({
        rooms,
        sorted_rooms: rooms,
        featured_rooms,
        price: max_price,
        max_price,
        max_size
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(data) {
    let temp_items = data.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return temp_items;
  }

  getRoom = slug => {
    let temp_rooms = [...this.state.rooms];
    let room = temp_rooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState({ [name]: value }, this.filterRooms);
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      min_price,
      max_price,
      min_size,
      max_size,
      breakfast,
      pets
    } = this.state;
    capacity = parseInt(capacity);
    let temp_items = [...rooms];
    if (type !== "all") {
      temp_items = temp_items.filter(room => room.type === type);
    }
    temp_items = temp_items.filter(room => room.capacity >= capacity);
    temp_items = temp_items.filter(room => room.price <= price);
    temp_items = temp_items.filter(
      room => room.size >= min_size && room.size <= max_size
    );
    if (breakfast) {
      temp_items = temp_items.filter(room => room.breakfast === breakfast);
    }
    if (pets) {
      temp_items = temp_items.filter(room => room.pets === pets);
    }

    this.setState({ sorted_rooms: temp_items });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
