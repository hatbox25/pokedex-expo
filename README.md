# Pokedex - React Native Expo

[![codecov](https://codecov.io/gh/hatbox25/pokedex-expo/branch/master/graph/badge.svg?token=ADDE3YR5VD)](https://codecov.io/gh/hatbox25/pokedex-expo)

> Pokedex by Moch Edwin Lokyta

## Install

### System Dependencies

- install [homebrew](http://brew.sh/) or the Windows equivalent
- nvm: `brew install nvm`
- Node >v10.16.2:
  - `nvm install 10.16.2`
  - & then `nvm use 10.16.2` when working on the project (see below about shell aliases and nvm defaults)
- yarn: `brew install yarn --ignore-dependencies`
  - (Installing yarn will by-default install an extra copy of node in the homebrew context, unless you use `--ignore-dependencies`.)
- Install .eslintrc & .prettierrc support for your editor
  - this is an essential requirement to avoid stupid merge conflicts

### Project Dependencies

- `git clone` this repo
- `cd` into the cloned repo
- install node dependencies with `yarn` (short for `yarn install`)
- [Expo App Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or [Expo App iOS](https://apps.apple.com/app/apple-store/id982107779) already installed on your device

## Usage

### Running the expo app

The following commands should generate qr expo to scan:

```bash
yarn start
```
then scan QR using your device to try this expo app

### Running Unit Test

The following commands should run Unit Test:

```bash
yarn test => unit test only
yarn test:coverage => unit test coverage and create lcov report
yarn test:view => unit test coverage and view lcov report
```


