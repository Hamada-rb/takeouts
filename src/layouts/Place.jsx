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
                lat: props.place.place.lat,
                lng: props.place.place.lng
            }
        }
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>
                        <p>住所:{this.state.name}</p>
                        <p>電話番号:{this.state.phone}</p>
                        <p>営業時間:{this.state.time}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Place;
