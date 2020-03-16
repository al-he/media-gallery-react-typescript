import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Page from '../page';
import ImagePage from '../page/image-page/image-page';
import VideoPage from '../page/video-page/video-page';

const App: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Page} />
            <Route path="/photo/" exact component={Page} />
            <Route path="/illustration/" exact component={Page} />
            <Route path="/vectors/" exact component={Page} />
            <Route path="/video/" exact component={Page} />
            <Route path={['/:id', '/illustration/:id', '/vectors/:id', '/photo/:id']} exact component={ImagePage} />
            <Route path={['/video/:id']} exact component={VideoPage} />
            <Redirect to="/" />
        </Switch>
    );
};

export default App;
