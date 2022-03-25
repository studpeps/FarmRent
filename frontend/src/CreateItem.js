import { TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Button   } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import "./CreateItem.css"
import "./Dashboard.css";
function CreateItem(){

    const [Name, setName] = React.useState("");
    const [CurrentPrice, setCurrentPrice] = React.useState(0);
    const [NumberOfDaysAvailable, setNumberOfDaysAvailable] = React.useState(0);
    const [Address, setAddress] = React.useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        var newItem = {
            Name,
            CurrentPrice,
            NumberOfDaysAvailable ,
            Address,
            Latitude: 1212,
            Longitude: 1122,
            CurrentStatus: 1,
            CreatedBy: "623e082cdb76a1738bbe5386",
            Category: "623ca1d3c93abf60c8a92239",
        }

        axios({
            method:"POST",
            url:"https://farm-equipment-rental.herokuapp.com/api/item/add-item",
            data: newItem
        })
        .then(resp=> console.log(resp))
        .catch(err => console.log(err.message))
    }

    //  {
    // 'access_key': '6299a66fce1c0252e613e75d789e0b9f',
    // 'query': place,
    // 'country': 'IN',
    // 'limit': 1,
    // }
    //  'http://api.positionstack.com/v1/forward?',

    return(
        <div>
            <h1 className="heading">Post an Item</h1>
            <form>
                <div className='item'>
                    <TextField label="Item name" fullWidth variant='outlined'  sx={{ m: 1}} className="firstField" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='item'>
                <TextField label="Price" variant='outlined' className='field' onChange={(e) => setCurrentPrice(e.target.value)}/>
                <TextField label="Rent days" variant='outlined' onChange={(e) => setNumberOfDaysAvailable(e.target.value)}/>
                </div>
                <div className='item'>
                   <TextField label="Address" variant='outlined'fullWidth multiline rows={3} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className='item'>
                    <button className='button' onClick={handleSubmit}>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateItem;