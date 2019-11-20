import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myCurrency"
})
export class MyCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    let argString = "";

    args.forEach(a => {
      argString += a;
    });

    switch (args[0]) {
      case "INR":
        return "INR " + value + argString;

      case "EUR":
        return "EURO " + value + argString;

      default:
        return "UNKNOWN " + value + argString;
        break;
    }
  }
}
