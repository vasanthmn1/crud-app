import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Userlist = () => {

    const [users, setusers] = useState([])
    const [isloding, setisloding] = useState(true)
    useEffect(() => {
        getUsers()
    }, [])

    let handelDelet = async (id) => {

        let conform = window.confirm("are you sure you want to delete ")
        if (conform) {
            await axios.delete(`https://638dc11aaefc455fb2aaf125.mockapi.io/users/${id}`)
        }
        getUsers()
    }



    let getUsers = async () => {
        try {
            let usersDdata = await axios.get("https://638dc11aaefc455fb2aaf125.mockapi.io/users")
            setusers(usersDdata.data);
            setisloding(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <>


            <Table striped bordered hover variant="dark" className='mt-5' responsive>
                <thead>
                    <tr>
                        {/* <th>No</th> */}
                        <th>UserNmae</th>
                        <th>age</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Experience</th>
                        <th>Salary</th>
                        <th colSpan={3} ></th>

                    </tr>
                </thead>

                <tbody>


                    {
                        isloding ? <img src='https://media.giphy.com/media/Pkck2unt0XQfc4gs3R/giphy.gif' /> :
                            users.map((val, idx) => {

                                return (
                                    <tr key={idx}>

                                        <td>{val.username}</td>
                                        <td>{val.age}</td>
                                        <td>{val.email}</td>
                                        <td>{val.Job}</td>
                                        <td>{val.experience}</td>
                                        <td>{val.salary}</td>
                                        <td>
                                            <Link to={`/home/userview/${val.id}`}><button className='btn btn-sm bg-primary text-white me-2'>View</button></Link>
                                        </td>
                                        <td>
                                            <Link to={`/home/edituser/${val.id}`}> <button className='btn btn-sm bg-success text-white me-2'>Edit</button></Link>
                                        </td>
                                        <td> <button className='btn btn-sm bg-danger text-white me-2' onClick={() => {
                                            handelDelet(val.id)
                                        }}>Delete</button></td>


                                    </tr>
                                )
                            })
                    }

                </tbody>

            </Table>
        </>


    )
}

export default Userlist
