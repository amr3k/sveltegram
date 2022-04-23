# Sveltelegram

This package allows you to embed telegram widgets in your svelte web application.

<!-- Badges -->

- [Sveltelegram](#sveltelegram)
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
import { Post } from 'sveltelegram';
</script>

<Post
  link="https://t.me/computly/188"
  avatar={true}
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
