import * as React from 'react';
import {ContactsModel} from '../../models/ContactsModel';
interface IProps{
    contacts: ContactsModel[]
}
export default class ContactsList extends React.Component<IProps>{
    constructor(props: IProps){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.contacts && 
                this.props.contacts.map((item) => {
                    return <div key={item.id}> {item.id}: {item.name}</div>
                })}
            </div>
        );
    }
}