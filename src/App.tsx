import './App.css';
import TaskBoard from './components/TaskBoard';

function App() {
  return (
    <div className="page flex flex-col justify-start">
      <header className="text-2xl text-center">Do This Now</header>
      <main className="flex flex-col justify-start">
        <div className="card">
          <TaskBoard />
        </div>
      </main>
    </div>
  );
}

export default App;
