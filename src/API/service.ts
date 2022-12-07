import api from "./api";


export default class Services {
    async getCourses() {
        return await api.get('/courses/all').then((response) => {
            return response.data.result;
        });
    }

    async addPost() {
        return await api.post('/courses/add', );
    }

    async updatePost() {
        return await api.put(`/courses/`, );
    }

    async deletePost() {
        return await api.delete(`/courses/`);
    }

    async getAuthors() {
        return await api.get('/authors/all').then((response) => {
            return response.data.result;
        });
    }

    async addAuthors() {
        return await api.post('/authors/add', );
    }

    async getRole() {
        return await api.get('/users/me').then((response) => {
            return response.data.result;
        });
    }

    async login() {
        return api.post('/login', ).then((response) => {
            return response.data;
        });
    }

    async deauthorize() {
        return await api.delete('/logout');
    }

    async registration() {
        return await api.post('/register', );
    }
}
