import React from 'react';
import { useState } from 'react'
import './artist.css'
import Form from '../Form/Form'

const BookEventForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [amount, setAmount] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [gallery, setGallery] = useState('');// name of gallery has to be changed to a dropdown
    const [painterId, setPainterId] = useState('');
    let lists = [
        {
            description: "Date",
            type: "date",
            placeholder: "",
            value: date,
            setValue: setDate,
        },
        {
            description: "Time",
            type: "time",
            placeholder: "",
            value: time,
            setValue: setTime,
        },
        {
            description: "Amount",
            type: "text",
            placeholder: "",
            value: amount,
            setValue: setAmount,
        },
        {
            description: "Event Description",
            type: "text",
            placeholder: "",
            value: eventDesc,
            setValue: setEventDesc,
        },
        {
            description: "Gallery",
            type: "text",
            placeholder: "",
            value: gallery,
            setValue: setGallery,
        },
        {
            description: "Painter ID",
            type: "text",
            placeholder: "",
            value: painterId,
            setValue: setPainterId,
        },                
    ]

    return(
        <div className="art">
            <div className="artForm">
                <h2 className="heading">
                    Book an Event
                </h2>
                <form>
                    <Form lists = {lists}/>
                </form>
                <br/><br/>

                <div className="row button">
                    <button>
                        Book Event
                    </button>
                </div>
                <br/><br/>
            </div>
        </div>
    )
}

export default BookEventForm;