import { useNavigate } from "react-router-dom";

function PlaceOrderButton() {

  const navigate = useNavigate();

  return (

    <button
      onClick={() => navigate("/customer/order-success")}
      className="mt-6 w-full rounded-2xl bg-[#C7F464] py-5 text-xl font-bold text-black transition hover:scale-[1.02]"
    >

      Place Order

    </button>

  );

}

export default PlaceOrderButton;