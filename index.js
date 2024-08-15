//Start Attaching Api and Images on "Our Gallery" Page You Will Find The End -> 180 on *VSCODE*
let arrOfAllInOurGallerySec = [];
let arrOfEventsInOurGallerySec = [];
let arrOfSessionsInOurGallerySec = [];
function apiOurGallery() {
  let myImageo = document.querySelectorAll(".image");
  //Attaching Api for Images on Gallery on *All* Page
  const endpointAll = "http://24.199.127.212:3000/galleryClient/get";
  const imagesPerPageAll = 10;
  let currentPage = 1;
  let images = [];

  const imageGridAll = document.getElementById("imageGridAll");
  const nextBtnAll = document.getElementById("nextAll");
  const preBtnAll = document.getElementById("previousAll");

  async function fetchImagesAll() {
    try {
      const response = await fetch(`${endpointAll}?page=${currentPage}`);
      const data = await response.json();
      arrOfImgs = data["results"].map((obj) => obj.image);
      images = arrOfImgs;

      renderImagesAll();
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  function renderImagesAll() {
    imageGridAll.innerHTML = "";

    const startIndex = (currentPage - 1) * imagesPerPageAll;
    const endIndex = startIndex + imagesPerPageAll;
    if (currentPage === 1) {
      preBtnAll.style.display = "none";
    }
    for (let i = startIndex; i < endIndex && i < images.length; i++) {
      const myLink = document.createElement("a");
      const img = document.createElement("img");
      img.src = images[i];
      let containerImg = document.createElement("div");
      containerImg.classList.add(`image`, `item${i + 1}`);
      myLink.appendChild(img);
      containerImg.appendChild(myLink);
      imageGridAll.appendChild(containerImg);
      if (images.length < 10) {
        nextBtnAll.style.display = "none";
      }
    }
    arrOfAllInOurGallerySec.push(...imageGridAll.children);
  }

  nextBtnAll.addEventListener("click", () => {
    currentPage++;
    renderImagesAll();
  });
  preBtnAll.addEventListener("click", () => {
    currentPage--;
    renderImagesAll();
  });

  fetchImagesAll();
  //Attaching Api for Images on Gallery on *Events* Page
  const endpointEvents = "http://24.199.127.212:3000/galleryClient/getEvents";
  const imagesPerPageEvents = 10;
  let currentPageEvents = 1;
  let imagesEvents = [];

  const imageGridEvents = document.getElementById("imageGridEvents");
  const nextBtnEvents = document.getElementById("nextEvents");
  const preBtnEvents = document.getElementById("previousEvents");

  async function fetchImagesEvents() {
    try {
      const response = await fetch(
        `${endpointEvents}?page=${currentPageEvents}`
      );
      const data = await response.json();
      arrOfImgs = data["results"].map((obj) => obj.image);
      imagesEvents = arrOfImgs;

      renderImagesEvents();
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  function renderImagesEvents() {
    imageGridEvents.innerHTML = "";

    const startIndex = (currentPageEvents - 1) * imagesPerPageEvents;
    const endIndex = startIndex + imagesPerPageEvents;
    if (currentPageEvents === 1) {
      preBtnEvents.style.display = "none";
    }
    for (let i = startIndex; i < endIndex && i < imagesEvents.length; i++) {
      const img = document.createElement("img");
      img.src = imagesEvents[i];
      let containerImg = document.createElement("div");
      containerImg.classList.add(`image`, `item${i + 1}`);
      containerImg.appendChild(img);
      imageGridEvents.appendChild(containerImg);
      if (imagesEvents.length < 10) {
        nextBtnEvents.style.display = "none";
      }
    }
    arrOfEventsInOurGallerySec.push(...imageGridEvents.children);
  }

  nextBtnEvents.addEventListener("click", () => {
    currentPageEvents++;
    renderImagesEvents();
  });
  preBtnEvents.addEventListener("click", () => {
    currentPageEvents--;
    renderImagesEvents();
  });

  fetchImagesEvents();

  //Attaching Api for Images on Gallery on *Sessions* Page
  const endpointSessions =
    "http://24.199.127.212:3000/galleryClient/getSessions";
  const imagesPerPageSessions = 10;
  let currentPageSessions = 1;
  let imagesSessions = [];

  const imageGridSessions = document.getElementById("imageGridSessions");
  const nextBtnSessions = document.getElementById("nextSessions");
  const preBtnSessions = document.getElementById("previousSessions");

  async function fetchImagesSessions() {
    try {
      const response = await fetch(
        `${endpointSessions}?page=${currentPageSessions}`
      );
      const data = await response.json();
      arrOfImgs = data["results"].map((obj) => obj.image);
      imagesSessions = arrOfImgs;

      renderImagesSessions();
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  function renderImagesSessions() {
    imageGridSessions.innerHTML = "";

    const startIndex = (currentPageSessions - 1) * imagesPerPageSessions;
    const endIndex = startIndex + imagesPerPageSessions;
    if (currentPageSessions === 1) {
      preBtnSessions.style.display = "none";
    }
    for (let i = startIndex; i < endIndex && i < imagesSessions.length; i++) {
      const img = document.createElement("img");
      img.src = imagesSessions[i];
      let containerImg = document.createElement("div");
      containerImg.classList.add(`item${i + 1}`, `image`);
      containerImg.appendChild(img);
      imageGridSessions.appendChild(containerImg);
      if (imagesSessions.length < 10) {
        nextBtnSessions.style.display = "none";
      }
    }
    arrOfSessionsInOurGallerySec.push(...imageGridSessions.children);
  }

  nextBtnSessions.addEventListener("click", () => {
    currentPageSessions++;
    renderImagesSessions();
  });
  preBtnSessions.addEventListener("click", () => {
    currentPageSessions--;
    renderImagesSessions();
  });

  fetchImagesSessions();
}
//End Attaching Api and Images on "Our Gallery" Page
apiOurGallery();

let devTitles = document.querySelectorAll(".infoTitle");
var comPara = document.querySelector(".ourCommitteesDescription");
let tracks = document.querySelectorAll(".track");
let services = document.querySelectorAll(".services");
let descriptions = document.querySelectorAll(".dev-describtion");
let nonTechIcon = document.querySelectorAll(".non-tech-icon");
let nonTechTitle = document.querySelectorAll(".non-tech-title");
let navItems = document.querySelectorAll(".nav-item");
let imagesGallery = document.querySelectorAll(".imagesGallery");
let dropdownItem = document.querySelectorAll(".dropdown-item");
let mains = document.querySelectorAll("main");
let imagesContainer = document.querySelector(".imagesContainer");
let myImage = document.querySelectorAll(".image");
let containerOfGroups = document.querySelectorAll(".container-groups");
checkNetworkSpeed();
//Here are three functionsto show images in gallery
//first function All - to get all images
function getAll() {
  //   imagesContainer.style.cssText = `transform: translateX(0px) !important;`;
  //   imagesContainer.children[0].style.display = "block";
  //   imagesContainer.children[2].style.cssText = `transform: skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
  //   imagesContainer.children[1].style.cssText = `transform: skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
  //   // setTimeout(()=>{
  //   // imagesContainer.children[2].style.display="none";
  //   setTimeout(() => {
  //     imagesContainer.children[0].style.cssText = `transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%;`;
  //   }, 300);
  //   // },100)
  imagesContainer.children[2].style.cssText = `filter: grayscale(1);opacity: 0%;`;
  imagesContainer.children[1].style.cssText = `filter: grayscale(1);opacity: 0%;`;
  // imagesContainer.children[2].style.cssText = `transform:skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
  // imagesContainer.children[1].style.cssText = `transform:skew(-20deg, -20deg);filter: grayscale(1);opacity: 0%;`;
  imagesContainer.style.cssText = `transform: translateX(0px) !important;`;
  // imagesContainer.children[2].style.cssText=`display:block !important`
  imagesContainer.style.cssText = `width:600%`;
  imagesContainer.children[0].style.display = "block";
  setTimeout(() => {
    imagesContainer.style.cssText = `width:300%`;
    imagesContainer.children[1].style.display = "none";
    imagesContainer.children[2].style.display = "none";
    setTimeout(() => {
      imagesContainer.children[0].style.cssText = `transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%; display:block;`;
    }, 200);
  }, 700);
  // fetchImagesAll();
  // renderImagesAll();
}
//first function All - to get Events images
function getEvents() {
  imagesContainer.children[2].style.cssText = `filter: grayscale(1);opacity: 0%;transition:0.7s `;
  imagesContainer.children[0].style.cssText = `filter: grayscale(1);opacity: 0%;`;
  // imagesContainer.children[2].style.cssText = `transform:skew(-20deg, -20deg);filter: grayscale(1);opacity: 0%;transition:0.7s `;
  // imagesContainer.children[0].style.cssText = `transform:skew(-10deg, -10deg);filter: grayscale(1);opacity: 0%;`;
  imagesContainer.style.cssText = `transform: translateX(0px) !important;`;
  // imagesContainer.children[2].style.cssText=`display:block !important`
  imagesContainer.style.cssText = `width:600%`;
  imagesContainer.children[1].style.display = "block";
  setTimeout(() => {
    imagesContainer.children[2].style.display = "none";
    imagesContainer.children[0].style.display = "none";
    imagesContainer.style.cssText = `width:300%`;
    setTimeout(() => {
      imagesContainer.children[1].style.cssText = `transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%; display:block;`;
    }, 200);
  }, 700);
  // fetchImagesEvents();
  // renderImagesEvents();
}
//first function All - to get Sessions images
function getSessions() {
  // setTimeout(()=>{

  imagesContainer.children[1].style.cssText = `filter: grayscale(1);opacity: 0%;`;
  imagesContainer.children[0].style.cssText = `filter: grayscale(1);opacity: 0%;`;
  // imagesContainer.children[1].style.cssText = `transform:skew(-20deg, -20deg);filter: grayscale(1);opacity: 0%;`;
  // imagesContainer.children[0].style.cssText = `transform:skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
  // },100)
  imagesContainer.style.cssText = `transform: translateX(0px) !important;`;
  // imagesContainer.children[2].style.cssText=`display:block !important`
  imagesContainer.style.cssText = `width:600%`;
  imagesContainer.children[2].style.display = "block";
  setTimeout(() => {
    imagesContainer.children[1].style.display = "none";
    imagesContainer.children[0].style.display = "none";
    imagesContainer.style.cssText = `width:300%`;
    setTimeout(() => {
      imagesContainer.children[2].style.cssText = `transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%; display:block;`;
    }, 200);
  }, 700);
  // fetchImagesSessions();
  // renderImagesSessions();
}
// nav bar SPA
navItems.forEach((item) => {
  item.onclick = function () {
    navItems.forEach((i) => {
      i.classList.remove("active");
    });
    if (!item.classList.contains("dropdown")) {
      dropdownItem.forEach((i) => {
        i.classList.remove("active");
      });
    }

    item.classList.add("active");
    if (item == navItems[0]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[0].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[0].style.opacity = "1";
        setTimeout(() => {
          AnimationHome();
        }, 100);
        setTimeout(() => {
          document.querySelectorAll(
            ".main-effect"
          )[0].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
        }, 100);
        setTimeout(function adding() {
          document.querySelectorAll(".ourCommitteesDescription")[0] === null ||
          document.querySelectorAll(".ourCommitteesDescription")[0] === void 0
            ? void 0
            : document
                .querySelectorAll(".ourCommitteesDescription")[0]
                .classList.add("show1");
        }, 2000);
      }, 900);
    } else if (item == navItems[1]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        checkNetworkSpeed();
      }, 750);
      setTimeout(() => {
        mains[1].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[1].style.opacity = "1";
        console.log("ou-committes Section has been Appeared");
        setTimeout(() => {
          document.querySelectorAll(
            ".main-effect"
          )[1].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
        }, 100);
        setTimeout(function adding() {
          document.querySelectorAll(".ourCommitteesDescription")[1] === null ||
          document.querySelectorAll(".ourCommitteesDescription")[1] === void 0
            ? void 0
            : document
                .querySelectorAll(".ourCommitteesDescription")[1]
                .classList.add("show1");
        }, 2000);
        imagesGallery.forEach((item) => {
          item.onclick = function () {
            imagesGallery.forEach((i) => {
              i.classList.remove("activate");
            });
            if (item == imagesGallery[0]) {
              getAll();
            } else if (item == imagesGallery[1]) {
              getEvents();
            } else {
              getSessions();
            }
            item.classList.add("activate");
          };
        });
      }, 900);
    } else if (item == navItems[2]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[2].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[2].style.opacity = "1";
      }, 900);
    } else if (item == navItems[4]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[6].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[6].style.opacity = "1";
      }, 900);
      setTimeout(() => {
        AnimationContact();
      });
    }
    // to be continue
  };
});
// background-color: var(--purple-accent); */
// /* color: var(--main-bg-nav-color) !important;
dropdownItem.forEach((item) => {
  item.onclick = () => {
    dropdownItem.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
    if (item == dropdownItem[0]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[3].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[3].style.opacity = "1";
        console.log("Information Section has been Appeared");
        AnimationInfo();
      }, 900);
    } else if (item == dropdownItem[1]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[4].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[4].style.opacity = "1";
        console.log("Information Section has been Appeared");
      }, 900);
      setTimeout(() => {
        AnimationOurTeam();
      }, 1000);
    } else if (item == dropdownItem[2]) {
      mains.forEach((m) => {
        m.style.opacity = 0;
        setTimeout(function () {
          m.style.display = "none";
        }, 700);
      });
      setTimeout(() => {
        mains[5].style.display = "block";
      }, 800);
      setTimeout(() => {
        mains[5].style.opacity = "1";
      }, 900);
      setTimeout(() => {
        AnimationBlog();
      }, 1000);
    }
  };
});

//Start Animation in Home Page
function ScrollingAnimationHome() {
  let mytotalHeight = (window.innerHeight / 5) * 4;
  for (let i = 2; i < 7; i++) {
    var stElement = document.querySelectorAll("#bestStudent")[i];
    var mystElementTop = stElement.getBoundingClientRect().top;
    if (mystElementTop < mytotalHeight) {
      document.querySelectorAll("#bestStudent")[i].style.cssText +=
        "animation: showing-text 1s, cursor 0.4s step-end alternate,showTitleMsp 0.2s forwards;";
    } else {
      document.querySelectorAll("#bestStudent")[i].style.cssText +=
        "animation: none;";
    }
  }
  const ndElement = document.querySelectorAll(".desBestStudent");
  const features = document.querySelectorAll(".features");
  const featuresImage = document.querySelector(".features-image");
  const featuresImageTop = featuresImage.getBoundingClientRect().top;
  const QuestionsAsked = document.querySelector(".Questions-Asked");
  const QuestionsAskedTop = QuestionsAsked.getBoundingClientRect().top;
  // const myNdElementTop = ndElement.getBoundingClientRect().top;
  const rdElement = document.querySelectorAll(".sections");
  const thElement = document.querySelectorAll(".btn-sections");
  const participants = document.querySelectorAll(".participant");
  const sponserCards = document.querySelectorAll(".sponsor-card");
  const formQuestions = document.querySelector(".container-form");
  const formQuestionsTop = formQuestions.getBoundingClientRect().top;
  const linesHome = document.querySelectorAll(".line-over-mobile");
  // End Constants
  if (QuestionsAskedTop < mytotalHeight) {
    [...QuestionsAsked.children].forEach((e) => {
      e.style.cssText += `animation:question-asked-${[
        ...QuestionsAsked.children,
      ].indexOf(e)} 2s forwards;`;
    });
  } else {
    [...QuestionsAsked.children].forEach((e) => {
      e.style.cssText += `animation:none;`;
    });
  }
  if (featuresImageTop < mytotalHeight) {
    featuresImage.style.cssText += "animation: showTitleMsp 3s forwards;";
  } else {
    featuresImage.style.cssText += "animation:auto";
  }
  if (formQuestionsTop < mytotalHeight) {
    formQuestions.style.cssText += "animation: showTitleMsp 2s forwards;";
  } else {
    formQuestions.style.cssText += "animation:auto";
  }
  ndElement.forEach((e) => {
    var eTop = e.getBoundingClientRect().top;
    if (eTop < mytotalHeight) {
      e.style.cssText += "animation: showTitleMsp 1s forwards;";
    } else {
      e.style.cssText += "animation:auto";
    }
  });
  features.forEach((e) => {
    var eTop = e.getBoundingClientRect().top;
    if (eTop < mytotalHeight) {
      e.style.cssText += "animation: showTitleMsp 1s forwards;";
    } else {
      e.style.cssText += "animation:auto";
    }
  });
  participants.forEach((e) => {
    var eTop = e.getBoundingClientRect().top;
    if (eTop < mytotalHeight) {
      e.style.cssText += "animation: showTitleMsp 1s forwards;";
    } else {
      e.style.cssText += "animation:auto";
    }
  });
  sponserCards.forEach((e) => {
    var eTop = e.getBoundingClientRect().top;
    if (eTop < mytotalHeight) {
      e.style.cssText += "animation: showTitleMsp 1s forwards;";
    } else {
      e.style.cssText += "animation:auto";
    }
  });
  rdElement.forEach((e) => {
    //here rdElement is the cards in ourCommittees section and e represents each card in this section
    var eTop = e.getBoundingClientRect().top;
    if (eTop < mytotalHeight) {
      e.style.cssText += "animation: showTitleMsp 1s forwards;";
    } else {
      e.style.cssText += "animation:auto";
    }
  });
  thElement.forEach((e) => {
    //here rdElement is the buttons in every section and e represents each button in each section
    var eTop = e.getBoundingClientRect().top;
    if (eTop < mytotalHeight) {
      e.style.cssText += "animation: showTitleMsp 1s forwards;";
    } else {
      e.style.cssText += "animation:auto;";
    }
  });
  if (window.innerWidth <= 768) {
    linesHome.forEach((e) => {
      //here rdElement is the buttons in every section and e represents each button in each section
      var eTop = e.getBoundingClientRect().top;
      if (eTop < mytotalHeight) {
        e.style.cssText +=
          "animation: line-through-mobile 2s forwards !important;";
      } else {
        e.style.cssText += "animation:none !important;";
      }
    });
  }
}
function AnimationHome() {
  setTimeout(() => {
    document.querySelector("#titleMsp").style.cssText +=
      "animation: showTitleMsp 1s forwards;";
  }, 200);
  setTimeout(() => {
    document.querySelectorAll("#bestStudent")[0].style.cssText +=
      "animation: showing-text 1s, cursor 0.2s step-end alternate,showTitleMsp 0.2s forwards;";
  }, 1250);
  setTimeout(() => {
    document.querySelectorAll("#bestStudent")[1].style.cssText +=
      "animation: showing-text-reverse 1s, cursor 0.4s step-end alternate,showTitleMsp 0.2s forwards;";
  }, 2250);
  setTimeout(() => {
    document.querySelector(".description-msp").style.cssText +=
      "animation: showTitleMsp 1s forwards;";
  }, 3250);
  setTimeout(() => {
    document.querySelector(".slider-app").style.cssText +=
      "animation: showTitleMsp 1s forwards;";
  }, 4250);
  function nCount(selector) {
    const elements = document.querySelectorAll(selector);

    for (const element of elements) {
      const firstSpan = element.querySelector("span:first-child"); // Target the first span within each h3
      if (!firstSpan) {
        console.warn(
          `Skipping element at "${selector}" because it has no first-child span.`
        );
        continue;
      }

      const currentCount = parseInt(firstSpan.textContent, 10);
      const currentYear = new Date().getFullYear();
      const storedYear = localStorage.getItem("lastIncrementYear");

      if (storedYear !== currentYear) {
        const newCount = currentCount + 1;

        // Animate the counter using vanilla JavaScript
        firstSpan.textContent = currentCount; // Set initial value before animation

        let stepCount = 0;
        const animationInterval = setInterval(() => {
          stepCount++;
          const animatedValue = Math.ceil((stepCount / 40) * newCount); // Calculate smooth animation steps

          firstSpan.textContent = animatedValue;

          if (stepCount === 40) {
            // Duration = 40 steps * 100ms/step
            clearInterval(animationInterval);
          }
        }, 100);

        localStorage.setItem("lastIncrementYear", currentYear);
      }
    }
  }

  // document.addEventListener("DOMContentLoaded", () => {
  // nCount(".numbers h3");
  // });

  setTimeout(() => {
    document.querySelector(".dynamic-home").style.cssText +=
      "animation: showTitleMsp 1s forwards;";
    // document.addEventListener("DOMContentLoaded", () => {
    nCount(".numbers h3");
    // });
  }, 5250);
  // setTimeout(() => {
  // window.onscroll = () => {
  // start Constants to reveal while scrolling on page
  // let mytotalHeight = (window.innerHeight / 5) * 4;
  // for (let i = 2; i < 7; i++) {
  //   var stElement = document.querySelectorAll("#bestStudent")[i];
  //   var mystElementTop = stElement.getBoundingClientRect().top;
  //   if (mystElementTop < mytotalHeight) {
  //     document.querySelectorAll("#bestStudent")[i].style.cssText +=
  //       "animation: showing-text 1s, cursor 0.4s step-end alternate,showTitleMsp 0.2s forwards;";
  //   } else {
  //     document.querySelectorAll("#bestStudent")[i].style.cssText +=
  //       "animation: none;";
  //   }
  // }
  // const ndElement = document.querySelectorAll(".desBestStudent");
  // const features = document.querySelectorAll(".features");
  // const featuresImage = document.querySelector(".features-image");
  // const featuresImageTop = featuresImage.getBoundingClientRect().top;
  // const QuestionsAsked = document.querySelector(".Questions-Asked");
  // const QuestionsAskedTop = QuestionsAsked.getBoundingClientRect().top;
  // // const myNdElementTop = ndElement.getBoundingClientRect().top;
  // const rdElement = document.querySelectorAll(".sections");
  // const thElement = document.querySelectorAll(".btn-sections");
  // const participants = document.querySelectorAll(".participant");
  // const sponserCards = document.querySelectorAll(".sponsor-card");
  // const formQuestions = document.querySelector(".container-form");
  // const formQuestionsTop = formQuestions.getBoundingClientRect().top;
  // // End Constants
  // if (QuestionsAskedTop < mytotalHeight) {
  //   [...QuestionsAsked.children].forEach((e) => {
  //     e.style.cssText += `animation:question-asked-${[
  //       ...QuestionsAsked.children,
  //     ].indexOf(e)} 2s forwards;`;
  //   });
  // } else {
  //   [...QuestionsAsked.children].forEach((e) => {
  //     e.style.cssText += `animation:none;`;
  //   });
  // }
  // if (featuresImageTop < mytotalHeight) {
  //   featuresImage.style.cssText += "animation: showTitleMsp 3s forwards;";
  // } else {
  //   featuresImage.style.cssText += "animation:auto";
  // }
  // if (formQuestionsTop < mytotalHeight) {
  //   formQuestions.style.cssText += "animation: showTitleMsp 2s forwards;";
  // } else {
  //   formQuestions.style.cssText += "animation:auto";
  // }
  // ndElement.forEach((e) => {
  //   var eTop = e.getBoundingClientRect().top;
  //   if (eTop < mytotalHeight) {
  //     e.style.cssText += "animation: showTitleMsp 1s forwards;";
  //   } else {
  //     e.style.cssText += "animation:auto";
  //   }
  // });
  // features.forEach((e) => {
  //   var eTop = e.getBoundingClientRect().top;
  //   if (eTop < mytotalHeight) {
  //     e.style.cssText += "animation: showTitleMsp 1s forwards;";
  //   } else {
  //     e.style.cssText += "animation:auto";
  //   }
  // });
  // participants.forEach((e) => {
  //   var eTop = e.getBoundingClientRect().top;
  //   if (eTop < mytotalHeight) {
  //     e.style.cssText += "animation: showTitleMsp 1s forwards;";
  //   } else {
  //     e.style.cssText += "animation:auto";
  //   }
  // });
  // sponserCards.forEach((e) => {
  //   var eTop = e.getBoundingClientRect().top;
  //   if (eTop < mytotalHeight) {
  //     e.style.cssText += "animation: showTitleMsp 1s forwards;";
  //   } else {
  //     e.style.cssText += "animation:auto";
  //   }
  // });
  // rdElement.forEach((e) => {
  //   //here rdElement is the cards in ourCommittees section and e represents each card in this section
  //   var eTop = e.getBoundingClientRect().top;
  //   if (eTop < mytotalHeight) {
  //     e.style.cssText += "animation: showTitleMsp 1s forwards;";
  //   } else {
  //     e.style.cssText += "animation:auto";
  //   }
  // });
  // thElement.forEach((e) => {
  //   //here rdElement is the buttons in every section and e represents each button in each section
  //   var eTop = e.getBoundingClientRect().top;
  //   if (eTop < mytotalHeight) {
  //     e.style.cssText += "animation: showTitleMsp 1s forwards;";
  //   } else {
  //     e.style.cssText += "animation:auto;";
  //   }
  // });
  // };
  // });
}
//End Animation in Home Page

//Start Animation in Information About Us Page
function ScrollingAnimationInfo() {
  let totalHeight = (window.innerHeight / 5) * 4;

  const titleInfo = document.querySelectorAll("#bestStudent")[7];
  const titleInfoTop = titleInfo.getBoundingClientRect().top;
  const desInfo = document.querySelectorAll(".des-info-bestStudent")[0];
  const desInfoTop = desInfo.getBoundingClientRect().top;
  const yearTimelineWord = document.querySelectorAll(".des-year-timline");
  const desYearTimline0 = document.querySelectorAll(".year-timeline")[0];
  const desYearTimline1 = document.querySelectorAll(".year-timeline")[1];
  const desYearTimline2 = document.querySelectorAll(".year-timeline")[2];
  const desYearTimline3 = document.querySelectorAll(".year-timeline")[3];
  const desYearTimline4 = document.querySelectorAll(".year-timeline")[4];
  const desYearTimline5 = document.querySelectorAll(".year-timeline")[5];
  const desYearTimline6 = document.querySelectorAll(".year-timeline")[6];
  const desYearTimline7 = document.querySelectorAll(".year-timeline")[7];
  const desYearTimline8 = document.querySelectorAll(".year-timeline")[8];
  const desYearTimline9 = document.querySelectorAll(".year-timeline")[9];
  const desYearTimline10 = document.querySelectorAll(".year-timeline")[10];
  const desYearTimline0Top = desYearTimline0.getBoundingClientRect().top;
  const desYearTimline1Top = desYearTimline1.getBoundingClientRect().top;
  const desYearTimline2Top = desYearTimline2.getBoundingClientRect().top;
  const desYearTimline3Top = desYearTimline3.getBoundingClientRect().top;
  const desYearTimline4Top = desYearTimline4.getBoundingClientRect().top;
  const desYearTimline5Top = desYearTimline5.getBoundingClientRect().top;
  const desYearTimline6Top = desYearTimline6.getBoundingClientRect().top;
  const desYearTimline7Top = desYearTimline7.getBoundingClientRect().top;
  const desYearTimline8Top = desYearTimline8.getBoundingClientRect().top;
  const desYearTimline9Top = desYearTimline9.getBoundingClientRect().top;
  const desYearTimline10Top = desYearTimline10.getBoundingClientRect().top;
  if (titleInfoTop < totalHeight) {
    titleInfo.style.cssText +=
      "animation: showing-text 1s, cursor 0.4s step-end alternate,showTitleMsp 0.2s forwards;";
  } else {
    titleInfo.style.cssText += "animation: none;";
  }
  if (desInfoTop < totalHeight) {
    desInfo.style.cssText += "animation: showTitleMsp 1s forwards;";
  } else {
    desInfo.style.cssText += "animation: none;";
  }
  if (desYearTimline0Top < totalHeight) {
    setTimeout(() => {
      desYearTimline0.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document.querySelector("#line-info").classList.add("timeline-continue-4");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[1]
        .classList.add("timeline-names-show");
      document
        .querySelectorAll(".timeline-names")[0]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[1]
        .classList.add("timeline-names-show2");
      document
        .querySelectorAll(".timeline-names")[0]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[1].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[0].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[1].style.backgroundColor =
        "var(--main-bg-nav-color)";
      document.querySelectorAll(".timeline-names")[0].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[0].style.opacity = "1";
      document.querySelectorAll(".des-timeline-names")[1].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-left")[0].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document.querySelector("#line-info").classList.add("timeline-continue-9");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-82");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-77");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-72");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-67");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-63");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-58");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-54");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-49");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-45");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-40");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-36");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-31");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-22");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-27");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-9");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-13");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-18");
    document.querySelectorAll(".timeline-box-left")[0].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[1].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[1].style.borderColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[1]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[1]
      .classList.remove("timeline-names-show");
    document.querySelectorAll(".des-timeline-names")[0].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[0].style.borderColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[0]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[0]
      .classList.remove("timeline-names-show");
    document

      .querySelector("#line-info")
      .classList.remove("timeline-continue-4");
    desYearTimline0.style.cssText += "animation: none;";
  }
  if (desYearTimline1Top < totalHeight) {
    setTimeout(() => {
      desYearTimline1.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-13");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[2]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[2]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[2].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[2].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[2].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-right")[0].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-18");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-82");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-77");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-72");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-67");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-63");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-58");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-54");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-49");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-45");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-40");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-36");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-31");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-27");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-22");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-18");
    document.querySelectorAll(".timeline-box-right")[0].style.cssText +=
      "animation: none";
    document.querySelectorAll(".des-timeline-names")[2].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[2].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[2].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[2]
      .classList.remove("timeline-names-show");
    document
      .querySelectorAll(".timeline-names")[2]
      .classList.remove("timeline-names-show2");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-13");
    desYearTimline1.style.cssText += "animation: none;";
  }
  if (desYearTimline2Top < totalHeight) {
    setTimeout(() => {
      desYearTimline2.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-22");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[3]
        .classList.add("timeline-names-show");
      document
        .querySelectorAll(".timeline-names")[4]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[3]
        .classList.add("timeline-names-show2");
      document
        .querySelectorAll(".timeline-names")[4]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[3].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[3].style.backgroundColor =
        "var(--main-bg-nav-color)";
      document.querySelectorAll(".timeline-names")[4].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[4].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[3].style.opacity = "1";
      document.querySelectorAll(".des-timeline-names")[4].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-left")[1].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-27");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-82");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-77");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-72");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-67");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-63");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-58");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-54");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-49");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-45");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-40");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-36");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-31");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-27");
    document.querySelectorAll(".timeline-box-left")[1].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[3].style.opacity = "0";
    document.querySelectorAll(".des-timeline-names")[4].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[3].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[3].style.backgroundColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[4].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[4].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[3]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[4]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[3]
      .classList.remove("timeline-names-show");
    document
      .querySelectorAll(".timeline-names")[4]
      .classList.remove("timeline-names-show");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-22");
    desYearTimline2.style.cssText += "animation: none;";
  }
  if (desYearTimline3Top < totalHeight) {
    setTimeout(() => {
      desYearTimline3.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-31");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[5]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[5]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[5].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[5].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[5].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-right")[1].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-36");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-82");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-77");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-72");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-67");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-63");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-58");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-54");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-49");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-45");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-40");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-36");
    document.querySelectorAll(".timeline-box-right")[1].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[5].style.opacity = "0";

    document.querySelectorAll(".timeline-names")[5].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[5].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[5]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[5]
      .classList.remove("timeline-names-show");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-31");
    desYearTimline3.style.cssText += "animation: none;";
  }
  if (desYearTimline4Top < totalHeight) {
    setTimeout(() => {
      desYearTimline4.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-40");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[6]
        .classList.add("timeline-names-show");
      document
        .querySelectorAll(".timeline-names")[7]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[6]
        .classList.add("timeline-names-show2");
      document
        .querySelectorAll(".timeline-names")[7]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[6].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[6].style.backgroundColor =
        "var(--main-bg-nav-color)";
      document.querySelectorAll(".timeline-names")[7].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[7].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[6].style.opacity = "1";
      document.querySelectorAll(".des-timeline-names")[7].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-left")[2].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-45");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-82");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-77");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-72");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-67");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-63");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-58");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-54");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-49");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-45");
    document.querySelectorAll(".timeline-box-left")[2].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[6].style.opacity = "0";
    document.querySelectorAll(".des-timeline-names")[7].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[6].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[6].style.backgroundColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[7].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[7].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[6]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[7]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[6]
      .classList.remove("timeline-names-show");
    document
      .querySelectorAll(".timeline-names")[7]
      .classList.remove("timeline-names-show");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-40");
    desYearTimline4.style.cssText += "animation: none;";
  }
  if (desYearTimline5Top < totalHeight) {
    setTimeout(() => {
      desYearTimline5.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-49");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[8]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[8]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[8].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[8].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[8].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-right")[2].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-54");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-82");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-77");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-72");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-67");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-63");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-58");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-54");
    document.querySelectorAll(".timeline-box-right")[2].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[8].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[8].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[8].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[8]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[8]
      .classList.remove("timeline-names-show");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-49");
    desYearTimline5.style.cssText += "animation: none;";
  }
  if (desYearTimline6Top < totalHeight) {
    setTimeout(() => {
      desYearTimline6.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-58");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[9]
        .classList.add("timeline-names-show");
      document
        .querySelectorAll(".timeline-names")[10]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[9]
        .classList.add("timeline-names-show2");
      document
        .querySelectorAll(".timeline-names")[10]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[9].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[9].style.backgroundColor =
        "var(--main-bg-nav-color)";
      document.querySelectorAll(".timeline-names")[10].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[10].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[9].style.opacity = "1";
      document.querySelectorAll(".des-timeline-names")[10].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-left")[3].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-63");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-82");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-77");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-72");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-67");
    document.querySelectorAll(".timeline-box-left")[3].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[9].style.opacity = "0";
    document.querySelectorAll(".des-timeline-names")[10].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[9].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[9].style.backgroundColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[10].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[10].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[9]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[10]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[9]
      .classList.remove("timeline-names-show");
    document
      .querySelectorAll(".timeline-names")[10]
      .classList.remove("timeline-names-show");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-63");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-58");
    desYearTimline6.style.cssText += "animation: none;";
  }
  if (desYearTimline7Top < totalHeight) {
    setTimeout(() => {
      desYearTimline7.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-67");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[11]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[11]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[11].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[11].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[11].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-right")[3].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-72");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-82");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-77");
    document.querySelectorAll(".timeline-box-right")[3].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[11].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[11].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[11].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[11]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[11]
      .classList.remove("timeline-names-show");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-72");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-67");
    desYearTimline7.style.cssText += "animation: none;";
  }
  if (desYearTimline8Top < totalHeight) {
    setTimeout(() => {
      desYearTimline8.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-77");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[12]
        .classList.add("timeline-names-show");
      document
        .querySelectorAll(".timeline-names")[13]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[12]
        .classList.add("timeline-names-show2");
      document
        .querySelectorAll(".timeline-names")[13]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[12].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[12].style.backgroundColor =
        "var(--main-bg-nav-color)";
      document.querySelectorAll(".timeline-names")[13].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[13].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[12].style.opacity = "1";
      document.querySelectorAll(".des-timeline-names")[13].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-left")[4].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-82");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    document.querySelectorAll(".timeline-box-left")[4].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[12].style.opacity = "0";
    document.querySelectorAll(".des-timeline-names")[13].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[12].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[12].style.backgroundColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[13].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[13].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[12]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[13]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[12]
      .classList.remove("timeline-names-show");
    document
      .querySelectorAll(".timeline-names")[13]
      .classList.remove("timeline-names-show");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-82");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-77");
    desYearTimline8.style.cssText += "animation: none;";
  }
  if (desYearTimline9Top < totalHeight) {
    setTimeout(() => {
      desYearTimline9.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-86");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[14]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[14]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[14].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[14].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[14].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-right")[4].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-91");
    }, 5500);
  } else {
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    document.querySelectorAll(".timeline-box-right")[4].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[14].style.opacity = "0";
    document.querySelectorAll(".timeline-names")[14].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[14].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[14]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[14]
      .classList.remove("timeline-names-show");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-91");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-86");
    desYearTimline9.style.cssText += "animation: none;";
  }
  if (desYearTimline10Top < totalHeight) {
    setTimeout(() => {
      desYearTimline10.style.cssText += "animation: showSquare 1s forwards;";
    }, 100);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-95");
    }, 1000);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[15]
        .classList.add("timeline-names-show");
      document
        .querySelectorAll(".timeline-names")[16]
        .classList.add("timeline-names-show");
    }, 1700);
    setTimeout(() => {
      document
        .querySelectorAll(".timeline-names")[15]
        .classList.add("timeline-names-show2");
      document
        .querySelectorAll(".timeline-names")[16]
        .classList.add("timeline-names-show2");
    }, 2400);
    setTimeout(() => {
      document.querySelectorAll(".timeline-names")[15].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[15].style.backgroundColor =
        "var(--main-bg-nav-color)";
      document.querySelectorAll(".timeline-names")[16].style.borderColor =
        "rgba(123, 29, 128, 0.60)";
      document.querySelectorAll(".timeline-names")[16].style.backgroundColor =
        "var(--main-bg-nav-color)";
    }, 3100);
    setTimeout(() => {
      document.querySelectorAll(".des-timeline-names")[15].style.opacity = "1";
      document.querySelectorAll(".des-timeline-names")[16].style.opacity = "1";
    }, 3800);
    setTimeout(() => {
      document.querySelectorAll(".timeline-box-left")[5].style.cssText +=
        "animation: showTitleMsp 1s forwards;";
    }, 4500);
    setTimeout(() => {
      document
        .querySelector("#line-info")
        .classList.add("timeline-continue-100");
    }, 5500);
  } else {
    document.querySelectorAll(".timeline-box-left")[5].style.cssText +=
      "animation: none;";
    document.querySelectorAll(".des-timeline-names")[15].style.opacity = "0";
    document.querySelectorAll(".des-timeline-names")[16].style.opacity = "0";

    document.querySelectorAll(".timeline-names")[15].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[15].style.backgroundColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[16].style.borderColor =
      "transparent";
    document.querySelectorAll(".timeline-names")[16].style.backgroundColor =
      "transparent";
    document
      .querySelectorAll(".timeline-names")[15]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[16]
      .classList.remove("timeline-names-show2");
    document
      .querySelectorAll(".timeline-names")[15]
      .classList.remove("timeline-names-show");
    document
      .querySelectorAll(".timeline-names")[16]
      .classList.remove("timeline-names-show");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-100");
    document
      .querySelector("#line-info")
      .classList.remove("timeline-continue-95");
    desYearTimline10.style.cssText += "animation: none;";
  }
  // yearTimeline.forEach((e) => {
  //   //here rdElement is the buttons in every section and e represents each button in each section
  //   var eTop = e.getBoundingClientRect().top;
  //   if (eTop < totalHeight) {
  //     e.style.cssText += "animation: showSquare 1s forwards;";
  //   } else {
  //     e.style.cssText += "animation:auto;";
  //   }
  // });
  yearTimelineWord.forEach((e) => {
    //here rdElement is the buttons in every section and e represents each button in each section
    var eTop = e.getBoundingClientRect().top;
    if (eTop < totalHeight) {
      e.style.cssText += "animation: showWordSquare 1s forwards;";
    } else {
      e.style.cssText += "animation:auto;";
    }
  });
}
function AnimationInfo() {
  setTimeout(() => {
    document.querySelector(".title-msp").style.cssText +=
      "animation: showTitleMsp 1s forwards;";
  }, 200);
  setTimeout(() => {
    document.querySelector(".span-des-title-msp").style.cssText +=
      "animation : showing-text 1s, cursor 0.2s step-end alternate,showTitleMsp 0.2s forwards;";
  }, 1200);
  setTimeout(() => {
    document.querySelector(".p-des-title-msp").style.cssText +=
      "animation: showTitleMsp 1s forwards;";
  }, 2200);
  setTimeout(() => {
    document.querySelector(".bubble-img-info").style.cssText +=
      "animation: showTitleMsp 1s forwards;";
  }, 3200);
  function nCount(selector) {
    const elements = document.querySelectorAll(selector);

    for (const element of elements) {
      const firstSpan = element.querySelector("span:first-child"); // Target the first span within each h3
      if (!firstSpan) {
        console.warn(
          `Skipping element at "${selector}" because it has no first-child span.`
        );
        continue;
      }

      const currentCount = parseInt(firstSpan.textContent, 10);
      const currentYear = new Date().getFullYear();
      const storedYear = localStorage.getItem("lastIncrementYear");

      if (storedYear !== currentYear) {
        const newCount = currentCount + 1;

        // Animate the counter using vanilla JavaScript
        firstSpan.textContent = currentCount; // Set initial value before animation

        let stepCount = 0;
        const animationInterval = setInterval(() => {
          stepCount++;
          const animatedValue = Math.ceil((stepCount / 40) * newCount); // Calculate smooth animation steps

          firstSpan.textContent = animatedValue;

          if (stepCount === 40) {
            // Duration = 40 steps * 100ms/step
            clearInterval(animationInterval);
          }
        }, 100);

        localStorage.setItem("lastIncrementYear", currentYear);
      }
    }
  }
  setTimeout(() => {
    document.querySelector(".dynamic-info").style.cssText +=
      "animation: showTitleMsp 1s forwards;";
    // document.addEventListener("DOMContentLoaded", () => {
    nCount(".numbers h3");
    // });
  }, 4200);
}
//End Animation in Information About Us Page

// Start Animation in Our Team Page
function AnimationOurTeam() {
  setTimeout(() => {
    document.querySelectorAll("#bestStudent")[8].style.cssText +=
      "animation: showing-text 1s, cursor 0.4s step-end alternate,showTitleMsp 0.2s forwards;";
  }, 200);
  setTimeout(() => {
    document.querySelectorAll(".des-info-bestStudent")[1].style.cssText +=
      "animation:showTitleMsp 1s forwards;";
  }, 1200);
}
function ScrollingAnimationOurTeam() {
  const myCards = document.querySelectorAll(".card1");
  let totalHeight = (window.innerHeight / 5) * 4;
  const btnsLeftRight = document.querySelectorAll(".content3")[0];
  const btnsLeftRightTop = btnsLeftRight.getBoundingClientRect().top;
  if (
    document.querySelectorAll(".des-info-bestStudent")[1].style.animation ==
    "1s ease 0s 1 normal forwards running showTitleMsp"
  ) {
    myCards.forEach((e) => {
      //here rdElement is the buttons in every section and e represents each button in each section
      var eTop = e.getBoundingClientRect().top;
      if (eTop < totalHeight) {
        e.style.cssText += "animation: showTitleMsp 1s forwards;";
      } else {
        e.style.cssText += "animation:auto;";
      }
    });
    if (btnsLeftRightTop < totalHeight) {
      btnsLeftRight.style.cssText += "animation: showTitleMsp 1s forwards;";
    } else {
      btnsLeftRight.style.cssText += "animation:auto;";
    }
  } else {
    setTimeout(() => {
      myCards.forEach((e) => {
        //here rdElement is the buttons in every section and e represents each button in each section
        var eTop = e.getBoundingClientRect().top;
        if (eTop < totalHeight) {
          e.style.cssText += "animation: showTitleMsp 1s forwards;";
        } else {
          e.style.cssText += "animation:auto;";
        }
      });
      if (btnsLeftRightTop < totalHeight) {
        btnsLeftRight.style.cssText += "animation: showTitleMsp 1s forwards;";
      } else {
        btnsLeftRight.style.cssText += "animation:auto;";
      }
    }, 2200);
  }
}
// End Animation in Our Team Page

//Start Animation Blog Page
function AnimationBlog() {
  setTimeout(() => {
    document.querySelectorAll("#bestStudent")[9].style.cssText +=
      "animation: showing-text 1s, cursor 0.4s step-end alternate,showTitleMsp 0.2s forwards;";
  }, 200);
  setTimeout(() => {
    document.querySelectorAll(".des-info-bestStudent")[2].style.cssText +=
      "animation:showTitleMsp 1s forwards;";
  }, 1200);
}
function ScrollingAnimationBlog() {
  const myBlogCards = document.querySelectorAll(".card-blog");
  let totalHeight = (window.innerHeight / 5) * 4;
  const btnsLeftRight = document.querySelectorAll(".content3")[1];
  const btnsLeftRightTop = btnsLeftRight.getBoundingClientRect().top;
  if (
    document.querySelectorAll(".des-info-bestStudent")[2].style.animation ==
    "1s ease 0s 1 normal forwards running showTitleMsp"
  ) {
    myBlogCards.forEach((e) => {
      //here rdElement is the buttons in every section and e represents each button in each section
      var eTop = e.getBoundingClientRect().top;
      if (eTop < totalHeight) {
        e.style.cssText += "animation: showTitleMsp 1s forwards;";
      } else {
        e.style.cssText += "animation:auto;";
      }
    });
    if (btnsLeftRightTop < totalHeight) {
      btnsLeftRight.style.cssText += "animation: showTitleMsp 1s forwards;";
    } else {
      btnsLeftRight.style.cssText += "animation:auto;";
    }
  } else {
    setTimeout(() => {
      myBlogCards.forEach((e) => {
        //here rdElement is the buttons in every section and e represents each button in each section
        var eTop = e.getBoundingClientRect().top;
        if (eTop < totalHeight) {
          e.style.cssText += "animation: showTitleMsp 1s forwards;";
        } else {
          e.style.cssText += "animation:auto;";
        }
      });
      if (btnsLeftRightTop < totalHeight) {
        btnsLeftRight.style.cssText += "animation: showTitleMsp 1s forwards;";
      } else {
        btnsLeftRight.style.cssText += "animation:auto;";
      }
    }, 2200);
  }
}
//End Animation Blog Page

// Start Animation Contact Page
function AnimationContact() {
  setTimeout(() => {
    document.querySelectorAll("#bestStudent")[10].style.cssText +=
      "animation: showing-text 1s, cursor 0.4s step-end alternate,showTitleMsp 0.2s forwards;";
  }, 200);
  setTimeout(() => {
    document.querySelectorAll(".des-info-bestStudent")[3].style.cssText +=
      "animation:showTitleMsp 1s forwards;";
  }, 1200);
}
function ScrollingAnimationContact() {
  let totalHeight = (window.innerHeight / 5) * 4;
  const infoCard = document.querySelectorAll(".top_");
  const hrContact = document.querySelectorAll(".main-contact");
  const hrTimeline = document.querySelector("#timeline-wrap");
  const hrTimelineTop = hrTimeline.getBoundingClientRect().top;
  const startFaqSec = document.querySelectorAll("#contact details")[0];
  const startFaqSecTop = startFaqSec.getBoundingClientRect().top;
  if (startFaqSecTop < totalHeight) {
    for (
      let i = 0;
      i < document.querySelectorAll("#contact details").length;
      i++
    ) {
      document.querySelectorAll("#contact details")[
        i
      ].style.cssText += `animation:question-asked-${i} 2s forwards;`;
    }
  } else {
    for (
      let i = 0;
      i < document.querySelectorAll("#contact details").length;
      i++
    ) {
      document.querySelectorAll("#contact details")[
        i
      ].style.cssText += `animation:auto;`;
    }
  }
  const desTitleContact = [
    document.querySelectorAll(".des-info-bestStudent")[4],
    document.querySelectorAll(".des-info-bestStudent")[5],
  ];
  const titleContact = [
    document.querySelectorAll("#bestStudent")[11],
    document.querySelectorAll("#bestStudent")[12],
  ];
  if (hrTimelineTop < totalHeight) {
    document.querySelector("#timeline").style.cssText +=
      "animation: show-line-contact 3s forwards;";
    for (
      let index = 0;
      index < document.querySelectorAll(".iconTimeline").length;
      index++
    ) {
      document.querySelectorAll(".iconTimeline")[
        index
      ].style.cssText += `animation:show-icon-${index + 1} 3s forwards;`;
    }
  } else {
    document.querySelector("#timeline").style.cssText += "animation: auto;";
    for (
      let index = 0;
      index < document.querySelectorAll(".iconTimeline").length;
      index++
    ) {
      document.querySelectorAll(".iconTimeline")[
        index
      ].style.cssText += `animation:auto;`;
    }
  }
  infoCard.forEach((e) => {
    var eTop = e.getBoundingClientRect().top;
    if (eTop < totalHeight) {
      e.style.cssText += "animation : showTitleMsp 1s forwards;";
    } else {
      e.style.cssText += "animation :auto;";
    }
  });
  desTitleContact.forEach((e) => {
    var eTop = e.getBoundingClientRect().top;
    if (eTop < totalHeight) {
      e.style.cssText += "animation:showTitleMsp 1s forwards;";
    } else {
      e.style.cssText += "animation :auto;";
    }
  });
  titleContact.forEach((e) => {
    var eTop = e.getBoundingClientRect().top;
    if (eTop < totalHeight) {
      e.style.cssText +=
        "animation: showing-text 1s, cursor 0.4s step-end alternate,showTitleMsp 0.2s forwards;";
    } else {
      e.style.cssText += "animation :auto;";
    }
  });
  hrContact.forEach((e) => {
    var eTop = e.getBoundingClientRect().top;
    if (eTop < totalHeight) {
      e.style.cssText += "animation : line-through-mobile 2s forwards;";
    } else {
      e.style.cssText += "animation :auto;";
    }
  });
}
// End Animation Contact Page
function checkNetworkSpeed() {
  if (navigator.onLine) {
    setTimeout(() => {
      // Start Splash Screen
      document.getElementById("splash").classList.add("fade");
      setTimeout(() => {
        document.getElementById("splash").classList.add("hidden");
        document.body.style.overflow = "hidden auto";
      }, 900);
      // End Splash Screen
      AnimationHome();
      // Start animation Header
      document.querySelectorAll(
        ".main-effect"
      )[0].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
      setTimeout(function adding() {
        document.querySelectorAll(".ourCommitteesDescription")[0] === null ||
        document.querySelectorAll(".ourCommitteesDescription")[0] === void 0
          ? void 0
          : document
              .querySelectorAll(".ourCommitteesDescription")[0]
              .classList.add("show1");
      }, 2000);

      // End animation Header
      setTimeout(
        (window.onscroll = function showing() {
          ScrollingAnimationHome();
          ScrollingAnimationInfo();
          ScrollingAnimationOurTeam();
          ScrollingAnimationBlog();
          ScrollingAnimationContact();
          // document.querySelector(
          //     ".main-effect"
          // )[0].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
          let totalHeight = (window.innerHeight / 5) * 4;
          devTitles.forEach((title) => {
            let titleTop = title.getBoundingClientRect().top;
            if (titleTop < totalHeight) {
              title.classList.add("show");
            } else {
              title.classList.remove("show");
            }
          });
          arrOfAllInOurGallerySec.forEach((element) => {
            let picTop = element.getBoundingClientRect().top;
            if (picTop < totalHeight) {
              element.classList.add("show");
            } else {
              element.classList.remove("show");
            }
          });
          arrOfEventsInOurGallerySec.forEach((element) => {
            let picTop = element.getBoundingClientRect().top;
            if (picTop < totalHeight) {
              element.classList.add("show");
            } else {
              element.classList.remove("show");
            }
          });
          arrOfSessionsInOurGallerySec.forEach((element) => {
            let picTop = element.getBoundingClientRect().top;
            if (picTop < totalHeight) {
              element.classList.add("show");
            } else {
              element.classList.remove("show");
            }
          });
          myImage.forEach((pic) => {
            let picTop = pic.getBoundingClientRect().top;
            if (picTop < totalHeight) {
              pic.classList.add("show");
            } else {
              pic.classList.remove("show");
            }
          });
          setTimeout(() => {
            descriptions.forEach((describe) => {
              let desTop = describe.getBoundingClientRect().top;
              if (desTop < totalHeight) {
                describe.classList.add("show");
              } else {
                describe.classList.remove("show");
              }
            });
          }, 700);
          setTimeout(() => {
            services.forEach((service) => {
              let serTop = service.getBoundingClientRect().top;
              if (serTop < totalHeight) {
                service.classList.add("show");
              } else {
                service.classList.remove("show");
              }
            });
          }, 1000);
          setTimeout(() => {
            tracks.forEach((tr) => {
              let trackTop = tr.getBoundingClientRect().top;
              if (trackTop < totalHeight) {
                tr.classList.add("show");
              } else {
                tr.classList.remove("show");
              }
            });
          }, 1000);
          nonTechIcon.forEach((icon) => {
            let iconTop = icon.getBoundingClientRect().top;
            if (iconTop < totalHeight) {
              icon.classList.add("show");
            } else {
              icon.classList.remove("show");
            }
          });
          nonTechTitle.forEach((title) => {
            let titleTop = title.getBoundingClientRect().top;
            if (titleTop < totalHeight) {
              title.classList.add("show");
            } else {
              title.classList.remove("show");
            }
          });
        }),
        2700
      );
    }, 2000);
  } else {
    document.getElementById("splash").style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}
checkNetworkSpeed();
function scrollToTop() {
  window.scrollTo(0, 0);
}

window.addEventListener("beforeunload", scrollToTop);
