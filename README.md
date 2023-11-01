[![Stand With Palestine](https://raw.githubusercontent.com/TheBSD/StandWithPalestine/main/banner-no-action.svg)](https://TheBSD.github.io/StandWithPalestine/)

# Sveltegram

This package allows you to embed telegram widgets in your svelte web application.

Library size is **96 bytes** (min+gzipped). _[bundlephobia](https://bundlephobia.com/package/sveltegram@latest)_

<div align="center">
  <img src="./images/Sveltegram.png" width="256px">

## [Demo & Documentation](https://sveltegram.a3k.me)

</div>

[![StandWithPalestine](https://raw.githubusercontent.com/TheBSD/StandWithPalestine/main/badges/StandWithPalestine.svg)](https://github.com/amr3k/sveltegram)
[![Demo](https://img.shields.io/website?label=Demo&url=https%3A%2F%2Fsveltegram.a3k.me)](https://sveltegram.a3k.me)
![GitHub branch checks state](https://img.shields.io/github/checks-status/amr3k/sveltegram/main)
[![Rate this package](https://badges.openbase.com/js/rating/sveltegram.svg?token=2HClQ+1c8RGTv7bSzxuDGJUEVaixuhKGcafO5McxW4A=)](https://openbase.com/js/sveltegram?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

<!-- ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/sveltegram) -->
<!-- ![npm](https://img.shields.io/npm/dw/sveltegram) -->
<!-- ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/amr3k/sveltegram?color=8e4700) -->

![LICENSE](https://img.shields.io/github/license/amr3k/sveltegram?style=flat&color=fcdaff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/amr3k/sveltegram?color=fffc35&label=Repo%20size)
[![Hits-of-Code](https://hitsofcode.com/github/amr3k/sveltegram?branch=main)](https://hitsofcode.com/github/amr3k/sveltegram/view?branch=main)

- [Sveltegram](#sveltegram)
  - [Demo \& Documentation](#demo--documentation)
  - [Post widget](#post-widget)
    - [How to use](#how-to-use)
    - [API](#api)
  - [Discussions widget](#discussions-widget)
    - [How to use](#how-to-use-1)
    - [API](#api-1)
  - [Login widget](#login-widget)
    - [How to use](#how-to-use-2)
    - [API](#api-2)
- [Content Security Policy](#content-security-policy)
- [Limitations](#limitations)
- [Development](#development)
  - [Install](#install)
- [TODO](#todo)
- [License](#license)

## Post widget

Embed a telegram post widget in your svelte application.

### How to use

```js
<script>
  import { Post } from 'sveltegram';
</script>

<Post link="https://t.me/computly/188" />
```

### API

| Property              | Type    | Default   | Description                                            |
| --------------------- | ------- | --------- | ------------------------------------------------------ |
| `link` **(Required)** | string  |           | Telegram post link (_You can find it in context menu_) |
| `color`               | string  | `#2f81f6` | Accent color                                           |
| `colorDark`           | string  | `#89baff` | Accent color in dark mode                              |
| `darkMode`            | boolean | `false`   | Enable dark mode                                       |

## Discussions widget

Embed a telegram discussions widget in your svelte application.

### How to use

```js
<script>
  import { Discussions } from 'sveltegram';
</script>

<Discussions link="https://t.me/contest/198" />
```

### API

| Property              | Type    | Default   | Description                                                                                                                                                                                                             |
| --------------------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `link` **(Required)** | string  |           | Telegram discussions link (_You can find it in context menu_)                                                                                                                                                           |
| `pageURL`             | string  |           | If you want to auto load comments from your channel as explained in [Telegram documentation](https://core.telegram.org/widgets/discussion) You'll need to pass the same page URL as the one in `<link rel="canonical">` |
| `color`               | string  | `#2f81f6` | Accent color                                                                                                                                                                                                            |
| `colorDark`           | string  | `#89baff` | Accent color in dark mode                                                                                                                                                                                               |
| `darkMode`            | boolean | `false`   | Enable dark mode                                                                                                                                                                                                        |
| `colorfulNames`       | boolean | `false`   | Use different color for usernames                                                                                                                                                                                       |
| `commentsLimit`       | number  | `5`       | Number of comments to show                                                                                                                                                                                              |
| `height`              | number  |           | Height of the widget, The default value is 'auto' which is determined by Telegram                                                                                                                                       |

## Login widget

Embed a telegram login button in your svelte application.

### How to use

```js
<script>
  import { Login } from 'sveltegram';
</script>

<Login username="ComputlyBot" />
```

### API

| Property                                            | Type    | Default    | Description                                                                        |
| --------------------------------------------------- | ------- | ---------- | ---------------------------------------------------------------------------------- |
| `username` **(Required)**                           | string  |            | Your telegram bot username                                                         |
| `authType`                                          | string  | `callback` | How to authenticate users? Choices are [callback, redirect]                        |
| `redirectURL` **Required if `authType = redirect`** | string  |            | In case you chose redirect as an authentication method, you must set this property |
| `requestAccess`                                     | boolean | `false`    | Whether you want to send messages to the user in the future                        |
| `size`                                              | string  | `medium`   | Login button size. choices are [small, medium,large]                               |
| `buttonRadius`                                      | number  | `10`       | Login button radius (in pixels)                                                    |

# Content Security Policy

If you are using CSP, you'll need to allow scripts and iFrames coming from Telegram domains as follows:

```js
script-src https://telegram.org;
frame-src https://t.me;
```

# Limitations

- Can't use the same widget more than once due to telegram script assigning a unique id to each widget.

# Development

## Install

```sh
git clone https://github.com/amr3k/sveltegram.git
cd sveltegram
```

Then install dependencies:

```sh
pnpm install
```

# TODO

- [x] Add support for [login widget](https://core.telegram.org/widgets/login)

# License

[MIT](./LICENSE)
