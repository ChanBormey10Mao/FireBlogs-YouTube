const validateName = (name) => {
  if (!name.length) {
    return { error: false, errorMsg: "This field is required" };
  }
  if (!name.length >= 15) {
    return {
      error: true,
      errorMsg: "Name have be less than 15 character",
    };
  }
};

export { validateName };
