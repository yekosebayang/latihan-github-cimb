

let scnd = 0
for (let i=1; i<=50; i++) //kondisi dan efeknya dimasukan duluan
    {if (i % 5 == 0 && i % 3 == 0)
        {console.log((i) + ' FizzBuzz')
        scnd += 1}
        if (scnd == 2)
            {continue
            console.log('diatas bukan fizzbuzz ke-2 FizzBuzz')}    
    else if (i % 3 == 0) //break instead
        {console.log((i) + ' Fizz')}
    else  if (i % 5 == 0)
        {console.log((i) + ' Buzz')}
    else
        console.log(i)   
}