/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILightBulb,
  ILightBulbInterface,
} from "../../../contracts/interfaces/ILightBulb";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        internalType: "address",
        name: "lightBulbOwner",
        type: "address",
      },
    ],
    name: "turnOn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILightBulb__factory {
  static readonly abi = _abi;
  static createInterface(): ILightBulbInterface {
    return new utils.Interface(_abi) as ILightBulbInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILightBulb {
    return new Contract(address, _abi, signerOrProvider) as ILightBulb;
  }
}
