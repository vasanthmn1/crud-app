import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';
const Editusers = () => {
    let porms = useParams()

    let naveget = useNavigate()



    useEffect(() => {
        Getusers()
    }, [])

    const Getusers = async () => {
        try {
            let get = await axios.get(`https://638dc11aaefc455fb2aaf125.mockapi.io/users/${porms.id}`)
            myFormik.setValues(get.data)

        } catch (error) {
            console.log(error);
        }

    }

    const [loding, setloding] = useState(false)

    let myFormik = useFormik({
        initialValues: {
            username: "",
            age: "",
            email: "",
            job: "",
            experience: "",
            salary: ""
        },
        validate: (values) => {
            let err = {}

            if (!values.username) {
                err.username = "Enter Full Name"
            } else if (values.username.length < 4) {
                err.username = "Maximam Four Letter"
            }


            if (!values.age) {
                err.age = "entet age"
            }

            if (!values.email) {
                err.email = "Enter the email"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                err.email = 'Invalid email address';
            }
            if (!values.job) {
                err.job = "Select a Job"
            }
            if (!values.experience) {
                err.experience = "Select a Expersion"
            }
            if (!values.salary) {
                err.salary = "Select a Salary"
            }
            return err
        },

        onSubmit: async (values) => {
            try {
                let res = await axios.put(`https://638dc11aaefc455fb2aaf125.mockapi.io/users/${porms.id}`, values)
                console.log(res.data);
                naveget("/home/userlist")
                setloding(true)
            } catch (error) {
                alert(error)

            }
        }
    })
    return (
        <div className='bg-dark p-4 mt-4 pt-0 rounded'>

            <Form onSubmit={myFormik.handleSubmit} >
                <Row className="mb-3 mt-5">
                    <Form.Group as={Col} md="5" className='mb-3'>
                        <Form.Label>UserName</Form.Label>
                        <Form.Control
                            name="username"
                            value={myFormik.values.username}
                            onChange={myFormik.handleChange}
                            onBlur={myFormik.handleBlur}
                            type="text"
                            placeholder="First name"

                        />
                        {
                            myFormik.errors.username && myFormik.touched.username ?
                                <Form.Label style={{ color: "red" }}  >{myFormik.errors.username}</Form.Label>
                                : null
                        }
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom02">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            name="age"
                            min="0"

                            value={myFormik.values.age}
                            onChange={myFormik.handleChange}
                            onBlur={myFormik.handleBlur}
                            type="number"
                            placeholder="Last name"
                            defaultValue="Otto"
                        />
                        {
                            myFormik.errors.age && myFormik.touched.age ?
                                <Form.Label style={{ color: "red" }}  >{myFormik.errors.age}</Form.Label>
                                : null
                        }
                    </Form.Group>
                    <Form.Group as={Col} md="12" >
                        <Form.Label>Email</Form.Label>
                        <InputGroup >

                            <Form.Control
                                name="email"
                                value={myFormik.values.email}
                                onChange={myFormik.handleChange}
                                onBlur={myFormik.handleBlur}

                                type="text"
                                placeholder="Username"

                            />

                        </InputGroup>
                        {
                            myFormik.errors.email && myFormik.touched.email ?
                                <Form.Label style={{ color: "red" }}  >{myFormik.errors.email}</Form.Label>
                                : null
                        }
                    </Form.Group>
                </Row>
                <Row className="mb-3 mt-4">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <h6>Job</h6>
                        <Form.Select
                            name="job"
                            value={myFormik.values.job}
                            onChange={myFormik.handleChange}
                            onBlur={myFormik.handleBlur}

                        >
                            <option value={""}>Choose...</option>
                            <option value={"Frontend developer"}>Frontend developer</option>
                            <option value={"Backend developer"}>Backend developer</option>
                            <option value={"Full stack developer"}>Full stack developer</option>
                            <option value={"My sql"}>My sql</option>
                            <option value={"Node js"}>Node js</option>
                            <option value={"UI designer"}>UI designer</option>
                        </Form.Select>
                        {
                            myFormik.errors.job && myFormik.touched.job ?
                                <Form.Label style={{ color: "red" }}  >{myFormik.errors.job}</Form.Label>
                                : null
                        }
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <h6>Experience</h6>

                        <Form.Select
                            name="experience"
                            value={myFormik.values.experience}
                            onChange={myFormik.handleChange}
                            onBlur={myFormik.handleBlur}

                        >
                            <option value={""} >Choose...</option>
                            <option value={"Fresher"}>Fresher</option>
                            <option value={"1-Year"}>1-Year</option>
                            <option value={"2-Year"}>2-Year</option>
                            <option value={"3-Year"}>3-Year</option>
                            <option value={"5-Year"}>5-Year</option>
                            <option value={"6-Year above"}>6-Year above</option>
                        </Form.Select>
                        {
                            myFormik.errors.experience && myFormik.touched.experience ?
                                <Form.Label style={{ color: "red" }}  >{myFormik.errors.experience}</Form.Label>
                                : null
                        }
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <h6>Salary</h6>

                        <Form.Select
                            name="salary"
                            value={myFormik.values.salary}
                            onChange={myFormik.handleChange}
                            onBlur={myFormik.handleBlur}
                        >
                            <option value={""} >Choose...</option>
                            <option value={"20k"}>20000</option>
                            <option value={"100k"}>100000</option>
                            <option value={"25k"}>25000</option>
                        </Form.Select>
                        {
                            myFormik.errors.salary && myFormik.touched.salary ?
                                <Form.Label style={{ color: "red" }}  >{myFormik.errors.salary}</Form.Label>
                                : null
                        }
                    </Form.Group>


                </Row>

                <Button type="submit" disabled={loding}>{loding ? "Loding.." : "Edit"}</Button>
            </Form>

        </div>
    )
}

export default Editusers
