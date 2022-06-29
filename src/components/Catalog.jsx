import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Catalog() {
    

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [calls, setCalls] = useState("");

    //url get del rails
    const url = "http://localhost:3000/products"

    useEffect(() => {
        fetch(url,
            {
                method: 'GET'
            })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCalls(result);
                    console.log(result)

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    return (
        <div>
            <h2>Catálogo de productos disponibles</h2>
            <br />

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        calls !== "" ?
                            (calls.map((prod, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Item>
                                        <h2>{prod.name}</h2>
                                        <img src={prod.img_url} alt="Admin" width={150} />
                                        <hr />
                                        <p style={{textAlign: "left"}}><b>Descripción: </b> {prod.description} <br/>
                                        <b>Stock: </b> {prod.stock} </p>
                                        <h3>Precio: {prod.price}</h3>

                                    </Item>

                                </Grid>
                            ))) : " "
                    }
                </Grid>
            </Box>

        </div>
    );
}

export default Catalog;