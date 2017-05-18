const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
  	const pets = this.props.pets.map(pet => {
  		const adoptedStatus = this.props.adoptedPets.includes(pet.id)
  		return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}  isAdopted={adoptedStatus} />
  	})
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
