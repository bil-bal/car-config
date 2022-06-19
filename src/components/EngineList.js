import React, { useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setEngineProducts } from '../state/actions/engineActions';
import EngineProductCard from './EngineProductCard';
import { apiString } from '..';

const Engines = () => {

    const engines = useSelector((state) => state.engines);
    const dispatch = useDispatch();

    const fetchEngines = async () => {
        const response = await axios.get(`${apiString}/api/engine`).catch((err) => {
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
            {Object.keys(engines.engines).length == 0 ? (<Spinner animation="border" role="status">
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

export default Engines;