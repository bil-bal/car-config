import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectWheel, deselectWheel } from '../state/actions/resultActions';
import { addPrice, removePrice } from '../state/actions/resultActions';
import _ from "lodash";

const WheelProductCard = (props) => {
    
    const result = useSelector((state) => state.result);
    const dispatch = useDispatch();



    const selectWheelAndAddPrice = () => {
        console.log(result)

        if (result.selectedWheel === null) {
            console.log(props)
            dispatch(selectWheel(props.item));
            dispatch(addPrice(props.item.price));
        }
        else if (props.item.id !== result.selectedWheel.id) {
            dispatch(removePrice(result.selectedWheel.price));
            dispatch(deselectWheel())
            dispatch(selectWheel(props.item));
            dispatch(addPrice(props.item.price));
        }
    }


    const selected = result.selectedWheel?.id === props.item?.id

    return (
        <Card >
            <Card.Body>
                <Card.Title>Name: {props.item.name}</Card.Title>
                <Card.Text>Price: {props.item.price} €</Card.Text>
                <Button disabled={selected} variant="primary" onClick={() => { selectWheelAndAddPrice() }}>{selected ? "Added to Config" : "Select"}</Button>
            </Card.Body>
        </Card>
    )
};

// const mapStateToProps = (state, ownProps) => ({
//     item: _.find(state.wheels.wheels, {id: ownProps.id})
// }
// );

const mapStateToProps = (state, ownProps) => {
    const itemState =  _.find(state.wheels.wheels, {id: ownProps.wheel.id})

    return {
        item: itemState
    }
};


export default connect(mapStateToProps)(WheelProductCard);

// export default WheelProductCard;