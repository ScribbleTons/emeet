import Web3 from 'web3'

const getWeb3 = () => new Promise((resolve, reject)=>{
  //Check if the browser is web3 enabled on loading
  window.addEventListener("load", async () => {

    if(window.ethereum){
      const web3 = new Web3(window.ethereum);
      try{
        //request access to the account
        await window.ethereum.enable();
        resolve(web3);
      }catch(err){
        reject(err);
      }
    }else{
      //if it is a legacy dapp browsers
      if(window.web3){
        const web3 = window.web3;
        console.log("injected web3 detected");
        resolve(web3);
      }else{
        //We fallback to the localhost
        const provider = new Web3.providers.HttpProvider("http://127.0.0.1:9545");
        const web3 = new Web3(provider);
        console.log("new web3 injected");
        resolve(web3);
      }
    }
  })
})

export default getWeb3;
