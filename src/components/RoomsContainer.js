import React from 'react';
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import {withRoomsConsumer} from '../context';

// hughOrder Component
function RoomsContainer({context}) {
  const {loading,sortedRooms,rooms}=context;

  if(loading) {
    return <Loading/>
  }

  return (
    <>
      <RoomsFilter rooms={rooms}/>
      <RoomsList rooms={sortedRooms}/>
    </>
  )
}

export default withRoomsConsumer(RoomsContainer)


// normal Component
// import {RoomConsumer} from '../context';
// function RoomsContainer() {
  
//   return (
//     <RoomConsumer>
//       {
//         value=>{
//           const {loading,sortedRooms,rooms,setRoom}=value;

//           if(loading) {
//             return <Loading/>
//           }
//           return(
//             <>
//               <RoomsFilter rooms={rooms}/>
//               <RoomsList rooms={sortedRooms} setRoom={setRoom}/>
//             </>
//           )
//         }
//       }
//     </RoomConsumer>
  
//   )
// }


// export default RoomsContainer