/* */ 
"format cjs";
import { IS_DART, StringWrapper, isBlank } from 'angular2/src/facade/lang';
var CAMEL_CASE_REGEXP = /([A-Z])/g;
var DASH_CASE_REGEXP = /-([a-z])/g;
var SINGLE_QUOTE_ESCAPE_STRING_RE = /'|\\|\n|\r|\$/g;
var DOUBLE_QUOTE_ESCAPE_STRING_RE = /"|\\|\n|\r|\$/g;
export var MODULE_SUFFIX = IS_DART ? '.dart' : '.js';
export function camelCaseToDashCase(input) {
    return StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, (m) => { return '-' + m[1].toLowerCase(); });
}
export function dashCaseToCamelCase(input) {
    return StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, (m) => { return m[1].toUpperCase(); });
}
export function escapeSingleQuoteString(input) {
    if (isBlank(input)) {
        return null;
    }
    return `'${escapeString(input, SINGLE_QUOTE_ESCAPE_STRING_RE)}'`;
}
export function escapeDoubleQuoteString(input) {
    if (isBlank(input)) {
        return null;
    }
    return `"${escapeString(input, DOUBLE_QUOTE_ESCAPE_STRING_RE)}"`;
}
function escapeString(input, re) {
    return StringWrapper.replaceAllMapped(input, re, (match) => {
        if (match[0] == '$') {
            return IS_DART ? '\\$' : '$';
        }
        else if (match[0] == '\n') {
            return '\\n';
        }
        else if (match[0] == '\r') {
            return '\\r';
        }
        else {
            return `\\${match[0]}`;
        }
    });
}
export function codeGenExportVariable(name) {
    if (IS_DART) {
        return `const ${name} = `;
    }
    else {
        return `var ${name} = exports['${name}'] = `;
    }
}
export function codeGenConstConstructorCall(name) {
    if (IS_DART) {
        return `const ${name}`;
    }
    else {
        return `new ${name}`;
    }
}
export function codeGenValueFn(params, value, fnName = '') {
    if (IS_DART) {
        return `${fnName}(${params.join(',')}) => ${value}`;
    }
    else {
        return `function ${fnName}(${params.join(',')}) { return ${value}; }`;
    }
}
export function codeGenToString(expr) {
    if (IS_DART) {
        return `'\${${expr}}'`;
    }
    else {
        // JS automatically convets to string...
        return expr;
    }
}
export function splitAtColon(input, defaultValues) {
    var parts = StringWrapper.split(input.trim(), /\s*:\s*/g);
    if (parts.length > 1) {
        return parts;
    }
    else {
        return defaultValues;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb21waWxlci91dGlsLnRzIl0sIm5hbWVzIjpbImNhbWVsQ2FzZVRvRGFzaENhc2UiLCJkYXNoQ2FzZVRvQ2FtZWxDYXNlIiwiZXNjYXBlU2luZ2xlUXVvdGVTdHJpbmciLCJlc2NhcGVEb3VibGVRdW90ZVN0cmluZyIsImVzY2FwZVN0cmluZyIsImNvZGVHZW5FeHBvcnRWYXJpYWJsZSIsImNvZGVHZW5Db25zdENvbnN0cnVjdG9yQ2FsbCIsImNvZGVHZW5WYWx1ZUZuIiwiY29kZUdlblRvU3RyaW5nIiwic3BsaXRBdENvbG9uIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFDLE1BQU0sMEJBQTBCO0FBRXhFLElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFDO0FBQ25DLElBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0FBQ25DLElBQUksNkJBQTZCLEdBQUcsZ0JBQWdCLENBQUM7QUFDckQsSUFBSSw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQztBQUVyRCxXQUFXLGFBQWEsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUVyRCxvQ0FBb0MsS0FBYTtJQUMvQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxLQUFLQSxFQUFFQSxpQkFBaUJBLEVBQ3hCQSxDQUFDQSxDQUFDQSxPQUFPQSxNQUFNQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUNyRkEsQ0FBQ0E7QUFFRCxvQ0FBb0MsS0FBYTtJQUMvQ0MsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxLQUFLQSxFQUFFQSxnQkFBZ0JBLEVBQ3ZCQSxDQUFDQSxDQUFDQSxPQUFPQSxNQUFNQSxDQUFD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Q3REQSxDQUFDQTtJQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNOQSxNQUFNQSxDQUFDQSxZQUFZQSxNQUFNQSxJQUFJQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFjQSxLQUFLQSxLQUFLQSxDQUFDQTtJQUN4RUEsQ0FBQ0E7QUFDSEEsQ0FBQ0E7QUFFRCxnQ0FBZ0MsSUFBWTtJQUMxQ0MsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDWkEsTUFBTUEsQ0FBQ0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ05BLHdDQUF3Q0E7UUFDeENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0FBQ0hBLENBQUNBO0FBRUQsNkJBQTZCLEtBQWEsRUFBRSxhQUF1QjtJQUNqRUMsSUFBSUEsS0FBS0EsR0FBR0EsYUFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7SUFDMURBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3JCQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUNmQSxDQUFDQTtJQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNOQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7QUFDSEEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTX0RBUlQsIFN0cmluZ1dyYXBwZXIsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbnZhciBDQU1FTF9DQVNFX1JFR0VYUCA9IC8oW0EtWl0pL2c7XG52YXIgREFTSF9DQVNFX1JFR0VYUCA9IC8tKFthLXpdKS9nO1xudmFyIFNJTkdMRV9RVU9URV9FU0NBUEVfU1RSSU5HX1JFID0gLyd8XFxcXHxcXG58XFxyfFxcJC9nO1xudmFyIERPVUJMRV9RVU9URV9FU0NBUEVfU1RSSU5HX1JFID0gL1wifFxcXFx8XFxufFxccnxcXCQvZztcblxuZXhwb3J0IHZhciBNT0RVTEVfU1VGRklYID0gSVNfREFSVCA/ICcuZGFydCcgOiAnLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRvRGFzaENhc2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBTdHJpbmdXcmFwcGVyLnJlcGxhY2VBbGxNYXBwZWQoaW5wdXQsIENBTUVMX0NBU0VfUkVHRVhQLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtKSA9PiB7IHJldHVybiAnLScgKyBtWzFdLnRvTG93ZXJDYXNlKCk7IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGFzaENhc2VUb0NhbWVsQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbE1hcHBlZChpbnB1dCwgREFTSF9DQVNFX1JFR0VYUCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobSkgPT4geyByZXR1cm4gbVsxXS50b1VwcGVyQ2FzZSgpOyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVNpbmdsZVF1b3RlU3RyaW5nKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaXNCbGFuayhpbnB1dCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gYCcke2VzY2FwZVN0cmluZyhpbnB1dCwgU0lOR0xFX1FVT1RFX0VTQ0FQRV9TVFJJTkdfUkUpfSdgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRG91YmxlUXVvdGVTdHJpbmcoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpc0JsYW5rKGlucHV0KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBgXCIke2VzY2FwZVN0cmluZyhpbnB1dCwgRE9VQkxFX1FVT1RFX0VTQ0FQRV9TVFJJTkdfUkUpfVwiYDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKGlucHV0OiBzdHJpbmcsIHJlOiBSZWdFeHApOiBzdHJpbmcge1xuICByZXR1cm4gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsTWFwcGVkKGlucHV0LCByZSwgKG1hdGNoKSA9PiB7XG4gICAgaWYgKG1hdGNoWzBdID09ICckJykge1xuICAgICAgcmV0dXJuIElTX0RBUlQgPyAnXFxcXCQnIDogJyQnO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT0gJ1xcbicpIHtcbiAgICAgIHJldHVybiAnXFxcXG4nO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT0gJ1xccicpIHtcbiAgICAgIHJldHVybiAnXFxcXHInO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYFxcXFwke21hdGNoWzBdfWA7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5FeHBvcnRWYXJpYWJsZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgY29uc3QgJHtuYW1lfSA9IGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGB2YXIgJHtuYW1lfSA9IGV4cG9ydHNbJyR7bmFtZX0nXSA9IGA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5Db25zdENvbnN0cnVjdG9yQ2FsbChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgY29uc3QgJHtuYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBuZXcgJHtuYW1lfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5WYWx1ZUZuKHBhcmFtczogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcsIGZuTmFtZTogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgJHtmbk5hbWV9KCR7cGFyYW1zLmpvaW4oJywnKX0pID0+ICR7dmFsdWV9YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYGZ1bmN0aW9uICR7Zm5OYW1lfSgke3BhcmFtcy5qb2luKCcsJyl9KSB7IHJldHVybiAke3ZhbHVlfTsgfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5Ub1N0cmluZyhleHByOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgJ1xcJHske2V4cHJ9fSdgO1xuICB9IGVsc2Uge1xuICAgIC8vIEpTIGF1dG9tYXRpY2FsbHkgY29udmV0cyB0byBzdHJpbmcuLi5cbiAgICByZXR1cm4gZXhwcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRBdENvbG9uKGlucHV0OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICB2YXIgcGFydHMgPSBTdHJpbmdXcmFwcGVyLnNwbGl0KGlucHV0LnRyaW0oKSwgL1xccyo6XFxzKi9nKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gcGFydHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXM7XG4gIH1cbn1cbiJdfQ==