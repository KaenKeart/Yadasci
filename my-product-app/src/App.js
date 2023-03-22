//import logo from './logo.svg';
import './App.css';
import Page01 from './Page01';
import Page04 from './Page04';
import Project from './Project_01';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Project />} />
      <Route path="home" element={<Page01/>} />
      <Route path="/product/:productId" element={<Page04/>} />
      <Route path="report" element={<Report />} />
    </Routes>
  </BrowserRouter>
      <Project />
      <Page01/>
      <Page04/>
    </div>
  );
}

export default App;
