import './App.css';
import { StatsProvider } from './app-context/app-context';
import CreateDevColumn from './app-utils/app-utils';
//../src/app-context/app-context';
function App() {

  return (
    <StatsProvider>
      <CreateDevColumn/>
    </StatsProvider>
  );
}

export default App;
