import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      fruitsData: [],

    }
  }

  componentDidMount = () => {

    axios.get(`${process.env.REACT_APP_SERVER}/alldata`).then(element => {
      this.setState({
        fruitsData: element.data,
      })

    })
  }

  addToFav = (idx) => {
    const requestBody = {
      name: this.state.fruitsData[idx].name,
      image: this.state.fruitsData[idx].image,
      price: this.state.fruitsData[idx].price
    }

    axios.post(`${process.env.REACT_APP_SERVER}/favdata`, requestBody)
  }



  render() {

    console.log(this.state.fruitsData);
    return (
      <>
        <Row xs={3}>
          {this.state.fruitsData.map((element, idx) => {
            return (

              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={element.image} />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                      {element.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.addToFav(idx)} >Add to Favourite</Button>
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

export default Home;
