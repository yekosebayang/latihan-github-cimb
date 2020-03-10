let themeat = ['a','k','i','m','u','s','e','b','o']
let newa = []
for (i=0; i<themeat.length; i++)
    {if ((themeat[i] == "a") || (themeat[i] == "i") || (themeat[i] == "u") || (themeat[i] == "e") || (themeat[i] == "o"))
        {newa += ''
        // console.log(newa)
    }
    else
        {newa += themeat[i]}}

console.log(newa)
