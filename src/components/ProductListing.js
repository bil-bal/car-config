import React from "react";
import Engines from "./EngineList"
import Paints from "./PaintList"
import Wheels from "./WheelList"
import Optionals from "./OptionalList"
import ResultView from "./ResultView";


const ProductListing = () => {
    return (
        <div>
            <Engines />
            <br />
            <Paints />
            <br />
            <Wheels />
            <br />
            <Optionals />
            <br />
            <ResultView />
        </div>
    );
};

export default ProductListing;