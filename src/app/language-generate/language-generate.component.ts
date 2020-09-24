import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  Component,
  OnChanges,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTabChangeEvent, MatTabGroup } from "@angular/material/tabs";
import { LangService } from "../lang.service";

@Component({
  selector: "app-language-generate",
  templateUrl: "./language-generate.component.html",
  styleUrls: ["./language-generate.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class LanguageGenerateComponent implements OnInit {
  // tabs = ["First", "Second", "Third"];
  selected = new FormControl(0);
  contentIndex=0;
  languageCode;
  indexValue = 0;
  content;
  // selected = new FormControl(1);
  dataSource = ["name", "pos"];
  data: any = {};
  tabs = [];
  subtabs = [];
  subtabChanged;
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
    this.indexValue = tabChangeEvent.index;
    this.display();
this.subtabChanged=(event:MatTabChangeEvent):void=>{
console.log("event "+event.index);
this.contentIndex=event.index;
this.display2();

//  this.content=Object.values(this.data[this.tabs[this.indexValue]][this.subtabs[this.contentIndex]]).filter(data=>{
//       return data;
//     })
} 
  };
// subtabChanged=(event:MatTabChangeEvent):void=>{
// console.log("event "+event.index);
// this.contentIndex=event.index;
//  this.content=Object.values(this.data[this.tabs[this.indexValue]][this.subtabs[this.contentIndex]]).filter(data=>{
//       return data;
//     })
// }  
  constructor() {
    this.data = {
      "en-US": {
        wrapper1: {
          ticketpurchased: "Tickets purchased successfully",
          gotfree: "Free tickets you got.",
          maxTicketsPurchased: "Maximum tickets purchased."
        },
        game1: {
          jackpotId: "Jackpot ID",
          payout: "Payout",
          winTrigger: "Win trigger",
          winnerOrCommunity: "Winner / Community"
        },
        chat1: {
          chat_skill_level: "Chat skill level: %s",
          pending_friends: "(Pending friends: %s)",
          no_buddies: "No buddies found."
        }
      },
      "pt-BR": {
        wrapper2: {
          ticketpurchased: "Tickets purchased successfully",
          gotfree: "Free tickets you got.",
          maxTicketsPurchased: "Maximum tickets purchased."
        },
        game2: {
          jackpotId: "Jackpot ID",
          payout: "Payout",
          winTrigger: "Win trigger",
          winnerOrCommunity: "Winner / Community"
        },
        chat2: {
          chat_skill_level: "Chat skill level: %s",
          pending_friends: "(Pending friends: %s)",
          no_buddies: "No buddies found."
        }
      }
    };
  }
  ngOnInit() {
    this.tabs = Object.keys(this.data).filter(data => {
      return data;
    });
    this.display();
    this.display2();
    // this.addTab();
      this.content=Object.values(this.data[this.tabs[this.indexValue]][this.subtabs[this.contentIndex]]).filter(data=>{
      return data;
    })
    
  //  this.content=Object.values(this.data[this.tabs[this.indexValue]][this.subtabs[this.contentIndex]]).filter(data=>{
  //     return data;
  //   })
    console.log(this.content);
  }



  display() {
    console.log(" index is : " + this.indexValue);
    this.subtabs = Object.keys(this.data[this.tabs[this.indexValue]]).filter(
      data => {
        return data;
      }
    );
    console.log(this.subtabs);
  }
  display2() {
     this.content=Object.values(this.data[this.tabs[this.indexValue]][this.subtabs[this.contentIndex]]).filter(data=>{
      return data;
    })
  }

  addTab() {
    this.data["en-ps"] = this.data["en-US"];
    // this.data["en-ps1"]=this.data["en-US"];

    this.tabs = Object.keys(this.data).filter(data => {
      return data;
    });
    console.log(this.data);
    // code.value='';
  }
}
