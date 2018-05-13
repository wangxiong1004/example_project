### webpack编译es6

---

- 安装loader
```
    cnpm i webpack@3.12.0 -D
    cnpm i babel-loader babel-core -D
    cnpm i babel-preset-env -D
    cnpm i babel-plugin-transform-runtime -D
    cnpm i bable-runtime -D
```

- 配置webpack.config.js
```
    module.exports = {
        module: {
            rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }]
        }
    };
```

- 配置.babelrc
```
    {
        "presets": [
            [ "babel-preset-env", {
                "targets": {
                    "browsers": [ "> 1%", "last 2 versions" ]
                }
            }]
        ],

        "plugins": [ "transform-runtime" ]
    }
```

- 编译
```
    // cmd
    webpack
```