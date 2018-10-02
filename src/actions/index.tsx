import * as constants from '../constants';

export interface IncrementEnthusiasm{
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm{
    type: constants.DECREMENT_ENTHUSISASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm{
    console.log('came to here increment');
    return {
        type: constants.INCREMENT_ENTHUSISASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm{
    console.log('came to here decrement');
    return {
        type: constants.DECREMENT_ENTHUSISASM
    }
}