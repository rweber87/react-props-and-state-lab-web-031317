import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.updateAppState = this.updateAppState.bind(this)
    this.returnFilteredPets = this.returnFilteredPets.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  updateAppState(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  returnFilteredPets(){
    const URL = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    const obj = {method: "GET"}
    fetch(URL, obj).then(function(response){
      this.setState({
        pets: response
      })
    })
  }

  onAdoptPet(petID){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petID]
    })
  }



  render() {
    
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateAppState} onFindPetsClick={this.returnFilteredPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
