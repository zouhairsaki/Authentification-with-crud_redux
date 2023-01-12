import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router';
import { AddStagiareAction } from '../Config/Actions';
import Swal from "sweetalert2";

function AddStagiaire() {
    const fillieres = useSelector(state => state.fillieres)
    const count = useSelector(state => state.stagiaires.length)

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [filliere, setFilliere] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()



    const HandelSubmit = () => {
        dispatch(AddStagiareAction({
            id: count + 1,
            nom: nom,
            prenom: prenom,
            filliere: filliere,

        }))
        Swal.fire({
            title: "Stagiaire ajouté",
            icon: "success",
            timer: 3000,
        });
        navigate("/")
        
    }

    
    return (
        <div className="card p-3">
            <h1 style={{ textAlign: "center" }}>Ajouter Stagiaire</h1>
            <div className='container' >

                <form >
                    <div className="mb-3">
                        <label className="form-label">Nom :</label>
                        <input type="text" className="form-control" onChange={(e)=>setNom(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Prénom :</label>
                        <input type="text" className="form-control" onChange={(e)=>setPrenom(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Filliere</label>
                        <select className='form-select' onChange={(e) => setFilliere(e.target.value)} >
                     
                            {
                                fillieres.map((item, index) =>
                                    // <option key={index} value={item.id}>{item.nom}</option>
                                    <option key={index} value={item.nom}>{item.nom}</option>

                                )
                            }
                        </select>
                    </div>


                </form>
                <Link to="/"><button className="btn btn-primary" onClick={HandelSubmit}>Enregistrer</button></Link>
            </div>
        </div>
    )
}

export default AddStagiaire;
