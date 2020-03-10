


for (let i=1; i<=20; i++) //kondisi dan efeknya dimasukan duluan
    {if (i % 5 == 0 && i % 3 == 0)
        {console.log((i) + ' FizzBuzz')
        i += 20 }  //line ini diniatkan untuk exit loop, atau gunakan  
    else if (i % 3 == 0) //break instead
        {console.log((i) + ' Fizz')}
    else  if (i % 5 == 0)
        {console.log((i) + ' Buzz')}
    else
        console.log(i)   
}