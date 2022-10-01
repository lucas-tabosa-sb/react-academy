import React from 'react'
import './Header.component.css'

const Header = (props) => {
  console.log(props.pokemons)

  const animate = function(){
    const container = document.querySelector('.menu-container')
    const sidePanel = document.querySelector('.side-panel')
    container.classList.toggle('change')
    sidePanel.classList.toggle('show')
  }

  return (
    <header className='main-header'>
        <h3 className='app-title'> LocalDex </h3>
        <div className='menu-container' onClick={animate}>
          <div className='menu-bar menu-bar-1'></div>
          <div className='menu-bar menu-bar-2'></div>
          <div className='menu-bar menu-bar-3'></div>
        </div>
        <div className='side-panel'>
          <ul>
            Available Pokémons:
            {
              props.pokemons.map((poke, index) => (
                <li className='poke-name' key={index }> - {poke.name}</li>
              ))
            }
          </ul>
        </div>
    </header>
  )
}

export default Header