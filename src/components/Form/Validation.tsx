/// <reference path="../../../typings/tsd.d.ts" />


export default class Validation {
    
    public static validateField(state: any, field:any, forceValidation: boolean = false): string {
        if (state["formValidations"] && (forceValidation || state.formValidations[field.id]) && field.type !== "onoff") {
            if (field.isRequired && this.evalExpression(state, field.isRequired) && !state.data[field.id])
                return "Field missing"
            if (field.format && state.data[field.id]) {
                let re = new RegExp(field.format)
                if (!re.test(state.data[field.id]))
                    return field.tooltipText ? field.tooltipText : "Wrong format";
            }
        }
        return "";
    }
    
    public static fieldIsVisible(state: any, field: any) {
        let visible = field.isVisible ? this.evalExpression(state, field.isVisible) : true
        return visible; 
    }
    
    
    private static evalExpression(state: any, expression:string): boolean {
        try {
            let check = expression.replace(/entity/g, "state.data")
            let result = eval(check)
            return result
        } catch (error) {
            console.log("Expression evaulation failed: ", expression);
        }
        return false
    }
    
}