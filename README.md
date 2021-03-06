<div align="center">
  <h1>ZenJS</h1>
  <p>
    ZenJS 是一个高性能的 JavaScript 工具库。
  </p>
</div>

<br>
<br>

## 浏览器支持

| Chrome | Firefox | Safari | Android | Edge | Internet Explorer |
| :-     | :-      | :-     | :-      | :-   | :-                |
| 23+    | 21+     | 6+     | 4.4+    | 12+  | 9+                |


<br>

## 安装

### npm 安装
```bash
  npm install @moomfe/zenjs
```

### CDN
```html
  <!-- jsdelivr -->
  <script src="https://cdn.jsdelivr.net/npm/@moomfe/zenjs@2.3.1/dist/zen.min.js"></script>
```
```html
  <!-- unpkg -->
  <script src="https://unpkg.com/@moomfe/zenjs@2.3.1/dist/zen.min.js"></script>
```


<br>

> 在 v2.1.0 版本之前, ZenJS 需要 polyfill 作为依赖项 :
* [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)
* [polyfill.io](https://cdn.polyfill.io/v2/docs/)

<br>

## 大小 - 版本详解

### Default
|                    | Default | Gzip    |  -  | Module    | Use in  |
| :-                 | :-      | :-      | :-: | :-        | :-      |
| zen.js             | 61.47kb | 16.19kb | \|  | UMD       | Browser |
| zen.min.js         | 22.29kb | 8.37kb | \|  | UMD       | Browser |
| zen.common.js      | 57.15kb | 15.90kb | \|  | CommonJS  | [NodeJS](https://nodejs.org) or [browserify](http://browserify.org) or [webpack 1](https://webpack.github.io) |
| zen.esm.js         | 57.13kb | 15.88kb | \|  | ES Module | [webpack 2](https://webpack.js.org) or [rollup](http://rollupjs.org) |

### Slim : No DOM API
|                    | Default | Gzip    |  -  | Module    | Use in  |
| :-                 | :-      | :-      | :-: | :-        | :-      |
| zen.slim.js        | 29.71kb | 8.25kb | \|  | UMD       | Browser |
| zen.slim.min.js    | 10.96kb | 4.27kb | \|  | UMD       | Browser |
| zen.common.slim.js | 27.49kb | 8.06kb | \|  | CommonJS  | [NodeJS](https://nodejs.org) or [browserify](http://browserify.org) or [webpack 1](https://webpack.github.io) |
| zen.esm.slim.js    | 27.47kb | 8.05kb | \|  | ES Module | [webpack 2](https://webpack.js.org) or [rollup](http://rollupjs.org) |

<br>

## 参考
### 更详细的使用方法及介绍请参照 [index.d.ts](https://github.com/MoomFE/ZenJS/blob/master/index.d.ts)


- Array
  - $chunk
  - $create
  - $toArray
  - $copy
  - $isArrayLike

- Array.prototype
  - $add
  - $concat
  - $concatTo
  - $delete / $remove
  - $deleteValue / $removeValue
  - $each
  - $equals
  - $get
  - $inArray
  - $find
  - $findIndex
  - $set / $edit
  - $move
  - $moveRange
  - $push
  - $unshift
  - $pop
  - $shift

- document
  - $cookie
  - $deleteCookie / $removeCookie
  - $id
  - $ready
  - $query
  - $queryFirst

- Element.prototype
  - \_index
  - \_nodeName
  - \_width
  - \_height
  - \_val / \_value
  - \_html
  - $addClass
  - $deleteClass / $removeClass
  - $hasClass
  - $toggleClass
  - $append
  - $prepend
  - $before
  - $after
  - $child / $children
  - $first / $firstChild
  - $last / $lastChild
  - $is
  - $not
  - $query
  - $queryFirst
  - $delete / $remove
  - $replaceWith / $replace
  - $parent
  - $parents
  - $next
  - $prev
  - $nextAll
  - $prevAll
  - $siblings
  - $selectText

- EventTarget.prototype
  - $data
  - $hasData
  - $deleteData / $removeData
  - $on
  - $one / $once
  - $off
  - $emit

- Math
  - $plus / $jia
  - $minus / $jian
  - $multiply / $cheng
  - $divide / $chu
  - $mean
  - $random
  - $randomPlus

- Number
  - $isNumber

- Object
  - $assign
  - $create
  - $each
  - $equals
  - $isEmptyObject
  - $isPlainObject

- Object.prototype
  - $delete / $remove
  - $deleteValue / $removeValue
  - $get
  - $set / $edit
  - $self
  - \_\_self\_\_

- String
  - $random
  - $someRandom

- String.prototype
  - $toCapitalize
  - $replaceAll

- window
  - $ready
  - $typeof
  - $querystring.stringify
  - $querystring.parse

<br>

## 在本地构建ZenJS

克隆到本地:
```bash
git clone https://github.com/MoomFE/ZenJS.git
```
安装依赖项:
```bash
cd ZenJS && npm install
```
构建项目:
```bash
npm run build
```
实时监听项目修改:
```bash
npm run watch
```

<br>

## License

ZenJS is licensed under a [MIT  License](./LICENSE).