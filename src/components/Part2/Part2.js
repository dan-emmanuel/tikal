
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { getPlanets } from "../../requester/part2"
import React, { useEffect,useState } from 'react';

let Part2 = (props) => {
    const [planet, setPlanet] = useState("")
    useEffect(() => {
        (async () => {
            let planets = await getPlanets()
            console.log(planets)
        })()




    }, [])
    return <>
        <div className='container '>
            <Link className='btn btn-primary' to="/part1">Part I</Link>
            <div className='row fullPage justify-content-around align-items-center '>
                <div className='col-auto'>
                </div>


            </div>
        </div>

    </>



}
export default Part2