function checkProbabilityTheory (count) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < count; i++) {
        let random = Math.floor(Math.random() * 901) + 100;
        if (random % 2 === 0) {
            even++;
        } else {

            odd++;
        }

    }

    let evenPercent = (even / count) * 100;
    let oddPercent = (odd / count) * 100;

    console.log('Number of generated numbers: ' + count);
    console.log('Number of even numbers: ' + even);
    console.log('Number of odd numbers: ' + odd);
    console.log(evenPercent + '% of the generated numbers are even');
    console.log(oddPercent + '% of the generated numbers are odd');

}

checkProbabilityTheory(1000);
