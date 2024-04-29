import React from "react";

const Country = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* 1st card */}
        <div className=" bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/nm2ZHGb/img2.jpg"
              alt="photo"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lime-400">South Africa</h2>
            <p>South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain</p>
          </div>
        </div>
        {/* 1st card */}
        {/* 2nd card */}
        <div className=" bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/vx29vDX/img3.jpg"
              alt="photo"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lime-400">Morocco</h2>
            <p>Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences. Marrakesh medina, a mazelike medieval quarter, offers entertainment in its Djemaa el-Fna square and souks marketplaces selling ceramics, jewelry and metal lanterns. The capital Rabat Kasbah of the Udayas is a 12th-century royal fort overlooking the water</p>
          </div>
        </div>
        {/* 2nd card */}
        {/* 3rd card */}
        <div className=" bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/WD8QmHF/img1.jpg"
              alt="photo"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lime-400">Egypt</h2>
            <p>Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza colossal Pyramids and Great Sphinx as well as Luxor hieroglyph-lined Karnak Temple and Valley of the Kings tombs. The capital, Cairo, is home to Ottoman landmarks like Muhammad Ali Mosque</p>
          </div>
        </div>
        {/* 3rd card */}
      </div>
    </div>
  );
};

export default Country;
