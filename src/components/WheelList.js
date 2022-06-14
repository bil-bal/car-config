import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setWheelProducts } from '../state/actions/wheelActions';
import WheelProductCard from './WheelProductCard';

const Wheels = () => {

    const wheels = useSelector((state) => state.wheels);
    const dispatch = useDispatch();

    const fetchWheels = async () => {
        const response = await axios.get("https://localhost:44363/api/wheel").catch((err) => {
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
            <Container>
                <Row>
                    {renderList}
                </Row>
            </Container>

        </div>
    )
};

export default Wheels;