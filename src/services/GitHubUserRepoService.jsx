import axios from 'axios';

class GitHubUserRepoService {

    getByUser(username) {
        return axios.get('https://api.github.com/users/' + username);
    };

    getReposByUser(username) {
        return axios.get('https://api.github.com/users/' + username + '/repos');
    };

    getStarredByUser(username) {
        return axios.get('https://api.github.com/users/' + username + '/starred{/owner}{/repo}');
    };

};

export default new GitHubUserRepoService();