challenge 1

const sortBackwards = (arr) => {
    arr.sort((a,b) => {
        return b-a;
    })
    return arr;
};


challenge 2

const alphabetized = (arr) => {
    // arr.sort((a,b)) => {
    //     if(a>b){
    //         return 1;
    //     }
    //     if(b>a){
    //         return -1;
    //     }
    //     return 0;
    // })
    // return arr;
return arr.sort((a,b) => a > b ? 1 : (a < b ? -1 : 0 ));
};

challenge 3

const sortByLength = (arr) => {
    arr.sort((a,b) => a.length - b.length);
    return arr;
    // or
    // return arr.sort((a,b) => a.length - b.length);
};

challeng 4

const alphabetizerBetter = (arr) => {
    return arr.sort((a,b) => a.toLowerCase() > b.toLowerCase() ? 1 : (a.toLowerCase() < b.toLowerCase() ? -1 : 0));
};

challenge 5

const sortByPrice = (arr) => {

};