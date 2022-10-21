import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisBeast: this.props.data,
      selectedVal: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      selectedVal: e.target.selected.value
    });
  }

  handleSelect = (e) => {
    if (e.target.value !== 'all') {
      let filterHorns = this.props.data.filter(value => value.horns === parseInt(e.target.value))
      this.setState({
        thisBeast: filterHorns
      })
    } else {
      this.setState({
        thisBeast: this.props.data
      })
    }
  }
0
  render() {

    return (
      <>
        <main>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <legend>Number of Horns</legend>
              <Form.Select name="selected" onChange={this.handleSelect}>
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Select>
            </Form.Group>
          </Form>
          {this.state.thisBeast.map(beast => (
            <div onClick={() => this.props.handleOpenModal(beast)}>
              <HornedBeasts
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
                key={beast._id}
              />

            </div>
            )
          )}

        </main>
      </>
    )
  }
}

export default Main;