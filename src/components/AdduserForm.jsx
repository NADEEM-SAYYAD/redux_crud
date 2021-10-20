import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AdduserForm = (props) => {
    const initialState = {
        firstName: props.firstName ? props.firstName : "",
        lastName: props.lastName ? props.lastName : "",
        gender: props.gender ? props.gender : "",
        martialStatus: props.martialStatus ? props.martialStatus : "",
    };

    const [user, setUser] = useState(initialState);
    const { firstName, lastName, gender, martialStatus } = user;
    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const addUser = (e)=>{
        e.preventDefault();
        props.addUserHandler(user)
    }
    return (
        <Container
            style={{
                border: "2px solid black",
                borderRadius: "10px",
                borderColor: "#f1f1f1",
                padding: "15px",
            }}
        >
            <Form onSubmit={addUser}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={inputHandler}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={inputHandler}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <div key={`inline-radio`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Male"
                                    name="gender"
                                    type="radio"
                                    id={`inline-radio-1`}
                                    value="Male"
                                    onChange={inputHandler}
                                    checked={gender === "Male" && true}
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    name="gender"
                                    type="radio"
                                    id={`inline-radio-2`}
                                    value="Female"
                                    onChange={inputHandler}
                                    checked={gender === "Female" && true}
                                />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Martial Status</Form.Label>
                            <Form.Control
                                as="select"
                                name="martialStatus"
                                onChange={inputHandler}
                                value={martialStatus}
                            >
                                <option value="">Select</option>
                                <option value="Married">Married</option>
                                <option value="Single">Single</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};
export default AdduserForm;