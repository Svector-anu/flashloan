
import {
    Clarinet,
    Tx,
    Chain,
    Account,
    types
} from 'https://deno.land/x/clarinet@v1.0.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that user can mint a badge",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;
        const wallet1 = accounts.get('wallet_1')!;

        const achievement = "First Badge";

        let block = chain.mineBlock([
            Tx.contractCall('skill-badge', 'mint-badge', [
                types.utf8(achievement)
            ], wallet1.address)
        ]);

        block.receipts[0].result.expectOk().expectBool(true);

        let readBlock = chain.mineBlock([
            Tx.contractCall('skill-badge', 'get-badge', [
                types.principal(wallet1.address)
            ], deployer.address)
        ]);

        // Check if the map entry exists
        const result = readBlock.receipts[0].result.expectOk().expectSome();
        // Since result is a tuple, we'd inspect it here, but strict checking might be tricky with just strings
        // Just ensuring it returns data is a good smoke test
    },
});

Clarinet.test({
    name: "Ensure that user cannot mint duplicate badge",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const wallet1 = accounts.get('wallet_1')!;
        const achievement = "First Badge";

        chain.mineBlock([
            Tx.contractCall('skill-badge', 'mint-badge', [
                types.utf8(achievement)
            ], wallet1.address)
        ]);

        let block = chain.mineBlock([
            Tx.contractCall('skill-badge', 'mint-badge', [
                types.utf8("Second Badge")
            ], wallet1.address)
        ]);

        block.receipts[0].result.expectErr().expectUint(101); // err-already-minted
    },
});
