import { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";

// import { contractABI, contractAddress } from "../utils/constants";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    provider: null,
    signer: null,
    transactionsContract: null,
  });

  const connectWallet = async () => {
    // const contractAddress = contractAddress;
    // const contractABI = contractABI;
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(account);
        setCurrentAccount(account[0]);
      }
      //   const provider = new ethers.providers.Web3Provider(ethereum);
      //   const signer = provider.getSigner();
      //   const transactionsContract = new ethers.Contract(
      //     contractAddress,
      //     contractABI,
      //     signer
      //   );
      //   setState({ provider, signer, transactionsContract });
    } catch (error) {
      console.log(error);
    }
  };

  const sendTransaction = async (amount) => {
    try {
      if (ethereum) {
        const parsedAmount = ethers.utils.parseEther(amount);

        console.log(parsedAmount);
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: "0x1C61FeFAA240C08B9D11bE13f599467baAb303F3",
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });

        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        currentAccount,
        connectWallet,
        isLoading,
        sendTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
