import React,{useState} from "react";
import UserForm from "./UserForm"

const TimeSlotList=(props)=>{
    let{setCount,count}=props.data
    let[selectslot,setSelectSlot]=useState(false)
    const timeSlots=[
        {id:1,time:'10:00AM', date:'2024-01-23',available:true},
        {id:2,time:'10:00AM', date:'2024-01-21',available:false},
        {id:3,time:'10:00AM', date:'2024-01-25',available:true},
        {id:4,time:'10:00AM', date:'2024-01-22',available:false},
        {id:5,time:'10:00AM', date:'2024-01-23',available:true},
        {id:6,time:'10:00AM', date:'2024-01-21',available:false},
        {id:7,time:'10:00AM', date:'2024-01-24',available:true},
        {id:8,time:'10:00AM', date:'2024-01-26',available:false},
        {id:9,time:'10:00AM', date:'2024-01-22',available:true},
        {id:10,time:'10:00AM', date:'2024-01-27',available:true},

    ];
    let[slotdata,setSlotData]=useState(timeSlots)
      let handelSlotClick=(slot)=>{

        if(slot.available){
            console.log("You can book");
            console.log(slot);
            setSelectSlot(true)
        }
        else{
            console.log("Already Booked");
        }
      }
      let handelpopup=()=>{
        setSelectSlot(false)
      }

      return(
        <div className="slots">
            <button onClick={()=>{props.data.setHomePage(false)}}>close</button>
            <ul>
                {slotdata.map((slot)=>(

                    <li key={slot.id} className={slot.available?"available":"booked"} onClick={()=>{handelSlotClick(slot)}}>
                        {slot.time}-{slot.date} ({slot.available? "Available":"Booked"})
                    </li>

                ))}
            </ul>
            {selectslot? <div id='popup_box'>
                <UserForm data={{handelpopup,setSlotData,slotdata,setCount,count}}/>
               </div>:""}
        </div>
      )
}

export default TimeSlotList