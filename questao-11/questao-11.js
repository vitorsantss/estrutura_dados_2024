export default class QueueArray {
    constructor(){
        this.items = [];
        this.aux = [];
    }

    enqueue(element){
        this.items.push(element);
    }
    
    enqueueAux(element){
        this.aux.push(element);
    }

  
    size(){
        return this.items.length;
    }


    printQueue(){
        this.items.forEach(element => console.log(element));
    }

    compactarIntervalos(){
        let val = this.items[0];
        let vall = val;
        for(let x = 1; x < this.size(); x++){
            if(vall + 1 == this.items[x]){
                vall++;
            } else {
                if(val != vall){
                    this.enqueueAux(`(${val}-${vall})`);
                } else {
                    this.enqueueAux(`(${val})`);
                }
                val = this.items[x];
                vall = val;
            }
        }
        // insere o ultimo elemento
        if(val != vall){
            this.enqueueAux(`(${val}-${vall})`);
        } else {
            this.enqueueAux(`(${val})`);
        }
    }
}