const {ethers,utils} = require('ethers');
const fs = require('fs');

// mnemonic
const mnemonic = '';

const hdNode = utils.HDNode.fromMnemonic(mnemonic);


deriviation = {
    metamask : "m/44'/60'/0'/0/",
    ledger : "m/44'/60'/"

}

// Account number
const tries = 20;

async function getAccount(){
    for(let i=0;i<tries;i++){
        let path = deriviation.metamask + i;
        console.log(path)
        let a = hdNode.derivePath(path);
        console.log(a.address)
        const content = a.address + "\n" + a.privateKey + "\n";
        fs.appendFile('Account.txt', content, err =>{
            if(err)console.error(err);
        });
    }
}
getAccount()
