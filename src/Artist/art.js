import React from 'react';
import { useState } from 'react'
import './artist.css'
import Form from '../Form/Form'

const ArtForm = () => {
    const [artName, setArtName] = useState('');
    const [price, setPrice] = useState('');
    const [gallery, setGallery] = useState(''); // name of gallery has to be changed to a dropdown
    const [pieces, setPieces] = useState('');
    const [description, setDescription] = useState('');
    const [medium, setMedium] = useState('');
    const [paintType, setPaintType] = useState('');
    const [depiction, setDepiction] = useState('');
    const [dimension, setDimension] = useState('');
    const [info, setInfo] = useState('');
    let lists = [
        {
            description: "Name of Art",
            type: "text",
            placeholder: "",
            value: artName,
            setValue: setArtName,
        },
        {
            description: "Price",
            type: "text",
            placeholder: "",
            value: price,
            setValue: setPrice,
        },
        {
            description: "Name of Gallery",
            type: "text",
            placeholder: "",
            value: gallery,
            setValue: setGallery,
        },
        {
            description: "Number of Pieces",
            type: "number",
            placeholder: "",
            value: pieces,
            setValue: setPieces,
        },
        {
            description: "Description",
            type: "text",
            placeholder: "",
            value: description,
            setValue: setDescription,
        },
        {
            description: "Medium",
            type: "text",
            placeholder: "",
            value: medium,
            setValue: setMedium,
        },
        {
            description: "Paint Type",
            type: "text",
            placeholder: "",
            value: paintType,
            setValue: setPaintType,
        },
        {
            description: "Depiction",
            type: "text",
            placeholder: "",
            value: depiction,
            setValue: setDepiction,
        },
        {
            description: "Dimension",
            type: "text",
            placeholder: "",
            value: dimension,
            setValue: setDimension,
        },
        {
            description: "Additional Information",
            type: "text",
            placeholder: "",
            value: info,
            setValue: setInfo,
        },
        
    ]

    return(
        <div className="art">
            <div className="artForm">
                <h2 className="heading">
                    Add Art
                </h2>
                <form>
                    <Form lists = {lists}/>
                </form>
                <br/><br/>

                <div className="row button">
                    <button>
                        Submit
                    </button>
                </div>
                <br/><br/>
            </div>
        </div>
    )
}

export default ArtForm;