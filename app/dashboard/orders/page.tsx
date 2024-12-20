/*

import Search from "@/components/shared/Search";
import { getOrdersByEvent } from "@/lib/actions/order.actions";
import { formatDateTime, formatPrice } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { IOrderItem } from "@/lib/database/models/order.model";

export const metadata = {
  title: "Compras - EventEasy",
  description:
    "Página responsável por mostrar todas as compras feitas em um evento.",
};

const Orders = async ({ searchParams }: SearchParamProps) => {
  const eventId = (searchParams?.eventId as string) || "";
  const searchText = (searchParams?.query as string) || "";

  const orders = await getOrdersByEvent({ eventId, searchString: searchText });

  return (
    <>
      <section className=" bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full     font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px]    text-center sm:text-left ">Compras</h3>
      </section>

      <section className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full    mt-8">
        <Search placeholder="Pesquisar nome do comprador..." />
      </section>

      <section className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full    overflow-x-auto">
        <table className="w-full border-collapse border-t">
          <thead>
            <tr className="text-[14px] font-medium leading-[20px] border-b text-gray-500">
              <th className="min-w-[250px] py-3 text-left">ID do pedido</th>
              <th className="min-w-[200px] flex-1 py-3 pr-4 text-left">
                Título do evento
              </th>
              <th className="min-w-[150px] py-3 text-left">Comprador</th>
              <th className="min-w-[100px] py-3 text-left">Criador</th>
              <th className="min-w-[100px] py-3 text-right">Preço</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.length === 0 ? (
              <tr className="border-b">
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Nenhum pedido encontrado.
                </td>
              </tr>
            ) : (
              <>
                {orders &&
                  orders.map((row: IOrderItem) => (
                    <tr
                      key={row._id}
                      className="text-[14px] font-normal leading-[20px] lg:text-[16px] font-normal leading-[24px] border-b "
                      style={{ boxSizing: "border-box" }}
                    >
                      <td className="min-w-[250px] py-4 text-primary-500">
                        {row._id}
                      </td>
                      <td className="min-w-[200px] flex-1 py-4 pr-4">
                        {row.eventTitle}
                      </td>
                      <td className="min-w-[150px] py-4">{row.buyer}</td>
                      <td className="min-w-[100px] py-4">
                        {formatDateTime(row.createdAt).dateTime}
                      </td>
                      <td className="min-w-[100px] py-4 text-right">
                        {formatPrice(row.totalAmount)}
                      </td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Orders;

*/


import Search from "@/components/shared/Search";
import { getOrdersByEvent } from "@/lib/actions/order.actions";
import { formatDateTime, formatPrice } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { IOrderItem } from "@/lib/database/models/order.model";

export const metadata = {
  title: "Compras - EventSync",
  description: "Página responsável por mostrar todas as compras feitas em um evento.",
};

const Orders = async ({ searchParams }: SearchParamProps) => {
  const eventId = (searchParams?.eventId as string) || "";
  const searchText = (searchParams?.query as string) || "";

  const orders = await getOrdersByEvent({ eventId, searchString: searchText });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="container font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] text-center sm:text-left">
          Compras
        </h3>
      </section>

      <section className="container mt-8">
        <Search placeholder="Pesquisar nome do comprador..." />
      </section>

      <section className="container overflow-x-auto">
        <table className="w-full border-collapse border-t">
          <thead>
            <tr className="text-[14px] font-medium leading-[20px] border-b text-gray-500">
              <th className="min-w-[250px] py-3 text-left">ID do pedido</th>
              <th className="min-w-[200px] py-3 pr-4 text-left">Título do evento</th>
              <th className="min-w-[150px] py-3 text-left">Comprador</th>
              <th className="min-w-[100px] py-3 text-left">Criador</th>
              <th className="min-w-[100px] py-3 text-right">Preço</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.length === 0 ? (
              <tr className="border-b">
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Nenhum pedido encontrado.
                </td>
              </tr>
            ) : (
              orders?.map((row: IOrderItem) => (
                <tr
                  key={row._id}
                  className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] border-b"
                >
                  <td className="min-w-[250px] py-4 text-primary-500">{row._id}</td>
                  <td className="min-w-[200px] py-4 pr-4">{row.eventTitle}</td>
                  <td className="min-w-[150px] py-4">{row.buyer}</td>
                  <td className="min-w-[100px] py-4">
                    {formatDateTime(row.createdAt).dateTime}
                  </td>
                  <td className="min-w-[100px] py-4 text-right">
                    {formatPrice(row.totalAmount)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Orders;
