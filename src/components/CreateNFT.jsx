import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "17px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "3px solid #e7eaf3",
    borderRadius: "0.5rem",
    background: "#d0d3f5",
   
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch]
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
     
      <div>

      <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={<h1
            style={{
              textAlign: "center",
              color: "#3a3b3f",
              paddingBottom: "5px",
              paddingLeft: "50px",
              fontSize: "20px",
              
            }}
          >
            
           
               ✨ Create Your Own AUNS NFTs!
         
          </h1>}
        >
        
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "5px",
            paddingLeft: "50px",
            fontSize: "15px",
            color: "#606169"
          }}
        >
         You can now mint NFTs that will be listed on this marketplace.
         Once a purchase is made, the tokens will be automatically
         sent to your wallet address. <br/> Withdraw to Coinbase or Kraken 
         to exchange for FIAT or spend crypto online on goods and services!<br/>
         <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://aunseco-nft-upload.netlify.app/uploader"
          >
            Click here to mint your own AUNS NFTs!
          </a>
        
       
        
        </h1>
        </Card>
        <Card
          style={styles.card}
          title={<h1
            style={{
              textAlign: "center",
              color: "#3a3b3f",
              paddingBottom: "5px",
              paddingLeft: "50px",
              fontSize: "20px",
            }}
          >
          
            
          🌊 Check out our OpenSea NFT collections
           
          </h1>}
        >
          <div>
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "5px",
            paddingLeft: "50px",
            fontSize: "15px",
            color: "#606169"
          }}
        >
         If you'd like to support the AUNS Ecosystem,<br/>
       you can purchase one of our NFTs listed on OpenSea.<br/>
       <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aunseco.com/auns-nfts"
          >
            Click here to check out our NFT collections!
          </a>
        
        
        </h1>
      </div>
        </Card>
       
      </div>
    </div>
  );
}
