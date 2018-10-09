import * as React from 'react';
import SearchBar from './SearchBar';
import ContactsList from './ContactsList';
import {ContactsModel} from '../../models/ContactsModel';
import { getContacts } from '../../containers/Hello';
interface IState{
    contacts: ContactsModel[];
}

export default class ContactsApp extends React.Component<{}, IState>{
    constructor(props:{}){
        super(props);
    }
    componentDidMount(){
        getContacts().then((data: any) => {
            this.setState({contacts: data}); 
            console.log('-----', this.state.contacts);
        });
        
        
    }
    render(){
        return(
            <div>
                Contacts div goes here......
                <SearchBar />
                <ContactsList {...this.state}/>
            </div>
        );
    }
}