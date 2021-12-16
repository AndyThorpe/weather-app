import React, { Component } from 'react';
import './App.css';
import Loader from './assets/img/loader.gif';
import store from "./redux/store/index.js";
import { connect } from "react-redux";
import { fetchWeather } from "./redux/actions/index.js";
import { FormControl, FormGroup, InputGroup, Table } from 'react-bootstrap';
import WeatherRow from "./components/WeatherRow";
import Cities from "./cities.js";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      cities: [
        {
         "city": "SEOUL",
         "country": "South Korea"
        },
        {
         "city": "São Paulo",
         "country": "Brazil"
        },
        {
         "city": "Bombay",
         "country": "India"
        },
        {
         "city": "JAKARTA",
         "country": "Indonesia"
        },
        {
         "city": "Karachi",
         "country": "Pakistan"
        },
        {
         "city": "Moscow",
         "country": "Russia"
        }
      ]
    }
  }

  componentDidMount() {
    let cities =  this.state.cities;
    let total = cities.length;
    let random = Math.floor(Math.random() * total);
    let searchTerm = cities[random].city + ', ' + cities[random].country;

    console.log(searchTerm);

    this.setState({
      search: searchTerm
    })
    
    this.search();
  }

  search() {
    var existing = store.getState().data;
    store.dispatch(fetchWeather(this.state.search, existing)); 
  }

  convertKelvintoCelcius(val) {
    let c = (val-273.15);
    return Math.round(c * 10) / 10;
  }
 
  render() {  
      let loader = null;  
      var data = store.getState().data;
    
       if (Object.keys(data).length === 0 && data.constructor === Object)  {
        data = [data];
       }

      let weather = data.map((loc, index) => {	
              if (Object.keys(loc).length !== 0 && loc.constructor === Object)  {
                return (         
                    <WeatherRow
                      location={loc.location} // Send the match info
                      weather={loc.weather[0].main} // Send update function to component as a prop
                      temp={this.convertKelvintoCelcius(loc.temp)}
                      index={index}
                    />
                );
              }
            } 
        ); 
    
      if (this.props.loading === true) {
        loader =  <div className="loader" >
          <img src={Loader} alt="loading"/>
        </div>
      } else {
        loader = null;
      }

        return (
          <div className="App">
            { loader }
            <div>
              <FormGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">City: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Location"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={ (x: React.FormEvent<FormControl & HTMLInputElement>) => { 
                      this.setState({
                        search: x.currentTarget.value
                      })
                    } }
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        this.search();
                      }
                    }}
                  />
              </InputGroup>
             </FormGroup>

             {this.errorMessage}
             
             <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Weather</th>
                    <th>Temperature</th>
                  </tr>
                </thead>
                <tbody>
                    {weather}
                </tbody>
              </Table>

            </div>
          </div>
        );
    }
  }

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

export default connect(mapStateToProps)(App);

