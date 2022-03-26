import React, { useState } from 'react';
import './App.scss';

function App() {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')


  const getImages = () => {

    const url = `https://api.unsplash.com/search/photos?query=${search}&per_page=2&client_id=4fe4THTwZ92lS6TqEIkpLjIPTIZHZTYZyi7U5ZaL8ZM`;

    fetch(url)
      .then(response => {
        return response.json();
      }).then(data => {
        setImages(data.results)
      })

  }
  return (
    <div className="page-content">

      <div className='search'>

        <input className='input' value={search} onChange={(e) => { setSearch(e.target.value) }}></input>
        <button className='' src='button' onClick={getImages}>press</button>

      </div>
      <div className='allresults'>

        {images.map((item) =>
          <div className='result' key={item.id}>

            <img src={item.urls.thumb} />
            <p className='description'>{item.alt_description}</p>

          </div>
          
        )}
      </div>
    </div>
  );
}




export default App;
