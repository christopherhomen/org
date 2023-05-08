import "./Colaborador.css"
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    //destructurar
    const{ nombre, puesto, foto, equipo, id, fav } = props.datos //objeto accedo a los props dle arreglo datos con la info de colaboradores 
    const {colorPrimario, eliminarColaborador, like} = props //obtenog el color 

    //condicion ? verdadero : falso 

    return <div className="colaborador">
        <AiFillCloseCircle  className="eliminar" onClick={()=>eliminarColaborador(id)} />{/*no se va a eliminar e colaborador hasta que no le de click */}
        <div className="encabezado" style={{backgroundColor : colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={()=> like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />
            }
        </div>
    </div>
}

export default Colaborador