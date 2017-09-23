

// the new sexy way
function findPalindroms(pSentence){
    return pSentence.replace(/\W/g, " ")
                    .toLowerCase()
                    .split(" ")
                    .filter(word => word == word.split("").reverse().join("") && word.length>1);
}


// old way
function alternative(pSentence){
    let sentence = pSentence.replace(/\W/g, " ").toLowerCase();
    let words = sentence.split("");
    let result = [];
    
    for(let i=0; i<words.length; i++){
        if(words[i] == words[i].split("").reverse().join("") && words[i].length>1){
            result.push(words[i]);
        }
    }
    
    return result;
}



String.prototype.areYouPalindrom = function(){
    return this == this.split("").reverse().join("") && this.length>1;
}

// the new sexy way
function alternative2(pSentence){
    return pSentence.replace(/\W/g, " ")
        .toLowerCase()
        .split(" ")
        .filter(word => word.areYouPalindrom());
}


function alternative3(pSentence){
    let sentence = pSentence.replace(/\W/g, " ").toLowerCase();
    let words = sentence.split("");
    let result = [];

    for(let word of words){
        if(word.areYouPalindrom()){
            result.push(word);
        }
    }

    return result;
}