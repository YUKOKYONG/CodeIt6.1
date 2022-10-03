'reach 0.1'

const Player = {
    getFortune: Fun([], UInt),
    getDecision: Fun([], UInt),
}

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        payment: UInt,
    })

    const Bob = Participant('Bob', {
        ...Player,
        acceptPayment: Fun([UInt], Null),
    })
    init()

    Alice.only(() => {
        const payment = declassify(interact.payment);
    })
    Alice.publish(payment)
        .pay(payment)
    commit()

   
    Bob.only(() => {
        
    })
    Bob.pay(payment)

    var decision = 0;
    invariant(balance() == 2 * payment)
    while(decision == 0){
        commit()

        Bob.only(() => {
            const fortuneBob = declassify(interact.getFortune());
        })
        Bob.publish(fortuneBob)
        commit()

        Alice.only(() => {
            const decisionAlice = declassify(interact.getDecision());
        })
        Alice.publish(decisionAlice)

        decision = decisionAlice;
        continue;
    }

    transfer(2 * payment).to(Bob)
    commit()

    Bob.only(() => {
        interact.acceptPayment(payment);
    })
})
