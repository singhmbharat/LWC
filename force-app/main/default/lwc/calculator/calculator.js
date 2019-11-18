import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    firstnum;
    secondnum;
    @track  result;

    numberchange(event){
        
        const inputboxname = event.target.name;
        if( inputboxname === "firstnum"){
            this.firstnum=event.target.value;
            console.log( 'first num'+ this.firstnum);
        }
        else if(inputboxname === "secondnum"){
            this.secondnum=event.target.value;
            console.log('second num'+this.secondnum);
        }
        else
        {

        }

    }

    addfun(){
        this.result= parseInt(this.firstnum) + parseInt(this.secondnum);
        //const secondn = parseInt(this.secondnum);       
        //this.result= "result is ${firstn  + secondn}";
    }
    subfun(){
       const firstn = parseInt(this.firstnum);
        const secondn = parseInt(this.secondnum);       
        this.result= firstn - secondn;
    }
    mulfun(){
        const firstn = parseInt(this.firstnum);
        const secondn = parseInt(this.secondnum);       
        this.result= firstn * secondn;
    }
    divfun(){
          const firstn = parseInt(this.firstnum);
        const secondn = parseInt(this.secondnum);       
        this.result= firstn / secondn;
    }
}