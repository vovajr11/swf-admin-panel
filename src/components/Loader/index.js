import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <BallTriangle
            heigth="200"
            width="200"
            color="orange"
            arialLabel="loading-indicator"
        />
    );
};

export default Loader;
