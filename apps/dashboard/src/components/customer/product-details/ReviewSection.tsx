function ReviewSection() {

  const reviews = [
    {
      name: "Rahul",
      rating: "⭐⭐⭐⭐⭐",
      review: "Amazing sound quality and battery backup.",
    },
    {
      name: "Priya",
      rating: "⭐⭐⭐⭐",
      review: "Comfortable to wear for long hours.",
    },
    {
      name: "David",
      rating: "⭐⭐⭐⭐⭐",
      review: "Worth every rupee.",
    },
  ];

  return (

    <section className="mt-16 rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="text-3xl font-bold">

        Customer Reviews

      </h2>

      <div className="mt-8 space-y-6">

        {reviews.map((review)=>(

          <div
            key={review.name}
            className="rounded-2xl bg-[#081120] p-6"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-bold">

                {review.name}

              </h3>

              <span>

                {review.rating}

              </span>

            </div>

            <p className="mt-4 text-slate-300">

              {review.review}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default ReviewSection;