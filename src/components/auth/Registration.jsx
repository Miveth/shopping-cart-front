
import React, { useState, useEffect } from "react"
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";

function Registration() {
    const navigate = useNavigate();
    const [id, setEmail] = useState("");
    const [username, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [passC, setPassC] = useState("");
    const [error, setError] = useState(false);

    
    

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/catalog');
        }else navigate('/');
    }, [])


    async function login() {
        let localStore
        localStore  = {id:id,username:username,password:pass}
        let user = {
            user: 
            {email:id,
            username: username,
            password: pass,
            password_confirmation: passC
            }
        }
        console.log(user);
     
        if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(id)) {
           /* let result = await fetch("http://localhost:3000/registrations", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(user)
            });
            result = await result.json();
            //localStorage.setItem("user-info", JSON.stringify(item));*/
            //con axios

            axios.post('http://localhost:3000/registrations', {
                user: {
                    email:id,
                    username: username,
                    password: pass,
                    password_confirmation: passC
                }
            },
            
            ).then(response =>{
                console.log("registration res", response);
                setError(false);
                localStorage.setItem("user-info", JSON.stringify(localStore));
                window.location.href = "/catalog"
                
            }).catch(error =>{
                console.log("registrations error", error);
                setError(true);
            });
            
            
            // window.location.href = "/";
        } else {
            alert("La dirección de email " + id + " es incorrecta.");
        }

    }
        return(
            <div>
                <div class="card">
                <h1 class="card-header">Registro</h1>
                <div class="card-body">
                    
                            <h5 class="card-title">Ingresa tus  datos</h5>
                                <hr />
                                
                                <p class="card-text">

                                    <input type="text" placeholder="Nombre de Usuario"
                                        onChange={(e) => {setUser(e.target.value)}}
                                        className="form-control" />
                                       
                                    <br />
                                    
                                    <input type="text" placeholder="email"
                                        onChange={(e) => {setEmail(e.target.value)}}
                                        className="form-control" />
                                       
                                    <br />
                                    
                                    <input type="password" placeholder="Password"
                                        onChange={(e) => { setPass(e.target.value) }}
                                        className="form-control" />
                                    <br/>
                                    <input type="password" placeholder="Confirmar Password"
                                        onChange={(e) => { setPassC(e.target.value) }}
                                        className="form-control" />
                                        
                                </p>
                                <button onClick={login} className="btn btn-primary" >Registrar</button>
                                <br/>
                                <br/>
                                {error ? "Error al registrar, verifica los datos y vuelve a intentar" : ""}

                </div>
            </div>

            </div>
        )
    }

    export default Registration