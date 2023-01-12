// funcion impura; cambia el valor de retorno
const impura = () => new Date().toLocaleDateString();

console.log(impura());

//funcion pura; nunca cambia el valor de retorno
const MiComponente = ({ miProp }) => {
  // const { miProp } = props;
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return(
    <MiComponente miProp={'Hola'}/>
  )
}

export default App;
