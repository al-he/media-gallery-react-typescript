import React from 'react';
import SearchInput from './search-input';
import SearchPanel from './search-panel';

const Main: React.FC = () => {
    return (
        <>
            <main className="main">
                <div className="container">
                    <SearchInput />
                    <SearchPanel />
                </div>
            </main>
        </>
    );
};

export default Main;
