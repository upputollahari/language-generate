import { Component, OnChanges,  OnInit, ViewChild,  ViewEncapsulation } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTabChangeEvent, MatTabGroup } from "@angular/material/tabs";

@Component({
  selector: "app-language-generate",
  templateUrl: "./language-generate.component.html",
  styleUrls: ["./language-generate.component.css"],
  encapsulation : ViewEncapsulation.None

})
export class LanguageGenerateComponent implements OnInit {
  // tabs = ["First", "Second", "Third"];
 
  indexValue=0;
  // selected = new FormControl(1);
  dataSource=['name','pos'];
  data = {
    "en-US":{
        "wrapper1":{
            "ticketpurchased": "Tickets purchased successfully",
            "gotfree": "Free tickets you got.",
            "maxTicketsPurchased": "Maximum tickets purchased."
        },
        "game1":{
            "jackpotId": "Jackpot ID",
            "payout": "Payout",
            "winTrigger": "Win trigger",
            "winnerOrCommunity": "Winner / Community"
        },
        "chat1":{
            "chat_skill_level": "Chat skill level: %s",
            "pending_friends": "(Pending friends: %s)",
            "no_buddies": "No buddies found."
        }
 
    },
    "pt-BR":{
        "wrapper2":{
            "ticketpurchased": "Tickets purchased successfully",
            "gotfree": "Free tickets you got.",
            "maxTicketsPurchased": "Maximum tickets purchased."
        },
        "game2":{
            "jackpotId": "Jackpot ID",
            "payout": "Payout",
            "winTrigger": "Win trigger",
            "winnerOrCommunity": "Winner / Community"
        },
        "chat2":{
            "chat_skill_level": "Chat skill level: %s",
            "pending_friends": "(Pending friends: %s)",
            "no_buddies": "No buddies found."
        }
    }
};
  tabs=[];
  subtabs=[];
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
    this.indexValue=tabChangeEvent.index;
    this.display();

  }
  constructor() {}

// ngOnChanges(){
//   console.log("index value :"+ this.indexValue);
// }
  ngOnInit() {
  this.tabs=Object.keys(this.data).filter(data=>{
    return data;
  });
  this.display();
  }

  display(){
    console.log(" index is : "+ this.indexValue);
    this.subtabs=Object.keys(this.data[this.tabs[this.indexValue]]).filter(data=>{
      return data;
  });
  console.log(this.subtabs);
  }
}
