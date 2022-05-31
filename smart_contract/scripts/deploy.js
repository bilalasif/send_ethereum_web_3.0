const main = async() => {
    const Transactions = await hre.ethers.getContractFactory("Transactions");
    const trnasactions = await Transactions.deploy();

    await trnasactions.deployed();

    console.log("Transactions deployed to:", trnasactions.address);
}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain()