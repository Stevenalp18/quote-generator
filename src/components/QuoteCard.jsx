import { useEffect, useState } from "react";
import { baseUrl } from "../data/baseUrl";

const QuoteCard = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [randNum, setRandNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
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
    }, 2000);
  }, []);

  const apiCheck = () => {
    if (quotesData.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const renderItem = () => {
    if (apiCheck() === false) {
      return <div className="animate-bounce">Loading...</div>;
    } else {
      return (
        <div>
          <div className="mb-6">"{quotesData[randNum].quote}"</div>
          <div>- "{quotesData[randNum].author}"</div>
        </div>
      );
    }
  };

  return (
    <div className="w-3/4 lg:w-1/3 rounded-xl m-auto relative top-1/4 p-4 sm:p-10 text-2xl sm:text-4xl border-2 font-['Amatic_SC']">
      {renderItem()}
      <div>
        <button
          className="mt-10"
          onClick={() => {
            if (apiCheck()) {
              console.log(randNum);
              setRandNum(randNum + 1);
            } else {
              alert("api not yet loaded");
            }
          }}
        >
          Click for Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
