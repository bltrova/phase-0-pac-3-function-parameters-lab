function introduction(name) {
  return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name, language) {
  if(name === "Aki") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  if(language === "React") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
  if(name === "Gracie") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
}
 