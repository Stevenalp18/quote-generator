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
        <div className="flex flex-col border-2 p-6 sm:p-10 rounded-xl h-96">
          <div className="mb-6 relative ">"{quotesData[randNum].quote}"</div>
          <div>- "{quotesData[randNum].author}"</div>
        </div>
      );
    }
  };

  const handleClick = () => {
    if (apiCheck()) {
      console.log(randNum);
      setRandNum(Math.floor(Math.random() * quotesData.length));
    } else {
      alert("api not yet loaded");
    }
  };

  return (
    <div className="w-4/5 lg:w-2/5 text-[1.5rem] gap-10 m-auto relative top-20 sm:p-10 md:text-3xl lg:text-4xl font-['Amatic_SC']">
      {renderItem()}
      <div className="text-2xl sm:text-3xl m-auto p-4 sm:px-6 flex justify-between">
        <button
          className="hover:text-white active:text-slate-200"
          onClick={() => {
            handleClick();
          }}
        >
          <i className="fa-solid fa-arrows-rotate fa-sm" />
          Click for Quote
        </button>
        <button className="hover:text-white active:text-slate-200">
          <i className="fa-solid fa-bookmark fa-sm" />
          Save Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
