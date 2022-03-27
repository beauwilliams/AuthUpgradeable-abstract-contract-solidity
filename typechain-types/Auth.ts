/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AuthInterface extends utils.Interface {
  contractName: "Auth";
  functions: {
    "authorise(address)": FunctionFragment;
    "isAuthorised(address)": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unauthorise(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authorise", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isAuthorised",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unauthorise", values: [string]): string;

  decodeFunctionResult(functionFragment: "authorise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorised",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unauthorise",
    data: BytesLike
  ): Result;

  events: {
    "Authorised(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Unauthorised(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Authorised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unauthorised"): EventFragment;
}

export type AuthorisedEvent = TypedEvent<[string], { adr: string }>;

export type AuthorisedEventFilter = TypedEventFilter<AuthorisedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { oldOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type UnauthorisedEvent = TypedEvent<[string], { adr: string }>;

export type UnauthorisedEventFilter = TypedEventFilter<UnauthorisedEvent>;

export interface Auth extends BaseContract {
  contractName: "Auth";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuthInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    authorise(
      adr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAuthorised(adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    isOwner(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unauthorise(
      adr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  authorise(
    adr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAuthorised(adr: string, overrides?: CallOverrides): Promise<boolean>;

  isOwner(account: string, overrides?: CallOverrides): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unauthorise(
    adr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    authorise(adr: string, overrides?: CallOverrides): Promise<void>;

    isAuthorised(adr: string, overrides?: CallOverrides): Promise<boolean>;

    isOwner(account: string, overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unauthorise(adr: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Authorised(address)"(adr?: null): AuthorisedEventFilter;
    Authorised(adr?: null): AuthorisedEventFilter;

    "OwnershipTransferred(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      oldOwner?: null,
      newOwner?: null
    ): OwnershipTransferredEventFilter;

    "Unauthorised(address)"(adr?: null): UnauthorisedEventFilter;
    Unauthorised(adr?: null): UnauthorisedEventFilter;
  };

  estimateGas: {
    authorise(
      adr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAuthorised(adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unauthorise(
      adr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authorise(
      adr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAuthorised(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwner(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unauthorise(
      adr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}