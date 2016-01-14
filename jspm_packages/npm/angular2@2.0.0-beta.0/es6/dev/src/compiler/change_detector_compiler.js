/* */ 
"format cjs";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SourceExpressions, moduleRef } from './source_module';
import { ChangeDetectorJITGenerator } from 'angular2/src/core/change_detection/change_detection_jit_generator';
import { createChangeDetectorDefinitions } from './change_definition_factory';
import { IS_DART } from 'angular2/src/facade/lang';
import { ChangeDetectorGenConfig, DynamicProtoChangeDetector } from 'angular2/src/core/change_detection/change_detection';
import { Codegen } from 'angular2/src/transform/template_compiler/change_detector_codegen';
import { MODULE_SUFFIX } from './util';
import { Injectable } from 'angular2/src/core/di';
const ABSTRACT_CHANGE_DETECTOR = "AbstractChangeDetector";
const UTIL = "ChangeDetectionUtil";
const CHANGE_DETECTOR_STATE = "ChangeDetectorState";
var ABSTRACT_CHANGE_DETECTOR_MODULE = moduleRef(`package:angular2/src/core/change_detection/abstract_change_detector${MODULE_SUFFIX}`);
var UTIL_MODULE = moduleRef(`package:angular2/src/core/change_detection/change_detection_util${MODULE_SUFFIX}`);
var PREGEN_PROTO_CHANGE_DETECTOR_MODULE = moduleRef(`package:angular2/src/core/change_detection/pregen_proto_change_detector${MODULE_SUFFIX}`);
var CONSTANTS_MODULE = moduleRef(`package:angular2/src/core/change_detection/constants${MODULE_SUFFIX}`);
export let ChangeDetectionCompiler = class {
    constructor(_genConfig) {
        this._genConfig = _genConfig;
    }
    compileComponentRuntime(componentType, strategy, parsedTemplate) {
        var changeDetectorDefinitions = createChangeDetectorDefinitions(componentType, strategy, this._genConfig, parsedTemplate);
        return changeDetectorDefinitions.map(definition => this._createChangeDetectorFactory(definition));
    }
    _createChangeDetectorFactory(definition) {
        if (IS_DART || !this._genConfig.useJit) {
            var proto = new DynamicProtoChangeDetector(definition);
            return (dispatcher) => proto.instantiate(dispatcher);
        }
        else {
            return new ChangeDetectorJITGenerator(definition, UTIL, ABSTRACT_CHANGE_DETECTOR, CHANGE_DETECTOR_STATE)
                .generate();
        }
    }
    compileComponentCodeGen(componentType, strategy, parsedTemplate) {
        var changeDetectorDefinitions = createChangeDetectorDefinitions(componentType, strategy, this._genConfig, parsedTemplate);
        var factories = [];
        var index = 0;
        var sourceParts = changeDetectorDefinitions.map(definition => {
            var codegen;
            var sourcePart;
            // TODO(tbosch): move the 2 code generators to the same place, one with .dart and one with .ts
            // suffix
            // and have the same API for calling them!
            if (IS_DART) {
                codegen = new Codegen(PREGEN_PROTO_CHANGE_DETECTOR_MODULE);
                var className = `_${definition.id}`;
                var typeRef = (index === 0 && componentType.isHost) ?
                    'dynamic' :
                    `${moduleRef(componentType.moduleUrl)}${componentType.name}`;
                codegen.generate(typeRef, className, definition);
                factories.push(`${className}.newChangeDetector`);
                sourcePart = codegen.toString();
            }
            else {
                codegen = new ChangeDetectorJITGenerator(definition, `${UTIL_MODULE}${UTIL}`, `${ABSTRACT_CHANGE_DETECTOR_MODULE}${ABSTRACT_CHANGE_DETECTOR}`, `${CONSTANTS_MODULE}${CHANGE_DETECTOR_STATE}`);
                factories.push(`function(dispatcher) { return new ${codegen.typeName}(dispatcher); }`);
                sourcePart = codegen.generateSource();
            }
            index++;
            return sourcePart;
        });
        return new SourceExpressions(sourceParts, factories);
    }
};
ChangeDetectionCompiler = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [ChangeDetectorGenConfig])
], ChangeDetectionCompiler);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdG9yX2NvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2NoYW5nZV9kZXRlY3Rvcl9jb21waWxlci50cyJdLCJuYW1lcyI6WyJDaGFuZ2VEZXRlY3Rpb25Db21waWxlciIsIkNoYW5nZURldGVjdGlvbkNvbXBpbGVyLmNvbnN0cnVjdG9yIiwiQ2hhbmdlRGV0ZWN0aW9uQ29tcGlsZXIuY29tcGlsZUNvbXBvbmVudFJ1bnRpbWUiLCJDaGFuZ2VEZXRlY3Rpb25Db21waWxlci5fY3JlYXRlQ2hhbmdlRGV0ZWN0b3JGYWN0b3J5IiwiQ2hhbmdlRGV0ZWN0aW9uQ29tcGlsZXIuY29tcGlsZUNvbXBvbmVudENvZGVHZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUNPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFDLE1BQU0saUJBQWlCO09BQ3JELEVBQ0wsMEJBQTBCLEVBQzNCLE1BQU0sbUVBQW1FO09BRW5FLEVBQUMsK0JBQStCLEVBQUMsTUFBTSw2QkFBNkI7T0FDcEUsRUFBQyxPQUFPLEVBQXlCLE1BQU0sMEJBQTBCO09BRWpFLEVBQ0wsdUJBQXVCLEVBRXZCLDBCQUEwQixFQUUzQixNQUFNLHFEQUFxRDtPQUdyRCxFQUFDLE9BQU8sRUFBQyxNQUFNLGtFQUFrRTtPQUNqRixFQUFDLGFBQWEsRUFBQyxNQUFNLFFBQVE7T0FDN0IsRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0I7QUFFL0MsTUFBTSx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztBQUMxRCxNQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQztBQUNuQyxNQUFNLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO0FBRXBELElBQUksK0JBQStCLEdBQUcsU0FBUyxDQUMzQyxzRUFBc0UsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUMzRixJQUFJLFdBQVcsR0FDWCxTQUFTLENBQUMsbUVBQW1FLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFD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LE9BQU9BLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1lBQ2xDQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDTkEsT0FBT0EsR0FBR0EsSUFBSUEsMEJBQTBCQSxDQUNwQ0EsVUFBVUEsRUFBRUEsR0FBR0EsV0FBV0EsR0FBR0EsSUFBSUEsRUFBRUEsRUFDbkNBLEdBQUdBLCtCQUErQkEsR0FBR0Esd0JBQXdCQSxFQUFFQSxFQUMvREEsR0FBR0EsZ0JBQWdCQSxHQUFHQSxxQkFBcUJBLEVBQUVBLENBQUNBLENBQUNBO2dCQUNuREEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EscUNBQXFDQSxPQUFPQSxDQUFDQSxRQUFRQSxpQkFBaUJBLENBQUNBLENBQUNBO2dCQUN2RkEsVUFBVUEsR0FBR0EsT0FBT0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7WUFDeENBLENBQUNBO1lBQ0RBLEtBQUtBLEVBQUVBLENBQUNBO1lBQ1JBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBO1FBQ3BCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNIQSxNQUFNQSxDQUFDQSxJQUFJQSxpQkFBaUJBLENBQUNBLFdBQVdBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO0lBQ3ZEQSxDQUFDQTtBQUNISixDQUFDQTtBQXpERDtJQUFDLFVBQVUsRUFBRTs7NEJBeURaO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBpbGVUeXBlTWV0YWRhdGF9IGZyb20gJy4vZGlyZWN0aXZlX21ldGFkYXRhJztcbmltcG9ydCB7U291cmNlRXhwcmVzc2lvbnMsIG1vZHVsZVJlZn0gZnJvbSAnLi9zb3VyY2VfbW9kdWxlJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9ySklUR2VuZXJhdG9yXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbl9qaXRfZ2VuZXJhdG9yJztcblxuaW1wb3J0IHtjcmVhdGVDaGFuZ2VEZXRlY3RvckRlZmluaXRpb25zfSBmcm9tICcuL2NoYW5nZV9kZWZpbml0aW9uX2ZhY3RvcnknO1xuaW1wb3J0IHtJU19EQVJULCBpc0pzT2JqZWN0LCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvckdlbkNvbmZpZyxcbiAgQ2hhbmdlRGV0ZWN0b3JEZWZpbml0aW9uLFxuICBEeW5hbWljUHJvdG9DaGFuZ2VEZXRlY3RvcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcblxuaW1wb3J0IHtUZW1wbGF0ZUFzdH0gZnJvbSAnLi90ZW1wbGF0ZV9hc3QnO1xuaW1wb3J0IHtDb2RlZ2VufSBmcm9tICdhbmd1bGFyMi9zcmMvdHJhbnNmb3JtL3RlbXBsYXRlX2NvbXBpbGVyL2NoYW5nZV9kZXRlY3Rvcl9jb2RlZ2VuJztcbmltcG9ydCB7TU9EVUxFX1NVRkZJWH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuXG5jb25zdCBBQlNUUkFDVF9DSEFOR0VfREVURUNUT1IgPSBcIkFic3RyYWN0Q2hhbmdlRGV0ZWN0b3JcIjtcbmNvbnN0IFVUSUwgPSBcIkNoYW5nZURldGVjdGlvblV0aWxcIjtcbmNvbnN0IENIQU5HRV9ERVRFQ1RPUl9TVEFURSA9IFwiQ2hhbmdlRGV0ZWN0b3JTdGF0ZVwiO1xuXG52YXIgQUJTVFJBQ1RfQ0hBTkdFX0RFVEVDVE9SX01PRFVMRSA9IG1vZHVsZVJlZihcbiAgICBgcGFja2FnZTphbmd1bGFyMi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2Fic3RyYWN0X2NoYW5nZV9kZXRlY3RvciR7TU9EVUxFX1NVRkZJWH1gKTtcbnZhciBVVElMX01PRFVMRSA9XG4gICAgbW9kdWxlUmVmKGBwYWNrYWdlOmFuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbl91dGlsJHtNT0RVTEVfU1VGRklYfWApO1xudmFyIFBSRUdFTl9QUk9UT19DSEFOR0VfREVURUNUT1JfTU9EVUxFID0gbW9kdWxlUmVmKFxuICAgIGBwYWNrYWdlOmFuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vcHJlZ2VuX3Byb3RvX2NoYW5nZV9kZXRlY3RvciR7TU9EVUxFX1NVRkZJWH1gKTtcbnZhciBDT05TVEFOVFNfTU9EVUxFID1cbiAgICBtb2R1bGVSZWYoYHBhY2thZ2U6YW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jb25zdGFudHMke01PRFVMRV9TVUZGSVh9YCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFuZ2VEZXRlY3Rpb25Db21waWxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dlbkNvbmZpZzogQ2hhbmdlRGV0ZWN0b3JHZW5Db25maWcpIHt9XG5cbiAgY29tcGlsZUNvbXBvbmVudFJ1bnRpbWUoY29tcG9uZW50VHlwZTogQ29tcGlsZVR5cGVNZXRhZGF0YSwgc3RyYXRlZ3k6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRUZW1wbGF0ZTogVGVtcGxhdGVBc3RbXSk6IEZ1bmN0aW9uW10ge1xuICAgIHZhciBjaGFuZ2VEZXRlY3RvckRlZmluaXRpb25zID1cbiAgICAgICAgY3JlYXRlQ2hhbmdlRGV0ZWN0b3JEZWZpbml0aW9ucyhjb21wb25lbnRUeXBlLCBzdHJhdGVneSwgdGhpcy5fZ2VuQ29uZmlnLCBwYXJzZWRUZW1wbGF0ZSk7XG4gICAgcmV0dXJuIGNoYW5nZURldGVjdG9yRGVmaW5pdGlvbnMubWFwKGRlZmluaXRpb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUNoYW5nZURldGVjdG9yRmFjdG9yeShkZWZpbml0aW9uKSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDaGFuZ2VEZXRlY3RvckZhY3RvcnkoZGVmaW5pdGlvbjogQ2hhbmdlRGV0ZWN0b3JEZWZpbml0aW9uKTogRnVuY3Rpb24ge1xuICAgIGlmIChJU19EQVJUIHx8ICF0aGlzLl9nZW5Db25maWcudXNlSml0KSB7XG4gICAgICB2YXIgcHJvdG8gPSBuZXcgRHluYW1pY1Byb3RvQ2hhbmdlRGV0ZWN0b3IoZGVmaW5pdGlvbik7XG4gICAgICByZXR1cm4gKGRpc3BhdGNoZXIpID0+IHByb3RvLmluc3RhbnRpYXRlKGRpc3BhdGNoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGVjdG9ySklUR2VuZXJhdG9yKGRlZmluaXRpb24sIFVUSUwsIEFCU1RSQUNUX0NIQU5HRV9ERVRFQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0hBTkdFX0RFVEVDVE9SX1NUQVRFKVxuICAgICAgICAgIC5nZW5lcmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVDb21wb25lbnRDb2RlR2VuKGNvbXBvbmVudFR5cGU6IENvbXBpbGVUeXBlTWV0YWRhdGEsIHN0cmF0ZWd5OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkVGVtcGxhdGU6IFRlbXBsYXRlQXN0W10pOiBTb3VyY2VFeHByZXNzaW9ucyB7XG4gICAgdmFyIGNoYW5nZURldGVjdG9yRGVmaW5pdGlvbnMgPVxuICAgICAgICBjcmVhdGVDaGFuZ2VEZXRlY3RvckRlZmluaXRpb25zKGNvbXBvbmVudFR5cGUsIHN0cmF0ZWd5LCB0aGlzLl9nZW5Db25maWcsIHBhcnNlZFRlbXBsYXRlKTtcbiAgICB2YXIgZmFjdG9yaWVzID0gW107XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc291cmNlUGFydHMgPSBjaGFuZ2VEZXRlY3RvckRlZmluaXRpb25zLm1hcChkZWZpbml0aW9uID0+IHtcbiAgICAgIHZhciBjb2RlZ2VuOiBhbnk7XG4gICAgICB2YXIgc291cmNlUGFydDogc3RyaW5nO1xuICAgICAgLy8gVE9ETyh0Ym9zY2gpOiBtb3ZlIHRoZSAyIGNvZGUgZ2VuZXJhdG9ycyB0byB0aGUgc2FtZSBwbGFjZSwgb25lIHdpdGggLmRhcnQgYW5kIG9uZSB3aXRoIC50c1xuICAgICAgLy8gc3VmZml4XG4gICAgICAvLyBhbmQgaGF2ZSB0aGUgc2FtZSBBUEkgZm9yIGNhbGxpbmcgdGhlbSFcbiAgICAgIGlmIChJU19EQVJUKSB7XG4gICAgICAgIGNvZGVnZW4gPSBuZXcgQ29kZWdlbihQUkVHRU5fUFJPVE9fQ0hBTkdFX0RFVEVDVE9SX01PRFVMRSk7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBgXyR7ZGVmaW5pdGlvbi5pZH1gO1xuICAgICAgICB2YXIgdHlwZVJlZiA9IChpbmRleCA9PT0gMCAmJiBjb21wb25lbnRUeXBlLmlzSG9zdCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnZHluYW1pYycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHttb2R1bGVSZWYoY29tcG9uZW50VHlwZS5tb2R1bGVVcmwpfSR7Y29tcG9uZW50VHlwZS5uYW1lfWA7XG4gICAgICAgIGNvZGVnZW4uZ2VuZXJhdGUodHlwZVJlZiwgY2xhc3NOYW1lLCBkZWZpbml0aW9uKTtcbiAgICAgICAgZmFjdG9yaWVzLnB1c2goYCR7Y2xhc3NOYW1lfS5uZXdDaGFuZ2VEZXRlY3RvcmApO1xuICAgICAgICBzb3VyY2VQYXJ0ID0gY29kZWdlbi50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29kZWdlbiA9IG5ldyBDaGFuZ2VEZXRlY3RvckpJVEdlbmVyYXRvcihcbiAgICAgICAgICAgIGRlZmluaXRpb24sIGAke1VUSUxfTU9EVUxFfSR7VVRJTH1gLFxuICAgICAgICAgICAgYCR7QUJTVFJBQ1RfQ0hBTkdFX0RFVEVDVE9SX01PRFVMRX0ke0FCU1RSQUNUX0NIQU5HRV9ERVRFQ1RPUn1gLFxuICAgICAgICAgICAgYCR7Q09OU1RBTlRTX01PRFVMRX0ke0NIQU5HRV9ERVRFQ1RPUl9TVEFURX1gKTtcbiAgICAgICAgZmFjdG9yaWVzLnB1c2goYGZ1bmN0aW9uKGRpc3BhdGNoZXIpIHsgcmV0dXJuIG5ldyAke2NvZGVnZW4udHlwZU5hbWV9KGRpc3BhdGNoZXIpOyB9YCk7XG4gICAgICAgIHNvdXJjZVBhcnQgPSBjb2RlZ2VuLmdlbmVyYXRlU291cmNlKCk7XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgICAgcmV0dXJuIHNvdXJjZVBhcnQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBTb3VyY2VFeHByZXNzaW9ucyhzb3VyY2VQYXJ0cywgZmFjdG9yaWVzKTtcbiAgfVxufVxuIl19