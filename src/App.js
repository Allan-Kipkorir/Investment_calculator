import Form from "./Components/Form/Form";
import Heading from "./Components/Heading/Heading";
import Investment from "./Components/Investments/Investment";
import { useState } from "react";
function App() {
  const [data, setData] = useState(null);
  //creating an empty array and setting it as state value
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    setData(userInput);
  };
  const yearlyData = []; // per-year results
  if (data) {
    let currentSavings = +data["current_savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +data["yearly_contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +data["expected_return"] / 100;
    const duration = +data["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  return (
    <div>
      <Heading />
      <Form onCalculateHandler={calculateHandler} />
      {!data && <p style={{ textAlign: "center" }}> No Data to be displayed</p>}
      {data && (
        <Investment
          investments={yearlyData}
          initialInvestments={data["current_savings"]}
        />
      )}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
