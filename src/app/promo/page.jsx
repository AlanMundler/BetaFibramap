import React from "react";
import DisqusCommentsPromo from "../../components/Disqus/DisqusCommentsPromo";
import Link from "next/link";

function PromoPage() {
  return (
    <section className=" relative overflow-x-auto h-full sm:ml-64 sm:mr-36">
      <h1 className="ml-4 mr-4 mb-4 text-xl font-semibold dark:text-white px-3 py-4  bg-gray-50 dark:bg-gray-800 ">
        Promociones
      </h1>
        <div className=" ml-4 mr-4 px-3 py-4  bg-gray-50 dark:bg-gray-800">
        <p className=" mb-4 text-l font-semibold dark:text-white">
          En esta seccion se espera que compartan las promociones que lograron y asi que las demas personas puedan acceder a dichos beneficios.
        </p>
        <DisqusCommentsPromo />
      </div>
    </section>
  );
}

export default PromoPage;
