import defaultStyle from "../../constant/styles";

export default {
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: defaultStyle.backgroundColor,
  },

  itemRow: (index) => ({
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: index % 2 === 1 ? "#fff" : defaultStyle.backgroundColor,
  }),

  bottomSheetHeader: {
    backgroundColor: defaultStyle.secondaryColor,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bottomSheetContent: {
    backgroundColor: defaultStyle.secondaryColor,
    height: 68,
  },

  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOption: (selected) => ({
    flex: 1,
    backgroundColor: defaultStyle.primaryColor,
    color: defaultStyle.secondaryColor,
    margin: 10,
    padding: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: selected ? 3 : 0,
    borderColor: defaultStyle.backgroundColor,
  }),
};
