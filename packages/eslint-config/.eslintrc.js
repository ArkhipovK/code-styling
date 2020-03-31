module.exports = {
	extends: ['eslint:recommended' /*'prettier'*/],
	// plugins: ['prettier'],
	env: {
		browser: true,
		node: true
	},
	plugins: ['import'],
	rules: {
		'array-element-newline': ['error', 'consistent'],
		'array-bracket-newline': ['error', 'never'],
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		camelcase: 'error',
		'comma-dangle': ['error', 'never'],
		complexity: 'off',
		'constructor-super': 'error',
		curly: 'error',
		'default-case': 'off',
		'dot-notation': 'error',
		'eol-last': 'off',
		eqeqeq: 'off',
		'guard-for-in': 'error',
		'id-blacklist': ['error', 'any', 'Number', 'number', 'String', 'string', 'Boolean', 'boolean', 'Undefined', 'undefined'],
		'id-match': 'error',
		indent: 'off',
		'import/order': 'off',
		'linebreak-style': ['error', 'windows'],
		'max-classes-per-file': ['error', 1],
		'max-len': [
			'error',
			{
				code: 160,
				comments: 500,
				ignoreUrls: true,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],
		'newline-per-chained-call': 'off',
		'no-bitwise': 'warn',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': 'off',
		'no-debugger': 'warn',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-fallthrough': 'error',
		'no-invalid-this': 'error',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-multiple-empty-lines': 'error',
		'no-new-wrappers': 'error',
		'no-plusplus': ['warn', {allowForLoopAfterthoughts: true}],
		'no-prototype-builtins': 'off',
		'no-restricted-globals': 'off',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
			}
		],
		'no-shadow': ['error', {builtinGlobals: true, hoist: 'all'}],
		'no-tabs': 'off',
		'no-throw-literal': 'error',
		'no-trailing-spaces': ['error', {ignoreComments: true}],
		'no-undef-init': 'error',
		'no-underscore-dangle': 'error',
		'no-unsafe-finally': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-var': 'error',
		'no-unused-vars': 'error',
		'nonblock-statement-body-position': ['error', 'beside'],
		'object-shorthand': 'error',
		'object-curly-spacing': ['error', 'never'],
		'object-curly-newline': ['error', {multiline: true}],
		'one-var': 'off',
		'prefer-arrow/prefer-arrow-functions': 'error',
		'prefer-const': 'error',
		'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
		'prettier/prettier': ['error'],
		'quote-props': ['error', 'consistent-as-needed'],
		radix: ['warn', 'as-needed'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': ['error', 'never'],
		'spaced-comment': 'error',
		'use-isnan': 'error',
		'valid-typeof': ['error', {requireStringLiterals: true}]
	}
};
