import { LightningElement,api } from 'lwc';

//defining public property using api and calling child component 
//this is child component js file 

export default class MeetingRoom extends LightningElement {

    @api meetingRoomInfo;//= {roomName :"A-00",roomCapacity:"0"};
    @api showRoomInfo;


    onClickRooms(){

            console.log("tile clicked in child");
            const tileClicked = new CustomEvent('tileclicked',{detail:this.meetingRoomInfo,bubbles:true});

            this.dispatchEvent(tileClicked);

    }
}