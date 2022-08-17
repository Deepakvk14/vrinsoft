import pwrContract from "./pwrContract";
import { getUserAddress } from "./Web3Actions";



// Method to reserved Nfts for users
export const ReserveNFTs = async (tokenIds) => {
  debugger

  let address = await getUserAddress()
  let nft = await pwrContract.methods
    .reserveNFTs(tokenIds)
    .send({ from: address });
  return nft;
};
// Method to get ReserveTokens
export const GetReserveTokens = async () => {
  let ReserveTokens = await pwrContract.methods.getReserveTokens().call();
  return ReserveTokens;
};