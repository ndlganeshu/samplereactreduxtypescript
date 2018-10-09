import * as React from 'react';
import {ContactsModel} from '../../models/ContactsModel';

export default class SearchBar extends React.Component{
    constructor(props: ContactsModel){
        super(props);
    }

    render(){
        return(
            <div>
                Search:- &nbsp;
                <input type="text" />
            </div>
        );
    }
}