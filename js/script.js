const calculateLoan = () => {
  // @ts-ignore
  const loanAmountValue = document.getElementById("loan-amount").value;

  // @ts-ignore
  //   console.log(loanAmountValue);
  const InterestRate = document.getElementById("Interest-Rate").value;
  // @ts-ignore
  const MountToPay = document.getElementById("Mount-to-pay").value;

  const interest = (loanAmountValue * (InterestRate * 0.01)) / MountToPay;

  const monthlyPayment = (loanAmountValue / MountToPay + interest).toFixed(2);

  // @ts-ignore
  const paymentValue = (document.getElementById(
    "payment"
  ).innerHTML = `monthly Payment: ${monthlyPayment}`);
  //   console.log(paymentValue);
  //   .innerHTML`monthtly Payment: ${monthlyPayment} `;
};
