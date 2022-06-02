
const checkWord = require('check-word')
const validWordList = checkWord('en')

const tumbler1 = "bdfhlmpstw"
const tumbler2 = "aehilnoruy"
const tumbler3 = "aeklmnorst"
const tumbler4 = "deklmnpsty"


const generatePermutations = (list1, list2, list3, list4) => {
    //console.log(list1, list2, list3, list4)
    let outlist = []
    let counter = 0
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++){
            for (let k = 0; k < list3.length; k++) {
                for (let l = 0; l < list4.length; l++) {
                    counter++
                    let temp = `${list1.charAt(i)}` + `${list2.charAt(j)}` + `${list3.charAt(k)}` + `${list4.charAt(l)}`
                    if (validWordList.check(temp)) outlist.push(temp)
                }
            }
        }
    }
    console.log("counter:", counter)
    console.log(outlist)
}

generatePermutations(tumbler1, tumbler2, tumbler3, tumbler4);


