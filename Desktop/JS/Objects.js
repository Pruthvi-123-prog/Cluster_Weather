const obj = {
    Name: "Pruthvi",
    Age: "21 years old",
    Char: "Best Character",
    Ability: "Can intercept people"
}
for(const [key, value] of Object.entries(obj)){
    console.log(`${key}: ${value}`);
}