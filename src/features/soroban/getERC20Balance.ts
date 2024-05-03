import { Contract, SorobanRpc, Address, scValToBigInt } from 'stellar-sdk';

import createTransaction from '../../utils/soroban/baseTransaction';
import getConfigs from '../getConfigs';

export const getERC20Balance = async (user: string, contract: Contract): Promise<string> => {
  const { sorobanServer: server } = getConfigs();

  const account = await server.getAccount(user);

  const addressScVal = Address.fromString(user).toScVal();
  const call = contract.call('balance', addressScVal);
  const transactionResult = createTransaction(account, call);

  const txSimulate = await server.simulateTransaction(transactionResult);

  const value = scValToBigInt(txSimulate.result.retval);

  return value.toString();
};

export default getERC20Balance;
