export const SAVE_DATA = 'SAVE_DATA'
import { addDataToDB } from "../apis/resources";
  
export function addToDataBase(data){
    console.log("dispatch")
    return (
        addDataToDB(data)
        .then()
    )
} 