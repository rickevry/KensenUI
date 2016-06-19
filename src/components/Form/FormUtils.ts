

export default class FormUtils {


    public static mergeIf(obj1:any, obj2:any, condition:any) {
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
}

