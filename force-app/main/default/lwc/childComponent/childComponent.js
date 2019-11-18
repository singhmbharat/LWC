/* eslint-disable no-console */
import { LightningElement,track,api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @track value=['red'];

    options =[
            {label:'RedMarker',value:'red'},
            {label:'BlueMarker',value:'blue'},
            {label:'GreenMarker',value:'green'}
    ];

    @api
    selectCheckbox(checkboxvalue){
        console.log("parent calling"+checkboxvalue);

        //promise call
        const selectedcb = this.options.find( checkbox =>{
            return checkboxvalue === checkbox.value;
        })
        console.log("parent calling 1"+checkboxvalue);
        if(selectedcb){
            this.value = selectedcb.value;
            return "succesfully checked";
        }
      
            return "nocheckboxfound";
        

    }
}