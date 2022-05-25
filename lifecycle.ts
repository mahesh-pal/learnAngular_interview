import { Component, Input, OnInit, SimpleChanges, OnChanges, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges,OnInit {
  @Input() userName = '';
  @ContentChild('wrapper') el?: ElementRef;

  // 1. NgOnchanges is called once on component creation and everytime a change detection cycle runs and there is a change is input property.
  // No Inuput property no Onchanges calls
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log('Child Onchanges is called',changes);
  }

  // This is called just after the first ngOnChanges.
  // Called only once in a life cycle.
  // is called event when there are no Input
  ngOnInit() {
     console.log('Child NgOnInit is called');

  }
 // This is called after every change detection no matter what changed.
  ngDoCheck(){
    console.log(' child DO Check');
    console.log(this.el);

  }

  // Called only oncce after ngDoCheck.
  // This is the fist time u have acces too ElementRef of Content Child
  ngAfterContentInit(){
    console.log("Child Coontent Init", this.el);

  }

  ngAfterContentChecked(){
   console.log('after content checked');
  }


}
