import React from 'react';
import HornedBeasts from './HornedBeasts.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisBeast: this.props.data
    };
  }
  render() {

    return (
      <>
        <main>
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