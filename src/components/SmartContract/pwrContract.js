import Web3 from "web3";
import erc20abi from "./ERC1155Collection.json";

let provider;
if (window?.ethereum?.providers !== undefined) {
  const providerLength = window.ethereum.providers.length;
  provider = window.ethereum.providers[providerLength - 1];
} else {
  provider = window.ethereum;
}

var web3 = new Web3(provider);

var pwrContract = new web3.eth.Contract(erc20abi.abi, "0xdff9ea171a93e88f5c9bded8df9a735fd97d9cb5");

export default pwrContract;
