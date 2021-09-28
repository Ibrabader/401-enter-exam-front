import React, { Component } from 'react'
import { Button, Modal,Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class UpdateForm extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Modal show={this.props.showForm}  onHide={this.props.handleDisplayUpdateModal} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.handleUpdate} >
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" name="name"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    price
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" name="price"  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    image
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" name="image" />
                                </Col>
                            </Form.Group>

                            <Button type="submit" > Save Changes</Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateForm
