import React, { useState }from "react";
import { useSelector } from 'react-redux';
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiString } from "..";

const ResultView = () => {

    const [isLoading, setIsLoading] = useState(false)
    
    const result = useSelector((state) => state.result);

    const stateWithoutTotal = Object.values(result);
    stateWithoutTotal.pop();

    const enableButton = Object.values(stateWithoutTotal).every(value => {
        if (value === null || value === undefined) {
            return false;
        }

        return true;
    });
    
    
    const navigate = useNavigate();

    const resultModel = { Engine: result.selectedEngine,
                        Optional: result.selectedOptional,
                        Paint: result.selectedPaint,
                        Wheel: result.selectedWheel,
                        TotalPrice: result.total };

    const createResultInDbAndNavigate = async () => {
        setIsLoading(true);
        const response = await axios.post(`${apiString}/api/result`, resultModel).catch((err) => {
            console.log(err)
        });
        
        const urlCode = response.data.id

        navigate(`/result/${urlCode}`)
    }


    const renderList = stateWithoutTotal.map((value) => {
        return (<>{value !== null ? <h4 key={value?.name}>{value.name}</h4> : <></>}</>)
    });

    return (
        <div>
            <br />
            {renderList}            
            <h2>Total Price: {result.total} €</h2>
            {isLoading ? <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> : <Button disabled={!enableButton} onClick={() => createResultInDbAndNavigate()} variant="success" >View Summary</Button>}
            
        </div>
    );
};

export default ResultView;