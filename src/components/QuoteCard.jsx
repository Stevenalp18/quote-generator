import { useEffect, useState } from "react";
import { baseUrl } from "../data/baseUrl";

const QuoteCard = () => {
  const [quotesData, setQuotesData] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        if (response.ok) {
          console.log("SUCCESS");
          return response.json();
        } else {
          console.log("Not Successful");
        }
      })
      .then((data) => setQuotesData(data.quotes))
      .catch((error) => console.log("ERROR", error.status));
  }, []);

  return (
    <div className="w-3/4 lg:w-1/3 rounded-xl m-auto relative top-1/3 p-4 sm:p-10 text-2xl sm:text-4xl border-2 font-['Amatic_SC']">
      <div className="mb-6">"Quote blah blah blah here"</div>
      <div>
        <div>hi</div>
      </div>
      <div>
        <button onClick={() => console.log(quotesData)}>
          click for a quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
