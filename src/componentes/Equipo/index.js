import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {
    //Destructuracion--> de props.datos quiero que saques los valores y crees las variables 
    // es como decir const colorPrimario = props.datos.colorPrimario
    const { colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
const obj={
    backgroundColor: hexToRgba(colorPrimario,0.6)
}
// console.log(colaboradores.length > 0 )
const estiloTitulo = {borderColor: colorPrimario}

    return<>
     { colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input 
                type="color" 
                className="input-color" 
                value={hexToRgba(colorPrimario,0.6)}
                //para que podamos modificar nosottos el comportsmiento y no el navegador
                onChange ={(evento) => {
                    actualizarColor(evento.target.value, id) //para obtener el valor del input 
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {/* <Colaborador/> */}
                {//index: para poder diferenciar c ada una de las prsonas registradas con un identificador unico 
                    colaboradores.map( (colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario} 
                    eliminarColaborador={eliminarColaborador} //lo recibo en equipo y lo mando a cada colaborador 
                    like={like} 
                    />)
                }

            </div>
        </section>
            }
            </>
}

export default Equipo