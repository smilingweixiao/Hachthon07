export async function ParseMessage() {

    const targetWords = ["ghast","fox","Sathan"];
    const description = ["a ghast and a fox", "fox", "apple and Sathan", "Sathan Sathan"]; 

    var ans = [];
    description.some(elem => { 
        
        targetWords.some(vocab => {
           if(elem.indexOf(vocab) != -1){
                ans.push(vocab);
            }
        }
        )
    });
    console.log('ans = ');
    console.log(ans);


}    