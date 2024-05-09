import './App.css';

function App() {
  return (
    <div className="page flex flex-col justify-start">
      <header className="text-2xl text-center">React Playground</header>
      <main className="flex flex-col justify-start">
        <div className="card">
          <h2 className="text-2xl">Topic</h2>
          <div className="border-2 border-blue-950 bg-slate-900 p-4 m-4 w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            natus cupiditate adipisci minus cumque neque ab reiciendis facere
            unde hic, exercitationem necessitatibus animi tempora corrupti earum
            voluptatem dolores repellat? Temporibus?
          </div>
          <button
            className="p-2 rounded-md"
            onClick={() => {
              console.log('clicked');
            }}
          >
            Click Me
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
