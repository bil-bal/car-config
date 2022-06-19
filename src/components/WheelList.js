import React, { useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setWheelProducts } from '../state/actions/wheelActions';
import WheelProductCard from './WheelProductCard';
import { apiString } from '..';

const Wheels = () => {

    const wheels = useSelector((state) => state.wheels);
    const dispatch = useDispatch();

    const fetchWheels = async () => {
        const response = await axios.get(`${apiString}/api/wheel`).catch((err) => {
            console.log(err)
        });
        
        dispatch(setWheelProducts(response.data))
    }

    useEffect(() => {
        fetchWheels()
    }, []);


    const renderList = wheels.wheels.map((wheel) => {
        return (<Col key={wheel.id}>
            <WheelProductCard wheel={wheel} />
        </Col>)
    });    


    return (
        <div>
            <div>Wheel List</div>
            {Object.keys(wheels.wheels).length == 0 ? (<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>) : <Container>
                <Row>
                    {renderList}
                </Row>
            </Container>

        }
        </div>
    )
};

export default Wheels;