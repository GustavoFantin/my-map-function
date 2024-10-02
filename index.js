
function myMap (cbFn) {
    return function(array) {
        const result = [];
        narray.forEach((element, index) => {
            result.push(cbFn(element, index))
        });
        return result
    }
}

module.exports = myMap;
