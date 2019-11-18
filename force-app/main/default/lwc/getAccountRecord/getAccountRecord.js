/* eslint-disable no-console */
import { LightningElement , wire } from 'lwc';
import {getRecord } from 'lightning/uiRecordApi';

export default class GetAccountRecord extends LightningElement {

    @wire(getRecord,{recordId:'',layoutTypes:['FULL'],modes:['View']})
    accountrecord;

    showRecords(){
        console.log("hello" +this.accountrecord.data);
    }    

}