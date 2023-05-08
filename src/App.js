import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo/index.js';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Front End",
    foto:"https://github.com/christopherhomen.png",
    nombre:"Christofer Homen",
    puesto:"Instructor",
    fav:true
},
{    id: uuid(),
  equipo: "Front End",
  foto: "https://github.com/harlandlohora.png",
  nombre: "Harland Lohora",
  puesto: "Instructor",
  fav:false
},
{    id: uuid(),
  equipo: "Programación",
  foto: "https://github.com/genesysaluralatam.png",
  nombre: "Genesys Rondón",
  puesto: "Desarrolladora de software e instructora",
  fav:false
},
{    id: uuid(),
  equipo: "UX y Diseño",
  foto: "https://github.com/JeanmarieAluraLatam.png",
  nombre: "Jeanmarie Quijada",
  puesto: "Instructora en Alura Latam",
  fav:false
},
{    id: uuid(),
  equipo: "Programación",
  foto: "https://github.com/christianpva.png",
  nombre: "Christian Velasco",
  puesto: "Head de Alura e Instructor",
  fav:false
},
{    id: uuid(),
  equipo: "Innovación y Gestión",
  foto: "https://github.com/JoseDarioGonzalezCha.png",
  nombre: "Jose Gonzalez",
  puesto: "Dev FullStack",
  fav:false
}])
  //para que react detecte cambios esto con useState y haga cambios 
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278" ,
      colorSecundario: "#D9F7E9"
    }
    ,
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA" ,
      colorSecundario: "#E8F8FF"
    },
    {      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157" ,
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),

      titulo:"Devops",
      colorPrimario: "#E06B69" ,
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"Ux y Diseño",
      colorPrimario: "#DB6EBF" ,
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05" ,
      colorSecundario: "#FFF5D9"
    },
    {      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29" ,
      colorSecundario: "#FFEEDF"
    }    
])



  //Ternario --> condicion ? seMuestra : moSeMuestra
  //Corto Circuito : condicion && seMuestra
  const cambiarMostrar = () => { 
    actualizarMostrar(!mostrarFormulario)
  }

  //Regustrar colaborador 
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador)
    //Spread operator: copia de datos actuales, agregamos el nuevo dato
    actualizarColaboradores([...colaboradores, colaborador])
  }



  //Eliminar colaborador 
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

    //Actualizar color equipo 
const actualizarColor = (color, id) => {
  console.log("Actualizar color ", color, id)
  const equiposActualizados = equipos.map((equipo)=>{
    //si equipo .id es giual al que recibimos en la function. entonces a este equipo en su propiedad color primario 
    //sera igual al color recibido y actualizamos el equipo 
    if(equipo.id===id){
      equipo.colorPrimario = color
    }
    return equipo
  })

  //le indicamos que hay cambios: 
  actualizarEquipos(equiposActualizados)
}

//Crear equipos
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
}

//like
const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador)=>{
    console.log("1", id)

    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
      console.log("2", id)

    }
    return colaborador
  })
}

  //Liksta de equipos 
  /*const equipos = [
    {
      titulo:"Programación",
      colorPrimario: "#57C278" ,
      colorSecundario: "#D9F7E9"
    }
    ,
    {
      titulo:"Front End",
      colorPrimario: "#82CFFA" ,
      colorSecundario: "#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario: "#A6D157" ,
      colorSecundario: "#F0F8E2"
    },
    {
      titulo:"Devops",
      colorPrimario: "#E06B69" ,
      colorSecundario: "#FDE7E8"
    },
    {
      titulo:"Ux y Diseño",
      colorPrimario: "#DB6EBF" ,
      colorSecundario: "#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrimario: "#FFBA05" ,
      colorSecundario: "#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29" ,
      colorSecundario: "#FFEEDF"
    }    
]*/

  return (
    <div>
      {/* { Header() } */}
      {/* <Header></Header> */}
      <Header/>
      {/* {mostrarFormulario === true ? <Formulario/> : <div></div> } */}
      {/* {mostrarFormulario ? <Formulario/> : <></> } */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
     
     
     
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {/*recorrer un arreglo de objetos: map: crea un nuevo arreglo
        nombreArreglo.metodo(arrow function(lo que recibo) => {codigo a ejecutar})
        key: referencia
        datos={equipo} para que muestre los datos 
        */
        equipos.map((equipo) => {
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          //filter: para enviar solamente el colaborador que pertenece a cada categpria
          //filtra cada colaborador y solo me indiques cuales son los colaboradores que en su llave equipo 
          //sean igual al equipo.titulo
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador} //props = {funcion}
          actualizarColor={actualizarColor}
          like={like}
          />
        })
      }
    <Footer/>
    </div>
  );
}

export default App;
