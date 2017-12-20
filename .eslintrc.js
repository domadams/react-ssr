module.exports = {
  "extends": "airbnb",
	env: {
		browser: true,
		jest: true,
	},

	rules: {
		"react/prefer-stateless-function": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }]
	},
};