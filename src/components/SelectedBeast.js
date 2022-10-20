import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleCloseModal} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <img class="img-fluid" src={this.props.image_url} alt={this.props.title} />
                </Modal.Body>
            </Modal>
        );
    }
}

export default SelectedBeast;