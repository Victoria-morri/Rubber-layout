import './App.css';
import { StatsProvider } from './context/app-context';
import CreateDevColumn from './utils/app-utils';
//../src/app-context/app-context';
function App() {

  return (
    <StatsProvider>
      <CreateDevColumn/>
    </StatsProvider>
  );
}

export default App;
