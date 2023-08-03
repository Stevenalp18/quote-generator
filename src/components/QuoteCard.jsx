import { useEffect, useState, useRef } from "react";
import { baseUrl } from "../data/baseUrl";

const QuoteCard = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [randNum, setRandNum] = useState(0);
  const [saveData, setSaveData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const modal = useRef();
  const quoteBox = useRef();

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

  useEffect(() => {
    console.log(saveData);
  }, [saveData]);

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
        <div
          ref={quoteBox}
          className="flex flex-col border-2 p-6 sm:p-10 rounded-xl h-96"
        >
          <div className="mb-6 relative ">"{quotesData[randNum].quote}"</div>
          <div>- "{quotesData[randNum].author}"</div>
        </div>
      );
    }
  };

  const handleClick = () => {
    if (apiCheck() === true) {
      setRandNum(Math.floor(Math.random() * quotesData.length));
    } else {
      alert("api not yet loaded");
    }
  };

  const handleSave = () => {
    if (apiCheck()) {
      const quote = quotesData[randNum].quote;
      const author = quotesData[randNum].author;
      const id = quotesData[randNum].id;
      setSaveData((prevState) => [
        ...prevState,
        { quote: quote, author: author, id: id },
      ]);
      console.log(saveData);
    } else {
      alert("can not save, not yet loaded");
    }
  };

  const showSavedList = () => {
    setModalOpen(!modalOpen);
    modal.current.classList.toggle("hidden");
    quoteBox.current.classList.toggle("hidden");
  };

  return (
    <div className="w-4/5 lg:w-2/5 text-[1.5rem] gap-10 m-auto relative top-20 sm:p-10 md:text-3xl lg:text-4xl font-['Amatic_SC']">
      {renderItem()}
      {/* Below gets hidden by default but appears over renderItem */}
      <div
        ref={modal}
        className="text-2xl flex flex-col gap-10 bg-slate-200 border-2 border-slate-300 p-6 sm:p-10 rounded-xl h-96 overflow-y-scroll scrollbar-hide text-black hidden"
      >
        {saveData.map((item) => {
          return (
            <div>
              <div>
                <div>"{item.quote}"</div>
                <div>- "{item.author}"</div>
              </div>
            </div>
          );
        })}
      </div>
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
        <button
          onClick={() => handleSave()}
          className="hover:text-white active:text-slate-200"
        >
          <i className="fa-solid fa-bookmark fa-sm" />
          Save Quote
        </button>
        <button
          onClick={() => showSavedList()}
          className="hover:text-white active:text-slate-200"
        >
          <i className="fa-solid fa-list fa-sm" />
          Saved Quotes
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
