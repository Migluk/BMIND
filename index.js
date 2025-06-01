document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const computeBmiButton = document.querySelector('.btn');
    const bmiResultInput = document.getElementById('bmi-result');
    const weightConditionSpan = document.getElementById('weight-condition');

    computeBmiButton.addEventListener('click', () => {
        const heightCm = parseFloat(heightInput.value);
        const weightKg = parseFloat(weightInput.value);

        if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
            bmiResultInput.value = 'Invalid input';
            weightConditionSpan.textContent = 'Please enter valid positive numbers for height and weight.';
            return;
        }

        const heightMeters = heightCm / 100;
        const bmi = weightKg / (heightMeters * heightMeters);

        bmiResultInput.value = bmi.toFixed(2);

        let condition = '';
        if (bmi < 18.5) {
            condition = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            condition = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            condition = 'Overweight';
        } else {
            condition = 'Obesity';
        }

        weightConditionSpan.textContent = condition;
    });
});