import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

const vote = (entry) => {
    console.log('entry:', entry);
};

ReactDom.render(
    <Voting pair={pair} vote={vote} />,
    document.getElementById('app')
);
