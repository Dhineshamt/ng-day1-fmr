import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() childTitle: string;
  @Input() childDate: Date;

  constructor() {}

  ngOnInit() {}
}
