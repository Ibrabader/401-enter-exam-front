import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateForm from './UpdateForm';

class FavFruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favFruits: [],
      showForm : false,
      fruitsSelectedData : {}
    }
  }
  componentDidMount = () => {

    axios.get(`${process.env.REACT_APP_SERVER}/favdata`).then(element => {
      this.setState({
        favFruits: element.data,
      })
    })
  }

  handleDelete = (id) => {

    axios.delete(`${process.env.REACT_APP_SERVER}/favdata/${id}`).then(deleteResponse => {

      if (deleteResponse.data.deletedCount === 1) {
        const newArr = this.state.favFruits.filter(data => data._id !== id);
        this.setState({
          favFruits: newArr
        })

      }
    })

  }


  handleUpdate = (e) => {
    e.preventDefault();
    const requesUpdateBody = {
      name : e.target.name.value,
      image:  e.target.image.value,
      price : e.target.price.value,
    }

    axios.put(`${process.env.REACT_APP_SERVER}/favdata/${this.state.fruitsSelectedData._id}`,requesUpdateBody).then(updateRes=>{
      const updatedArr = this.state.favFruits.map(element => {
        if(element._id == this.state.fruitsSelectedData._id){
          element = updateRes.data;
          return element
        }
        return element
      })
      this.setState({
        favFruits : updatedArr,
        fruitsSelectedData : {},
      })
      this.handleDisplayUpdateModal();
    })
  

  }


  handleDisplayUpdateModal = (element) => { 
    this.setState ({
      
      showForm : !this.state.showForm,
      fruitsSelectedData : element 
    
    })
  }

  render() {

    console.log(this.state.favFruits);
    return (

     
      <>

      <>
      <UpdateForm
      showForm={this.state.showForm}
      fruitsSelectedData={this.state.fruitsSelectedData}
      handleUpdate={this.handleUpdate}
      handleDisplayUpdateModal={this.handleDisplayUpdateModal}
          />
      </>
        <Row xs={3}>
          {this.state.favFruits.map((element, idx) => {
            return (

              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={element.image} />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                      {element.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.handleDelete(element._id)} >Delete</Button>
                    <Button variant="primary" onClick={() =>  this.handleDisplayUpdateModal(element)} >Update</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </>
    )
  }
}

export default FavFruit;
