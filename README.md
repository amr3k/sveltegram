# Sveltegram

This package allows you to embed telegram widgets in your svelte web application.

![GitHub branch checks state](https://img.shields.io/github/checks-status/416d72/sveltegram/main)
![GitHub top language](https://img.shields.io/github/languages/top/416d72/sveltegram?color=%23ff0000)

![GitHub language count](https://img.shields.io/github/languages/count/416d72/sveltegram)

![npms.io (final)](https://img.shields.io/npms-io/final-score/sveltegram?color=%230d0)

- [Sveltegram](#sveltegram)
  - [Post widget](#post-widget)
    - [Demo](#demo)
    - [How to use](#how-to-use)
    - [API](#api)
  - [Comments widget](#comments-widget)
- [Content Security Policy](#content-security-policy)

## Post widget

Embed a telegram post widget in your svelte application.

### [Demo](https://sveltegram.computly.me)

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
