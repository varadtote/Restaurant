export function createContactContent() {
  let main = document.querySelector(".main");
  main.innerHTML = "";
  let contact = document.createElement("div");
  contact.setAttribute("class", "contact");

  let contactDetailsDiv = document.createElement("div");
  contactDetailsDiv.className = "contact-details";

  let h1 = document.createElement("h1");
  h1.className = "menu-heading";
  h1.textContent = "Contact";

  let emailP = document.createElement("p");
  emailP.innerHTML = "📧 - burgerpoint@notreal.com";

  let phoneP = document.createElement("p");
  phoneP.innerHTML = "📞 - 97555 98555";

  let hoursP = document.createElement("p");
  hoursP.innerHTML = "⌚ - All Weekdays 10AM - 9PM";

  contactDetailsDiv.appendChild(h1);
  contactDetailsDiv.appendChild(emailP);
  contactDetailsDiv.appendChild(phoneP);
  contactDetailsDiv.appendChild(hoursP);

  let iframeDiv = document.createElement("div");
  let iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.106149263456!2d73.80882746977538!3d18.5728423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b990c5ce49e7%3A0x32f40a4103da9455!2sBurgers%20point!5e0!3m2!1sen!2sin!4v1693201523156!5m2!1sen!2sin";
  iframe.width = "600";
  iframe.height = "450";
  iframe.style.border = "0";
  iframe.allowfullscreen = "";
  iframe.loading = "eager";
  iframe.referrerpolicy = "no-referrer-when-downgrade";

  iframeDiv.appendChild(iframe);

  contact.appendChild(contactDetailsDiv);
  contact.appendChild(iframeDiv);

  main.appendChild(contact);
}
