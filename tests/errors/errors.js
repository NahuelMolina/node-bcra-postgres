exports.typeError = class typeError extends Error {
    constructor(){
        this.announce = 'The error is...';
    }

    landing(){
        return console.log(`${this.announce} a type error`);
    }
}

