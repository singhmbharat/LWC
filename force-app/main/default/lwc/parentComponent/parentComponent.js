/* eslint-disable no-console */
import { LightningElement,track } from 'lwc';

export default class ParentComponent extends LightningElement {

@track cbvalue;

inputValue(event){
    this.cbvalue = event.target.value;
}

cbchecked(){
    console.log("button clicked"+this.cbvalue);
    const childcomponent = this.template.querySelector('c-child-component');
    console.log("child component"+childcomponent);
    const returnvalue = childcomponent.selectCheckbox(this.cbvalue);
    console.log("completed Parent"+returnvalue);
}
}