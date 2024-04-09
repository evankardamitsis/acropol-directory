import React from "react";
import { useTranslation } from "react-i18next";

import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      name: "Air condition & heating",
      description:
        "All rooms have an individual Air Conditioning and Heating system. Use the remote control to set the temperature you wish. Please make sure that your balcony doors are properly closed.",
      icon: GlobeAltIcon,
    },
    {
      name: "Amenities in your room",
      description:
        "The collection includes soap, shower gel, shampoo, vanity kit, and shoeshine sponge. If you need extra amenities, please contact Reception and inform about what you may need. Slippers and toothpaste set are available upon request.\n",
      icon: ScaleIcon,
    },
    {
      name: "Baby cot",
      description:
        "We have baby cots available, if you need one, please contact the Reception.",
      icon: LightningBoltIcon,
    },
    {
      name: "Breakfast",
      description:
        "Breakfast buffet is served in the restaurant from 07:00 to 10:30 daily. If you wish to have breakfast earlier, please contact the Reception. We can also offer you breakfast in your room. An early breakfast package is available upon request.",
      icon: AnnotationIcon,
    },
    {
      name: "Business Center",
      description:
        "A computer with a printer and a scanner is available for your convenience in our Lobby. If you would like to send a fax, please contact our Reception team to assist you.",
      icon: AnnotationIcon,
    },
    {
      name: "Chargers / converters\n",
      description:
          "A variety of adaptors, converters & chargers are at your disposal. Please contact the front office 24/7.",
      icon: AnnotationIcon,
    },
    {
      name: "Check-in | Check-out",
      description:
        "All guests must be registered and it is necessary to present an ID card or passport upon checking-in. Check-in time: after 15:00 Check-out time: by 11:00. If you wish to extend the check-out time, please contact Reception to check availability and price list.\n",
      icon: AnnotationIcon,
    },
    {
      name: "Credit cards",
      description:
        "We accept the following credit cards: American Express, MasterCard, Maestro, VISA.",
      icon: AnnotationIcon,
    },
    {
      name: "Electricity",
      description:
        "All our power outlets in the hotel have an electric voltage of 230V. If you require adaptors, please contact our Reception.",
      icon: AnnotationIcon,
    },
    {
      name: "Extra pillows / blankets",
      description:
        "If you need additional pillows or blankets please contact our Reception team.",
      icon: AnnotationIcon,
    },
    {
      name: "Fire Safety",
      description:
        "ACROPOL Hotel is equipped with a fire alarm system and all our staff is trained to assist you in an emergency. Smoke detectors and fire extinguishers are installed throughout the hotel.",
      icon: AnnotationIcon,
    },
    {
      name: "Garden",
      description:
        "During warmer seasons, you can enjoy your breakfast, meal or coffee in our rear garden.",
      icon: AnnotationIcon,
    },
    {
      name: "Hair Dryer",
      description:
        "All guestrooms are equipped with hair dryers stored in the closet.",
      icon: AnnotationIcon,
    },
    {
      name: "Hot water",
      description: "There is hot water 24 hours a day.",
      icon: AnnotationIcon,
    },
    {
      name: "Housekeeping",
      description:
        "Rooms are cleaned and tidied up daily. For extra cleaning service, amenities or extra towels please contact our Reception team.",
      icon: AnnotationIcon,
    },
    {
      name: "Iron / Iron board",
      description:
        "Please contact the Reception if you wish to have delivered the iron and ironing board.",
      icon: AnnotationIcon,
    },
    {
      name: "Key cards",
      description:
        "The room key cards are designed to operate all lights and air- conditioning in your room. Simply insert the key card in the wall slot upon entering the room. Please do not forget to return the key card at the Reception Desk on your departure.",
      icon: AnnotationIcon,
    },
    {
      name: "Library",
      description:
        "We have a small book corner in our lobby. You are welcome to borrow books anytime during your stay. Please return any borrowed book at the Reception Desk on your departure.",
      icon: AnnotationIcon,
    },
    {
      name: "Lost & Found",
      description:
        "All found items are stored in our housekeeping department for 1 month. In case you forgot something in your room, you can contact us at +30 210 68 26 650. Shipping to you is at your own cost.",
      icon: AnnotationIcon,
    },
    {
      name: "Luggage Room",
      description:
        "There is a luggage room available to store your luggage for a few hours before check-in or after check-out.",
      icon: AnnotationIcon,
    },
    {
      name: "Material damage to the hotel\n",
      description: "For any damage caused to the room or the other facilities of the hotel due to any act or omission due to Customers or their Guests, the sole responsibility lies with the Customer. The charge will correspond to the full amount for the replacement of lost or damaged item, furniture, or equipment.\n",
      icon: AnnotationIcon,
    },
    {
      name: "Mini fridge",
      description: "Each guest room has its own mini-fridge.",
      icon: AnnotationIcon,
    },
    {
      name: "Pet policy",
      description:
        "We kindly inform our guests that our hotel is not set up to accommodate pets.",
      icon: AnnotationIcon,
    },
    {
      name: "Queues",
      description:
        "To avoid early morning queues at the Reception you are advised to arrange your bill payment the night before, at the Reception.",
      icon: AnnotationIcon,
    },
    {
      name: "Reception",
      description:
        "Our Reception team is there for you 24 hours a day. To contact Reception from your room, dial 150 or 151.",
      icon: AnnotationIcon,
    },
    {
      name: "Restaurant",
      description:
        "The restaurant is located on the ground floor and it is open from 12:00 to 21:45.\n",
      icon: AnnotationIcon,
    },
    {
      name: "Room Service",
      description:
        "Our room service is available from 08:00 to 21:45. A digital menu is available directly to your smartphone simply by scanning the QR code. To order please dial 154.\n",
      icon: AnnotationIcon,
    },
    {
      name: "Safe boxes",
      description:
          "For your convenience, a safe box is available inside the closet in the room free of charge. Please follow the instructions on the front side of the safe. The hotel is not responsible for the loss of valuables and money left in the rooms and in the room safes.\n",
      icon: AnnotationIcon,
    },
    {
      name: "Smoking policy",
      description:
        "Smoking is not allowed in all indoor areas of the hotel, including guestrooms. Smoking is only allowed in the room balcony and the garden. \n",
      icon: AnnotationIcon,
    },
    {
      name: "Taxi",
      description:
        "Taxis can be called and booked at the Reception at any time.",
      icon: AnnotationIcon,
    },
    {
      name: "Telephone numbers",
      description:
        "For room to room, domestic and international calls please consult the operating instructions of your room telephone device. All telephone calls will be automatically charged to your bill.",
      icon: AnnotationIcon,
    },
    {
      name: "Wake-up calls",
      description:
        "Not to miss your early start of the day, let us wake you up in the morning. Please contact the Reception to arrange your wake - up call or consult the operating instructions of your room telephone device.",
      icon: AnnotationIcon,
    },
    {
      name: "Wi-Fi",
      description:
        "High-Speed Internet Access is available throughout the hotel.",
      icon: AnnotationIcon,
    },
  ];

  return (
    <div className=" mt-12 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center pb-12">
          <h2 className="text-base text-red-700 font-semibold tracking-wide uppercase">
            {t(" Dear Guests,")}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t(
              "We are delighted to welcome you to ACROPOL HOTEL and we wish you a pleasant stay!"
            )}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t(
              "Our main priority is to make your feel like home! In this Directory you may find all the useful information about our facilities and services available.Enjoy your stay!"
            )}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  {/* <div className="absolute flex items-center justify-center h-10 w-10 rounded-md bg-red-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div> */}
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {t(feature.name)}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {t(feature.description)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
