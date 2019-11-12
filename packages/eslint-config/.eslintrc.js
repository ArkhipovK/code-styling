module.exports = {
	extends: ['eslint-config-airbnb', 'eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	'env': {
		'browser': true,
		'node': true,
	},
	rules: {
		'prettier/prettier': ['error'],
		'no-prototype-builtins': 'off',
		"linebreak-style": [1, "windows"],
		'func-style': 'off',
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}],
		'no-iterator': 'off',
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
		'max-len': ['error', 160, 4, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		}],
		'nonblock-statement-body-position': 'off',
		'curly': 'error',
		'indent': ['error', 'tab', {
			SwitchCase: 1
		}],
		'no-tabs': 'off',
		'object-curly-spacing': ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'no-underscore-dangle': 'off',
		'no-bitwise': 'off',
		'arrow-parens': ['error', 'as-needed']
	}
};