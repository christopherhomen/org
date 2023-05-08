import "./MiOrg.css"
import {useState} from "react"
const MiOrg = (props) => {

    //Estado - hooks => useState(): para dar un estado a un componente
    //para usar estados : const[nombreVariable, funcionAtuzalia] = useSTate(valorInicial)
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // //agregar a la imagen que cuando le den click tenga una funcion 
    // const manejarClick = (e) => {
    //     console.log("Mostrar/ocultar elemento",!mostrar)
    //     actualizarMostrar(!mostrar)
    // }
    return <section className="orgSection">
        <h3 className="title" >Mi organización  </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg