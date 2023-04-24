import Item from './Item';

function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Fiat" ano_lancamento={1965} />
        <Item marca="Honda" ano_lancamento={1980} />
        <Item />
      </ul>
    </>
  )
}

export default List