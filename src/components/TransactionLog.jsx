import { useState } from "react";
import { useSelector } from "react-redux";

function TransactionLog() {
  const [hidden, setHidden] = useState(false);
  const history = useSelector((state) => state.bankAccount.history);
  console.log(history);

  return (
    <div className="bg-white py-4 px-10 w-4/5 flex-col flex justify-center rounded-3xl mb-4">
      <h1 className="text-3xl font-bold">Transaction Log</h1>
      <button
        className="bg-blue-500 rounded w-[150px] p-1 my-2 font-bold"
        onClick={() => setHidden(!hidden)}
      >
        Hide Logs
      </button>
      <div className="min-h-[300px] bg-gray-300 rounded-md overflow-y-auto">
        {!hidden &&
          history.map((log) => (
            <div className="py-2 px-4 bg-gray-500 my-2 rounded-lg" key={log.id}>
              <h3 className="text-white">{`${log.type} : Amount $${log.amount}`}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TransactionLog;
