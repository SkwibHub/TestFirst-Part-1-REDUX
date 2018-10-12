function setPropsOnObj(object) {
    object.x = 7;
    object.y = 8;
    object.onePlus = function(num) { 
        num++;
        return num; 
    };
}

function setPropsOnArr(array) {
    array.hello = function() { return 'Hello!' }
    array.full = 'stack';
    array[0] = 5;
    array.twoTimes = function(num) {
        num = num * 2;
        return num;
    }
}

function setPropsOnFunc(func) {
    func.year = '20??';
    func.divideByTwo = function(num) {
        num = num / 2;
        return num;
    };
}

function shallowCopy(obj1, obj2) {
    if (Array.isArray(obj1)) {
        return [...obj1, ...obj2];
    }
    return { ...obj1, ...obj2 }    
}