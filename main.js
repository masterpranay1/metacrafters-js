let nftCollection = [];

function mintNFT(name, description, imageUrl) {
  const nft = {
    name: name,
    description: description,
    imageUrl: imageUrl,
  };
  nftCollection.push(nft);
}

function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("Name: " + nftCollection[i].name);
    console.log("Description: " + nftCollection[i].description);
    console.log("Image URL: " + nftCollection[i].imageUrl);
  }
}

function getTotalSupply() {
  console.log("Total Supply: " + nftCollection.length);
}

mintNFT("AI NFT 1", "An AI-generated NFT image", "https://th.bing.com/th/id/OIG.g_W08QsR1DHFfXCql5.v?pid=ImgGn");
mintNFT("AI 3d nft", "A 3d NFT for Javascript", "https://th.bing.com/th/id/OIG.fCveFyEHFPcGclRY24Fi?pid=ImgGn");
mintNFT("The Rare NFT", "A rare AI generated NFT", "https://th.bing.com/th/id/OIG.8s192yC7ZgtmouSYZhMr?pid=ImgGn");

listNFTs();

getTotalSupply();
