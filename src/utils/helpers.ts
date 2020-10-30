import {Pokemon} from "../stores/DataStore";

export const getWinner = (red:Pokemon, blue:Pokemon)=>{
    const attackRed = red.stats.find((stat:any)=> stat.name ==="attack")?.base_stat;
    const attackBlue = blue.stats.find((stat:any)=> stat.name ==="attack")?.base_stat;
     return attackRed && attackBlue && attackRed > attackBlue ? red.name : blue.name;
}