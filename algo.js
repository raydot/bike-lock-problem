
const tumbler1 = "bdfhlmpstw"
const tumbler2 = "aehilnoruy"
const tumbler3 = "aeklmnorst"
const tumbler4 = "deklmnpsty"


const generatePermutation = (list1, list2, list3, list4) => {
    console.log(list1, list2, list3, list4)
    let outlist = []
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++){
            for (let k = 0; k < list3.length; k++) {
                for (let l = 0; l < list4.length; l++) {
                outlist.push(`${list1.charAt(i)}` + `${list2.charAt(j)}` + `${list3.charAt(k)}` + `${list4.charAt(l)}`)
                }
            }
        }
    }
    console.log(outlist)
}

generatePermutation(tumbler1, tumbler2, tumbler3, tumbler4);


// n = word length
// letters = valid letters
// const genWordlist = function (n, letters) {
//     let results = []

//     const helper = function(cache) {
//         for (let i =0; i < letters.length; i++) {
//             cache += letters[i]
//             if cache.length
//         }
//     }
// }