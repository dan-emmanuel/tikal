import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../css/header.css"

let Part2 = (props) => {
   return <>
        <div className='container '>

            <div className='row fullPage justify-content-around align-items-center '>

                <div className='col text-center'>
                    <Link className='btn btn-primary' to="/part1">Part I</Link>

                </div>
                <div className='col text-center'>
                    <Link className='btn btn-primary' to="/part2">Part II</Link>

                </div>


            </div>

        </div>
    </>



}
export default Part2
