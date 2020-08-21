class myFuncis {
    constructor(first,second){
        this.other = first;
        this.another = second;
    }

    showResult(){
        console.log(`El resultado es ${this.other} y ${this.another}`);
    }
}

module.exports = myFuncis;