/* eslint-disable no-console */

import { LightningElement,track } from 'lwc';
import { createRecord  } from "lightning/uiRecordApi";
import CONTACT_OBJECT from '@salesforce/schema/Contact';
//import NAME_FIELD from '@salesforce/schema/Contact.last';

export default class contactlds extends LightningElement {

    @track contactname;
    @track contactPhone;
    @track contactemail;
    
    cnameonchangehandler(event){
        this.contactname=event.target.value;
    }
    cphoneonchangehandler(event){
        this.contactPhone=event.target.value;
    }
    cemailonchangehandle(event){
        this.contactemail=event.target.value;
    }
    createcontact(){
        
        //const fieldsname = {'LastName':this.contactName,'MobilePhone':this.contactPhone,'Email':this.contactemail};
        
        const fieldsname = {'LastName':'batnam'};
       
      // const fields ={};

       //fields[NAME_FIELD.fieldApiName]=this.contactName;
      
       console.log("creating contact function"+this.contactName+this.contactPhone+this.contactemail);

       const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fieldsname };

        createRecord(recordInput).then(res=>{

            console.log('contact created: ',res.id);
        
        // eslint-disable-next-line no-unused-vars
        }).catch( error =>{
            //console.log('contact erorr',error.body.message);
            console.log('contact erorr',error.statusText);
        });
    }
}