---
title: "Node package manager"
index: "000"
description: "test"
date: "2019-03-01"
image: ""
---

[![](npm-128x64.png)](https://www.npmjs.com/)

---

_npm (short for Node.js package manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc._

---

### Why do we need npm?

It's usual that a programming language comes with a accompanying framework. The framework is a collection of ready to use programs (functions, routines, components, modules...) that make our life as a programmer easier. Think of "don't reinvent the wheel". JavaScript is no exception and when we target a javaScript environment we can use a set of "in the box" functions that are standardized.
<info-banner text='javaScript environments that we target might not implement the complete standard. For example not all browsers support all of the standard javascript functions. But the power of javaScript is it extensibility. It is possible to provide missing functionality through a technique called polyfill. We will talk about this later in some more advanced topics.  '/>

The difference between javaScript environment and some other popular programming frameworks (.NET, Java...) is that the javaScript framework has only the most basic stuff included, there is no rich API framework to use.

#### The open source community and NPM comes to the rescue.

But fortunately there is a vast collection of open source (free) javaScript packages that we can use, and that are available through the [npm repository](https://www.npmjs.com/). In the npm repository you can find packages for simple everyday stuff (string manipulation, http communication library, image manipulation...) to the complete and very complex frameworks (vue, angular, react...)
Most of the packages are free to use and come with a open source license. Usually every package has a accompanying GitHub repository where everyone can contribute. Even you :)
To start building an application in javaScript today usually the first thing to decide is what packages will be downloaded into the project.

#### npm/yarn command line tool

To install/update packages in our project we can use the package manager tool. There are two tools in the use today npm & yarn. They both serve the same purpose but each has it's strengths and weaknesses. We will use yarn.

npm is installed when you install NodeJs on your machine

yarn you can install from here https://yarnpkg.com/en/

Most of the npm/yarn commands are very similar.

#### package.json

package.json is a special file in your javaScript project that contains a description of your project and list of other packages that your project depends on. when you add a package to your project via npm or yarn it will be added to the package.json as a dependency. This way you can always recreate all dependencies with a simple `yarn install` or `npm install` command.

package.json is also used to describe your own package if you want to publish it to the npm repository.

You can find more about package.json [here](https://docs.npmjs.com/creating-a-package-json-file)

#### node_modules

If you install one or more packages to your project they will be listed in the package.json file and the package will be downloaded to your local project folder inside `node_modules` folder. This is a standard convention that npm / yarn uses.

For example if you run in your console window

    yarn add polished

the package named "polished" will be downloaded from the npm repository into your local project/node_module folder. There you will find "polished" folder that contains the package. Every package is no more than a collection of javaScript (js) files and some other asset files. package usually contains a entry point file (index.js) and exports some reusable functions as a javaScript module.
