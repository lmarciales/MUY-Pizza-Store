# MUY Pizza Stores

## Description

MUY Pizza Stores is an application where each user can log in into their account, and see all the stores available in the system. Also, there is a search field where you can search for your favorite store! And if you want to get more information about a store, you can get the detail just selecting the store. Some of the features built in this project are the following:

### Security

+ There's a simple security system, using guards for the access permission. This means, if you're a guest user, you can only access to the login page. Once you're authenticated, you will be able to access to the home page. If you are authenticated, you can't see the login page until you log out.
+ The login page have also a basic fields validations. So, if you're trying to log in, you will be noticed if something gets wrong.

### Store List

+ The home page comes with the list of the stores available. This data is from an external API given by MUY.
+ Since the data doesn't have the image assets, the images showed are from the test zip, maped random into the store data.
+ There's also a filter field, where the stores can be filtered by the name.

### Store Detail

+ Selecting any store from the store list, a modal will pop up to show extra info for this store.
+ This data also comes from the API.

## Use

The application starts showing the login page. This is actually the only page you can access if it's the first time entering in the site. You should be able to access to the original API if you want to know what are the user data available. Here, you can try the data you want, but only the correct data from API will grant you access to the store. Don't worry, if you're doing something wrong, there's also some basic validations that will notify you.

Once you're logged in, you will be redirected to the home page. This one will show all the Pizza Stores available. There's not much to say. Go play with the filter and find the store you want. If you select any, you will see a modal with the detail of this store. 

At the end, you can see some images. They are the social network links from our sponsors! (MUY Jeje!).

And once you're ready to logout, there's always an option on top of the page.

## Technical Specifications

+ Programming language: JavaScript (Using TypeScript).
+ Framework: Vue.js.
+ Vue tools: Vue Devtools.
+ Vue CLI: @vue/cli 4.4.1.
+ Preset: Babel + TypeScript + Router + Vuex + CSS Pre-processors + Linter + Unit Testing.
+ CSS Pre-processors: Sass (SCSS).
+ Linter: ESLint + Prettier.
+ Unit Testing: Jest.
+ IDE: WebStorm (JetBrains).
+ Version control: Git – GitHub.
+ Git Client: GitKraken.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## More about the project development

### Gitflow

The control version of this project was based in a Gitflow base, where the following branches were created:

+ master: main branch, and the only one where the code is deployed to the hosting.
+ develop: main development branch.
  + feature/{feature-name}: specific branch for a feature to implement.

Also, each integration was done using Pull Request to the "parent" branch.

### Development

The development of this project was done in Vue.js, as a challenge to improve my knowledge using it. 

As a personal way to do my development, I like first to configure all the environment that will be needed. So, first of all, I used to configure the code editor configuration that will improve the code quality and the team work when that applies. Saying so, the linters and formatters are really important for me. Vue helped here so much, since the preset came with the ESLint and Prettier configuration, I just added some prettier rules. Another thing that went really nice, is the lint on commit option. This way I didn't have to configure libraries like Husky to implements the hooks.

Talking about the final product, there was a development proposal for the responsive experience, since there wasn't an UI for mobile devices. 

## License

MIT License

Copyright (c) 2020 Felipe Marciales

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
