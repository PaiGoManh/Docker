import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [certiid, setcertiid] = useState('');
  const navigate = useNavigate();

  const redirectToCertificate = () => {
    navigate(`/certificate/${certiid}`);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="font-extrabold text-3xl mb-7">Certificate DApp</h1>
      <div className="pb-4">
        <img src={Logo} width="200" height="200" />
      </div>
      <input
        type="text"
        id="CertificateID"
        name="CertificateID"
        className="border-2 border-zinc-950 mb-2"
        placeholder="Enter Certificate ID to View"
        value={certiid}
        onChange={(e) => setcertiid(e.target.value)}
      />
      <button
        className="border-1 bg-cyan-700 px-8 py-4 rounded text-white"
        onClick={redirectToCertificate}
      >
        Search
      </button>
    </div>
  );
};

export default Home;
