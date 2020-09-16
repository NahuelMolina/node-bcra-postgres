const myResult = class myCatch {
    constructor(first,second){
        this.other = first;
        this.another = second;
    }

    showResult(){
        return console.log(`El resultado es ${this.other} y ${this.another}`);
    }
}

module.exports = myResult;