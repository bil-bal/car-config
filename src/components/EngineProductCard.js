import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectEngine, deselectEngine } from '../state/actions/resultActions';
import { addPrice, removePrice } from '../state/actions/resultActions';
import _ from "lodash";

const EngineProductCard = (props) => {
    
    const result = useSelector((state) => state.result);
    const dispatch = useDispatch();



    const selectEngineAndAddPrice = () => {
        console.log(result)

        if (result.selectedEngine === null) {
            console.log(props)
            dispatch(selectEngine(props.item));
            dispatch(addPrice(props.item.price));
        }
        else if (props.item.id !== result.selectedEngine.id) {
            dispatch(removePrice(result.selectedEngine.price));
            dispatch(deselectEngine())
            dispatch(selectEngine(props.item));
            dispatch(addPrice(props.item.price));
        }
    }


    const selected = result.selectedEngine?.id === props.item?.id

    return (
        <Card>          
            <Card.Body>
                <Card.Title>Name: {props.item.name}</Card.Title>
                <Card.Text>Price: {props.item.price} €</Card.Text>
                <Button disabled={selected} variant="primary" onClick={() => { selectEngineAndAddPrice() }}>{selected ? "Added to Config" : "Select"}</Button>
            </Card.Body>
        </Card>
    )
};

// const mapStateToProps = (state, ownProps) => ({
//     item: _.find(state.engines.engines, {id: ownProps.id})
// }
// );

const mapStateToProps = (state, ownProps) => {
    const itemState =  _.find(state.engines.engines, {id: ownProps.engine.id})

    return {
        item: itemState
    }
};


export default connect(mapStateToProps)(EngineProductCard);

// export default EngineProductCard;