function OrderTimeline() {
  return (
    <div className="mt-6 flex items-center justify-between">

      <div className="text-center">
        <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-[#C7F464]" />
        <p className="text-sm">Ordered</p>
      </div>

      <div className="h-1 flex-1 bg-[#243652]" />

      <div className="text-center">
        <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-[#C7F464]" />
        <p className="text-sm">Packed</p>
      </div>

      <div className="h-1 flex-1 bg-[#243652]" />

      <div className="text-center">
        <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-[#C7F464]" />
        <p className="text-sm">Shipped</p>
      </div>

      <div className="h-1 flex-1 bg-[#243652]" />

      <div className="text-center">
        <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-[#C7F464]" />
        <p className="text-sm">Delivered</p>
      </div>

    </div>
  );
}

export default OrderTimeline;