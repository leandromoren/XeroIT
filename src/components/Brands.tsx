export default function Brands() {

  const width = 278;
  const height = 98;

  return (
    <div className="bg-yellow-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="../../logos/adidas.svg"
            width={width}
            height={height}
            className="col-span-2 filter max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="../../logos/etsy.svg"
            width={width}
            height={height}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="../../logos/sony.svg"
            width={width}
            height={height}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="../../logos/oracle.svg"
            width={width}
            height={height}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="../../logos/lyft.svg"
            width={width}
            height={height}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
