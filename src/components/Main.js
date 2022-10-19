import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './../data.json';


class Main extends React.Component {
  render() {
    let beastArr = [];

    data.forEach((beast) => {
      beastArr.push(
        <HornedBeasts
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          key={beast._id}
        />
      )
    });

    return (
      <>
        <main>
          {beastArr}
        </main>
      </>
    )
  }
}

export default Main;