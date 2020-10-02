# Portfolio Site

## Instructions

This application is live on [Netlify](https://c-m-portfolio.netlify.app/), but you can also download this repository and run the project locally by following these steps:

1. Fork this repository by clicking the button labelled 'Fork' on the [project page](https://github.com/chicorycolumn/Portfolio-v2).
   <br/>
   Copy the url of your forked copy of the repository, and run `git clone the_url_of_your_forked_copy` in a Terminal window on your computer, replacing the long underscored word with your url.
   <br/>
   If you are unsure, instructions on forking can be found [here](https://guides.github.com/activities/forking/) or [here](https://www.toolsqa.com/git/git-fork/), and cloning [here](https://www.wikihow.com/Clone-a-Repository-on-Github) or [here](https://www.howtogeek.com/451360/how-to-clone-a-github-repository/).

2. Open the project in a code editor, and run `npm install` to install necessary packages. You may also need to install [Node.js](https://nodejs.org/en/) by running `npm install node.js`.

3. Run these three commands:

- `npm run css-compile` to compile the Sass.
- `npm run w` to watch Sass for changes.
- `npm run s` to start the local server.
  <br/>
  It is most useful to open two Terminal tabs to run have the last two commands running simultaneously.
  <br/>
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was bootstrapped with [Bootstrap NPM Starter](https://github.com/twbs/bootstrap-npm-starter).
<br/>
&copy; @mdo 2020 and licensed MIT.

## Deploy

General instructions for taking a **Bootstrap project** and hosting it on **Netlify** for **automatic deployment** are as follows:

0. Ensure the project is initialised in a Git repository. If you are unsure what this means, instructions can be found [here](https://medium.com/@JinnaBalu/initialize-local-git-repository-push-to-the-remote-repository-787f83ff999) and [here](https://www.theserverside.com/video/How-to-create-a-local-repository-with-the-git-init-command).

1. Login to Netlify and click _New Site from Git_, then select _Github_ and then the project in question. Set the command as `npm run build`.

Now when you commit and push to Github, Netlify will deploy the latest version of the project automatically.

## Description

## Challenges

## What I learned

## Advanced usage

Take this starter repository to another level with some built-in addons that you can enable and customize.

- Single HTML page (`index.html`) to demonstrate how to include Bootstrap.
- Includes Bootstrap (currently using v4.5.0) source files via npm.
- npm scripts (see `package.json`) for compiling and autoprefixing Sass, watching for changes, and starting a basic local server.
- Example stylesheet (`scss/starter.scss`) highlighting two ways to include and customize Bootstrap.
- Example JavaScript file (`assets/js/starter.js`) showing how to import all of Bootstrap, or just the parts you need.

### Optimizing CSS

Before you start to use tools that remove Bootstrap styling like [PurgeCSS](#purgecss), you can make some broad optimizations by only including the stylesheets you think you'll need.

Look to the `scss/starter.scss` file for your two options of including all of Bootstrap, or a subset of our styles and components. By default we've only imported the stylesheets that Bootstrap requires plus those of the components we're planning to use.

Uncomment specific lines as needed, then recompile to use them.

### Optimizing JS

Similar to optimizing CSS, we publish individual scripts for each of our plugins. This allows you to import only what you need, versus the entire bundle and dependencies. For example, if you don't plan on using dropdowns, tooltips, or popovers, you can safely omit the Popper.js depdendency. Bootstrap 4 requires jQuery though, so you won't be able to safely remove that until v5 launches.

See the `js/starter.js` file for an example of how to import all of Bootstrap's JS or just the individual pieces. By default we've only imported our modal JavaScript since we have no need for anything else.

You can add more options here, or import the entire `bootstrap-bundle.min.js` file, to get all JavaScript plugins and Popper.js.

### PurgeCSS

[PurgeCSS](https://purgecss.com/) is a [PostCSS](https://postcss.org) plugin that removes unused CSS based on your site's HTML. It finds rulesets that are unused by your HTML and removes them, ensuring only what's needed is sent to your site's visitors while improving file size and performance.

We've included a single npm script that runs PurgeCSS against our single `index.html` file to remove unused styles from `assets/css/starter.css`.

To purge your CSS, run `npm run css-purge` from the command line. This executes the following:

```shell
npm purgecss --css assets/css/starter.css --content index.html --output assets/css/
```

PurgeCSS is a PostCSS plugin and [can be configured](https://purgecss.com/configuration.html) to your exact needs with a little extra effort, including additional [command line options](https://purgecss.com/CLI.html).

## Actions CI

We've included some simple GitHub Actions in this template repo. When you generate your new project from here, you'll have the same tests that run whenever a pull request is created. We've included Actions for the following:

- Stylelint for your CSS

When your repository is generated, you won't see anything in the Actions tab until you create a new pull request. You can customize these Actions, add new ones, or remove them outright if you wish.

[Learn more about GitHub Actions](https://github.com/features/actions), [read the Actions docs](https://help.github.com/en/actions), or [browse the Actions Marketplace](https://github.com/marketplace/actions).
