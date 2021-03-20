import  React, {useState} from "react";
import uniqid from "uniqid";

const ListadoNombre =()=>{


    const [nombre,setNombre]=useState('');
    const [listaNombre, setListaNombre]= useState([]);
    const [modoEdicion, setModoEdicion]= useState(false);
    const [id,setId] = useState('');

    const addNombre=(event)=>{
        event.preventDefault();
        if (!nombre.trim()) {
            console.log('El campo nombre se encuentra vacído');
            alert('El campo nombre se encuentra vacído');
            return;
        }

        const nuevoNombre={
            id:uniqid(),
            nombre:nombre
        }
        setListaNombre([...listaNombre,nuevoNombre]);
        setNombre('');
    }
    const deleteNombre=(id)=>{
        const nuevoAray =listaNombre.filter(item => item.id !==id);
        setListaNombre(nuevoAray);
    }
    const actualizar =(item)=>{
        setModoEdicion(true);
        setNombre(item.nombre);
        setId(item.id);
    }
    const editarDato=(e)=>{
        e.preventDefault();
        const nuevoArray = listaNombre.map( item=> item.id===id ? {id:id, nombre:nombre}: item);
        setListaNombre(nuevoArray);
        setModoEdicion(false);
    }

    return(
        <div>
        <div className="row mt-5">
            <div className="col">
               <h2>Listado de nombre</h2>
               <ul className="list-group" >
                    {
                        listaNombre.map(item =>
                            <li key={item.id} className="list-group-item" >{item.nombre}
                            <button
                            className="btn btn-danger float-right"
                            onClick={()=>{deleteNombre(item.id)}}
                            >
                                Borrar
                            </button>
                            <button
                            className="btn btn-info mx-2 float-right"
                            onClick={()=>{actualizar(item)}}
                            >
                                Editar
                            </button>
                            </li>
                        )
                    }
               </ul>
            </div>
            <div className="col">
                <h2>Formulario para agregar nombre</h2>
                <form onSubmit={modoEdicion===true? editarDato:addNombre}>
                    <input 
                    onChange={(e)=>{setNombre(e.target.value)}} 
                    className="form-control mb-3" 
                    type="text" 
                    placeholder="Introduce el nombre"
                    value={nombre}
                    />
                    <input 
                    className="btn btn-info btn-block" 
                    type="submit" 
                    value={modoEdicion ===true ? 'Editar Nombre': 'Registrar Nombre'} />
                </form>
            </div>
        </div>
        </div>
    );
}

export default ListadoNombre;