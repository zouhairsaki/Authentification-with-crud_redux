import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {  UpdateUserAction } from '../Config/Actions';

function UpdateStagiaire() {
    const { id } = useParams()
    const fillieres = useSelector(state => state.fillieres)
    const stagiaire = useSelector(state => state.stagiaires.find((s) => s.id === parseInt(id)))

    const [nom, setNom] = useState(stagiaire.nom)
    const [prenom, setPrenom] = useState(stagiaire.prenom)
    const [filliere, setFilliere] = useState(stagiaire.filliere)
    console.log("console "+filliere)

    const dispatch = useDispatch()
    const navigate = useNavigate()



    const HandelSubmit = () => {
        dispatch(UpdateUserAction({
            id: id,
            nom: nom,
            prenom: prenom,
            filliere: filliere,

        }))
        Swal.fire({
            title: "Stagiaire Modifié",
            icon: "success",
            timer: 3000,
        });
        navigate("/")

    }


    return (
        <div className="card p-3">
            <h1 style={{ textAlign: "center" }}>Modifier Stagiaire</h1>
            <div className='container' >

                <form >
                    <div className="mb-3">
                        <label className="form-label">Nom :</label>
                        <input type="text" className="form-control" onChange={(e) => setNom(e.target.value)}  value={nom}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Prénom :</label>
                        <input type="text" className="form-control" onChange={(e) => setPrenom(e.target.value)} value={prenom}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Filliere</label>
                        <select  className='form-select' onChange={(e) => setFilliere(e.target.value)} value={filliere} >

                            {
                                fillieres.map((item, index) =>
                                    <option key={index} value={item.nom}>{item.nom}</option>

                                )
                            }
                        </select>
                    </div>


                </form>
                <Link to="/"><button className="btn btn-primary" onClick={HandelSubmit}>Modifier</button></Link>
            </div>
        </div>
    )
}

export default UpdateStagiaire;