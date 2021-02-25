module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        'jsx-quotes': [
            1, 
            'prefer-double'
        ]
    },
    "plugins": [
        "prettier"
    ]
};
