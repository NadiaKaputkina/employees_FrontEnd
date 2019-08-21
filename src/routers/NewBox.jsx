import React from 'react';

import PageComponent from "./PageComponent";
import NewEntry from '../components/form/NewEntry';


const NewBox = () => {
    console.log('NewBox - render');

    return (
        <PageComponent showEntry={<NewEntry />} />
    )
};

export default NewBox;


