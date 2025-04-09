document.getElementById('calculate-bmi').addEventListener('click', function() {
    const weightInLbs = parseFloat(document.getElementById('weight').value); // Weight in pounds
    const feet = parseFloat(document.getElementById('height').value); // Height in feet
    const inches = parseFloat(document.getElementById('height-inches').value); // Additional height in inches

    if (weightInLbs > 0 && (feet > 0 || inches > 0)) {
        // Convert weight to kilograms: 1 pound = 0.453592 kilograms
        const weightInKg = weightInLbs * 0.453592;

        // Convert height to meters: 1 foot = 0.3048 meters, 1 inch = 0.0254 meters
        const heightInMeters = (feet * 0.3048) + (inches * 0.0254);

        // Calculate BMI
        const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

        // Display results
        document.getElementById('finalresults').value = `Your BMI is ${bmi}`;
        document.getElementById('bmi-text').innerText = "Tips for your BMI:";
    } else {
        alert("Please enter valid weight and height values greater than zero.");
    }
});