import Web3 from 'web3';
import configuration from '../build/contracts/Credentials.json';
import 'bootstrap/dist/css/bootstrap.css';




const CONTRACT_ADDRESS =
  configuration.networks['1337'].address;
const CONTRACT_ABI = configuration.abi;

const web3 = new Web3(
  Web3.givenProvider || 'http://127.0.0.1:7545'
);
const contract = new web3.eth.Contract(
  CONTRACT_ABI,
  CONTRACT_ADDRESS
);

let account;

const accountEl = document.getElementById('account');
const ticketEl = document.getElementById('ticket');
const infoEl = document.getElementById('info');
const addEl = document.getElementById('add');


const buyTicket = async () => {
    
    await contract.methods.registration(toString(addEl.value),toString(infoEl.value)).send({ from: account, value: 1e17 });
};

const refreshTickets = async () => {
      ticketEl.onclick = await buyTicket.bind(null);
};

const main = async () => {
  const accounts = await web3.eth.requestAccounts();
  account = accounts[0];
  accountEl.innerText = account;
  
  
  ticketEl.onclick=buyTicket.bind(null);
};

main();