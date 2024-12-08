import Welcome from "@/widgets/welcome-page/Welcome";
import Promo from "@/widgets/promo/Promo";
import WelcomeCases from "@/widgets/welcome-cases/Welcome-cases";
import ServicesList from "@/widgets/services-list/Services-list";

export default function Home() {
  return (
      <>
          <Welcome/>
          <Promo/>
          <WelcomeCases/>
          <ServicesList/>
      </>
  );
}
