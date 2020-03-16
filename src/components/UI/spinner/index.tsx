import React from 'react';
import { Spin } from 'antd';

const Spinner: React.FC = () => {
    return (
        <div className="spinner-wrap">
            <Spin size="large" />
        </div>
    );
};

export default Spinner;
