import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import RadioGroupRating from './emoji';
import logo from '../assets/logo.jpg';

const Rating = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleCloseClick = () => {
    navigate('/');
  };

  const handleYesClick = () => {
    setShowThankYou(true);

    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <>
      {modalVisible && (
        <section className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
          <div className="relative max-w-sm bg-white border rounded-lg shadow cta-rating-main">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={handleCloseClick}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 pt-0 text-center">
              <div className='rating-logo'>
                <img src={logo} alt="logo" />
              </div>

              {showThankYou ? (
                <h3 className="w-full mt-10 mb-6 text-xl font-normal text-gray-500">
                  Thank you for rating!
                </h3>
              ) : (
                <>
                  <h3 className="w-full mt-10 mb-6 text-xl font-normal text-gray-500">
                    Rate your checkout experience with KrystalTouch
                  </h3>
                  <div className='flex flex-col items-center justify-center'>
                    <RadioGroupRating />
                    <button
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5  mr-2 my-9 w-full cta-button"
                      onClick={handleYesClick}
                    >
                      Done
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Rating;
