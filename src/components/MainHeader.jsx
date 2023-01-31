import React from 'react'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header' >
        <div className="container main__header-container">
            <div className="main__header-left">

                <h4>#1000DaysOfWorkouts</h4>
                <h1>Join the Legends of the Fitness World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut eligendi autem voluptatem laudantium libero ipsam nostrum illo deleniti expedita.</p>
                <button className='btn'>Get Started</button>
            </div>
            <div className='main__header-right'>
                <div className="main__header-circle"></div>
                <div className="main__header-image">
                    <img src={Image} alt="headerimg"></img>
                </div>
            </div>
        </div>

    </header>
  )
}

export default MainHeader