import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setOptionalProducts } from '../state/actions/optionalActions';
import OptionalProductCard from './OptionalProductCard';

const Optionals = () => {

    const optionals = useSelector((state) => state.optionals);
    const dispatch = useDispatch();

    const fetchOptionals = async () => {
        const response = await axios.get("https://localhost:44363/api/optional").catch((err) => {
            console.log(err)
        });
        
        dispatch(setOptionalProducts(response.data))
    }

    useEffect(() => {
        fetchOptionals()
    }, []);


    const renderList = optionals.optionals.map((optional) => {
        return (<Col key={optional.id}>
            <OptionalProductCard optional={optional} />
        </Col>)
    });    


    return (
        <div>
            <div>Optional List</div>
            <Container>
                <Row>
                    {renderList}
                </Row>
            </Container>

        </div>
    )
};

export default Optionals;