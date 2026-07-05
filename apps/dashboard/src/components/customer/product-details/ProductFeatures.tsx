function ProductFeatures() {

  const features = [
    "40 Hours Battery Life",
    "Ultra Low Latency",
    "Bluetooth 5.3",
    "Noise Cancellation",
    "Premium Sound Quality",
    "Fast Charging",
  ];

  return (

    <section className="mt-16 rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="text-3xl font-bold">
        Product Features
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        {features.map((feature)=>(

          <div
            key={feature}
            className="rounded-2xl bg-[#081120] p-5"
          >

            ✅ {feature}

          </div>

        ))}

      </div>

    </section>

  );

}

export default ProductFeatures;