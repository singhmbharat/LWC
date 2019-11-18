/* eslint-disable no-console */
import { LightningElement,track } from 'lwc';

export default class rentACar extends LightningElement {
    
    @track selectedcartype;

    

    onSelectedcartypehandler(event){
        console.log('selected car '+event.detail );
        this.selectedcartype=event.detail;
    }
}