import React from 'react'
import {FaCrown} from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import {programs} from '../data' 
import {card} from '../UI/card'
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
<section className="programs">
        <div className="container programs__container">
            <SectionHeader icons={<FaCrown/>} title="Programs"/>

        
        <div className="programs__wrapper">
            {programs.map(({id,icon,title,info,paths})=>{
                return(
                    <card className="programs__program" key={id}>

                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <a href={paths} className="btn sm">Learn More</a>

                    </card>
                )
            })}
        </div>
        </div>
        </section>
  )
}

export default Programs