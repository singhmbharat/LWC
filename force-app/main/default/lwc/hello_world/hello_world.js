import { LightningElement,track } from 'lwc';

export default class Hello_world extends LightningElement {
 @track greetings="hello";
    greetingchangehandler(event){
        //alert('hell');
         console.log("i am changed");
        this.greetings = event.target.value;
    }
}