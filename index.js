function isWin(el){
    if(el.result === 'W') return el;
}

const superbowlWin = (arr) => {
    const value = arr.find(isWin);
    if(typeof(value) === 'undefined') {
        return undefined
    }
    else{
        return value.year;
    }
};
console.log(superbowlWin(sadReality))