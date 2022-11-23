
import './App.css';
import joj from './index';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <body>
        
        <div class="zagolovok">
          <h1>Serialov.net</h1>
        </div>
        
        <div class="katalog">
        <dl>
            <dt><h2 id='kat'>Категории</h2></dt>
            <dd><button>Боевики</button></dd>
            <dd><button>Драмы</button></dd>
            <dd><button>Комедии</button></dd>
            <dd><button>Триллеры</button></dd>
            <dd><button onClick={joj}>Мультфильмы</button></dd>
            <dd><button onClick={() => {document.getElementById('yhg').innerHTML=''}}>0</button></dd>

           
        </dl>


        </div>
      </body> 
      </header>
      <div id="popa"></div>
    </div>
  );
}

export default App;

