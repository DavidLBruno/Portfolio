export const validate = (input, error) => {
  const changeError = error;
  const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    subject: /^[a-zA-ZÀ-ÿ\s]{1,300}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const value = input[Object.keys(input)[0]];
  switch (Object.keys(input)[0]) {
    case "name":
      if (!expresiones.name.test(value)) {
        changeError.name = "El nombre no cumple las condiciones";
        return changeError;
      } else {
        changeError.name = "";
        return changeError;
      }
    case "mail":
      if (!expresiones.mail.test(value)) {
        changeError.mail = "El Mail no cumple las condiciones";
        return changeError;
      } else {
        changeError.mail = "";
        return changeError;
      }
    case "subject":
      if (!expresiones.subject.test(value)) {
        changeError.subject = "El asunto no cumple las condiciones";
        return changeError;
      } else {
        changeError.subject = "";
        return changeError;
      }
  }
};
