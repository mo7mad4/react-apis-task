import React, { Component } from 'react';
import WithParams from '../../components/WithParams';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import './style.css'
class StorePage extends Component {
  state = {
    store: null,
    isLoading: true,
    isEditing: false,
  };

  id = this.props?.params?.id;

  handleEdit = () => {
    console.log(this.id, 'is edited');
    this.setState({ isEditing: true });
  };

  componentDidMount() {
    fetch(`https://some-data.onrender.com/stores/${this.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ store: data, isLoading: false }));

  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>Store {this.state.store?.name}</h1>
            <p>Store id :<b> {this.state.store.id} </b></p>
            <p>Address :<b> {this.state.store.cities}</b> </p>
          </>
        )}
        <button className="actionbutton" name='edit' onClick={this.handleEdit}>Edit</button>
        {this.state.isEditing && (
          <Navigate to={PATHS.STORES.EDIT.replace(':id', this.id)} replace />
        )}
      </>
    );
  }
}

export default WithParams(StorePage);