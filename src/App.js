import React, { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [githubName, setGithubName] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [githubImagesUrl, setGithubImageUrl] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/learningToCode1234')
      .then(res => res.json())
      .then(data => {
        setGithubName(data.name);
        setGithubUrl(data.html_url)
        setGithubImageUrl( data.avatar_url)
      })

  }, []);




  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>
        {githubName}
      </h2>
      <a href={ githubUrl }> Link to Github Proifle</a>
      <div className='pt-5'>
        <img src={ githubImagesUrl } alt= 'Github profile image' width='200' height='200'></img>
      </div>
    </div>
  );
}

export default App;
