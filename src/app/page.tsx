import Welcome from "@/widgets/welcome-page/Welcome";
import ServicesListComponent from "@/widgets/services-list/Services-list";
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";
import React from "react";

export default function Home() {
  return (
      <>
          <Welcome/>
          <CasesList tags={true} name={`Наши проекты`}/>
          <ServicesListComponent/>
          <Order/>
      </>
  );
}
