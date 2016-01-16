System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "jspm:*": "jspm_packages/jspm/*"
  },
  bundles: {
    "build.js": [
      "app.js",
      "npm:es6-shim@0.34.0",
      "npm:es6-promise@3.0.2",
      "npm:angular2@2.0.0-beta.0/core",
      "npm:zone.js@0.5.10/lib/browser/long-stack-trace-zone",
      "npm:zone.js@0.5.10/lib/browser/zone-microtask",
      "npm:es7-reflect-metadata@1.4.0/dist/browser",
      "app/main.js",
      "npm:angular2@2.0.0-beta.0/router",
      "npm:angular2@2.0.0-beta.0/platform/browser",
      "npm:angular2@2.0.0-beta.0/src/facade/lang",
      "npm:zone.js@0.5.10/lib/zones/long-stack-trace",
      "npm:angular2@2.0.0-beta.0/src/core/metadata",
      "npm:angular2@2.0.0-beta.0/src/core/util",
      "npm:angular2@2.0.0-beta.0/src/core/prod_mode",
      "npm:angular2@2.0.0-beta.0/src/core/di",
      "npm:angular2@2.0.0-beta.0/src/facade/facade",
      "npm:angular2@2.0.0-beta.0/src/core/zone",
      "npm:angular2@2.0.0-beta.0/src/core/application_tokens",
      "npm:angular2@2.0.0-beta.0/src/core/render",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection",
      "npm:angular2@2.0.0-beta.0/src/core/linker",
      "npm:angular2@2.0.0-beta.0/src/core/platform_directives_and_pipes",
      "npm:angular2@2.0.0-beta.0/src/core/platform_common_providers",
      "npm:angular2@2.0.0-beta.0/src/core/application_common_providers",
      "npm:zone.js@0.5.10/lib/core",
      "npm:angular2@2.0.0-beta.0/src/core/reflection/reflection",
      "npm:zone.js@0.5.10/lib/patch/browser",
      "npm:angular2@2.0.0-beta.0/src/core/testability/testability",
      "npm:angular2@2.0.0-beta.0/src/core/application_ref",
      "npm:angular2@2.0.0-beta.0/src/core/debug/debug_element",
      "npm:es6-promise@3.0.2/dist/es6-promise",
      "npm:es6-shim@0.34.0/es6-shim",
      "npm:zone.js@0.5.10/lib/microtask",
      "npm:babel-runtime@5.8.34/helpers/class-call-check",
      "npm:angular2@2.0.0-beta.0/common",
      "app/components/todos/app.js",
      "app/components/about/about.js",
      "npm:angular2@2.0.0-beta.0/src/router/router_link",
      "npm:angular2@2.0.0-beta.0/src/router/router",
      "npm:angular2@2.0.0-beta.0/src/router/router_outlet",
      "npm:angular2@2.0.0-beta.0/src/router/route_definition",
      "npm:angular2@2.0.0-beta.0/src/router/location_strategy",
      "npm:angular2@2.0.0-beta.0/src/router/platform_location",
      "npm:angular2@2.0.0-beta.0/src/router/hash_location_strategy",
      "npm:angular2@2.0.0-beta.0/src/router/path_location_strategy",
      "npm:angular2@2.0.0-beta.0/src/router/route_config_decorator",
      "npm:angular2@2.0.0-beta.0/src/router/location",
      "npm:angular2@2.0.0-beta.0/src/router/lifecycle_annotations",
      "npm:angular2@2.0.0-beta.0/src/facade/exceptions",
      "npm:angular2@2.0.0-beta.0/src/platform/browser_common",
      "npm:angular2@2.0.0-beta.0/src/router/route_registry",
      "npm:angular2@2.0.0-beta.0/src/router/instruction",
      "npm:angular2@2.0.0-beta.0/src/core/reflection/reflection_capabilities",
      "npm:angular2@2.0.0-beta.0/compiler",
      "npm:angular2@2.0.0-beta.0/src/platform/browser/xhr_impl",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:angular2@2.0.0-beta.0/src/core/angular_entrypoint",
      "app/main.css!github:systemjs/plugin-css@0.1.17",
      "app/components/todos/style.css!github:systemjs/plugin-css@0.1.17",
      "npm:todomvc-app-css@2.0.4/index.css!github:systemjs/plugin-css@0.1.17",
      "npm:zone.js@0.5.10/lib/keys",
      "npm:angular2@2.0.0-beta.0/src/core/di/metadata",
      "npm:angular2@2.0.0-beta.0/src/core/di/forward_ref",
      "npm:angular2@2.0.0-beta.0/src/core/di/decorators",
      "npm:angular2@2.0.0-beta.0/src/core/util/decorators",
      "npm:angular2@2.0.0-beta.0/src/core/di/key",
      "npm:angular2@2.0.0-beta.0/src/core/metadata/directives",
      "npm:angular2@2.0.0-beta.0/src/core/di/opaque_token",
      "npm:angular2@2.0.0-beta.0/src/core/metadata/di",
      "npm:angular2@2.0.0-beta.0/src/facade/exception_handler",
      "npm:angular2@2.0.0-beta.0/src/core/di/exceptions",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-beta.0/src/core/di/provider",
      "npm:angular2@2.0.0-beta.0/src/core/linker/view_resolver",
      "npm:angular2@2.0.0-beta.0/src/core/linker/directive_resolver",
      "npm:angular2@2.0.0-beta.0/src/core/render/api",
      "npm:angular2@2.0.0-beta.0/src/core/linker/compiler",
      "npm:angular2@2.0.0-beta.0/src/core/linker/query_list",
      "npm:angular2@2.0.0-beta.0/src/core/linker/template_ref",
      "npm:angular2@2.0.0-beta.0/src/core/linker/view_container_ref",
      "npm:angular2@2.0.0-beta.0/src/core/linker/view_ref",
      "npm:angular2@2.0.0-beta.0/src/core/linker/element_ref",
      "npm:angular2@2.0.0-beta.0/src/core/console",
      "npm:angular2@2.0.0-beta.0/src/core/linker/view_pool",
      "npm:angular2@2.0.0-beta.0/src/core/linker/view_manager",
      "npm:angular2@2.0.0-beta.0/src/core/linker/dynamic_component_loader",
      "npm:angular2@2.0.0-beta.0/src/core/linker/pipe_resolver",
      "npm:angular2@2.0.0-beta.0/src/core/linker/view_manager_utils",
      "npm:zone.js@0.5.10/lib/patch/promise",
      "npm:zone.js@0.5.10/lib/patch/functions",
      "npm:zone.js@0.5.10/lib/patch/define-property",
      "npm:zone.js@0.5.10/lib/patch/mutation-observer",
      "npm:zone.js@0.5.10/lib/patch/register-element",
      "npm:zone.js@0.5.10/lib/patch/websocket",
      "npm:zone.js@0.5.10/lib/patch/event-target",
      "npm:zone.js@0.5.10/lib/patch/property-descriptor",
      "npm:zone.js@0.5.10/lib/patch/geolocation",
      "npm:zone.js@0.5.10/lib/patch/file-reader",
      "npm:angular2@2.0.0-beta.0/src/core/linker/view_listener",
      "npm:angular2@2.0.0-beta.0/src/core/profile/profile",
      "npm:angular2@2.0.0-beta.0/src/core/linker/proto_view_factory",
      "npm:angular2@2.0.0-beta.0/src/core/reflection/reflector",
      "npm:angular2@2.0.0-beta.0/src/facade/collection",
      "npm:angular2@2.0.0-beta.0/src/core/linker/view",
      "npm:angular2@2.0.0-beta.0/src/core/metadata/view",
      "npm:angular2@2.0.0-beta.0/src/core/di/injector",
      "npm:angular2@2.0.0-beta.0/src/core/zone/ng_zone",
      "npm:angular2@2.0.0-beta.0/src/facade/async",
      "npm:angular2@2.0.0-beta.0/src/common/forms",
      "app/components/todos/addTodo.js",
      "npm:angular2@2.0.0-beta.0/src/common/directives",
      "app/components/todos/todoList.js",
      "app/components/todos/filters.js",
      "app/stores/appStore.js",
      "npm:angular2@2.0.0-beta.0/src/common/common_directives",
      "app/stores/todoActions.js",
      "npm:angular2@2.0.0-beta.0/src/common/pipes",
      "app/main.html!github:systemjs/plugin-text@0.0.2",
      "npm:angular2@2.0.0-beta.0/src/router/route_lifecycle_reflector",
      "npm:angular2@2.0.0-beta.0/src/router/route_config_impl",
      "npm:angular2@2.0.0-beta.0/src/router/lifecycle_annotations_impl",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/dom_tokens",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/events/dom_events",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/events/hammer_gestures",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/shared_styles_host",
      "npm:angular2@2.0.0-beta.0/src/animate/browser_details",
      "npm:angular2@2.0.0-beta.0/src/animate/animation_builder",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/dom_renderer",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/events/event_manager",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/events/key_events",
      "npm:angular2@2.0.0-beta.0/src/core/profile/wtf_init",
      "npm:angular2@2.0.0-beta.0/src/compiler/xhr",
      "npm:angular2@2.0.0-beta.0/src/facade/promise",
      "npm:angular2@2.0.0-beta.0/src/platform/browser/testability",
      "npm:angular2@2.0.0-beta.0/src/platform/browser/title",
      "npm:angular2@2.0.0-beta.0/platform/common_dom",
      "npm:angular2@2.0.0-beta.0/src/router/route_config_nomalizer",
      "npm:angular2@2.0.0-beta.0/src/platform/browser/tools/tools",
      "npm:angular2@2.0.0-beta.0/src/router/component_recognizer",
      "npm:angular2@2.0.0-beta.0/src/compiler/compiler",
      "npm:angular2@2.0.0-beta.0/src/router/url_parser",
      "npm:angular2@2.0.0-beta.0/src/router/route_recognizer",
      "npm:angular2@2.0.0-beta.0/src/platform/browser/browser_adapter",
      "npm:angular2@2.0.0-beta.0/src/compiler/url_resolver",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:angular2@2.0.0-beta.0/src/core/di/type_literal",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/interfaces",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/differs/keyvalue_differs",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/differs/iterable_differs",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/differs/default_keyvalue_differ",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/parser/locals",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/exceptions",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/differs/default_iterable_differ",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/jit_proto_change_detector",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/parser/parser",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/directive_record",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/parser/lexer",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/binding_record",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/change_detection_util",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/dynamic_change_detector",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/change_detector_ref",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/constants",
      "npm:angular2@2.0.0-beta.0/src/core/pipes/pipes",
      "npm:zone.js@0.5.10/lib/utils",
      "npm:angular2@2.0.0-beta.0/src/core/profile/wtf_impl",
      "npm:angular2@2.0.0-beta.0/src/core/pipes/pipe_provider",
      "npm:angular2@2.0.0-beta.0/src/core/linker/element_binder",
      "npm:angular2@2.0.0-beta.0/src/core/render/util",
      "npm:rxjs@5.0.0-beta.0/Subject",
      "npm:rxjs@5.0.0-beta.0/Observable",
      "npm:rxjs@5.0.0-beta.0/observable/fromPromise",
      "npm:rxjs@5.0.0-beta.0/operator/toPromise",
      "npm:angular2@2.0.0-beta.0/src/core/linker/template_commands",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/proto_change_detector",
      "npm:angular2@2.0.0-beta.0/src/core/linker/element_injector",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/parser/ast",
      "npm:angular2@2.0.0-beta.0/src/common/directives/observable_list_diff",
      "app/stores/filterReducer.js",
      "npm:redux-localstorage@0.4.0",
      "npm:redux-logger@2.3.2",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/control_container",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/abstract_control_directive",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/ng_control_name",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/ng_form_control",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/ng_control_group",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/ng_control",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/default_value_accessor",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/checkbox_value_accessor",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/ng_control_status",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/validators",
      "npm:angular2@2.0.0-beta.0/src/common/forms/form_builder",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/select_control_value_accessor",
      "npm:babel-runtime@5.8.34/helpers/create-class",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/ng_model",
      "npm:angular2@2.0.0-beta.0/src/common/forms/model",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/ng_form_model",
      "npm:angular2@2.0.0-beta.0/src/common/directives/ng_for",
      "npm:angular2@2.0.0-beta.0/src/common/directives/ng_if",
      "npm:angular2@2.0.0-beta.0/src/common/directives/ng_style",
      "npm:angular2@2.0.0-beta.0/src/common/directives/ng_class",
      "app/components/todos/visibleTodosPipe.js",
      "app/components/todos/todo.js",
      "app/components/todos/filterLink.js",
      "app/stores/todosReducer.js",
      "npm:angular2@2.0.0-beta.0/src/common/directives/core_directives",
      "npm:redux@3.0.5",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/ng_form",
      "npm:angular2@2.0.0-beta.0/src/common/pipes/json_pipe",
      "npm:angular2@2.0.0-beta.0/src/common/pipes/uppercase_pipe",
      "npm:angular2@2.0.0-beta.0/src/common/pipes/slice_pipe",
      "npm:angular2@2.0.0-beta.0/src/common/pipes/lowercase_pipe",
      "npm:angular2@2.0.0-beta.0/src/common/pipes/date_pipe",
      "npm:angular2@2.0.0-beta.0/src/common/directives/ng_switch",
      "npm:angular2@2.0.0-beta.0/src/common/pipes/async_pipe",
      "npm:angular2@2.0.0-beta.0/src/common/pipes/number_pipe",
      "npm:angular2@2.0.0-beta.0/src/common/forms/validators",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/events/hammer_common",
      "npm:angular2@2.0.0-beta.0/src/facade/math",
      "npm:angular2@2.0.0-beta.0/src/animate/css_animation_builder",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/util",
      "npm:angular2@2.0.0-beta.0/src/core/render/view",
      "npm:angular2@2.0.0-beta.0/src/core/render/view_factory",
      "npm:angular2@2.0.0-beta.0/src/compiler/schema/element_schema_registry",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/debug/debug_element_view_listener",
      "npm:angular2@2.0.0-beta.0/src/platform/browser/tools/common_tools",
      "npm:angular2@2.0.0-beta.0/src/router/async_route_handler",
      "npm:angular2@2.0.0-beta.0/src/platform/dom/debug/by",
      "npm:angular2@2.0.0-beta.0/src/router/sync_route_handler",
      "npm:angular2@2.0.0-beta.0/src/compiler/runtime_compiler",
      "npm:angular2@2.0.0-beta.0/src/compiler/source_module",
      "npm:angular2@2.0.0-beta.0/src/compiler/directive_metadata",
      "npm:angular2@2.0.0-beta.0/src/compiler/template_compiler",
      "npm:angular2@2.0.0-beta.0/src/compiler/template_ast",
      "npm:angular2@2.0.0-beta.0/src/compiler/html_parser",
      "npm:angular2@2.0.0-beta.0/src/compiler/template_normalizer",
      "npm:angular2@2.0.0-beta.0/src/compiler/runtime_metadata",
      "npm:angular2@2.0.0-beta.0/src/compiler/schema/dom_element_schema_registry",
      "npm:process@0.11.2",
      "npm:angular2@2.0.0-beta.0/src/compiler/change_detector_compiler",
      "npm:angular2@2.0.0-beta.0/src/platform/browser/generic_browser_adapter",
      "npm:angular2@2.0.0-beta.0/src/compiler/command_compiler",
      "npm:angular2@2.0.0-beta.0/src/compiler/style_compiler",
      "npm:angular2@2.0.0-beta.0/src/router/path_recognizer",
      "npm:angular2@2.0.0-beta.0/src/compiler/template_parser",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/pipes",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/pipe_lifecycle_reflector",
      "npm:rxjs@5.0.0-beta.0/util/root",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/event_binding",
      "npm:angular2@2.0.0-beta.0/src/core/linker/event_config",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/proto_record",
      "npm:angular2@2.0.0-beta.0/src/core/linker/interfaces",
      "npm:rxjs@5.0.0-beta.0/Subscription",
      "npm:rxjs@5.0.0-beta.0/Subscriber",
      "npm:rxjs@5.0.0-beta.0/symbol/rxSubscriber",
      "npm:rxjs@5.0.0-beta.0/subject/SubjectSubscription",
      "npm:rxjs@5.0.0-beta.0/scheduler/queue",
      "npm:rxjs@5.0.0-beta.0/util/SymbolShim",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/abstract_change_detector",
      "npm:angular2@2.0.0-beta.0/src/core/linker/directive_lifecycle_reflector",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/change_detection_jit_generator",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/coalesce",
      "npm:redux-logger@2.3.2/lib/index",
      "npm:angular2@2.0.0-beta.0/src/facade/intl",
      "npm:redux-localstorage@0.4.0/lib/persistState",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/number_value_accessor",
      "npm:babel-runtime@5.8.34/helpers/extends",
      "npm:cuid@1.3.8",
      "npm:babel-runtime@5.8.34/helpers/to-consumable-array",
      "npm:angular2@2.0.0-beta.0/src/common/pipes/invalid_pipe_argument_exception",
      "npm:babel-runtime@5.8.34/core-js/object/define-property",
      "npm:redux@3.0.5/lib/index",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/shared",
      "app/components/about/about.md!github:guybedford/system-md@0.0.3",
      "npm:angular2@2.0.0-beta.0/src/animate/css_animation_options",
      "npm:angular2@2.0.0-beta.0/src/animate/animation",
      "npm:angular2@2.0.0-beta.0/src/facade/browser",
      "npm:angular2@2.0.0-beta.0/src/compiler/parse_util",
      "npm:process@0.11.2/browser",
      "npm:angular2@2.0.0-beta.0/src/transform/template_compiler/change_detector_codegen",
      "npm:angular2@2.0.0-beta.0/src/compiler/util",
      "npm:angular2@2.0.0-beta.0/src/compiler/html_ast",
      "npm:angular2@2.0.0-beta.0/src/compiler/style_url_resolver",
      "npm:angular2@2.0.0-beta.0/src/compiler/template_preparser",
      "npm:angular2@2.0.0-beta.0/src/compiler/html_tags",
      "npm:angular2@2.0.0-beta.0/src/compiler/change_definition_factory",
      "npm:angular2@2.0.0-beta.0/src/compiler/selector",
      "npm:angular2@2.0.0-beta.0/src/compiler/html_lexer",
      "npm:angular2@2.0.0-beta.0/src/compiler/shadow_css",
      "npm:rxjs@5.0.0-beta.0/util/noop",
      "npm:rxjs@5.0.0-beta.0/util/throwError",
      "npm:rxjs@5.0.0-beta.0/util/tryOrOnError",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/observable_facade",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/codegen_facade",
      "npm:rxjs@5.0.0-beta.0/scheduler/QueueScheduler",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/codegen_name_util",
      "npm:angular2@2.0.0-beta.0/src/core/change_detection/codegen_logic_util",
      "npm:redux-localstorage@0.4.0/lib/util/mergeState",
      "npm:angular2@2.0.0-beta.0/src/common/forms/directives/normalize_validator",
      "npm:redux@3.0.5/lib/utils/compose",
      "npm:redux-localstorage@0.4.0/lib/createSlicer",
      "npm:babel-runtime@5.8.34/core-js/object/assign",
      "npm:redux@3.0.5/lib/createStore",
      "npm:babel-runtime@5.8.34/core-js/array/from",
      "npm:redux@3.0.5/lib/utils/bindActionCreators",
      "npm:redux@3.0.5/lib/utils/applyMiddleware",
      "npm:core-js@1.2.6/library/fn/object/define-property",
      "npm:cuid@1.3.8/dist/browser-cuid",
      "npm:redux@3.0.5/lib/utils/combineReducers",
      "npm:rxjs@5.0.0-beta.0/scheduler/FutureAction",
      "npm:rxjs@5.0.0-beta.0/scheduler/QueueAction",
      "npm:redux-localstorage@0.4.0/lib/util/typeOf",
      "npm:redux-localstorage@0.4.0/lib/getSubset",
      "npm:redux@3.0.5/lib/utils/isPlainObject",
      "npm:redux@3.0.5/lib/utils/mapValues",
      "npm:redux@3.0.5/lib/utils/pick",
      "npm:core-js@1.2.6/library/fn/object/assign",
      "npm:core-js@1.2.6/library/fn/array/from",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/es6.object.assign",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/es6.array.from",
      "npm:core-js@1.2.6/library/modules/$.object-assign",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.iter-define",
      "npm:core-js@1.2.6/library/modules/$.string-at",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.to-object",
      "npm:core-js@1.2.6/library/modules/$.iter-call",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter",
      "npm:core-js@1.2.6/library/modules/$.to-length",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/library/modules/$.iter-detect",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.library",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.redefine",
      "npm:core-js@1.2.6/library/modules/$.iter-create",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.to-integer",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:core-js@1.2.6/library/modules/$.uid",
      "npm:core-js@1.2.6/library/modules/$.descriptors",
      "npm:core-js@1.2.6/library/modules/$.shared",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.is-object"
    ]
  },

  map: {
    "angular2": "npm:angular2@2.0.0-beta.0",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "clean-css": "npm:clean-css@3.4.4",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.17",
    "cuid": "npm:cuid@1.3.8",
    "es6-promise": "npm:es6-promise@3.0.2",
    "es6-shim": "npm:es6-shim@0.34.0",
    "es7-reflect-metadata": "npm:es7-reflect-metadata@1.4.0",
    "md": "github:guybedford/system-md@0.0.3",
    "redux": "npm:redux@3.0.5",
    "redux-localstorage": "npm:redux-localstorage@0.4.0",
    "redux-logger": "npm:redux-logger@2.3.2",
    "redux-undo": "npm:redux-undo@0.6.0",
    "rxjs": "npm:rxjs@5.0.0-beta.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "todomvc-app-css": "npm:todomvc-app-css@2.0.4",
    "zone.js": "npm:zone.js@0.5.10",
    "github:guybedford/system-md@0.0.3": {
      "showdown": "github:showdownjs/showdown@1.3.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular2@2.0.0-beta.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "es6-promise": "npm:es6-promise@3.0.2",
      "es6-shim": "npm:es6-shim@0.33.13",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "reflect-metadata": "npm:reflect-metadata@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.0",
      "zone.js": "npm:zone.js@0.5.10"
    },
    "npm:asn1.js@4.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.6.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.6.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.6.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.6.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:cuid@1.3.8": {
      "browser-fingerprint": "npm:browser-fingerprint@0.0.1",
      "core-js": "npm:core-js@1.2.6",
      "node-fingerprint": "npm:node-fingerprint@0.0.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.6.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.6.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-shim@0.33.13": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-shim@0.34.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es7-reflect-metadata@1.4.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "reflect-metadata": "npm:reflect-metadata@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.6.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:node-fingerprint@0.0.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.6.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:redux-undo@0.6.0": {
      "redux": "npm:redux@3.0.5"
    },
    "npm:redux@3.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.0.0-beta.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.5.10": {
      "es6-promise": "npm:es6-promise@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
