/* eslint-disable no-console */
import { LightningElement,track } from 'lwc';

export default class Record_edit_form extends LightningElement {

    @track recordid;

    handleSuccess(event){

        console.log("handling success");
        this.recordid = event.detail.id;
        console.log("record id"+this.recordid);
    }    
}