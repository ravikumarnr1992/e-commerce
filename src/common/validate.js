export function ValidateEmail(input) {
  if (!input.value) {
    return {
      emailError: true,
      message: "Email field empty",
    };
  } else {
    let validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isEmailValid = input?.value?.match(validEmailRegex) ? true : false;
    if (isEmailValid) {
      return {
        emailError: false,
        message: "",
      };
    } else {
      return {
        emailError: true,
        message: "Incorrect email",
      };
    }
  }
}

export function ValidatePassword(input) {
  if (!input.value) {
    return {
      passwordError: true,
      message: "Password field empty",
    };
  } else {
    let validPasswordRegex = /[\w\d]+/;
    let isPasswordValid = input?.value?.match(validPasswordRegex)
      ? true
      : false;
    if (isPasswordValid) {
      return {
        passwordError: false,
        message: "",
      };
    } else {
      return {
        passwordError: true,
        message: "Incorrect password",
      };
    }
  }
}
