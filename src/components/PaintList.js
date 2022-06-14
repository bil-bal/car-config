import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setPaintProducts } from '../state/actions/paintActions';
import PaintProductCard from './PaintProductCard';

const Paints = () => {

    const paints = useSelector((state) => state.paints);
    const dispatch = useDispatch();

    const fetchPaints = async () => {
        const response = await axios.get("https://localhost:44363/api/paint").catch((err) => {
            console.log(err)
        });
        
        dispatch(setPaintProducts(response.data))
    }

    useEffect(() => {
        fetchPaints()
    }, []);


    const renderList = paints.paints.map((paint) => {
        return (<Col key={paint.id}>
            <PaintProductCard paint={paint} />
        </Col>)
    });    


    return (
        <div>
            <div>Paint List</div>
            <Container>
                <Row>
                    {renderList}
                </Row>
            </Container>

        </div>
    )
};

export default Paints;