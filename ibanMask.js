function ibanMask(iban) {
  return iban
    .replace(/\s\s+/g, " ")
    .replace(/[^0-9A-z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .toUpperCase()
    .trim();
}
