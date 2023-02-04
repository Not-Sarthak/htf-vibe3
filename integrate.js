// Import the web3 library
import Web3 from 'web3';

// Import the ABI (Application Binary Interface) of the smart contract
import MusicPlatformABI from './MusicPlatformABI.json';

// Set the provider URL for the 5ire network
const providerURL = "https://5ire.com/rpc";

// Create a new instance of the web3 library
const web3 = new Web3(new Web3.providers.HttpProvider(providerURL));

// Get the address of the deployed smart contract
const contractAddress = "0x1234567890123456789012345678901234567890";

// Create a new instance of the smart contract
const musicPlatform = new web3.eth.Contract(MusicPlatformABI, contractAddress);

// Add a song to the smart contract
async function addSong(title, price, isProtected) {
  await musicPlatform.methods.addSong(title, price, isProtected).send({ from: web3.eth.defaultAccount });
  console.log("Song added successfully!");
}

// Purchase a song from the smart contract
async function purchaseSong(id) {
  await musicPlatform.methods.purchaseSong(id).send({ from: web3.eth.defaultAccount, value: web3.utils.toWei("0.1", "ether") });
  console.log("Song purchased successfully!");
}

// Get the list of songs from the smart contract
async function getSongs() {
  const songCount = await musicPlatform.methods.songCount().call();
  for (let i = 1; i <= songCount; i++) {
    const song = await musicPlatform.methods.songs(i).call();
    console.log("Song ID: " + song.id);
    console.log("Title: " + song.title);
    console.log("Owner: " + song.owner);
    console.log("Price: " + song.price + " wei");
    console.log("Protected: " + song.isProtected);
  }
}
