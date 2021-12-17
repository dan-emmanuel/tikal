
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { getPlanets } from "../../requester/part2"
import React, { useEffect, useState } from 'react';

let Part2 = (props) => {
    const [planets, setPlanet] = useState([])
    const [ordered, setOrdered] = useState([])

    useEffect(() => {
        (async () => {
            let planetarr = await getPlanets()
            setPlanet(planetarr)
            let onlyPop = planetarr.map(e => parseInt(e.population))
            onlyPop.sort()
            setOrdered(onlyPop)
        })(planets)





    }, [])
    return <>
        <div className='container '>
            <Link className='btn btn-primary' to="/part1">Part I</Link>
            <div className='row thirPage justify-content-around align-items-end '>
                {
                    planets.map((currentValue, index) => {
                        return < div key={index} className='col' >

                            <h6 className='text-center'>{currentValue.population}</h6>

                        </div>
                    })
                }
            </div>
            <div className='row halfPage justify-content-around align-items-end '>
                {
                    planets.map((currentValue, index) => {
                        return <div
                            key={index}
                            style={{ height: `${(ordered.indexOf(parseInt(currentValue.population)) + 1) * 20}%` }}
                            className='col-2 bg-secondary' />

                    })
                }
            </div>
            <div className='row thirPage justify-content-around align-items-top '>
                {
                    planets.map((currentValue, index) => {
                        return <div div key={index} className='col' >

                            <h6 className='text-center'>{currentValue.name}</h6>
                        </div>
                    })
                }
            </div>




        </div>

    </>



}
export default Part2