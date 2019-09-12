import React from 'react';
import GitHubUser from '../services/GitHubUserRepoService';

class SearchUser extends React.Component {
  
  handleSubmit(e) {

    var self = this;

    e.preventDefault();

    console.log(this.refs.username.value);

    GitHubUser.getByUser(this.refs.username.value)
        .then(res => self.props.updateUser(res.data));

    GitHubUser.getReposByUser(this.refs.username.value)
        .then(res => self.props.updateRepositories(res.data));

    GitHubUser.getStarredByUser(this.refs.username.value)
        .then(res => self.props.updateStarred(res.data));
  };

  render() {
    return (
      <div className="jumbotron">
        <h1>Github Repos / Starred</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>User GitHub</label>
            <input
              type="text"
              ref="username"
              className="form-control"
              placeholder="Ex: AryGabrielDias - Pesquise usuário GitHub"
            />
            <br/>
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default SearchUser;