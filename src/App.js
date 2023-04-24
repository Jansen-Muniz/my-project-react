import './App.css';
import OutraLista from './components/OutraLista';

function App() {
  const meusItens = ['Angular', 'Vue', 'React']

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  )
}

export default App;
