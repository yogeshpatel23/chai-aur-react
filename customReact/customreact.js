function customrender(reactElement, container) {
  const domElemnt = document.createElement(reactElement.type);

  //   domElemnt.innerHTML = reactElement.children;
  //   domElemnt.setAttribute("href", reactElement.props.href);
  //   domElemnt.setAttribute("target", reactElement.props.traget);

  domElemnt.innerHTML = reactElement.children;
  for (const key in reactElement.props) {
    if (key == "children") continue;
    domElemnt.setAttribute(key, reactElement.props[key]);
  }

  container.appendChild(domElemnt);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    traget: "_blank",
  },
  children: "Click mo to visit google",
};

const mainContainer = document.querySelector("#root");
customrender(reactElement, mainContainer);
