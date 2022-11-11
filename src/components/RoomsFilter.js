import React,{useContext} from 'react';
import {RoomContext} from "../context";
import Title from "./Title";

const getUnique=(items,value)=>{
  return [...new Set(items.map(item=>item[value]))];
};

function RoomsFilter({rooms}) {
  const context=useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  }=context;

  // get unique types
  let types=getUnique(rooms,"type");
  // add all
  types=["all",...types];
  // map to jsx
  types=types.map((item,index)=>(
    <option key={index} value={item}>
      {item}
    </option>
  ))
  // get unique capacity
  let people=getUnique(rooms,"capacity");
  people=people.map((item,index)=>(
    <option key={index} value={item}>
      {item}
    </option>
  ))

  return (
    <section className="filter-container">
      <Title title="Search rooms"/>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">
          room type
          </label>
          <select 
          name="type" 
          id="type"
          value={type} 
          onChange={handleChange}
          className="form-control">
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guest */}
        <div className="form-group">
          <label htmlFor="capacity">
          guest
          </label>
          <select 
          name="capacity" 
          id="capacity"
          value={capacity} 
          onChange={handleChange}
          className="form-control">
            {people}
          </select>
        </div>
        {/* end of guest*/}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            room price ${price}
          </label>
          <input 
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          id="price"
          value={price}
          onChange={handleChange}
           className="form-control" />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">
            room size
          </label>
          <div className="size-inputs">
            <input
              type="umber"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">
              breakfast
            </label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">
              pets
            </label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  )
}

export default RoomsFilter
