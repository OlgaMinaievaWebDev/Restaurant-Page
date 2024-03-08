const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // create and append image
  const image = document.createElement("img");
  image.src =
    "https://images.unsplash.com/photo-1580196515879-2d99ad7fd767?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  image.height = "300";
  pageContent.appendChild(image);

  // create and append h1
  const headline = document.createElement("h1");
  headline.textContent = "Lazy Eatery";
  pageContent.appendChild(headline);

  // create and append p
  const copy = document.createElement("p");
  copy.textContent =
    "Lorem ipsum dolor sit consectetur. Acc culpa is odi expe. Qui, seq.";
  pageContent.appendChild(copy);

  //append content to the page
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
