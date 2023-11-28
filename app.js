const alertBell = document.querySelector(".alert-bell");
const showNotification = document.querySelector(".show-notification");
const container = document.querySelector(".container");
const DC = document.querySelector(".dc-header");
const plan = document.querySelector(".plans");
const canclePlan = document.querySelector(".cancle-plan");
const DropDownIcon = document.querySelector(".set-up-guide-drop-down");
const setUpContainer = document.querySelector(".set-up-guide-container");
const section = document.querySelector(".section");

//show notification content
alertBell.addEventListener("click", () => {
  showNotification.classList.toggle("show");
  container.classList.remove("show"); //remove DC list menu if initially active to prevent page clumunes
});
DC.addEventListener("click", () => {
  container.classList.toggle("show");
  showNotification.classList.remove("show"); //remove page notification if initially active to prevent page clumunes
});
canclePlan.addEventListener("click", () => {
  plan.style.display = "none"; // cancle the plan
});
DropDownIcon.addEventListener("click", (e) => {
  section.classList.toggle("hide"); // cancle the plan
  section.classList.contains("hide")
    ? (DropDownIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
  </svg>`)
    : (DropDownIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.46967C6.01256 8.17678 6.48744 8.17678 6.78033 8.46967L10.25 11.9393L13.7197 8.46967C14.0126 8.17678 14.4874 8.17678 14.7803 8.46967C15.0732 8.76256 15.0732 9.23744 14.7803 9.53033L10.7803 13.5303C10.4874 13.8232 10.0126 13.8232 9.71967 13.5303L5.71967 9.53033C5.42678 9.23744 5.42678 8.76256 5.71967 8.46967Z" fill="#4A4A4A"/>
</svg>`);
});

//

let btns = document.querySelector(".section");
let btnsChild = btns.querySelectorAll(".container2");

// Initialize the counter with the children

for (let i = 0; i < btnsChild.length; i++) {
  btnsChild[i].addEventListener("click", (e) => {
    let currentPressedBtn = e.currentTarget;
    let initial = currentPressedBtn.querySelector(".initial");
    let final = currentPressedBtn.querySelector(".finally");
    btnsChild.forEach((p) => {
      if (p !== currentPressedBtn) {
        p.classList.remove("active");
        p.querySelectorAll(".k").forEach((child) => {
          child.classList.add("not-active");
          // console.log(child);
          p.querySelector(".title").classList.remove("active-title");
        });
      } else {
        p.classList.add("active");
        p.querySelectorAll(".k").forEach((child) => {
          child.classList.remove("not-active");
          p.querySelector(".title").classList.add("active-title");
          // console.log(child);
        });
      }
    });

    if (
      e.target.classList.contains("excludeFromActive") ||
      (e.target.closest(".excludeFromActive") &&
        e.target.classList.contains("finally"))
    ) {
      return;
    } else {
      if (
        e.target.classList.contains("excludeFromActive") ||
        (e.target.closest(".excludeFromActive") &&
          e.target.classList.contains("initial"))
      ) {
        let j = i + 1;
        // the excluded element will do the updating progress bar when any of the guide is checked or unchecked
        // console.log("Excluded element clicked");
        if (j <= 4) {
          btnsChild.forEach((p) => {
            if (p !== btnsChild[j]) {
              p.classList.remove("active");
              p.querySelectorAll(".k").forEach((child) => {
                child.classList.add("not-active");
                // console.log(child);
                p.querySelector(".title").classList.remove("active-title");
              });
            } else {
              console.log(btnsChild[j]);
              btnsChild[j].classList.add("active");
              btnsChild[j].querySelectorAll(".k").forEach((child) => {
                child.classList.remove("not-active");
                btnsChild[j]
                  .querySelector(".title")
                  .classList.add("active-title");
                // console.log(child);
              });
            }
          });
        }
      }
    }
  });
}
let excludeFromActive = document.querySelectorAll(".excludeFromActive");
let progressStatus = document.querySelector(".progress-status");
let progressBarFill = document.querySelector(".progress-bar-fill");
let buttonIcon = [];

function updateProgress() {
  const ratio = buttonIcon.length / excludeFromActive.length;
  const progressBarWidth = ratio * 100 + "%";
  progressBarFill.style.width = progressBarWidth;
}

function updateCounter() {
  progressStatus.innerHTML = `${buttonIcon.length}/${excludeFromActive.length}`;
}

for (let i = 0; i < excludeFromActive.length; i++) {
  excludeFromActive[i].addEventListener("click", (e) => {
    let currentPressedBtn = e.currentTarget;

    let initial = currentPressedBtn.querySelector(".initial");
    let loading = currentPressedBtn.querySelector(".loading");
    let final = currentPressedBtn.querySelector(".finally");

    loading.style.display = "block";
    initial.style.display = "none";
    final.style.display = "none";

    setTimeout(() => {
      // check if the button clicked is not already clicked before
      if (!buttonIcon.includes(currentPressedBtn)) {
        // push pressed button into the array to update progress
        buttonIcon.push(currentPressedBtn);
        final.style.display = "block";
        loading.style.display = "none";
        initial.style.display = "none";
      } else {
        // remove already clicked button and update the progress bar state
        buttonIcon = buttonIcon.filter((btn) => btn !== currentPressedBtn);
        final.style.display = "none";
        loading.style.display = "none";
        initial.style.display = "block";
      }

      updateProgress();
      updateCounter();
    }, 200);
  });
}
