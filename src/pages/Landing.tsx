// src/pages/Landing.tsx
import React, { useEffect } from 'react';
import { Card, Typography } from 'antd';
import axios from 'axios';
import { getUserInfo } from '../helper';
import { TermsAndCondtions } from '../components/TermsConditions';

const { Title, Paragraph } = Typography;

const Landing: React.FC = () => {

  const [showTerms, setShowTerms] = React.useState(false);
  const [acceptTerms, setAccetTerms] = React.useState(false);

  const redirectUser = () => {
    const customHeaders = {
      "API_KEY": import.meta.env.VITE_API_KEY,
      "API_SECRET": import.meta.env.VITE_API_SECRET,
    };
    
    axios
    .post(`https://wallets-feature-be.mangomoss-3595ef97.uksouth.azurecontainerapps.io/api/p2p/connect`, {
      ...getUserInfo().data,
      termsAccepted: acceptTerms
    }, {
      headers: { 
       ...customHeaders
      },
    })
    .then((res) => {
      const userData = res.data;
      window.location.replace(`http://localhost:3000/redirect?redirectToken=${userData.redirectToken}`)
    })
    .catch((err) => {
      if (err.response?.data.code === 2043) {
        setShowTerms(true);
      }
    });
  }

  useEffect(() => {
    if(acceptTerms) {
      redirectUser();
    }
  },[acceptTerms])
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-400">
      <Title className="text-white">Welcome to My Website</Title>
      <Card className="w-[200px] p-8 shadow-lg" onClick={redirectUser}>
       <Paragraph className='font-bold'>P2P</Paragraph> 
      </Card>
    </div>
    {<TermsAndCondtions showTerms={showTerms} setShowTerms={setShowTerms} isAccetingTerms={setAccetTerms} />}
    </>
  );
};

export default Landing;
