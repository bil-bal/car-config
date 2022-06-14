import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setEngineProducts } from '../state/actions/engineActions';
import EngineProductCard from './EngineProductCard';

const Engines = () => {

    const engines = useSelector((state) => state.engines);
    const dispatch = useDispatch();

    const fetchEngines = async () => {
        const response = await axios.get("https://localhost:44363/api/engine").catch((err) => {
            console.log(err)
        });
        
        dispatch(setEngineProducts(response.data))
    }

    useEffect(() => {
        fetchEngines()
    }, []);


    const renderList = engines.engines.map((engine) => {
        return (<Col key={engine.id}>
            <EngineProductCard engine={engine} />
        </Col>)
    });    


    return (
        <div>
            <div>Engine List</div>
            <Container>
                <Row>
                    {renderList}
                </Row>
            </Container>

        </div>
    )
};

export default Engines;