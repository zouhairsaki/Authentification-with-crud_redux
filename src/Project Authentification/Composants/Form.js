import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Crud from './Crud';


function Form() {
    const admins =useSelector(data =>data.admins)
    const errors =useSelector(data =>data.errors)
    console.log(admins)
    console.log(errors)


    const [name, setName] = useState();
    const [errorMessage, setErrorMessages] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const renderErrorMessage = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        );

    

    const HandelSubmit = (e) => {
        e.preventDefault()
        let { login, password } = document.forms[0]
        setName(login.value)

        const info_admin = admins.find(function (admin) {
            return admin.nameusers === login.value
        })
        console.log(info_admin)

        if (info_admin) {
            if (info_admin.pass !== password.value) {
                setErrorMessages({ name: "password", message: errors.password })
            }
            else {
                setIsSubmit(true)
            }

        }
        else {
            setErrorMessages({ name: "login", message: errors.nom })
        }
    }


    const container =
        <div className='m-5'>
            <div className='container '>
                <div className="card p-3">
                    <h1 style={{ textAlign: "center" }}>Inscription</h1>
                    <div >
            
                        <form onSubmit={HandelSubmit}>
                            <div className="mb-3">
                                <label  className="form-label">Login</label>
                                <input type="text" className="form-control" name="login"  />
                                <h6 style={{color :"red"}}>{renderErrorMessage("login")}</h6>
            
                            </div>
            
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" />
                                <h6 style={{color :"red"}}>{renderErrorMessage("password")}</h6>
                            </div>
            
            
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            
            </div>
        </div>
    return (
        <div>
            {
                isSubmit ?
                <div>
                    <Routes>
                        <Route path='/' element={ <Crud />}/>
                        
                    </Routes>
                </div>
                    : container
            }
        </div>
    )
}
export default Form ;