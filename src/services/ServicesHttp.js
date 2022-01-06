// Here I have created all the http requests that I will use in the project.

/* eslint-disable import/no-anonymous-default-export */
import http from "../http-common";

// Get all users
const getAll = () => {
    return http.get("/users");
};

// Get user by id
const get = id => {
    return http.get(`/users/${id}`);
};

// Create user
const create = data => {
    return http.post("/users", data);
};

// Update user
const update = (id, data) => {
    return http.put(`/users/${id}`, data);
};

// Delete user
const remove = id => {
    return http.delete(`/users/${id}`);
};

export default  {
    getAll,
    get,
    create,
    update,
    remove
};