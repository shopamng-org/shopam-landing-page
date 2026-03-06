import React from "react";

const parcelSteps = [
  {
    title: "Drop at Parcel Shop",
    description:
      "Sellers drop packages at the nearest ShopAM parcel shop after completing a sale.",
  },
  {
    title: "We Verify & Ship",
    description:
      "ShopAm repacks, verify products carefully before ship to buyer destination.",
  },
  {
    title: "Buyer Receives",
    description:
      "Buyers collect parcels at home or from a ShopAM parcel shop, with full purchase protection until confirmed delivery.",
  },
];

export default function ParcelShopsSection() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 text-center">
          ShopAm Parcel Shops
        </h2>

        <p className="text-sm md:text-base text-gray-700 text-center mb-8 max-w-3xl mx-auto">
          Simple, secure delivery that protects both buyers and sellers
        </p>

        <div className="max-w-4xl mx-auto space-y-3">
          {parcelSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="">
                <svg
                  width="20"
                  height="9"
                  viewBox="0 0 20 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.521 1.59952L4.56555 8.43073C4.39135 8.60188 4.15691 8.69778 3.9127 8.69778C3.6685 8.69778 3.43406 8.60188 3.25986 8.43073L0.278965 5.5034C0.191652 5.41767 0.12208 5.31558 0.0742217 5.20296C0.0263635 5.09034 0.00115619 4.9694 3.88958e-05 4.84703C-0.00221759 4.59991 0.0937869 4.36201 0.266933 4.18568C0.352666 4.09837 0.454757 4.02879 0.567377 3.98094C0.679997 3.93308 0.800941 3.90787 0.923303 3.90675C1.17042 3.9045 1.40832 4.0005 1.58466 4.17365L3.91348 6.46055L10.216 0.270541C10.3923 0.0973955 10.6301 0.00134981 10.8771 0.0035335C11.1242 0.00571719 11.3602 0.105951 11.5334 0.282185C11.7065 0.458419 11.8026 0.696216 11.8004 0.943265C11.7982 1.19031 11.698 1.42638 11.5217 1.59952H11.521ZM18.9848 0.279856C18.8991 0.192245 18.7968 0.122428 18.684 0.0744104C18.5712 0.0263925 18.45 0.00111806 18.3274 3.62629e-05C18.2048 -0.00104553 18.0832 0.0220867 17.9696 0.0681065C17.8559 0.114126 17.7525 0.182128 17.6652 0.268212L11.3649 6.46055L10.7532 5.85971C10.577 5.68657 10.3392 5.59052 10.0921 5.59271C9.8451 5.59489 9.60904 5.69512 9.43589 5.87136C9.26275 6.04759 9.1667 6.28539 9.16888 6.53244C9.17107 6.77949 9.2713 7.01555 9.44754 7.18869L10.7121 8.43073C10.8863 8.60188 11.1207 8.69778 11.3649 8.69778C11.6091 8.69778 11.8436 8.60188 12.0178 8.43073L18.9732 1.59952C19.0605 1.51379 19.13 1.41171 19.1778 1.29911C19.2256 1.18651 19.2508 1.06559 19.2518 0.943265C19.2529 0.820939 19.2299 0.699597 19.1841 0.586169C19.1383 0.472741 19.0706 0.369447 18.9848 0.282185V0.279856Z"
                    fill="#ED8123"
                  />
                </svg>
              </div>
              <div>
                <span className="font-bold text-gray-900 text-sm">
                  {step.title}
                </span>
                <span className="text-gray-700 text-sm">
                  {" "}
                  - {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
