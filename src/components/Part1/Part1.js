
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../../css/main.css"
import { getvehiclesWithPilots, getPilotsHome, getHomesData } from "../../requester/part1"

let Part1 = (props) => {
    
    const [vehicle, setVehicle] = useState(0);
    const [planet, setPlanet] = useState("")
    const [pilots, setPilots] = useState([])

    useEffect(() => {
        (async () => {
            let vehicles = await getvehiclesWithPilots()
            let vehiclesWithPilots = await Promise.all(vehicles.map((vehicle) => getPilotsHome(vehicle)))
            let vehiclesWithHomes = await Promise.all(vehiclesWithPilots.map((vehicle) => getHomesData(vehicle)))
            let maxPop = vehiclesWithHomes.reduce(function (prev, current) {
                let previousPop = prev.pilots.reduce((pop, pil) => pop + pil.homeworld.population, 0)
                let currentsPop = current.pilots.reduce((pop, pil) => pop + pil.homeworld.population, 0)
                return (parseInt(previousPop) > parseInt(currentsPop))
                    ? prev
                    : current
            })
            setVehicle(maxPop.name)
            setPlanet(maxPop.pilots.map(({homeworld})=>homeworld))
            setPilots(maxPop.pilots.map(({name})=>name))
        })()




    }, [])
    return <>
        <div className='container '>
        <Link className='btn btn-primary' to="/part2">Part II</Link>

            <div className='row fullPage justify-content-around align-items-center '>
                <div className='col-auto'>
                    <table className="table table-dark table-striped">


                        <tbody>
                            <tr>
                                <th scope="row">Vehicle name with the largest sum</th>
                                <td>{vehicle}</td>
                            </tr>

                            <tr>
                                <th scope="row">Related home planets and their respective
                                    population</th>
                                <td>{JSON.stringify( planet )}</td>
                            </tr>

                            <tr>
                                <th scope="row">Related pilot names</th>
                                <td>{JSON.stringify( pilots )}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    </>



}
export default Part1