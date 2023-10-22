let portfolioCardData = [
  {
    hidden: true,
    projectName: "NC News",
    portfolioCardDesc: "A fullstack Reddit-style news aggregation board",
    tech: [
      "JavaScript",
      "React", // "Axios", "Express",
      "Knex",
      "MySQL",
      "PSQL",
      "Reach Router",
      "CSS Modules",
      "Chai",
      "Mocha",
    ],
    bgColor: "yellow",
    portfolioCardImage: "assets/images/screenshots/screen75-ncnews-1.jpg",
    hash: "#nc_news",
    images: [
      "screen75-ncnews-1.jpg",
      "screen75-ncnews-2.jpg",
      "phone75-ncnews-1.jpg",
      "phone75-ncnews-2.jpg",
    ],
    projectSquareTextProse_Language: "JavaScript",
    projectSquareTextProse_Backend: "MySQL, PSQL, Axios, Express, Knex",
    projectSquareTextProse_Frontend: "React, Reach Router, CSS Modules",
    projectSquareTextProse_Testing: "Chai, Mocha",
    sourceLinks: [
      {
        title: "Back end code",
        name: "Github",
        link: "https://github.com/chicorycolumn/be-nc-news",
      },
      {
        title: "Back end",
        name: "Heroku",
        link: "https://nc-news-c-matus.herokuapp.com/api/",
      },
      {
        title: "Front end code",
        name: "Github",
        link: "https://github.com/chicorycolumn/fe-nc-news",
      },
      {
        isMain: true,
        title: "Live site",
        name: "Netlify",
        link: "https://purpleprose.netlify.com/",
      },
    ],
  },
  {
    projectName: "Wormplay",
    portfolioCardDesc:
      "An online two-player game using webcam and facial recognition",
    tech: [
      "JavaScript",
      "React",
      "Socket.IO",
      "Axios",
      "Express",
      "CSS Modules",
      "TensorFlow",
      "Phaser",
    ],
    bgColor: "green",
    portfolioCardImage: "assets/images/screenshots/screen75-wormplay-1.jpg",
    hash: "#wormplay",
    images: ["screen75-wormplay-1.jpg", "screen75-wormplay-2.jpg"],
    projectSquareTextProse_Language: "JavaScript",
    projectSquareTextProse_Backend: "Axios, Express, Socket.IO",
    projectSquareTextProse_Frontend:
      "Socket.IO, Axios, Express, React, Phaser, TensorFlow, CSS Modules",
    sourceLinks: [
      {
        title: "Back end code",
        name: "Github",
        link: "https://github.com/nadiarashad/wormplay-BE",
      },
      // {
      //   title: "Back end",
      //   name: "Heroku",
      //   link: "https://wormplayserver.herokuapp.com/",
      // },
      {
        title: "Front end code",
        name: "Github",
        link: "https://github.com/chicorycolumn/wormplay-FE",
      },
      // {
      //   isMain: true,
      //   title: "Live site",
      //   name: "Netlify",
      //   link: "https://wormplay.netlify.app/",
      // },
    ],
  },
  {
    projectName: "Portfolio Site",
    portfolioCardDesc:
      "A responsive and lively portfolio website, made with Bootstrap",
    tech: ["JavaScript", "Bootstrap", "jQuery"],
    bgColor: "purple",
    portfolioCardImage: "assets/images/screenshots/screen75-portfolio-1.jpg",
    hash: "#portfolio_site",
    images: [
      "screen75-portfolio-1.jpg",
      "screen75-portfolio-2.jpg",
      "phone75-portfolio-1.jpg",
      "phone75-portfolio-2.jpg",
    ],
    projectSquareTextProse_Language: "JavaScript",
    projectSquareTextProse_Frontend: "Bootstrap, jQuery",
    sourceLinks: [
      {
        title: "Code",
        name: "Github",
        link: "https://github.com/chicorycolumn/Portfolio-v2",
      },
      {
        isMain: true,
        title: "Live site",
        name: "Netlify",
        link: "https://c-m-portfolio.netlify.app",
      },
    ],
  },
  {
    projectName: "SortCut",
    portfolioCardDesc:
      "A concise and feature-filled sorting tool with keyboard shortcuts",
    tech: ["JavaScript", "React", "CSS Modules"],
    bgColor: "cyan",
    portfolioCardImage: "assets/images/screenshots/phone75-sortcut-1.jpg",
    hash: "#sortcut",
    images: [
      "screen75-sortcut-1.jpg",
      "screen75-sortcut-2.jpg",
      "phone75-sortcut-1.jpg",
      "phone75-sortcut-2.jpg",
    ],
    projectSquareTextProse_Language: "JavaScript",
    projectSquareTextProse_Frontend: "CSS Modules, React",
    sourceLinks: [
      {
        title: "Code",
        name: "Github",
        link: "https://github.com/chicorycolumn/SortCut",
      },
      {
        isMain: true,
        title: "Live site",
        name: "Netlify",
        link: "https://sortcut.netlify.app/",
      },
    ],
  },
  {
    projectName: "Crossword Crocodile",
    portfolioCardDesc:
      "A Python-based crossword creator with high customisability",
    tech: ["Python", "Flask", "Gunicorn", "Angular", "TypeScript", "Socket.IO"],
    bgColor: "crimson",
    portfolioCardImage: "assets/images/screenshots/phone75-crosscroc-2.jpg",
    hash: "#crossword_crocodile",
    images: [
      "screen75-crosscroc-1.jpg",
      "screen75-crosscroc-2.jpg",
      "phone75-crosscroc-1.jpg",
      "phone75-crosscroc-2.jpg",
    ],
    projectSquareTextProse_Language: "Python, TypeScript",
    projectSquareTextProse_Backend: "Flask, Flask-SocketIO, Gunicorn, Eventlet",
    projectSquareTextProse_Frontend: "Angular, Socket.IO",
    sourceLinks: [
      {
        title: "Back end code",
        name: "Github",
        link: "https://github.com/chicorycolumn/Cook-Up-A-Crossword-BE",
      },
      {
        title: "Back end",
        name: "Heroku",
        link: "https://cook-up-a-crossword.herokuapp.com/",
      },
      {
        title: "Front end code",
        name: "Github",
        link: "https://github.com/chicorycolumn/Crossword-Crocodile-FE",
      },
      {
        isMain: true,
        title: "Live site",
        name: "Netlify",
        link: "https://crossword-crocodile.netlify.app/",
      },
    ],
  },
  {
    projectName: "Chattercat",
    portfolioCardDesc:
      "An elegant private chatroom website as a base for online games",
    tech: ["Express", "React", "JavaScript", "Socket.IO", "Reach Router"],
    bgColor: "white",
    portfolioCardImage: "assets/images/screenshots/phone75-chattercat-1.jpg",
    hash: "#chattercat",
    images: [
      "screen75-chattercat-1.jpg",
      "screen75-chattercat-2.jpg",
      "phone75-chattercat-1.jpg",
      "phone75-chattercat-2.jpg",
    ],
    projectSquareTextProse_Language: "JavaScript",
    projectSquareTextProse_Backend: "Express, Socket.IO",
    projectSquareTextProse_Frontend: "React, Reach Router, Socket.IO",
    sourceLinks: [
      {
        title: "Back end code",
        name: "Github",
        link: "https://github.com/chicorycolumn/Chattercat-backend",
      },
      {
        title: "Back end",
        name: "Heroku",
        link: "https://chattercat-server.herokuapp.com/",
      },
      {
        title: "Front end code",
        name: "Github",
        link: "https://github.com/chicorycolumn/Chattercat-frontend",
      },
      {
        isMain: true,
        title: "Live site",
        name: "Netlify",
        link: "https://chattercat.netlify.app/",
      },
    ],
  },
  {
    hidden: true,
    projectName: "Fruit Makhzan",
    portfolioCardDesc:
      "A fruit-selling database game, built in PHP with graphical displays",
    tech: ["PHP", "Apache", "MySQL", "ClearDB", "jQuery"],
    bgColor: "orange",
    portfolioCardImage: "assets/images/screenshots/screen75-makhzan-1.jpg",
    hash: "#fruit_makhzan",
    images: ["screen75-makhzan-1.jpg", "screen75-makhzan-2.jpg"],
    projectSquareTextProse_Language: "PHP",
    projectSquareTextProse_Backend: "Apache, MySQL, ClearDB",
    projectSquareTextProse_Frontend: "jQuery",
    sourceLinks: [
      {
        title: "Code",
        name: "Github",
        link: "https://github.com/chicorycolumn/Fruit-Makhzan",
      },
      {
        isMain: true,
        title: "Live site",
        name: "Heroku",
        link: "http://fruit-makhzan.herokuapp.com/",
      },
    ],
  },
];

let techIcons = {
  ClearDB: {
    title: "ClearDB",
    src: "../assets/images/logo-cleardb.png",
  },
  Gunicorn: {
    title: "Gunicorn",
    src: "../assets/images/logo-gunicorn.png",
  },
  Lodash: {
    title: "Lodash",
    src: "../assets/images/logo-lodash.png",
  },
  TensorFlow: {
    title: "TensorFlow",
    src: "../assets/images/logo-tensorflow.png",
  },
  "Reach Router": {
    title: "Reach Router",
    src: "../assets/images/logo-reachrouter.png",
  },
  PSQL: {
    title: "PSQL",
    src: "../assets/images/logo-psql.png",
  },
  Apache: {
    title: "Apache",
    src: "../assets/images/logo-apache.png",
  },
  jQuery: {
    title: "jQuery",
    src: "../assets/images/logo-jquery.png",
  },
  "Node.js": {
    title: "Node.js",
    src: "../assets/images/logo-nodejs.png",
  },
  TypeScript: {
    title: "TypeScript",
    src: "../assets/images/logo-typescript.png",
  },
  Chai: {
    title: "Chai",
    src: "../assets/images/logo-chai.png",
  },
  Mocha: {
    title: "Mocha",
    src: "../assets/images/logo-mocha.png",
  },
  Axios: {
    title: "Axios",
    src: "../assets/images/logo-axios.png",
  },
  Knex: {
    title: "Knex",
    src: "../assets/images/logo-knex.png",
  },
  "CSS Modules": {
    title: "CSS Modules",
    src: "../assets/images/logo-cssmodules.png",
  },
  JavaScript: {
    title: "JavaScript",
    src: "../assets/images/logo-js.png",
  },
  React: {
    title: "React",
    src: "../assets/images/logo-react.png",
  },
  Phaser: {
    title: "Phaser",
    src: "../assets/images/logo-phaser.png",
  },
  "Socket.IO": {
    title: "Socket.IO",
    src: "../assets/images/logo-socket.png",
  },
  Express: {
    title: "Express",
    src: "../assets/images/logo-express.png",
  },
  MySQL: {
    title: "MySQL",
    src: "../assets/images/logo-mysql.png",
  },
  PHP: {
    title: "PHP",
    src: "../assets/images/logo-php.png",
  },
  Python: {
    title: "Python",
    src: "../assets/images/logo-python.png",
  },
  Bootstrap: {
    title: "Bootstrap",
    src: "../assets/images/logo-bootstrap.png",
  },
  Angular: {
    title: "Angular",
    src: "../assets/images/logo-angular.png",
  },
  Flask: {
    title: "Flask",
    src: "../assets/images/logo-flask.png",
  },
  Netlify: {
    title: "Netlify",
    src: "../assets/images/logo-netlify.png",
  },
  Heroku: {
    title: "Heroku",
    src: "../assets/images/logo-heroku.png",
  },
  Github: {
    title: "Github",
    src: "../assets/images/logo-github.png",
  },
};

function isTouchscreen() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

function setMinipicAndModal(i, card, imagePath) {
  if (i) {
    $("#projectSquareMinipic0")
      .clone()
      .attr("id", "projectSquareMinipic" + i)
      .attr("data-target", "#modal" + i)
      .appendTo(".projectSquareMinipicHolder");
    $("#modal0")
      .clone()
      .attr("id", "modal" + i)
      .appendTo(".projectSquareRight2");
  }

  $("#projectSquareMinipic" + i).attr("src", imagePath + card.images[i]);
  $("#modal" + i)
    .find("img")
    .attr("src", imagePath + card.images[i]);
}

function makeSourceLinkSet(i, card) {
  if (i) {
    $("#sourceLinkSubholder0")
      .clone()
      .attr("id", "sourceLinkSubholder" + i)
      .appendTo(".sourceLinkHolder");
  }

  $("#sourceLinkSubholder" + i).attr("title", card.sourceLinks[i].name);
  $("#sourceLinkSubholder" + i).attr("href", card.sourceLinks[i].link);
  $("#sourceLinkSubholder" + i)
    .find(".sourceLinkText")
    .text(card.sourceLinks[i].title);
  $("#sourceLinkSubholder" + i)
    .find(".sourceLinkIcon")
    .attr("src", techIcons[card.sourceLinks[i].name].src);
}

function loadingAnimation(switchOn) {
  let bodyOverlay = $(".bodyOverlay");

  if (switchOn) {
    bodyOverlay
      .css({
        height: $("body").css("height"),
      })
      .removeClass("d-none");

    setTimeout(() => {
      bodyOverlay.removeClass("o-0");
    }, 10);
  } else {
    bodyOverlay.addClass("o-0");

    setTimeout(() => {
      bodyOverlay.addClass("d-none");
    }, 250);
  }
}

function showAndScrollTo(incomingSelector) {
  loadingAnimation(false);
  $(".portfolioHolder").css({
    height: "fit-content",
  });

  $("#portfolioSection").removeClass("o-0");
  $("#portfolioSection")[0].scrollIntoView({ behavior: "smooth" });
  $('[data-toggle="tooltip"]').tooltip();
}

function fadeAndShow(
  hash,
  incomingSelector,
  outgoingSelector,
  incomingPath,
  projectPath
) {
  if (!incomingPath) {
    incomingPath = "/content/projectTemplate.html";
  }

  let imagePath = "/assets/images/screenshots/";

  loadingAnimation(true);
  $("#portfolioSection").addClass("o-0");

  setTimeout(() => {
    $(".portfolioHolder").css({
      height: $(".portfolioHolder").css("height"),
    });
    $(outgoingSelector).remove();
    $("#portfolioSection").removeClass("flex-column-reverse");
    $(".portfolioHeader").removeClass("noHeight");

    $(".portfolioHolder").load(incomingPath, function () {
      if (projectPath) {
        let card = portfolioCardData.filter(
          (card) => card.hash === "#" + hash
        )[0];

        for (let i = 0; i < card.images.length; i++) {
          setMinipicAndModal(i, card, imagePath);
        }

        $(".projectTitle").find("h1").text(card.projectName);

        let mainLinkData = card.sourceLinks.find((linkSet) => linkSet.isMain);
        if (mainLinkData) {
          $(".projectTitle").attr("href", mainLinkData.link);
        } else {
          $(".projectTitle").removeAttr("href");
        }

        for (let i = 0; i < card.sourceLinks.length; i++) {
          makeSourceLinkSet(i, card);
        }

        ["Language", "Frontend", "Backend", "Testing"].forEach((label) => {
          let fullLabel = "projectSquareTextProse_" + label;
          if (card[fullLabel]) {
            $("." + fullLabel).text(card[fullLabel]);
          } else {
            $("." + fullLabel)
              .parent()
              .remove();
          }
        });

        $(".projectSquareLeftText").load(projectPath, function () {
          $(".portfolioHeader").removeClass("visibility-h");
          showAndScrollTo(incomingSelector);
        });
      } else {
        $("#portfolioSection").addClass("flex-column-reverse");
        $(".portfolioHeader").addClass("visibility-h noHeight");
        showAndScrollTo(incomingSelector);
      }
    });
  }, 250);
}

function fadeAndShowHome(hash) {
  loadingAnimation(true);

  $(".portfolioPageHolder").remove();
  $(".portfolioHeader").addClass("visibility-h noHeight p-0");
  $("#portfolioSection").addClass("flex-column-reverse o-0");
  $(".portfolioHolder").load("/content/portfolioCardHolder.html", function () {
    setTimeout(() => {
      loadingAnimation(false);
      $("#portfolioSection").removeClass("o-0");
    }, 250);
  });
}

$(function () {
  $("#portfolioSection").load("content/portfolioGrid.html");
  $("#aboutMeSection").load("content/aboutMe.html");
  $("#navbarSection").load("content/navbar.html");
});
