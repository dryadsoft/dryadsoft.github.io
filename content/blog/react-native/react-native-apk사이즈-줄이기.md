---
title: React Native apk사이즈 줄이기
date: 2020-11-08 18:11:38
category: react-native
thumbnail: { thumbnailSrc }
draft: false
---

[React Native 시작하기](https://facebook.github.io/react-native/docs/getting-started)

### 1. build.gradle 수정하기

- 변경전

```shell
def enableSeparateBuildPerCPUArchitecture = false
def enableProguardInReleaseBuilds = false
```

- 변경후

```shell
def enableSeparateBuildPerCPUArchitecture = true
def enableProguardInReleaseBuilds = true
```

### 2. Hermes 사용하기

- 1. 필수 설치 패키지
     [Microsoft Visual C++ 2015 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=48145)
- 2. android/app/build.gradle 파일 수정

```shell
  project.ext.react = [
      entryFile: "index.js",
-     enableHermes: false  // clean and rebuild if changing
+     enableHermes: true  // clean and rebuild if changing
  ]
```

- 만약 ProGuard를 사용한다면 proguard-rules.pro 파일에 아래 문구 추가

```shell
-keep class com.facebook.hermes.unicode.** { *; }
```

> 모두 설정되었으면 기존 빌드된 내용은 삭제한다.(Window에서 명령어)

```shell
cd android && gradlew clean
```

- 앱 실행

```shell
npx react-native run-android
```
