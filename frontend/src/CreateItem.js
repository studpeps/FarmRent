import { TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Button   } from '@material-ui/core';
import React from 'react';
import "./CreateItem.css"
import "./Dashboard.css";
function CreateItem(){
    return(
        <div>
            <h1 className="heading">Post an Item</h1>
            <form>
                <div className='item'>
                    <TextField label="Item name" fullWidth variant='outlined'  sx={{ m: 1}} className="firstField"/>
                </div>
                <div className='item'>
                <TextField label="Price" variant='outlined' className='field'/>
                <TextField label="Rent days" variant='outlined'/>
                </div>
                <div className='item'>
                   <TextField label="Address" variant='outlined'fullWidth multiline rows={3}/>
                </div>
                <div className='item'>
                    <button className='button'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateItem;