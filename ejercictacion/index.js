function Saludo(){
  const [nombre, setNombre] = React.useState('')
  const handleChange = event => setNombre(event.target.value)
  return (<div>
    <form>
      <label htmlFor='nombre'>Nombre: </label>
      <input onChange={handleChange} id='nombre' />
    </form>
    {nombre? <strong>{nombre}</strong>:'Ingresar nombre.'}
  </div>)
}
// ========================================

ReactDOM.render(
  <Saludo />,
  document.getElementById('root')
);
