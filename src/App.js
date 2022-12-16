
import './App.css';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
import Row from './Components/RowComponent/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now"
        fetchUrl={requests.fetchTrending } />
      <Row title="TopRated"
        fetchUrl={requests.fetchTopRatedMovies } />
      <Row title="Action Movies"
        fetchUrl={requests.fetchActionMovies } />
      <Row title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies } />
      <Row title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies } />
      <Row title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies } />
      <Row title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries } />
    </div>
  );
}

export default App;
