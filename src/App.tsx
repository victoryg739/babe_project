import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaUnlock } from "react-icons/fa";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLockModalOpen, setIsLockModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "What about a matcha drink",
      "What about your favourite Tteokbokki",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleMailClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUnlockClick = () => {
    setIsLockModalOpen(true);
  };

  const handlePasswordSubmit = () => {
    const correctPassword = "iamagoldfish";
    if (password === correctPassword) {
      setIsLoginSuccessful(true);
      setIsLockModalOpen(false);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center relative">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://media1.tenor.com/m/-haNeLZbnOIAAAAC/love-couple.gif" />
          <h1 className="my-4 text-4xl">Will you be my bao bei forever?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}

      {isLoginSuccessful && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded shadow-lg text-lg">
            <div className="flex flex-col space-y-4">
              <img src="/1.jpeg" alt="Example" className="w-64 h-64 object-cover" />
              <img src="/2.jpeg" alt="Example" className="w-64 h-64 object-cover" />
              <img src="/3.jpeg" alt="Example" className="w-64 h-64 object-cover" />
            </div>

            <button
              className="bg-red-500 text-white px-4 py-2 mt-10 rounded mt-4 flex "
              onClick={() => setIsLoginSuccessful(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <FaUnlock
        className="fixed top-4 right-4 h-1 w-1 cursor-pointer text-gray-600 hover:text-gray-800"
        onClick={handleUnlockClick}
      />

      <CiMail
        className="fixed bottom-4 right-4 h-5 w-5 cursor-pointer text-gray-600 hover:text-gray-800"
        onClick={handleMailClick}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded shadow-lg">
            <div className="text-lg mb-4">
              Baby, I know you've been working very hard these past few months. I just want to let you know I appreciate
              your effort and that I want you to be happy. Take some time for yourself, relax, and remember that I'm
              always here to support and cherish you.
            </div>
            <div className="flex justify-center mt-10">
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isLockModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded shadow-lg">
            <div className="text-lg mb-4">
              <label htmlFor="password">Enter Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 mt-2 w-full"
              />
            </div>
            <div className="flex justify-center mt-10">
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={handlePasswordSubmit}>
                Submit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setIsLockModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
