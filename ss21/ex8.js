for (let num = 100; num <= 999; num++) {
    let Hundreds = Math.floor(num / 100);
    let Dozens = Math.floor((num / 10) % 10);
    let Units = num % 10;
    
    let total = Hundreds**3 + Dozens**3 + Units**3;
    
    if (total === num) {
        console.log(num);
    }
}