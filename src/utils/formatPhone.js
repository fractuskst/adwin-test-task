export const formatPhone = (input) => {
  let value = input.value.replace(/\D/g, "");

  if (value.startsWith("8") || value.startsWith("7")) {
    value = "7" + value.substring(1);
  }

  if (value.length > 11) {
    value = value.substring(0, 11);
  }

  let formattedValue = "+7";
  if (value.length > 1) {
    formattedValue += " " + value.substring(1, 4);
  }
  if (value.length > 4) {
    formattedValue += " " + value.substring(4, 7);
  }
  if (value.length > 7) {
    formattedValue += " " + value.substring(7, 9);
  }
  if (value.length > 9) {
    formattedValue += " " + value.substring(9, 11);
  }

  input.value = formattedValue;
};
