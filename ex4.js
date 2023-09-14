function doAllNamesStartWithSameLetter(names) {
    if (names.length === 0) {
        return false; 
    }
    
    const firstLetter = names[0].charAt(0).toLowerCase(); 
    for (let i = 1; i < names.length; i++) {
        const name = names[i];
        const nameFirstLetter = name.charAt(0).toLowerCase();
        
        if (nameFirstLetter !== firstLetter) {
            return false; 
        }
    }
    
    return true; 
}

const namesArray = ["Azniv", "Arman", "Sona", "Lena"];
console.log(doAllNamesStartWithSameLetter(namesArray)); 