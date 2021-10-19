import './App.css';
import { StatsProvider } from '../src/app-context/app-context';
import CreateDevColumn from '../src/app-utils/app-utils';

function App() {

  return (
    <StatsProvider>
      <CreateDevColumn/>

      {/* <div className="App">
        <div className="wrapper">
          <h1 className="wrapper__header">Количество пройденных тестов "OS Doors"</h1>
          <div className="wrapper__test-columns">
            <div className="test-column dev">
              <figure>
                <div className="test-column__client value">50</div>
                <div className="test-column__server value">20</div>
                <div className="test-column__data value">70</div>
                <figcaption>dev</figcaption>
              </figure>
            </div>
            <div className="test-column test">
            <span className="arrow"></span>
              <figure>
                <div className="test-column__client value"></div>
                <div className="test-column__server value"></div>
                <div className="test-column__data value"></div>
                <figcaption>test</figcaption>
              </figure>
            </div>
            <div className="test-column prod">
              <span className="arrow"></span>
              <figure>
                <div className="test-column__client value"></div>
                <div className="test-column__server value"></div>
                <div className="test-column__data value">70</div>
                <figcaption>prod</figcaption>
              </figure>
            </div>
            <div className="test-column norm">
              <figure>
                <div className="test-column__norm"></div>
                <figcaption>норматив</figcaption>
              </figure>
            </div>
          </div>
          <div className="wrapper__test-specifications">
            <div className="test-specification test-specification__client"><span></span>Клиентская часть</div>
            <div className="test-specification test-specification__server"><span></span>Серверная часть</div>
            <div className="test-specification test-specification__data"><span></span>База данных</div>
          </div>
        </div>
      </div> */}
    </StatsProvider>
  );
}

export default App;
