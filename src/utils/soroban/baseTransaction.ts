import { TransactionBuilder, Networks, Account, xdr, Operation } from 'stellar-sdk';

import getFee from 'src/utils/createStream/getFee';

const baseTransaction = (account: Account, call: xdr.Operation<Operation.InvokeHostFunction>) => {
  const fee = getFee();

  let transaction = new TransactionBuilder(account, {
    fee,
    networkPassphrase: Networks.FUTURENET,
  });

  transaction = transaction.addOperation(call);
  transaction = transaction.setTimeout(30);

  return transaction.build();
};

export default baseTransaction;
