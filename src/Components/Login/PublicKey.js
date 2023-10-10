import React, { useState } from 'react';

function PublicKey() {
  const [inputData, setInputData] = useState('');
  const [encryptedData, setEncryptedData] = useState('');

  const handleEncrypt = () => {
    // Generate a new RSA key pair (this should ideally be done on the server side)
    const keyPair = window.crypto.subtle.generateKey(
      {
        name: 'RSA-OAEP',
        modulusLength: 2048,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: 'SHA-256',
      },
      true,
      ['encrypt', 'decrypt']
    );

    const data = new TextEncoder().encode(inputData);

    keyPair.then(async (key) => {
      const encryptedBuffer = await window.crypto.subtle.encrypt(
        {
          name: 'RSA-OAEP',
        },
        key.publicKey,
        data
      );

      const encryptedArray = Array.from(new Uint8Array(encryptedBuffer));
      const encryptedHex = encryptedArray.map((byte) =>
        byte.toString(16).padStart(2, '0')
      );

      setEncryptedData(encryptedHex.join(''));
    });
  };

  return (
    <div>
      <h1>RSA Encryption Example</h1>
      <div>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={handleEncrypt}>Encrypt</button>
      </div>
      <div>
        <h2>Encrypted Data</h2>
        <p>{encryptedData}</p>
      </div>
    </div>
  );
}

export default PublicKey;
