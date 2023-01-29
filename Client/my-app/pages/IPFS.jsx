import { useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

const IPFS = () => {
  const [fileUrl, setFileUrl] = useState("");

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  async function onChange(e) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      const resFile = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            pinata_api_key: `fb2581ee7802449884ac`,
            pinata_secret_api_key: `bb34b360ce3492a93c24a44732ea9f3453a091e9f04b0d47c9418c10457e337d`,
            "Content-Type": `multipart/form-data;`,
          },
        }
      );

      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      console.log(ImgHash);
      setFileUrl(resFile.data.IpfsHash);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function createItem() {
    // e.preventDefault();
    console.log("creating NFT");
    const { name, description, price } = form;
    if (!name || !description || !price) return;

    const metadata = JSON.stringify({
      name: name,
      keyvalues: {
        description: description,
        image: fileUrl,
      },
    });
    console.log(metadata);

    const formData = new FormData();
    console.log(localFileUrl);
    formData.append("file", localFileUrl);
    formData.append("pinataMetadata", metadata);
    try {
      const resFile = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            pinata_api_key: `fb2581ee7802449884ac`,
            pinata_secret_api_key: `bb34b360ce3492a93c24a44732ea9f3453a091e9f04b0d47c9418c10457e337d`,
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          },
        }
      );
      console.log("location :: " + resFile.data);
      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      console.log(ImgHash);
      // createSale(ImgHash);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  return (
    <div>
      <div className="flex justify-center h-screen">
        <div className="w-1/2 flex flex-col pb-12">
          <input
            placeholder="Asset Name"
            className="mt-8 border rounded p-4"
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
          <textarea
            placeholder="Asset Description"
            className="mt-2 border rounded p-4"
            onChange={(e) => {
              setForm({ ...form, description: e.target.value });
            }}
          />
          <input
            placeholder="Asset Price in Matic"
            className="mt-2 border rounded p-4"
            onChange={(e) => {
              setForm({ ...form, price: e.target.value });
            }}
          />
          <input
            type="file"
            name="Asset"
            className="my-4"
            onChange={onChange}
          />
          {fileUrl && (
            <Image
              className="rounded mt-4"
              width="350"
              src={
                "https://res.cloudinary.com/demo/image/fetch/ipfs://" + fileUrl
              }
              alt="image"
              height="20"
            />
          )}
          <button
            onClick={createItem}
            className="font-bold mt-4 bg-white text-white rounded p-4 shadow-lg"
          >
            Create Digital Asset
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPFS;
