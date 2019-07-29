module.exports = {
    extends: ["tslint:recommended", "tslint-config-prettier"],
	rulesDirectory: ["tslint-plugin-prettier"],
	rules: {
		"prettier": true,
		"indent": [true, "tabs", 4],
		"no-debugger": false,
		"no-console": false,
		"eofline": false,
		"quotemark": [true, "single", "jsx-double"],
		"semicolon": [true, "always", "ignore-bound-class-methods"],
		"trailing-comma": false,
		"jsx-no-multiline-js": false,
		"arrow-parens": false,
		"object-literal-sort-keys": false,
		"ordered-imports": false,
		"jsx-wrap-multiline": false,
		"no-trailing-whitespace": false,
		"variable-name": [true, "ban-keywords", "check-format", "allow-leading-underscore", "allow-pascal-case"],
		"no-bitwise": false
	},
	linterOptions: {
		"exclude": ["**/*.js", "node_modules/**/*.ts", "dist/**/*.ts"]
	}
};