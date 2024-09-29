// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
  const sendLetter = document.getElementById("sendLetter");

  function addClass() {
    document.body.classList.add("sent");
  }

  sendLetter.addEventListener("click", addClass);
});
