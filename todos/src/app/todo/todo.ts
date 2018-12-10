export class Todo{
    
    /*public tarea: string;

    constructor(tarea){
        this.tarea = tarea;
    }*/

    constructor(
        public tarea:string, 
        public terminada:boolean,
        public importante:boolean
    ){}
   
}