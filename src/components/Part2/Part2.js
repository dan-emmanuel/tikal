
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { getPlanets } from "../../requester/part2"
import React, { useEffect, useState } from 'react';

let Part2 = (props) => {
    const [planets, setPlanet] = useState([])
    useEffect(() => {
        (async () => {
            let planetarr = await getPlanets()
            console.log(planetarr)
            setPlanet(planetarr)
        })(planets)




    }, [])
    return <>
        <div className='container '>
            <Link className='btn btn-primary' to="/part1">Part I</Link>
            <div className='row fullPage justify-content-around align-items-center '>
                {
                    planets.map((currentValue, index) => {
                        return <div 
                        key={index} 
                        style={{ height: `${currentValue.population/planets.}%` }} 
                        className='col bg-secondary' />
                    })
                }



            </div>
        </div>

    </>



}
export default Part2