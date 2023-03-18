import React from "react";
import GetTodayBlock from "../../Components/GetTodayBlock/GetTodayBlock";
import TrustedCompanies from "../../Components/TrustedCompanies/TrustedCompanies";

export default function CompaniesPage() {
  return (
    <main>
      <TrustedCompanies />
      <GetTodayBlock />
    </main>
  );
}
