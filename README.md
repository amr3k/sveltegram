# Sveltegram

This package allows you to embed telegram widgets in your svelte web application.

## [Demo](https://sveltegram.computly.me)

## Stats
  
[![Demo](https://img.shields.io/website?label=Demo&url=https%3A%2F%2Fsveltegram.computly.me)](https://sveltegram.computly.me)
![GitHub branch checks state](https://img.shields.io/github/checks-status/416d72/sveltegram/main)
![npms.io (final)](https://img.shields.io/npms-io/final-score/sveltegram?color=%23538c99)
<!-- ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/sveltegram) -->
<!-- ![npm](https://img.shields.io/npm/dw/sveltegram) -->

![LICENSE](https://img.shields.io/github/license/416d72/sveltegram?style=flat&color=fcdaff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/416d72/sveltegram?color=fffc35&label=Repo%20size)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/416d72/sveltegram?color=8e4700)
[![Hits-of-Code](https://hitsofcode.com/github/416d72/sveltegram?branch=main)](https://hitsofcode.com/github/416d72/sveltegram/view?branch=main)

- [Sveltegram](#sveltegram)
  - [Demo](#demo)
  - [Stats](#stats)
  - [Post widget](#post-widget)
    - [How to use](#how-to-use)
    - [API](#api)
  - [Comments widget](#comments-widget)
- [Content Security Policy](#content-security-policy)
- [TODO](#todo)
  - [License](#license)

## Post widget

Embed a telegram post widget in your svelte application.

### How to use

```js
<script>
import { Post } from 'sveltegram';
</script>

<Post
  link="https://t.me/computly/188"
  color="#2f81f6"
  colorDark='#89baff'
  darkMode={false}
  transitionDuration={200}
/>
```

### API

| Property             | Type    | Default   | Description                                                            |
| -------------------- | ------- | --------- | ---------------------------------------------------------------------- |
| `link` **Required**  | string  |           | Telegram post link (_You can find it in context menu_)                 |
| `color`              | string  | `#2f81f6` | Accent color                                                           |
| `colorDark`          | string  | `#89baff` | Accent color in dark mode                                              |
| `darkMode`           | boolean | `false`   | Enable dark mode                                                       |
| `transitionDuration` | number  | `200`     | Duration of the fade transition effect (_Useful when switching theme_) |

## Comments widget

_**Coming soon...**_

# Content Security Policy

If you are using CSP, you'll need to allow scripts and iFrames coming from `Telegram` as follows:

```js
frame-src https://telegram.org;
```

# TODO
- [ ] Add title prop

## License

[MIT](./LICENSE)