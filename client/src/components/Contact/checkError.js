export const validate = (input) => {
  const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const value = input[Object.keys(input)[0]];
  switch (Object.keys(input)[0]) {
    case "name":
      if (!expresiones.name.test(value)) {
        console.log("Mal escrito");
      }
      break;
    case "mail":
      break;
    case "subject":
      break;
  }
};
