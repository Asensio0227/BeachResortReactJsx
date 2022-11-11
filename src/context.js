import React, { Component } from 'react';
// import items from "./data";
import Client from "./contentful";

// Client.getEntries().then(response => console.log(response.items));

const RoomContext=React.createContext();

class RoomProvider extends Component {
  state={
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true,
    // filter
    type:"all",
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast:false,
    pets:false,
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResort",
        order: "sys.createdAt"
      });
      let rooms = this.formatData(response.items);
      // let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize=Math.max(...rooms.map(item => item.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms:rooms,
      loading: false,
      // filter
      price: maxPrice,
      maxPrice,
      maxSize,
    })
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount(){
    this.getData();
    // let rooms = this.formatData(items);
    // let featuredRooms = rooms.filter(room => room.featured === true);
    
    // let maxPrice = Math.max(...rooms.map(item => item.price));
    // let maxSize=Math.max(...rooms.map(item => item.size));

    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms:rooms,
    //   loading: false,
    //   // filter
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize,
    // })
  }

  formatData(items){
    let tempItems=items.map((item)=>{
      let id=item.sys.id;
      let images=item.fields.images.map((image)=>image.fields.file.url);

      let room= {...item.fields,images,id};
      return room;
    })
    return tempItems;
  };

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    )
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    
    let tempRooms = [...rooms];
    // transform values
    // get Capacity
    capacity = parseInt(capacity)
    price = parseInt(price)
    // filter by types
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter price 
    tempRooms = tempRooms.filter(room => room.price <= price);
    // size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    // filter pets 
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
      value={{
        ...this.state,
        getRoom:this.getRoom,
        handleChange:this.handleChange,
      }}
      >
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer= RoomContext.Consumer;

export {
  RoomProvider,
  RoomConsumer,
  RoomContext,
}

export function withRoomsConsumer(Component){
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {
          value => <Component{...props} context={value}/>
        }
      </RoomConsumer>
    )
  }
}