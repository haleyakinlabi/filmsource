import React from 'react'


const Footer = () => {
  const tmdb = "https://www.themoviedb.org/"

  return (
    <div>
        <footer className='footer'>
          <div className='footerContainer'>
            <img src="../assets/filmSourceLogo.PNG" alt="site logo" className="logoFooter"/>
            <h1 className='createdBy'>Created by Anthony Thomas and Haley Akin</h1>
            <img src="../assets/tmdb.png" alt="tmbd logo" class="tmdb" />
          </div>
        </footer>
    </div>
  )
}

export default Footer