import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  };

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  }

  render() {
    return (
      <Card border="dark" className="text-center" >
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img 
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title} />
        <Card.Text>{this.props.description}</Card.Text>
        <Card.Text>{this.state.votes} ❤️</Card.Text>
        <Button onClick={this.handleVotes}>Vote for this beast!</Button>
      </Card>
    )
  }
}

export default HornedBeasts;