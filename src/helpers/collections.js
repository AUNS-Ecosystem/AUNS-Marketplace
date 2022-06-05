export const networkCollections = {


  "0x89": [
    //Add Your Collections here
    {
      image:
        "https://lh3.googleusercontent.com/EuuIY-2W0fXikNNcyJcQrqjhw8Duv98Opm__ZXaVwdDGjJ2icuFVCFSSV0vXfRBchdWCx7b_iX224JIDeIFEmRhZmjd48b18rbvvyA=w600",
      name: "AUNS 25k tokens 60% Token Presale",
      addrs: "0x3d64a922db442Db46d20E677B1eF49E86A47177c",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/e3f17df6-db9a-4fa4-b6e1-f7337e6674cd/Studio-Project%20(60).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
      name: "1st AUNS NFT Album",
      addrs: "0x480EE2Fe1A49bbCd26Bc3f1e7406947Bc16F65d8",
    },

    {
      image:
        "https://img1.wsimg.com/isteam/ip/e3f17df6-db9a-4fa4-b6e1-f7337e6674cd/Mages.png.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:600,cg:true/qt=q:85",
      name: "200 AUNS Beta Tokens (Crypto Tap Beta)",
      addrs: "0xc614F64E60fEE2e5dCD1ba9C58CC7D11E014d0Ce",
    },
   
   

  ],

  
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
