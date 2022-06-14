import React from "react";
import { useSelector } from 'react-redux';

const ResultView = () => {

    const result = useSelector((state) => state.result)
    
    return (
        <div>
            <br />
            {result.selectedEngine !== null ? <h4>{result.selectedEngine.name}</h4> : <></>}
            {result.selectedPaint !== null ? <h4>{result.selectedPaint.name}</h4> : <></>}
            {result.selectedWheel !== null ? <h4>{result.selectedWheel.name}</h4> : <></>}
            {result.selectedOptional !== null ? <h4>{result.selectedOptional.name}</h4> : <></>}
            <h2>Total Price: {result.result} €</h2>
        </div>
    );
};

export default ResultView;