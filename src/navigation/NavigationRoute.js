import ListPage from "../containers/ListPage/ListPage.container";
import DetailPage from "../containers/DetailPage/DetailPage.container";

export default [
  {
    name: "List",
    component: ListPage,
    options: {
      title: "Browse Pokedex",
    },
  },
  {
    name: "Detail",
    component: DetailPage,
    options: {
      title: "Detail Pokemon",
      headerBackTitle: " ",
    },
  },
];
