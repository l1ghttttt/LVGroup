import Welcome from "@/widgets/welcome-page/Welcome";
import ServicesListComponent from "@/widgets/services-list/Services-list";
import Order from "@/components/order/Order";
import CasesListWrapper from "@/components/cases-list/CasesListWrapper"; // новый обёрточный компонент

export default function Home() {
    return (
        <>
            <Welcome />
            <CasesListWrapper />
            <ServicesListComponent />
            <Order />
        </>
    );
}
