import Welcome from "@/widgets/welcome-page/Welcome";
import ServicesListComponent from "@/widgets/services-list/Services-list";
import Order from "@/components/order/Order";

export default function Home() {
    return (
        <>
            <Welcome />
            <ServicesListComponent />
            <Order />
        </>
    );
}
