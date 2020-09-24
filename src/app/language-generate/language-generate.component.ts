import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-language-generate",
  templateUrl: "./language-generate.component.html",
  styleUrls: ["./language-generate.component.css"],
  encapsulation : ViewEncapsulation.None

})
export class LanguageGenerateComponent implements OnInit {
  // tabs = ["First", "Second", "Third"];
  indexValue;
  selected = new FormControl(0);
  data = {
    "en-US":{
        "wrapper":{
            "ticketpurchased": "Tickets purchased successfully",
            "gotfree": "Free tickets you got.",
            "maxTicketsPurchased": "Maximum tickets purchased."
        },
        "game":{
            "jackpotId": "Jackpot ID",
            "payout": "Payout",
            "winTrigger": "Win trigger",
            "winnerOrCommunity": "Winner / Community"
        },
        "chat":{
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
  constructor() {}

  ngOnInit() {
  this.tabs=Object.keys(this.data).filter(data=>{
    return data;
  });
  this.display();
  // console.log("main tabs : " ,this.tabs);
  // console.log("sub tabs : " ,this.subtabs);
  console.log(" index is : "+ this.selected.value);
  console.log(this.selected.value);
  }
  display(){
    // console.log(" index is : "+ this.selected.value);
  Object.keys(this.data[this.tabs[this.selected.value]]).filter(data=>{
    this.subtabs.push(data)
  });
  }
}
