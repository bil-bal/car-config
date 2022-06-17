import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { selectEngine, selectPaint, selectWheel, selectOptional, setPrice, setOrderComplete } from "../state/actions/resultActions";

const ResultSummary = () => {

    const { urlCode } = useParams();

    const result = useSelector((state) => state.result);

    const dispatch = useDispatch();

    const setDataFromDb = async () => {
        const response = await axios.get(`https://localhost:44363/api/result/${urlCode}`).catch((err) => {
            console.log(err)
        });

        console.log("response")
        console.log(response)

        dispatch(selectEngine(response.data.engine))
        dispatch(selectPaint(response.data.paint))
        dispatch(selectWheel(response.data.wheel))
        dispatch(selectOptional(response.data.optional))
        dispatch(setOrderComplete(response.data.orderComplete))
        dispatch(setPrice(response.data.totalPrice))
    }

    useEffect(() => {
        setDataFromDb()
    }, []);
    
    const completeOrder = async () => {
        const orderModel = { Id: urlCode, TotalPrice: result.total,  OrderComplete : true };
        const response = await axios.put(`https://localhost:44363/api/result/${urlCode}`, orderModel).catch((err) => {
            console.log(err)
        });

        dispatch(setOrderComplete(true));
        
    }


    const stateWithoutTotal = Object.values(result);
    stateWithoutTotal.pop();

    const navigate = useNavigate();

    const renderList = stateWithoutTotal.map((value) => {
        return (<>{value !== null ? <h4 key={value?.name}>{value.name}</h4> : <></>}</>)
    });


    return (
        <div>
            <br />
            {renderList}
            <h2>Total Price: {result.total} €</h2>
            <Button variant="link" onClick={() => navigate("/")}>Go Back</Button>
            {result.orderComplete ? <h2>Thanks for your order!</h2>: <Button variant="danger" onClick={() => completeOrder()} >Order now</Button>}
            <p>Use the following link to get back to this page: <a href={window.location.href}>{window.location.href}</a></p>
        </div>
    );
};

export default ResultSummary;