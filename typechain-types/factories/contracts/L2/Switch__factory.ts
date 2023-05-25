/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Switch, SwitchInterface } from "../../../contracts/L2/Switch";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_veaInbox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lightBulb",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "messageId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "lightBulbOwner",
        type: "address",
      },
    ],
    name: "lightBulbToggled",
    type: "event",
  },
  {
    inputs: [],
    name: "lightBulb",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "turnOnLightBulb",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "veaInbox",
    outputs: [
      {
        internalType: "contract IVeaInbox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161037838038061037883398101604081905261002f91610062565b6001600160a01b039182166080521660a052610095565b80516001600160a01b038116811461005d57600080fd5b919050565b6000806040838503121561007557600080fd5b61007e83610046565b915061008c60208401610046565b90509250929050565b60805160a0516102b36100c5600039600081816098015261011f015260008181604b015260f201526102b36000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806302d3e23614610046578063c09e221114610089578063d9e9637414610093575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100916100ba565b005b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b604080513360208201526000910160408051601f19818403018152908290526317e1625b60e21b825291506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635f85896c90610152907f0000000000000000000000000000000000000000000000000000000000000000906345fbb5ed60e01b9087906004016101de565b6020604051808303816000875af1158015610171573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610195919061024c565b6040805167ffffffffffffffff831681523360208201529192507ffbd1c26ed60fdf8ad45a6a74f683f5c409c7557a47cd68fbfd8656d34f5d94c7910160405180910390a15050565b60018060a01b03841681526000602063ffffffff60e01b85168184015260606040840152835180606085015260005b818110156102295785810183015185820160800152820161020d565b506000608082860101526080601f19601f83011685010192505050949350505050565b60006020828403121561025e57600080fd5b815167ffffffffffffffff8116811461027657600080fd5b939250505056fea2646970667358221220fb3b74118f1ad615d39d5b8775121475f8afa9aae81f592ea05aa983ae4f717364736f6c63430008120033";

type SwitchConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwitchConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Switch__factory extends ContractFactory {
  constructor(...args: SwitchConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _veaInbox: string,
    _lightBulb: string,
    overrides?: Overrides & { from?: string }
  ): Promise<Switch> {
    return super.deploy(
      _veaInbox,
      _lightBulb,
      overrides || {}
    ) as Promise<Switch>;
  }
  override getDeployTransaction(
    _veaInbox: string,
    _lightBulb: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_veaInbox, _lightBulb, overrides || {});
  }
  override attach(address: string): Switch {
    return super.attach(address) as Switch;
  }
  override connect(signer: Signer): Switch__factory {
    return super.connect(signer) as Switch__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwitchInterface {
    return new utils.Interface(_abi) as SwitchInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Switch {
    return new Contract(address, _abi, signerOrProvider) as Switch;
  }
}
