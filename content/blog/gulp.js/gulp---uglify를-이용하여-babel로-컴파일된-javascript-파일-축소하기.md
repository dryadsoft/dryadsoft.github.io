---
title: gulp - uglify를 이용하여 babel로 컴파일된 javascript 파일 축소하기
date: 2020-11-08 18:11:16
category: gulp.js
thumbnail: { thumbnailSrc }
draft: false
---

### 목차

1. [gulp - babel을 이용하여 개발 환경설정](../gulp/1)

2. [gulp - javascript를 babel을 이용하여 컴파일하기](../gulp/9)

   2-1. gulp - uglify를 이용하여 babel로 컴파일된 javascript 파일 축소하기

   - [필요한 node 모듈을 설치한다.](#필요한-node-모듈을-설치한다.)
   - [gulpfile.babel.js 파일을 수정한다.](#gulpfile.babel.js-파일을-수정한다.)
   - [gulp 실행](#gulp-실행)
   - [컴파일된 소스 확인하기](#컴파일된-소스-확인하기)
   - [node 실행하기](#node-실행하기)

3. [gulp - node + typescript 컴파일하기](../gulp/10)

node 프로젝트를 babel로 컴파일 후 파일 사이즈를 줄이기 위하여 **gulp-uglify** 를 이용하여 축소 할 수 있다.
이전 node 프로젝트의 연속포스트 이기때문에 앞부분을 보지 못했다면 먼저 보고 오길 추천한다.

**[이전포스트로 이동](../gulp/9)**

## <div id="필요한-node-모듈을-설치한다.">필요한 node 모듈을 설치한다.</div>

```shell
> yarn add gulp-uglify -D
```

## <div id="gulpfile.babel.js-파일을-수정한다.">gulpfile.babel.js 파일을 수정한다.</div>

```javascript
import gulp from 'gulp'
import babel from 'gulp-babel'
import GulpUglify from 'gulp-uglify' // ------> uglify 추가
const routes = {
  js: {
    src: 'src/**/*.js', // 대상 javascript파일
    dest: 'build', // javascript파일이 컴파일되어서 생성되는 폴더
  },
}

const js = () =>
  gulp
    .src(routes.js.src) // 출발지
    .pipe(babel()) // babel을 이용하여 컴파일
    .pipe(GulpUglify()) // ------> uglify 추가
    .pipe(gulp.dest(routes.js.dest)) // 목적지

export const dev = gulp.series(js) // package.json의 scripts에 작성한 "gulp dev" task
```

## <div id="gulp-실행">gulp 실행</div>

1. gulp를 실행하면 아래와같이 정상적으로 실행된걸 확인 할 수 있다.

```shell
$ yarn dev
yarn run v1.21.0
$ gulp dev
[07:14:43] Requiring external module @babel/register
[07:14:44] Using gulpfile D:\workspace\dryadsoft\gulp\gulp_javascript\gulpfile.babel.js
[07:14:44] Starting 'dev'...
[07:14:44] Starting 'js'...
[07:14:45] Finished 'js' after 104 ms
[07:14:45] Finished 'dev' after 110 ms
Done in 1.85s.
```

> 실행결과 root디렉토리에 build 폴더가 생성된다.<br/>
> 생성된build 폴더 안의 구조는 src폴더의 구조와 똑같다.<br/>
> build 폴더 안에 컴파일된 소스를 확인 할 수 있다.

## <div id="컴파일된-소스-확인하기">컴파일된 소스 확인하기</div>

build폴더를 확인하면 아래와 같이 소스가 축소 되어 있는 걸 확인 할 수 있다.

```javascript
// build/index.js
'use strict'
var _utils = require('./components/utils')
;(0, _utils.plus)(4, 5)

// build/components/utils.js
;('use strict')
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.plus = void 0)
var plus = function(e, s) {
  return console.log(e + s)
}
exports.plus = plus
```

## <div id="node-실행하기">node 실행하기</div>

```shell
$ node build/index.js
9
```

컴파일된 js파일을 실행하면 위와 같이 정상적으로 실행된 결과값을 확인 할 수 있다.

### 목차

1. [gulp - babel을 이용하여 개발 환경설정](../gulp/1)

2. [gulp - javascript를 babel을 이용하여 컴파일하기](../gulp/9)

   2-1. gulp - uglify를 이용하여 babel로 컴파일된 javascript 파일 축소하기

   - [필요한 node 모듈을 설치한다.](#필요한-node-모듈을-설치한다.)
   - [gulpfile.babel.js 파일을 수정한다.](#gulpfile.babel.js-파일을-수정한다.)
   - [gulp 실행](#gulp-실행)
   - [컴파일된 소스 확인하기](#컴파일된-소스-확인하기)
   - [node 실행하기](#node-실행하기)

3. [gulp - node + typescript 컴파일하기](../gulp/10)
