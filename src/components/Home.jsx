import Login from './auth/Login'
import React, {Component} from "react";
import Registration from "./auth/Registration";
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


export default class Home extends Component {
    render(){
        return(
            <div>
                <h2>Ingreso - Bienvenido</h2>
                <hr/>
               <p>Puedes registrarte si aun no tiene cuenta 
               o Loguearte con tus datos, para que puedas ver todos nuestros productos disponibles para ti </p>
               <br/>


                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                           
                    <Grid item xs={2} sm={4} md={4} key={1} >
                        <Item>
                        <Registration></Registration>

                        </Item>
                        

                    </Grid>

                    <Grid item xs={2} sm={4} md={4} key={2} >
                        <Item>
                        <Login/>

                        </Item>
                        

                    </Grid>
                
            
                </Grid>
            </Box>
            </div>

        )
    }
}