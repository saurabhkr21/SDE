API Image:- "![alt text](image.png)"
API keys: "a9b642c42c2634750592d02337d7cef2"
API access token:- "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWI2NDJjNDJjMjYzNDc1MDU5MmQwMjMzN2Q3Y2VmMiIsIm5iZiI6MTc1MjU2ODIzOC4yMjQsInN1YiI6IjY4NzYxMWFlYWM3NWY5MjdkYjYzNzJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u33Yaiz5F-twAz4PYG1GSL18gT74Uz2DDnkM7dWEoBA"
Api  :  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWI2NDJjNDJjMjYzNDc1MDU5MmQwMjMzN2Q3Y2VmMiIsIm5iZiI6MTc1MjU2ODIzOC4yMjQsInN1YiI6IjY4NzYxMWFlYWM3NWY5MjdkYjYzNzJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u33Yaiz5F-twAz4PYG1GSL18gT74Uz2DDnkM7dWEoBA'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));


  
