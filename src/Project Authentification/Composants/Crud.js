import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteUserAction } from '../Config/Actions'

function Crud() {

 
    const stagiaires = useSelector(state => state.stagiaires)


    const dispatch = useDispatch()
    const HandeleDelete = (id) => {
        dispatch(DeleteUserAction(id))
    }

    return (
        <div>
            <Link to="add_stagiaire"><button className='btn btn-outline-info m-4 '>Ajouter Stagiaire</button></Link>
            <div>
                <h3 style={{ textAlign: "center" }}>Listes Stagiaires</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Filliere</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            stagiaires.map((stagiaire, index) => {
                                
                                return (
                                    <tr key={index}>
                                        <th scope="row">{stagiaire.id}</th>
                                        <td>{stagiaire.nom}</td>
                                        <td>{stagiaire.prenom}</td>
                                        <td>{stagiaire.filliere}</td>
                                        <td>
                                            <Link to={`/update_stagiaire/${stagiaire.id}`}><button className='btn btn-primary m-1' >Modifier</button></Link>
                                            <button className='btn btn-danger' onClick={() => HandeleDelete(stagiaire.id)}>Supprimer</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default Crud;