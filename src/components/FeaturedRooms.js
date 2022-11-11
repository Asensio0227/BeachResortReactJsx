import React, { Component } from 'react'
import Title from "./Title";
import Room from "./Room";
import { RoomContext } from "../context";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms:rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />
    });

    return (
      <article className="featured-rooms">
      <Title title="Featured Rooms"/>
      <div className="featured-rooms-center">
        {loading ? <Loading/> : rooms}
      </div>
      </article>
    )
  }
}
