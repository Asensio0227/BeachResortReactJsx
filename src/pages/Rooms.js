import React from 'react'
import {Hero,Banner,RoomsContainer} from "../components";
import {Link} from "react-router-dom";

export default function Rooms() {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner 
      title="OurRooms"
      >
        <Link to="/" className="btn-primary">
          return Home
        </Link>
      </Banner>
    </Hero>
    <RoomsContainer />
    </>
  )
}
