/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-jsdoc",
        "eslint-plugin-react",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@babel/object-curly-spacing": "off",
        "@babel/semi": "off",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/brace-style": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/comma-spacing": "off",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/func-call-spacing": "off",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "CallExpression": {
                    "arguments": "first"
                },
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "@typescript-eslint/keyword-spacing": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": "error",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extra-parens": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/object-curly-spacing": "off",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "off"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/space-infix-ops": "off",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "array-bracket-newline": "off",
        "array-bracket-spacing": "off",
        "array-element-newline": "off",
        "arrow-parens": "off",
        "arrow-spacing": "off",
        "babel/object-curly-spacing": "off",
        "babel/quotes": "off",
        "babel/semi": "off",
        "block-spacing": "off",
        "brace-style": [
            "error",
            "1tbs"
        ],
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "off",
        "computed-property-spacing": "off",
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "dot-location": "off",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "flowtype/boolean-style": "off",
        "flowtype/delimiter-dangle": "off",
        "flowtype/generic-spacing": "off",
        "flowtype/object-type-curly-spacing": "off",
        "flowtype/object-type-delimiter": "off",
        "flowtype/quotes": "off",
        "flowtype/semi": "off",
        "flowtype/space-after-type-colon": "off",
        "flowtype/space-before-generic-bracket": "off",
        "flowtype/space-before-type-colon": "off",
        "flowtype/union-intersection-spacing": "off",
        "for-direction": "error",
        "func-call-spacing": "off",
        "function-call-argument-newline": "off",
        "function-paren-newline": "off",
        "generator-star": "off",
        "generator-star-spacing": "off",
        "getter-return": "error",
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "implicit-arrow-linebreak": "off",
        "indent": "off",
        "indent-legacy": "off",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "jsx-quotes": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "linebreak-style": "off",
        "lines-around-comment": "off",
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "multiline-ternary": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-array-constructor": "off",
        "no-arrow-condition": "off",
        "no-async-promise-executor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-comma-dangle": "off",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "off",
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "off",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "off",
        "no-fallthrough": "error",
        "no-floating-decimal": "off",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-misleading-character-class": "error",
        "no-mixed-operators": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-multi-spaces": "off",
        "no-multiple-empty-lines": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-reserved-keys": "off",
        "no-self-assign": "error",
        "no-setter-return": "error",
        "no-shadow-restricted-names": "error",
        "no-space-before-semi": "off",
        "no-spaced-func": "off",
        "no-sparse-arrays": "error",
        "no-tabs": "off",
        "no-this-before-super": "error",
        "no-trailing-spaces": "off",
        "no-undef": "error",
        "no-underscore-dangle": "error",
        "no-unexpected-multiline": "off",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "off",
        "no-useless-catch": "error",
        "no-useless-escape": "error",
        "no-whitespace-before-property": "off",
        "no-with": "error",
        "no-wrap-func": "off",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "one-var-declaration-per-line": "off",
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "quote-props": "off",
        "quotes": "off",
        "radix": "error",
        "react/display-name": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-child-element-spacing": "off",
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-closing-tag-location": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-curly-spacing": [
            "error",
            {
                "when": "never"
            }
        ],
        "react/jsx-equals-spacing": [
            "error",
            "never"
        ],
        "react/jsx-first-prop-new-line": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-newline": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-props-no-multi-spaces": "off",
        "react/jsx-space-before-closing": "off",
        "react/jsx-tag-spacing": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-wrap-multilines": "error",
        "react/no-children-prop": "error",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        "react/no-render-return-value": "error",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unsafe": "off",
        "react/prop-types": "error",
        "react/react-in-jsx-scope": "error",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "require-yield": "error",
        "rest-spread-spacing": "off",
        "semi": "off",
        "semi-spacing": "off",
        "semi-style": "off",
        "space-after-function-name": "off",
        "space-after-keywords": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-before-function-parentheses": "off",
        "space-before-keywords": "off",
        "space-in-brackets": "off",
        "space-in-parens": "off",
        "space-infix-ops": "off",
        "space-return-throw-case": "off",
        "space-unary-ops": "off",
        "space-unary-word-ops": "off",
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "standard/array-bracket-even-spacing": "off",
        "standard/computed-property-even-spacing": "off",
        "standard/object-curly-even-spacing": "off",
        "switch-colon-spacing": "off",
        "template-curly-spacing": "off",
        "template-tag-spacing": "off",
        "unicode-bom": "off",
        "unicorn/empty-brace-spaces": "off",
        "unicorn/no-nested-ternary": "off",
        "unicorn/number-literal-case": "off",
        "use-isnan": "error",
        "valid-typeof": "error",
        "vue/array-bracket-newline": "off",
        "vue/array-bracket-spacing": "off",
        "vue/arrow-spacing": "off",
        "vue/block-spacing": "off",
        "vue/block-tag-newline": "off",
        "vue/brace-style": "off",
        "vue/comma-dangle": "off",
        "vue/comma-spacing": "off",
        "vue/comma-style": "off",
        "vue/dot-location": "off",
        "vue/func-call-spacing": "off",
        "vue/html-closing-bracket-newline": "off",
        "vue/html-closing-bracket-spacing": "off",
        "vue/html-end-tags": "off",
        "vue/html-indent": "off",
        "vue/html-quotes": "off",
        "vue/html-self-closing": "off",
        "vue/key-spacing": "off",
        "vue/keyword-spacing": "off",
        "vue/max-attributes-per-line": "off",
        "vue/max-len": "off",
        "vue/multiline-html-element-content-newline": "off",
        "vue/mustache-interpolation-spacing": "off",
        "vue/no-extra-parens": "off",
        "vue/no-multi-spaces": "off",
        "vue/no-spaces-around-equal-signs-in-attribute": "off",
        "vue/object-curly-newline": "off",
        "vue/object-curly-spacing": "off",
        "vue/object-property-newline": "off",
        "vue/operator-linebreak": "off",
        "vue/script-indent": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/space-in-parens": "off",
        "vue/space-infix-ops": "off",
        "vue/space-unary-ops": "off",
        "vue/template-curly-spacing": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "quotes": "off",
                    "jsx-alignment": true,
                    "jsx-no-string-ref": true,
                    "typedef": [
                        true,
                        "parameter",
                        "property-declaration"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-module",
                        "check-operator",
                        "check-separator",
                        "check-type",
                        "check-typecast"
                    ]
                }
            }
        ]
    }
};
