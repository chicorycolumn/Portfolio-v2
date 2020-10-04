# Portfolio Site

## Description

A personal portfolio website built with Bootstrap.

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

## Built with

- [JavaScript](https://www.javascript.com/) - The primary coding language
- [VisualStudioCode](https://code.visualstudio.com/) - The code editor

- [Netlify](https://www.netlify.com/) - The hosting service

- [Bootstrap](https://getbootstrap.com/) - The CSS library and framework
- [jQuery](https://jquery.com/) - The JavaScript library used for design and display
