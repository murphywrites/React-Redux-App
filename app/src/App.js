import { connect } from 'react-redux';
import './App.css';
import {fetchBreweries} from './actions'



function App(props) {

  const handleGetResults = evt => {
    evt.preventDefault()
    props.fetchBreweries()
  }

  return (
    <div className="App">
          <div className="search">
                <h1>Brewery Search</h1>
                <label> City
              <input placeholder="Chicago"/>
              </label>
        </div>
     <div className="results">
       <button onClick={handleGetResults}>Get Results</button>
       </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    search: state.search,
    job: state.job,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchBreweries })(App);
