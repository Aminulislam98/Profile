let followBtn = document.getElementById("follow-button");
let messageBtn = document.getElementById("message-button");

followBtn.addEventListener("click", () => {
  if (followBtn.innerHTML === "Follow") {
    followBtn.innerHTML = "Followed";
  } else {
    followBtn.innerHTML = "Follow";
  }
});
messageBtn.addEventListener("click", () => {
  if (messageBtn.innerHTML === "Message") {
    messageBtn.innerHTML = "Thank You! ";
  } else {
    messageBtn.innerHTML = "Message";
  }
});
