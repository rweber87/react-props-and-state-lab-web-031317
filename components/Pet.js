const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdoptClick = this.handleAdoptClick.bind(this)
  }

  handleAdoptClick() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    const adoptMe = <button className="ui primary button" onClick={this.handleAdoptClick}>Adopt pet</button>
    const adopted = <button className="ui disabled button">Already adopted</button>
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} (gender: {this.props.pet.gender === "male" ? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? adopted : adoptMe}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
