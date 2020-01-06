// import React from 'react'; 
import axios from 'axios';

export const baseUrl = `https://jsonplaceholder.typicode.com/`;
export const usersUrl = `${baseUrl}users`;
export const commentsUrl = `${baseUrl}comments`;
export const todosUrl = `${baseUrl}todos`;

export const getComments = async () => {
  const result = await axios.get(commentsUrl).then(({ data }) => data);
  return result;
}

export const getTodos = async () => {
  const result = await axios.get(todosUrl).then(({ data }) => data);
  return result;
}
export const getUsers = async () => {
  const result = await axios.get(usersUrl).then(({ data }) => data);
  return result;
}