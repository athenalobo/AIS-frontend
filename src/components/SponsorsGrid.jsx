import React from "react";
import gradly from "../assets/gradly.jpg";
import wee from "../assets/wee.jpg";
import easyTransfer from "../assets/easyTransfer.jpg";
import radioEvents from "../assets/radioEvents.jpg";
import bih from "../assets/bih.jpg";

const SPONSORS = [
  { name: "Gradly", badge: "Platinum Sponsor", logo: gradly, url: "https://gradly.us/" },
  { name: "Wee", badge: "Bronze Sponsor", logo: wee, url: "http://sayweee.com/en" },
  { name: "Easy Transfer", badge: "Bronze Sponsor", logo: easyTransfer, url: "https://www.easytransferglobal.com/" },
  { name: "Radio Events", badge: "Media Sponsor", logo: radioEvents, url: "https://www.radio5events.com/" },
  { name: "BIH", badge: "Media Sponsor", logo: bih, url: "https://www.instagram.com/bihevents/" },
];

export default function SponsorsGrid() {
  const platinum = SPONSORS.filter(s => s.badge === "Platinum Sponsor");
  const bronze = SPONSORS.filter(s => s.badge === "Bronze Sponsor");
  const media = SPONSORS.filter(s => s.badge === "Media Sponsor");

  const SponsorCard = ({ sponsor, size = "md" }) => {
    const sizes = {
      lg: "max-w-sm",
      md: "max-w-xs",
      sm: "max-w-[200px]"
    };
    
    const badgeColors = {
      "Platinum Sponsor": "bg-gradient-to-r from-gray-400 to-gray-500",
      "Bronze Sponsor": "bg-gradient-to-r from-amber-600 to-amber-700",
      "Media Sponsor": "bg-gradient-to-r from-green-600 to-green-700"
    };

    return (
      <div
        onClick={() => window.open(sponsor.url, '_blank')}
        className={`${sizes[size]} cursor-pointer group`}
      >
        <div className="bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:border-gray-300">
          <div className="flex items-center justify-center mb-4">
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              className="max-w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ maxHeight: size === "lg" ? "120px" : size === "md" ? "80px" : "60px" }}
            />
          </div>
          <div className="text-center">
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full text-white ${badgeColors[sponsor.badge]}`}>
              {sponsor.badge}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Sponsors</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-green-400 mx-auto"></div>
        </div>

        <div className="flex items-end justify-center gap-12 flex-wrap">
          {/* Platinum Sponsors */}
          {platinum.length > 0 && (
            <div className="flex flex-col items-center">
              <div className="flex gap-6">
                {platinum.map((s, i) => (
                  <SponsorCard key={i} sponsor={s} size="lg" />
                ))}
              </div>
            </div>
          )}

          {/* Bronze Sponsors */}
          {bronze.length > 0 && (
            <div className="flex flex-col items-center">
              <div className="flex gap-6 flex-wrap justify-center">
                {bronze.map((s, i) => (
                  <SponsorCard key={i} sponsor={s} size="md" />
                ))}
              </div>
            </div>
          )}

          {/* Media Sponsors */}
          {media.length > 0 && (
            <div className="flex flex-col items-center">
              <div className="flex gap-4 flex-wrap justify-center">
                {media.map((s, i) => (
                  <SponsorCard key={i} sponsor={s} size="sm" />
                ))}
              </div>
              
            </div>
          )}
        </div>
      </div>
    </section>
  );
}