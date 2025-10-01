export const clientBrandLogos = {
  kuwait: [
    "/assets/img/brand/kuwait/Saudi-Aramco.png",
    "/assets/img/brand/kuwait/Petrochemical Industries Company.png",
    "/assets/img/brand/kuwait/Ministry of Public Works.png",
    "/assets/img/brand/kuwait/Ministry of Interior.png",
    "/assets/img/brand/kuwait/Ministry of Electricity & Water.png",
    "/assets/img/brand/kuwait/Ministry of Defense.png",
    "/assets/img/brand/kuwait/Ministry of Communication.png",
    "/assets/img/brand/kuwait/Ministry of Commerce & Industry.png",
    "/assets/img/brand/kuwait/Kuwait-Oil-Company.png",
    "/assets/img/brand/kuwait/Kuwait Port Authority.png",
    "/assets/img/brand/kuwait/Kuwait Paraxylene Production.png",
    "/assets/img/brand/kuwait/Kuwait Oil Tankers Company.png",
    "/assets/img/brand/kuwait/Kuwait National Petroleum Company.png",
    "/assets/img/brand/kuwait/Kuwait Aviation Fuelling Company.png",
    "/assets/img/brand/kuwait/KUFPEC-logo-2013-2-233px.png",
    "/assets/img/brand/kuwait/KGOC -JO Wafra-JO Khafji.png",
    "/assets/img/brand/kuwait/EquateLogo-Equate.png",
    "/assets/img/brand/kuwait/Chevron.png",
  ],
  international: [
    "/assets/img/brand/international/Tecnimont.png",
    "/assets/img/brand/international/Technip.png",
    "/assets/img/brand/international/Technicas Reunidas.png",
    "/assets/img/brand/international/SK E & C.png",
    "/assets/img/brand/international/SNC- Lavalin.svg",
    "/assets/img/brand/international/Saipem_logo.svg.png",
    "/assets/img/brand/international/Hyundai_Engineering_&_Construction_logo.svg.png",
    "/assets/img/brand/international/Petrofac.svg",
    "/assets/img/brand/international/GS and EC.png",
    "/assets/img/brand/international/Daelim.png",
  ],
  pmc: [
    "/assets/img/brand/pmc/Tecnimont.png",
    "/assets/img/brand/pmc/Technip.png",
    "/assets/img/brand/pmc/Technicas Reunidas.png",
    "/assets/img/brand/pmc/SNC- Lavalin.svg",
    "/assets/img/brand/pmc/SK E & C.png",
    "/assets/img/brand/pmc/Saipem_logo.svg.png",
    "/assets/img/brand/pmc/Hyundai_Engineering_&_Construction_logo.svg.png",
    "/assets/img/brand/pmc/Petrofac.svg",
    "/assets/img/brand/pmc/GS and EC.png",
    "/assets/img/brand/pmc/Daelim.png",
  ],
};

export function deriveDisplayNameFromPath(path) {
  const file = path.split("/").pop() || "";
  const nameWithoutExt = file.replace(/\.[^/.]+$/, "");
  return nameWithoutExt.replace(/[_-]/g, " ");
} 