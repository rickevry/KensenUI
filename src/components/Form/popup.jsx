// https://speakerdeck.com/vjeux/react-css-in-js
// https://www.npmjs.com/package/react-merge-styles

var isObject = function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
};

function mergeIf(obj1, obj2, condition) {
    if (!condition) {
        return obj1;
    }
    var result = {};
    Object.keys(obj1).forEach(function (parentKey) {
      result[parentKey] = obj1[parentKey];
    });
    Object.keys(obj2).forEach(function (parentKey) {
      result[parentKey] = obj2[parentKey];
    });

    return result;
    // return Object.assign({}, obj1, obj2);
}





