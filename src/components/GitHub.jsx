import React from 'react';
import SearchUser from './SearchUser';
import UserInfo from './UserInfo';
class GitHub extends React.Component {
    state = {
      user : null,
      repos : [],
      starred : []
    }

    updateUser(user) {
      this.setState({user : user})
    }

    updateRepositories(repos) {
      this.setState({repos : repos})
    }

    updateStarred(starred) {
      this.setState({starred : starred})
    }

    render() {
        return (  
            <div className="container">
                <SearchUser updateUser={this.updateUser.bind(this)} 
                            updateRepositories={this.updateRepositories.bind(this)}
                            updateStarred={this.updateStarred.bind(this)}/>
                <UserInfo user={this.state.user} 
                          repos={this.repos}
                          starred={this.starred}/>
            </div>
        );
    }
}
export default GitHub;