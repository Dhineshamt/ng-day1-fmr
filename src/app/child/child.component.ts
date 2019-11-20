import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() childTitle: string;
  @Input() childDate: Date;

  dummyTitle;

  constructor() {}

  ngOnInit() {}

  clickHandler(args) {
    console.log("Clicked!", args);
  }

  inputHandler(args) {
    this.dummyTitle = args.target.value;
    console.log(args.target.value);
  }
}
