import { createSlice } from "@reduxjs/toolkit";

var moc = [
  {
    type: "button",
    label: "Submit",
    key: "submit",
    size: "md",
    block: false,
    action: "submit",
    disableOnInvalid: true,
    theme: "primary",
    input: true,
    placeholder: "",
    prefix: "",
    customClass: "",
    suffix: "",
    multiple: false,
    defaultValue: null,
    protected: false,
    unique: false,
    persistent: false,
    hidden: false,
    clearOnHide: true,
    refreshOn: "",
    redrawOn: "",
    tableView: false,
    modalEdit: false,
    dataGridLabel: true,
    labelPosition: "top",
    description: "",
    errorLabel: "",
    tooltip: "",
    hideLabel: false,
    tabindex: "",
    disabled: false,
    autofocus: false,
    dbIndex: false,
    customDefaultValue: "",
    calculateValue: "",
    calculateServer: false,
    widget: {
      type: "input",
    },
    attributes: {},
    validateOn: "change",
    validate: {
      required: false,
      custom: "",
      customPrivate: false,
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    conditional: {
      show: null,
      when: null,
      eq: "",
    },
    overlay: {
      style: "",
      left: "",
      top: "",
      width: "",
      height: "",
    },
    allowCalculateOverride: false,
    encrypted: false,
    showCharCount: false,
    showWordCount: false,
    properties: {},
    allowMultipleMasks: false,
    addons: [],
    leftIcon: "",
    rightIcon: "",
    id: "e7mu5js",
  },
];

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState: { components: [] },
  reducers: {
    createFormBuilderSchema: (state, action) => {
      console.log("action", action.payload);
      state.components = [...action.payload.components];
      console.log("state", state);
    },
  },
});

export const { createFormBuilderSchema } = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
