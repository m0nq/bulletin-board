import React, {Component} from 'react';
import {FaPencilAlt, FaTrash}  from 'react-icons/fa';

class Note extends Component {

  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }

  edit() {
    alert('editing note');
  }

  remove() {
    alert('remove note');
  }

  render() {
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
          <button onClick={this.edit} id="edit"><FaPencilAlt></FaPencilAlt>Edit</button>
          <button onClick={this.remove} id="remove"><FaTrash></FaTrash>Remove</button>
        </span>
      </div>
    );
  }
}

export default Note;
