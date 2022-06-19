import React, { useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setPaintProducts } from '../state/actions/paintActions';
import PaintProductCard from './PaintProductCard';
import { apiString } from '..';

const Paints = () => {

    const paints = useSelector((state) => state.paints);
    const dispatch = useDispatch();

    const fetchPaints = async () => {
        const response = await axios.get(`${apiString}/api/paint`).catch((err) => {
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
            {Object.keys(paints.paints).length == 0 ? (<Spinner animation="border" role="status">
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

export default Paints;