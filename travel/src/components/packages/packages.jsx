import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom";

const Package = () => {
    // const [packageName, setPackageName] = useState('');
    const [Destination, setDestination] = useState('');
    // const [description, setDescription] = useState('');
    const [Duration, setDuration] = useState('');
    // const [priceForAdult, setPriceForAdult] = useState('');
    // const [priceForChild, setPriceForChild] = useState('');
    const [Packageimg, setImage] = useState(null);

    function handleImageChange(event) {
        setImage(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log( Destination, Duration,Packageimg);

        const formData = new FormData();
        // formData.append('packageName', packageName);
        formData.append('destination', Destination);
        // formData.append('description', description);
        formData.append('duration', Duration);
        // formData.append('priceForAdult', priceForAdult);
        // formData.append('priceForChild', priceForChild);      formData.append('priceForAdult', priceForAdult);
        // formData.append('priceForChild', priceForChild);
        formData.append('imageFile', Packageimg);

        fetch('https://localhost:7222/api/Package', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data as needed
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the POST request
            console.error('Error:', error);
        });
    }

    return (
        <React.Fragment>
            <h2>Packages</h2>
            <form onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Destination"
                        onChange={e => setDestination(e.target.value)}
                        value={Destination}
                        fullWidth
                        required
                    />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Duration"
                    onChange={e => setDuration(e.target.value)}
                    value={Duration}
                    fullWidth
                    required
                    sx={{ marginBottom: 4 }}
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                    accept=".jpg,.jpeg,.png"
                    required
                />
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>

        </React.Fragment>
    )
}

export default Package;