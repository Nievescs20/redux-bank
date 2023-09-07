import Bank from "./components/Bank";
import TransactionLog from "./components/TransactionLog";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[100vh]">
      <div className="bg-gray-300 w-3/5 flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold py-4">Bank Account</h1>
        <Bank />
        <TransactionLog />
      </div>
    </div>
  );
}

export default App;
