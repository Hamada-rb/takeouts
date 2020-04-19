import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Place extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.place.name,
            address: props.place.address,
            phone: props.place.phone,
            time: props.place.time,
            place: {
                lng: props.place.lng,
                lat: props.place.lat
            }
        }
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>
                        {this.state.name}
                    </Card.Text>
                    <Button variant="primary">Webサイトを見にいく</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Place;
