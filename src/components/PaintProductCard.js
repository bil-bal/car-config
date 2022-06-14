import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectPaint, deselectPaint } from '../state/actions/resultActions';
import { addPrice, removePrice } from '../state/actions/resultActions';
import _ from "lodash";

const PaintProductCard = (props) => {
    
    const result = useSelector((state) => state.result);
    const dispatch = useDispatch();



    const selectPaintAndAddPrice = () => {
        console.log(result)

        if (result.selectedPaint === null) {
            console.log(props)
            dispatch(selectPaint(props.item));
            dispatch(addPrice(props.item.price));
        }
        else if (props.item.id !== result.selectedPaint.id) {
            dispatch(removePrice(result.selectedPaint.price));
            dispatch(deselectPaint())
            dispatch(selectPaint(props.item));
            dispatch(addPrice(props.item.price));
        }
    }


    const selected = result.selectedPaint?.id === props.item?.id

    return (
        <Card >
            <Card.Img src={props.item.image}/>
            <Card.Body>
                <Card.Title>Name: {props.item.name}</Card.Title>
                <Card.Text>Price: {props.item.price} €</Card.Text>
                <Button disabled={selected} variant="primary" onClick={() => { selectPaintAndAddPrice() }}>{selected ? "Added to Config" : "Select"}</Button>
            </Card.Body>
        </Card>
    )
};

// const mapStateToProps = (state, ownProps) => ({
//     item: _.find(state.paints.paints, {id: ownProps.id})
// }
// );

const mapStateToProps = (state, ownProps) => {
    const itemState =  _.find(state.paints.paints, {id: ownProps.paint.id})

    return {
        item: itemState
    }
};


export default connect(mapStateToProps)(PaintProductCard);

// export default PaintProductCard;