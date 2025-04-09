document.getElementById('calculate-bmi').addEventListener('click', function () {
    const weightInLbs = parseFloat(document.getElementById('weight').value); 
    const feet = parseFloat(document.getElementById('height').value); 
    const inches = parseFloat(document.getElementById('height-inches').value);

    if (weightInLbs > 0 && (feet > 0 || inches > 0)) {
        const weightInKg = weightInLbs * 0.453592;
        const heightInMeters = (feet * 0.3048) + (inches * 0.0254);
        const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
        document.getElementById('finalresults').value = `Your BMI is ${bmi}`;

        // Update BMI text. Explains what needs to happen based on the BMI value.
        const bmiText = document.getElementById('bmi-text');
        if (bmi < 18) {
            bmiText.innerText = "We need to increase your BMI. A low BMI can indicate that you are underweight, which may lead to health issues such as weakened immune function, fragile bones, and nutrient deficiencies. It's important to maintain a healthy BMI to ensure your body has the necessary energy and nutrients to function properly.";
        } else if (bmi >= 18 && bmi <= 25) {
            bmiText.innerText = "You have a healthy BMI, which means your weight is within a range that is considered optimal for your height. Maintaining a healthy BMI can reduce the risk of health issues such as heart disease, diabetes, and high blood pressure.";
        } else {
            bmiText.innerText = "We need to lower your BMI. A high BMI can indicate that you are overweight or obese, which may increase the risk of serious health issues such as heart disease, type 2 diabetes, high blood pressure, and certain types of cancer. Maintaining a healthy BMI is essential for overall well-being and can improve energy levels, mobility, and reduce the likelihood of chronic illnesses.";
        }
    } else {
        alert("Please enter valid weight and height values greater than zero.");
    }
});