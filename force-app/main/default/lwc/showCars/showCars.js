/* eslint-disable no-console */
import { LightningElement,api,wire, track } from 'lwc';
import getCarlist from '@salesforce/apex/Cars.getCars';




export default class showCars extends LightningElement {
  
    @api cars;
    @track carlist;
    @wire(getCarlist,{type:'$cars'})
    carslist({data,error}){
        if (data){
            
            this.carlist=data;
        }
        else if(error)
        {
            console.log("error occured while getting cars");
        }
    }
}