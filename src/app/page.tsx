import Welcome from "@/widgets/welcome-page/Welcome";
import WelcomeCases from "@/widgets/welcome-cases/Welcome-cases";
import ServicesListComponent from "@/widgets/services-list/Services-list";
import Order from "@/components/order/Order";

export default function Home() {
  return (
      <>
          <Welcome/>
          <WelcomeCases/>
          <ServicesListComponent/>
          <Order/>
      </>
  );
}
