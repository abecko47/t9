import {ErrorMessage} from "./ErrorMessage";

export interface T9Response {
    data:string[] | null,
    error:ErrorMessage | null
}
