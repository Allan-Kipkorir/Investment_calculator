import classes from "./Investment.module.css";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const Investment = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.investments.map((investments) => {
          return (
            <tr key={investments.year}>
              <td>{investments.year}</td>
              <td>{formatter.format(investments.savingsEndOfYear)}</td>
              <td>{formatter.format(investments.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  investments.savingsEndOfYear -
                    props.initialInvestments -
                    investments.yearlyContribution * investments.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestments +
                    investments.yearlyContribution * investments.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Investment;
