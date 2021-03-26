import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NoteService from "../services/NotesService"

const NotesList = () => {



    const [notes , setNotes] = useState([])

    useEffect(() => {
        NoteService.getAll()
        .then(response=>{
            console.log("printing response", response.data);
            setNotes(response.data); 
        }).catch(error=>{
                console.log("somethingwent wrong", error);
        })
        
    }, [])

    return ( 

        <div className = "main-content">
            <h4>List of js</h4>

           <div className =" notes-list mt-4">
           {
               notes.length>0 ?  notes.map(note=>(

                    <div key= {note.id} className= "notes-preview mt-3">
                      <Link>
                         <p className = "primary-color text-capitalize">{note.title} </p>     
                         <p>{note.body} </p>   
                      </Link> 
                    </div>
                )): <div> No notes avilable </div>
            }
           </div>

        </div>
     );
}
 
export default NotesList;