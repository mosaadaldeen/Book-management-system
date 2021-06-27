import React from 'react'
import {Form, Button} from 'react-bootstrap'

const Register = () => {

  const handleOnSubmit = () => {
    
  }
  return (
<Form className="register">
  <Form.Group controlId="formBasicName">
    <Form.Label className="register">Please enter your name</Form.Label>
    <Form.Control className="mb-3" type="text" placeholder="Enter name" />
  </Form.Group>

  <Button variant="primary" onClick={handleOnSubmit} type="submit">
    Submit
  </Button>
</Form>
  )
}

export default Register
