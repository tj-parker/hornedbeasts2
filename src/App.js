import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalImg: null,
      modalTitle: null,
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (beast) => {
    this.setState({
      showModal: true,
      modalImg: beast.image_url,
      modalTitle: beast.title
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main 
          data={data}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast 
          handleCloseModal={this.handleCloseModal}
          image_url={this.state.modalImg}
          title={this.state.modalTitle}
          show={this.state.showModal}
        />
      
        <Footer />
      </>
    )
  }
}

export default App;