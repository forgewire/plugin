import "./style.css";
const themes = import.meta.glob("./themes/*.css", { query: { inline: true } });

const injectTheme = async (filePath) => {
  const { default: content } = await themes[filePath]({ inline: true });
  let style = document.getElementById("#theme-styles");

  if (!style) {
    style = document.createElement("style");
    style.id = "theme-styles";
    style = document.head.appendChild(style);
  }

  style.textContent = content;
};

let current = 0;

const switchTheme = async () => {
  const paths = Object.keys(themes);
  injectTheme(paths[current]);
  current = current ? 0 : 1;

  // let link = document.querySelector("#forgewire-theme");

  // if (!link) {
  //   link = document.createElement("link");
  //   link.id = `forgewire-theme`;
  //   link.rel = "stylesheet";
  //   link = document.head.appendChild(link);
  // }

  // current = current ? 0 : 1;
  // link.href = themes[current];
};

switchTheme();

// const switchTheme = () => {
//   let style = document.querySelector("style#forgewire-theme");

//   if (!style) {
//     style = document.createElement("style");
//     style.id = `forgewire-theme`;
//     style = document.head.appendChild(style);
//   }

//   current = current ? 0 : 1;
//   style.textContent = themes[current];
// };

const themeSwitchBtn = document.querySelector(".btn");
themeSwitchBtn.addEventListener("click", switchTheme);
