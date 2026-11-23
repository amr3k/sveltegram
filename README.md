# Sveltegram

This package allows you to embed telegram widgets in your svelte web application.

<div align="center">
  <img src="./images/Logo.svg" width="256px">

## [Demo & Documentation](https://sveltegram.a3k.me)

</div>

[![Demo](https://img.shields.io/website?label=Demo&url=https%3A%2F%2Fsveltegram.a3k.me)](https://sveltegram.a3k.me)
[![npm version](https://img.shields.io/npm/v/sveltegram)](https://www.npmjs.com/package/sveltegram)

<!-- ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/sveltegram) -->
<!-- ![npm](https://img.shields.io/npm/dw/sveltegram) -->
<!-- ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/amr3k/sveltegram?color=8e4700) -->

![LICENSE](https://img.shields.io/github/license/amr3k/sveltegram?style=flat&color=fcdaff)

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
  - [Share widget](#share-widget)
    - [How to use](#how-to-use-3)
    - [API](#api-3)
- [Content Security Policy](#content-security-policy)
  - [Login widget: bot domain](#login-widget-bot-domain)
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

<Post link="https://t.me/computly/439" />
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

| Property                                            | Type     | Default    | Description                                                                        |
| --------------------------------------------------- | -------- | ---------- | ---------------------------------------------------------------------------------- |
| `username` **(Required)**                           | string   |            | Your telegram bot username                                                         |
| `authType`                                          | string   | `callback` | How to authenticate users? Choices are [callback, redirect]                        |
| `redirectURL` **Required if `authType = redirect`** | string   |            | In case you chose redirect as an authentication method, you must set this property |
| `requestAccess`                                     | boolean  | `false`    | Whether you want to send messages to the user in the future                        |
| `size`                                              | string   | `medium`   | Login button size. choices are [small, medium,large]                               |
| `buttonRadius`                                      | number   | `10`       | Login button radius (in pixels)                                                    |
| `onauth` **(Required) if `authType = callback`**    | Function |            | Callback function responsible for handling successful authentication               |

## Share widget

Embed a telegram share button in your svelte application.

### How to use

```js
<script>
  import { Share } from 'sveltegram';
</script>

<Share url="https://sveltegram.a3k.me" />
```

### API

| Property             | Type    | Default  | Description                                          |
| -------------------- | ------- | -------- | ---------------------------------------------------- |
| `url` **(Required)** | string  |          | Absolute URL of the page you want to share           |
| `comment`            | string  |          | Text sent along with the link (the user can edit it) |
| `size`               | string  | `medium` | Button size. Choices are [medium, large]             |
| `showText`           | boolean | `true`   | Show the "Share" label next to the Telegram logo     |

# Content Security Policy

If you are using CSP, allow the Telegram sources used by the widgets you embed:

- **Post, Discussions, Share:** `script-src https://telegram.org`, `frame-src https://t.me`
- **Login:** `script-src https://telegram.org`, `frame-src https://oauth.telegram.org`

With every widget enabled, the directives look like this:

```js
script-src 'self' https://telegram.org;
frame-src 'self' https://t.me https://oauth.telegram.org;
```

In SvelteKit, put these under `csp.directives` (`vite.config.js` on SvelteKit 3, `svelte.config.js` on older versions):

```js
csp: {
	directives: {
		'script-src': ['self', 'https://telegram.org'],
		'frame-src': ['self', 'https://t.me', 'https://oauth.telegram.org']
	}
}
```

> The Login widget's default `callback` auth type also needs `'unsafe-eval'` in `script-src`, because Telegram's script parses `data-onauth` with `eval()`. If you don't want to relax your CSP, use `authType="redirect"` instead. See [#51](https://github.com/amr3k/sveltegram/issues/51).

## Login widget: bot domain

Telegram only renders the login iframe when the page origin is registered with the bot. Register it in [@BotFather](https://t.me/botfather) with `/setdomain`, or under **Login Widget → Allowed URLs**. Use the exact HTTPS origin, for example `https://example.com` — `https://www.example.com` is a different origin, and `http://localhost` is not supported (the widget shows "Bot domain invalid").

`https://oauth.telegram.org` sends its own `frame-ancestors` directive for the registered domain. That policy belongs to Telegram, not to your app, so adding `frame-ancestors` to your own CSP will not change whether the login iframe can be embedded. SvelteKit also ignores `frame-ancestors` when it delivers CSP through a `<meta>` tag (prerendered pages).

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

## Checks

CI runs these on every pull request:

```sh
pnpm format:check
pnpm lint
pnpm check
pnpm package
```

## Releasing

Releases are published from GitHub Actions. To cut a release, bump `version` in `package.json` on a branch and merge the PR to `main`. `.github/workflows/publish.yml` builds the package and publishes the new version to npm with provenance. It skips versions that already exist on the registry, so re-runs are safe.

Publishing uses npm trusted publishing (OIDC), so no `NPM_TOKEN` secret is stored. The one-time setup is on npmjs.com → `sveltegram` → Settings → Trusted publishing:

| Field                | Value          |
| -------------------- | -------------- |
| Provider             | GitHub Actions |
| Organization or user | `amr3k`        |
| Repository           | `sveltegram`   |
| Workflow filename    | `publish.yml`  |

The trusted publisher configuration expires if it does not complete a publish within two days, so add it right before cutting the next release.

# TODO

- [x] Add login widget
- [x] Migrate to svelte 5
- [x] Deploy demo to cloudflare
- [x] Add [Share button widget](https://core.telegram.org/widgets/share)
- [ ] Publish to [jsr.io](https://jsr.io)

# License

[MIT](./LICENSE)
