import Button from './evento/button'

function Evento() {
  function meuEvento() {
    console.log('Primeiro evento ativado')
  }

  function segundoEvento() {
    console.log('Segundo evento ativado')
  }

  return (
    <div>
      <p>Clique aqui para disparar o evento</p>
      <Button event={meuEvento} text="Primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </div>
  )
}

export default Evento