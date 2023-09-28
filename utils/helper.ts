export const helperChangeNumber = (e: string) => {
  let temp = e.replace(/\D/g, "");
  if (parseInt(temp) > 40) {
    temp = "40";
  }
  return temp;
};
