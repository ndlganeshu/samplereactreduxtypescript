import {EnthusiasmAction} from '../actions';
import {StoreState} from '../models/index';
import {INCREMENT_ENTHUSISASM, DECREMENT_ENTHUSISASM} from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction){
    console.log('reducer', action);
    switch(action.type){
        case INCREMENT_ENTHUSISASM:
        return {...state, enthusiasmLevel: state.enthusiasmLevel + 1}
        case DECREMENT_ENTHUSISASM:
        return {...state, enthusiasmLevel: state.enthusiasmLevel - 1}
    }
    return state;
}
