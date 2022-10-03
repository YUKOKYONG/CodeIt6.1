import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isAlice = await ask.ask(
    `Are you Alice?`, 
    ask.yesno
);

const who = isAlice ? 'Alice' : 'Bob';

console.log(`Starting Fortune Telling DApp as ${who}`);

let acc = null;
const createAcc = await ask.ask(
    `Would you like to create an account? (only possible on devnet)`,
    ask.yesno
);
if(createAcc){
    const startingBalance = stdlib.parseCurrency(100);
    acc = await stdlib.newTestAccount(startingBalance);
}
else{
    const secret = await ask.ask(
        `What is your secret?`,
        (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if(isAlice){
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`The contract is deplyod as = ${JSON.stringify(info)}`);
    });
}
else{
    const info = await ask.ask(
        `Please paste the contract information: `,
        JSON.parse
    );
    ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 3);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = {...stdlib.hasRandom};

if(isAlice){
    const amt = await ask.ask(
        `How much do you want to pay?`,
        stdlib.parseCurrency
    );
    interact.payment = amt;
    interact.deadline = {ETH: 100, ALGO: 100, CFX: 1000}[stdlib.connector];
}
else{
    interact.acceptPayment = async (amt) => {
        const accepted = await ask.ask(
            `Do you accept the payment of ${fmt(amt)}?`,
            ask.yesno
        );
        if(!accepted){
            process.exit(0);
        }
    };
}

const FORTUNE = ['GOOD', 'MEDIOCRE', 'BAD'];
const FORTUNES = {
    'Good': 0, 'G': 0, 'g': 0, 'good': 0, 'GOOD': 0,
    'Mediocre': 1, 'M': 1, 'm': 1, 'mediocre': 1, 'MEDIOCRE': 1,
    'Bad': 2, 'B': 2, 'b': 2, 'bad': 2, 'BAD': 2,
};

interact.getFortune = async () => {
    const fortune = await ask.ask(`How do you think about your luck?`, (x) => {
        const fortune = FORTUNES[x];
        if(fortune === undefined){
            throw Error(`Not a valid choice ${fortune}`);
        }
        return fortune;
    });
    console.log(`You think that you have ${FORTUNE[fortune]} fortune`);
    return fortune;
};

const DECISION = ['FALSE', 'TRUE'];
const DECISIONS = {
    'false': 0, 'False': 0, 'f': 0, 'F': 0,
    'true': 1, 'True': 1, 't': 1, 'T': 1,
}
interact.getDecision = async () => {
    const decision = await ask.ask(`You decide that Bob's thought is...?`, (x) => {
        const decision = DECISIONS[x];
        if(decision === undefined){
            throw Error(`Not a valid choice`);
        }
        return decision;
    });
    console.log(`You decided that Bob's thought is ${DECISION[decision]}`);
    return decision;
};

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);

ask.done();

/*
What happens if you refuse to answer a ask.yesno with a "y" or "n"? 
a: It will pop out the following message -
Only y/n are acceptable.
valid answer pls? >
This message tells you to enter the correct choices with only "y" or "n", "Y" or "N" are not allowed either.

How does the Reach program respond if you omit ask.done?
Reach will know that the program stopped asking question, ask.ask and ask.yesno will no longer be used.
*/