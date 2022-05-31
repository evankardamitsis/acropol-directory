import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <button
        className="bg-red-700 text-white active:bg-pink-600 font-bold text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {t("Fire Safety")}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {t("Fire Safety Instructions")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ul className="my-4 text-slate-500 text-lg leading-relaxed">
                    <li>{t("• Do not smoke in your room.")}</li>
                    <li>
                      {t("• Always use the ashtray provided at the balcony.")}
                    </li>
                    <li>
                      {t(
                        "• Take note of the Emergency Exit Plan which is located at your room’s entrance"
                      )}
                    </li>
                    <li>
                      {t(
                        "• In case of disable people please inform the Reception."
                      )}
                    </li>
                  </ul>
                  <strong>{t("What to do if you notice fire:")}</strong>
                  <ul>
                    <li>{t("• Stay calm, do not panic.")}</li>
                    <li>{t("• Inform the Reception.")}</li>
                    <li>
                      {t(
                        "• Raise the alarm by breaking the glass of the nearest “Fire Call Point”."
                      )}
                    </li>
                    <li>
                      {t("• Evacuate the room closing all doors behind you.")}
                    </li>
                    <li>
                      {t("• Do not stop to collect personal belongings.")}
                    </li>
                    <li>
                      {t(
                        "• Alert floor room maid or any other member of the staff."
                      )}
                    </li>
                    <li>{t("• If you smell smoke stay low, smoke rises.")}</li>
                    <li>{t("• Use the nearest emergency exit.")}</li>
                    <li>{t("• Do not use the lift.")}</li>
                    <li>{t("• Go to the “Assembly Point” of the hotel.")}</li>
                    <li>
                      {t(
                        "• Do not re-enter the building until told is safe to do so."
                      )}
                    </li>
                    <li>
                      {t(
                        "• If you are forced to stay in your room, seal the door with wet towels, cover your mouth and nose with a damp cloth to ease breathing, open and stay near window until help arrives."
                      )}
                    </li>
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {t(" Close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
