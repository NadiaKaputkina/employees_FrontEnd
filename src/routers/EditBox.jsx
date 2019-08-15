import React, {Component} from 'react';

import PageComponent from "./PageComponent";
import EditEntry from "../components/form/EditEntry";

class EditBox extends Component {
    render() {
        console.log('EditBox - render', this.props);
        const entryNumberToEdit = this.props.match.params.id;

        return (
            <PageComponent showEntry={<EditEntry entryNumberToEdit={entryNumberToEdit}/>} />
        );
    }
}

export default EditBox;


