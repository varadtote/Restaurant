export function createMenuContent() {
  let mainDiv = document.querySelector(".main");
  mainDiv.innerHTML = "";

  const menuSection = document.createElement("section");
  menuSection.className = "menu-container";

  const menuItems = [
    {
      name: "Classic Burger",
      price: "$8.99",
      image:
        "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=626&ext=jpg",
      link: "#",
    },
    {
      name: "Cheeseburger",
      price: "$9.99",
      image:
        "https://img.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg?size=626&ext=jpg&ga=GA1.2.401224962.1692691845&semt=ais",
      link: "#",
    },
    {
      name: "Bacon Burger",
      price: "$10.99",
      image:
        "https://img.freepik.com/free-photo/big-tasty-burger_144627-16483.jpg?size=626&ext=jpg&ga=GA1.1.401224962.1692691845&semt=ais",
      link: "#",
    },
    {
      name: "Chicken Burger",
      price: "$12.99",
      image:
        "https://img.freepik.com/free-photo/front-view-burger-with-veggies-meat_23-2148868238.jpg?size=626&ext=jpg&ga=GA1.1.401224962.1692691845&semt=ais",
      link: "#",
    },
    {
      name: "HamBurger",
      price: "$12.99",
      image:
        "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.1.401224962.1692691845&semt=ais",
      link: "#",
    },
    {
      name: "Paneer Burger",
      price: "$12.99",
      image:
        "https://img.freepik.com/free-photo/sandwich-with-chicken-burger-tomatoes-lettuce_2829-16577.jpg?size=626&ext=jpg&ga=GA1.1.401224962.1692691845&semt=ais",
      link: "#",
    },
    {
      name: "Vegan Burger",
      price: "$12.99",
      image:
        "https://img.freepik.com/free-photo/close-up-vegetarian-burger-cutting-board_23-2148784533.jpg?size=626&ext=jpg&ga=GA1.2.401224962.1692691845&semt=ais",
      link: "#",
    },
    {
      name: "Coke",
      price: "$5.00",
      image:
        "https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?size=626&ext=jpg&ga=GA1.1.401224962.1692691845&semt=sph",
      link: "#",
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "menu-card";

    const itemLink = document.createElement("a");
    itemLink.href = item.link;

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.className = "menu-image";

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = item.price;

    itemLink.appendChild(itemImage);
    card.appendChild(itemLink);
    card.appendChild(itemName);
    card.appendChild(itemPrice);

    menuSection.appendChild(card);
  });

  mainDiv.appendChild(menuSection);
}
