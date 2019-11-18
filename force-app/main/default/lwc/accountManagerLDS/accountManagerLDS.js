/* eslint-disable no-console */
import { LightningElement, track, wire } from 'lwc';
import { createRecord , getRecord } from "lightning/uiRecordApi";
//import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

const FIELDS =["Account.Name","Account.Phone","Account.Website"];


export default class AccountManagerLDS extends LightningElement {
    @track accountname;
    @track accountphone;
    @track accountwebsite;

    @track recordid;
    
    @wire (getRecord, {recordId:'$recordid',fields:FIELDS})
    accountRecord;

    accountName(event){
        this.accountname=event.target.value;
    }
    accountPhone(event){
        this.accountphone=event.target.value;
    }
    accountWebsite(event){
        this.accountwebsite=event.target.value;
    }

    createAccount(){
        
        console.log("button clicked");

        const fieldsname = {'Name':this.accountname,'Phone':this.accountphone,'Website':this.accountwebsite};
        const recordinput ={apiName:'Account',fieldsname};

        console.log("account detail "+this.accountname+","+this.accountphone)

        createRecord(recordinput).then(response => {
            console.log("Account Created: "+response);
            console.log("accountid "+response.id);
            this.recordid=response.id;
        }).catch('error in creating account');
    }

    get retAccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }

        return undefined;
    }
    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }

        return undefined;
    }
    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }

        return undefined;
    }
}