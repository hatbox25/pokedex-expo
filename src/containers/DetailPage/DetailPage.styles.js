import defaultStyle from "../../constant/styles";

export default {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    alignItems: "center",
  },

  imageContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: defaultStyle.secondaryColor,
    padding: 16,
    justifyContent: "space-around",
  },
  image: {
    height: 120,
    width: 120,
  },

  detailContainer: {
    padding: 16,
    paddingBottom: 0,
    width: "100%",
  },

  listContainer: {
    width: "100%",
    backgroundColor: defaultStyle.secondaryColor,
    padding: 16,
    alignItems: "center",
  },
  listTitle: {
    color: defaultStyle.primaryColor,
    fontWeight: "600",
    marginBottom: 16,
  },
  listItem: { color: defaultStyle.backgroundColor, textAlign: "center" },

  statContainer: {
    width: "100%",
    padding: 16,
    alignItems: "center",
  },
  statTitle: {
    color: defaultStyle.secondaryColor,
    fontWeight: "600",
    marginBottom: 16,
  },
};
