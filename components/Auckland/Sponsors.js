// Based on the auckland Sponsors
export default function Sponsors() {
    return (
      <div className="items-center justify-center py-24 text-center retro bg-darker">
        <div className="space-y-4 text-2xl text-center">
          <p className="px-12">Thank you so much to these companies for supporting us!</p>
          <div className="flex flex-wrap flex-row justify-center items-center gap-8 py-10 px-8">
            {/* 40px height, but maintain aspect ratio */}
            <img className="bg-white h-40 object-contain outline outline-pink outline-4 border-8 border-white rounded-md" src="/city/auckland/SkyCity.png" alt="Sky City" />
            <img className="h-40 object-contain outline outline-pink outline-4 border-8 border-white rounded-md" src="/city/auckland/TrugoodFinance.png" alt="Trugood Finance" />
          </div>
        </div>
      </div>
    );
  }
  