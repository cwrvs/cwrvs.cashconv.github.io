Here's the code refactored to incorporate marginal tax rates and a checkbox to factor in tax savings:
function calculateTaxRate(annualIncome, taxRateCheckbox) {
  const taxBrackets = [
    { lowerBound: 0, upperBound: 9875, taxRate: 0.10 },
    { lowerBound: 9876, upperBound: 40125, taxRate: 0.12 },
    { lowerBound: 40126, upperBound: 85525, taxRate: 0.22 },
    { lowerBound: 85526, upperBound: 163300, taxRate: 0.24 },
    { lowerBound: 163301, upperBound: 207350, taxRate: 0.32 },
    { lowerBound: 207351, upperBound: 518400, taxRate: 0.35 },
    { lowerBound: 518401, upperBound: Infinity, taxRate: 0.37 },
  ];

  if (!taxRateCheckbox.checked) {
    return 0; // No tax savings if checkbox is unchecked
  }

  for (const bracket of taxBrackets) {
    if (annualIncome <= bracket.upperBound) {
      return bracket.taxRate;
    }
  }
}

function calculateLoanComparison() {
  // ... existing code ...

  const taxRate = calculateTaxRate(annualIncome, document.getElementById('factorTaxCheckbox'));

  // ... rest of the code using taxRate ...
}

This code defines an array of tax brackets containing lower bounds, upper bounds, and corresponding tax rates. The calculateTaxRate function iterates through the brackets to find the applicable rate based on income and the checkbox state. If the checkbox is unchecked, it returns 0 to avoid tax savings calculation.
This implementation allows you to factor in tax savings based on the user's selection and provides a more accurate comparison.
