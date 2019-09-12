import React from 'react';

class UserInfo extends React.Component {
    render() {

        if(this.props.user) {

            var repos = `${this.props.user.html_url}?tab=repositories`;
            var starred = `${this.props.user.html_url}?tab=stars`;

        return (

            <div className="row">
                <div className="col-lg-4">
                    <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height=""></img>
                    <h2>{this.props.user.login}</h2>
                    <p>{this.props.user.name}</p>
                    <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
                    <p><a className="btn btn-default" style={{float: "left"}} href={repos} role="button">Repos</a></p>
                    <p><a className="btn btn-default" style={{float: "left"}} href={starred} role="button">Starred</a></p>
                </div>
            </div>
            )
        }

        return(null)
    }
}
export default UserInfo;