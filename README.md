Test repo demonstrating issues with the default `AnyAction` for RTK reducer cases.

This has bitten Etsy engineers several times during migrations, generally when migrating a file from JS to TS or for folks who are unfamiliar with either RTK or TS.

We now use the following rule paired with ESLint's `no-restricted-syntax` to prevent further instances of this, but it would be great if this were the default:

```js
    {
        selector: `CallExpression[callee.name='createSlice'] > ObjectExpression > Property[key.name='reducers'] FunctionExpression[params.length=2] > :nth-child(2):not([typeAnnotation])`,
        message: `If you use createSlice's 'reducer' property, you need a type for your action argument.
Import  the 'PayloadAction' type from @reduxjs/toolkit, and use it to type your action:
    reducers: {
        someAction(state, action: PayloadAction<number>) {
            action.payload // has type 'number'
        }
    }
`,
    },
```