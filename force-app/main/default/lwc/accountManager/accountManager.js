/* eslint-disable no-console */
import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountManger.getAccounts'


export default class AccountManager extends LightningElement {


    @wire(getAccounts)
    accts;

    responseRecived(){
        if(this.accts){
            console.log("response recived");
            return true;
        }
        console.log("no response recived");
        return false;
    }
}