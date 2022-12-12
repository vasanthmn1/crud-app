import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link, useParams } from 'react-router-dom';

const Viewusers = () => {

    let params = useParams();

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const userlist = await axios.get(`https://638dc11aaefc455fb2aaf125.mockapi.io/users/${params.id}`)
            myformik.setValues(userlist.data)
            console.log(userlist.data);
        } catch (error) {
            console.log(error);
        }
    }

    let myformik = useFormik({
        initialValues: {
            username: "",
            age: "",
            email: "",
            job: "",
            experience: "",
            salary: "",
        }
    })

    return (
        <div className='col-lg-6'>
            <Table striped bordered hover variant="dark" className='mt-5'>
                <thead>


                </thead>

                <tbody>
                    <tr>
                        <th className=''>UserNmae</th>
                        <th>{myformik.values.username}</th>

                    </tr>
                    <tr>
                        <th>Age</th>
                        <th>{myformik.values.age}</th>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <th>{myformik.values.email}</th>
                    </tr>
                    <tr>
                        <th>Job</th>
                        <th>{myformik.values.job}</th>
                    </tr>
                    <tr>
                        <th>Experience</th>
                        <th>{myformik.values.experience}</th>
                    </tr>
                    <tr>
                        <th>salary</th>
                        <th>{myformik.values.salary}</th>
                    </tr>

                </tbody>

            </Table>
            <div className='mt-4 bg-white w-50 d-flex align-center justify-content-between  rounded'>
                <span className='mt-1 text-danger '>Edit This profile **
                    <Link to={`/home/edituser/${myformik.values.id}`}>
                        <Button className='bg-primary btn-sm ms-4'>Edit</Button>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Viewusers
