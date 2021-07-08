function HolaMundo() {
  return (
    <div className="saludo">
      hola mundo
    </div>
  )
}

// ========================================

ReactDOM.render(
  <HolaMundo />,
  document.getElementById('root')
);
