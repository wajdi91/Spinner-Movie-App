import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      year: "",
      title: "",
      rating: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  addNewMovie = () => {
    const { year, rating, title } = this.state;
    const newMovie = {
      year,
      rating,
      title
    };

    this.toggle();
    return this.props.addNewMovie(newMovie);
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Add movie
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>add movie</ModalHeader>
          <ModalBody>
            <label>
              ID:
              <input
                value={this.id}
                onChange={e => {
                  this.setState({ title: e.target.value });
                }}
              />
            </label>
            <label>
              TITLE:
              <input
                value={this.title}
                onChange={e => {
                  this.setState({ title: e.target.value });
                }}
              />
            </label>
            <label>
              RATING:
              <input
                value={this.rating}
                onChange={e => {
                  this.setState({ rating: e.target.value });
                }}
              />
            </label>
            <label>
              YEAR:
              <input
                value={this.year}
                onChange={e => {
                  this.setState({ year: e.target.value });
                }}
              />
            </label>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addNewMovie}>
              add
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
