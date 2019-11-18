import { LightningElement,track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    @track selectedmeetingroom;
    meetingRoomsInfo = [
                    {roomName:"A-01",roomCapacity:"12"},
                    {roomName:"A-02",roomCapacity:"4"},
                    {roomName:"B-01",roomCapacity:"8"},
                    {roomName:"B-02",roomCapacity:"3"}
    ];

    onTileSelect(event){
        console.log("tile in parent");
        const meetingInfo = event.detail;
       console.log("parent1"+meetingInfo); 
        this.selectedmeetingroom = meetingInfo.roomName;
    }
}