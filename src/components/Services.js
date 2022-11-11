import React, { Component } from 'react'
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state={
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Brooklyn knausgaard 3 wolf moon PBR&B pitchfork affogato. Meditation taxidermy yuccie iceland tbh hammock pok pok. Lyft echo park occupy leggings flexitarian typewriter austin salvia street art tattooed. Freegan kombucha pinterest ascot 3 wolf moon next level DIY four dollar toast trust fund. Actually quinoa man bun seitan af 90's dreamcatcher flexitarian pug marfa mukbang."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Brooklyn knausgaard 3 wolf moon PBR&B pitchfork affogato. Meditation taxidermy yuccie iceland tbh hammock pok pok. Lyft echo park occupy leggings flexitarian typewriter austin salvia street art tattooed. Freegan kombucha pinterest ascot 3 wolf moon next level DIY four dollar toast trust fund. Actually quinoa man bun seitan af 90's dreamcatcher flexitarian pug marfa mukbang."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Brooklyn knausgaard 3 wolf moon PBR&B pitchfork affogato. Meditation taxidermy yuccie iceland tbh hammock pok pok. Lyft echo park occupy leggings flexitarian typewriter austin salvia street art tattooed. Freegan kombucha pinterest ascot 3 wolf moon next level DIY four dollar toast trust fund. Actually quinoa man bun seitan af 90's dreamcatcher flexitarian pug marfa mukbang."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Brooklyn knausgaard 3 wolf moon PBR&B pitchfork affogato. Meditation taxidermy yuccie iceland tbh hammock pok pok. Lyft echo park occupy leggings flexitarian typewriter austin salvia street art tattooed. Freegan kombucha pinterest ascot 3 wolf moon next level DIY four dollar toast trust fund. Actually quinoa man bun seitan af 90's dreamcatcher flexitarian pug marfa mukbang."
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
          {this.state.services.map((items,index)=>{
            const {info,icon,title}=items;
            return(
              <div className="service" key={index}>
                <span>{icon}</span>
                <h6>{title}</h6>
                <p>{info}</p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}
