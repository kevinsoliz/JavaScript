let hour = 16;

if (hour >= 6 && hour < 12) 
    console.log("Good morning");
else if (hour >= 12 && hour < 18)
    console.log("Good afternoon");
else 
    console.log("Good evening");

//loops
for(let i = 0; i < 5; i++) {
    if(i % 2 === 1) console.log(i);
}

// do-while
let i = 9;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);