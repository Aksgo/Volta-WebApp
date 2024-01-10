function openModal() {
  document.getElementById("myModal").style.display = "block";
  // appendContacts("Anshuman");
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
};
// const username = prompt("Enter your username:");
// let username = prompt("Enter name:");



const contactsContainer = document.querySelector(".container");
const appendContacts = (username) => {
  const contact = document.createElement("div");

  contact.innerText = username;
  contact.classList.add("users");
  contact.addEventListener("click", function (event) {
    openModal();
  });
  contact.classList.add("myModal");
  contactsContainer.append(contact);
  //   console.log(Event);
};
while ((username = prompt('Enter name:'))){
  appendContacts(username)

}
// if (username == "harry") {
//   appendContacts(username);
// }
// do{
//   appendContacts(username);
// }while(username = prompt)

