import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));



  axios.post('https://jsonplaceholder.typicode.com/users', {
    name: "Fazil",
    email: "fazil@example.com"
  })
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));



  axios.put('https://jsonplaceholder.typicode.com/users/1', {
    name: "Updated Name"
  })
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
  
  
  axios.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(response => console.log("User deleted"))
  .catch(error => console.error('Error:', error));
