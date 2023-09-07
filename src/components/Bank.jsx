import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, transfer } from "../store/bankSlice";

function Bank() {
  const dispatch = useDispatch();

  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState(0);

  const balance = useSelector((state) => state.bankAccount.balance);

  return (
    <div className="bg-white py-4 px-4 w-4/5 flex-col flex items-center justify-center rounded-3xl">
      <h1 className="text-3xl font-bold">{`Current Balance $${balance}`}</h1>
      <div className="flex w-full px-8 justify-between m-2">
        <h3 className="text-xl mr-2">Deposit</h3>
        <input
          className="bg-gray-300 flex-1 mr-2 indent-4"
          onChange={(e) => setDepositAmount(+e.target.value)}
          value={depositAmount}
          type="number"
          placeholder={0}
        />
        <button
          className="bg-blue-400 px-3 rounded w-[150px]"
          onClick={() => {
            dispatch(deposit(depositAmount));
            setDepositAmount(0);
          }}
        >
          Deposit
        </button>
      </div>
      <div className="flex w-full px-8 justify-between m-2">
        <h3 className="text-xl mr-2">Withdraw</h3>
        <input
          className="bg-gray-300 flex-1 mr-2 indent-4"
          onChange={(e) => setWithdrawAmount(+e.target.value)}
          value={withdrawAmount}
          type="number"
          placeholder={0}
        />
        <button
          className="bg-blue-400 px-3 rounded w-[150px]"
          onClick={() => {
            dispatch(withdraw(withdrawAmount));
            setWithdrawAmount(0);
          }}
        >
          Withdraw
        </button>
      </div>
      <div className="flex w-full px-8 justify-between m-2">
        <h3 className="text-xl mr-2">Transfer</h3>
        <div className="flex items-center">
          <h3 className=" mr-2">Name:</h3>
          <input
            className="bg-gray-300 flex-1 indent-4"
            onChange={(e) => setTransferTo(e.target.value.toUpperCase())}
            value={transferTo}
            type="text"
            placeholder="Transfer to:"
          />
        </div>
        <div className="flex items-center justify-center">
          <h3 className=" mr-2">Amount:</h3>
          <input
            className="bg-gray-300 flex-1 indent-4"
            onChange={(e) => setTransferAmount(+e.target.value)}
            value={transferAmount}
            type="number"
            placeholder={0}
          />
        </div>
        <button
          className="bg-blue-400 px-3 rounded w-[150px]"
          onClick={() => {
            dispatch(transfer({ name: transferTo, amount: transferAmount }));
            setTransferTo("");
            setTransferAmount(0);
          }}
        >
          Transfer
        </button>
      </div>
    </div>
  );
}

export default Bank;
