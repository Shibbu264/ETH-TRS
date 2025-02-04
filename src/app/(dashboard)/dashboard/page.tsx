import BuyComponents from "@/components/trade/BuyCoins";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 mx-auto">
        <BuyComponents />
      </div>
    </div>
  );
}
