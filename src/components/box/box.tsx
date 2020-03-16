import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../header';
import Main from '../main';

import bg_1 from '../../assets/images/home.jpg';
import bg_2 from '../../assets/images/photo.jpg';
import bg_3 from '../../assets/images/illustrations.jpg';
import bg_4 from '../../assets/images/vectors.jpg';
import bg_5 from '../../assets/images/waves.jpg';

const bg_55 = require('../../assets/video/wt.mp4');

const Box: React.FC = () => {
    const [bg, setBg] = useState(bg_1);
    const [video, setVideo] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        switch (true) {
            case pathname.indexOf('photo') > -1:
                setBg(bg_2);
                setVideo(false);
                break;
            case pathname.indexOf('illustration') > -1:
                setBg(bg_3);
                setVideo(false);
                break;
            case pathname.indexOf('vectors') > -1:
                setBg(bg_4);
                setVideo(false);
                break;
            case pathname.indexOf('video') > -1:
                setBg(bg_5);
                setVideo(true);
                break;
            default:
                setBg(bg_1);
                setVideo(false);
                break;
        }
    }, [pathname]);

    const videoElement = (
        <video loop autoPlay muted id="myVideo">
            <source src={bg_55} type="video/mp4" />
            Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
    );

    return (
        <div className="box" style={{ backgroundImage: `url(${bg})` }}>
            {video ? videoElement : null}
            <Header />
            <Main />
        </div>
    );
};

export default Box;
