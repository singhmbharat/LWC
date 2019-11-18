
/* eslint-disable no-console */
import { LightningElement,track,wire } from 'lwc';
//import { getRecord } from 'lightning/uiRecordApi';
import getCarTypes from '@salesforce/apex/CarTypes.getCarTypeslist';

//import CAR_TYPE from '@salesforce/schema/Car_Type__c';
import {NavigationMixin} from 'lightning/navigation';

export default class selectcartype extends NavigationMixin(LightningElement) {

    @track cartypeslist = [];
    @track selectedcartype;

    @wire(getCarTypes)
    wiredcartypes({error,data}){
        var i;             
        if(data){
            console.log('data is '+data);
            console.log('data 1 is id:'+data[1].id+'data 1 Name'+data[1].Name);
            for(i=0;i<data.length;i++){
              
                console.log('id=' + data[i].name);
                this.cartypeslist = [...this.cartypeslist ,{value: data[i].Name , label: data[i].Name}];                                   
            }
            this.error = undefined;
        } else if(error){
            this.error=error;
            this.cartypeslist=undefined;
        }
    }

    get Options(){
       return this.cartypeslist;
    }
    handleChangeCarType(event){
        this.selectedcartype = event.detail.value;

        const selectedcars = new CustomEvent('selectedtype',{detail:this.selectedcartype});
        this.dispatchEvent(selectedcars);
        console.log('event raised');
    }
    newCarType(){
        console.log('coming soon feature');

        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Car_Type__c',
                actionName:'new'
            }
        });
    }

}