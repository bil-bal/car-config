import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectOptional, deselectOptional } from '../state/actions/resultActions';
import { addPrice, removePrice } from '../state/actions/resultActions';
import _ from "lodash";

const OptionalProductCard = (props) => {
    
    const result = useSelector((state) => state.result);
    const dispatch = useDispatch();



    const selectOptionalAndAddPrice = () => {
        console.log(result)

        if (result.selectedOptional === null) {
            console.log(props)
            dispatch(selectOptional(props.item));
            dispatch(addPrice(props.item.price));
        }
        else if (props.item.id !== result.selectedOptional.id) {
            dispatch(removePrice(result.selectedOptional.price));
            dispatch(deselectOptional())
            dispatch(selectOptional(props.item));
            dispatch(addPrice(props.item.price));
        }
    }


    const selected = result.selectedOptional?.id === props.item?.id

    return (
        <Card >
            <Card.Img src={props.item.image}/>
            <Card.Body>
                <Card.Title>Name: {props.item.name}</Card.Title>
                <Card.Text>Price: {props.item.price} €</Card.Text>
                <Button disabled={selected} variant="primary" onClick={() => { selectOptionalAndAddPrice() }}>{selected ? "Added to Config" : "Select"}</Button>
            </Card.Body>
        </Card>
    )
};

// const mapStateToProps = (state, ownProps) => ({
//     item: _.find(state.optionals.optionals, {id: ownProps.id})
// }
// );

const mapStateToProps = (state, ownProps) => {
    const itemState =  _.find(state.optionals.optionals, {id: ownProps.optional.id})

    return {
        item: itemState
    }
};


export default connect(mapStateToProps)(OptionalProductCard);

// export default OptionalProductCard;