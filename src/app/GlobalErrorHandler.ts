import { ErrorHandler, Injectable } from "@angular/core";
import { LocationStrategy } from "@angular/common";

@Injectable({
    providedIn: 'root'
  })
export class GlobalErrorHandler extends ErrorHandler {
    constructor(private locationStrategy : LocationStrategy){
        super()
    }
    override handleError(error: any): void {

        var errorEvent ={
            path: this.locationStrategy.path(),
            message: error.message??error.toString(),
            handler: 'GlobalErrorHandler',
            stack: error.stack
        }
        alert(errorEvent.stack)

    }
}
