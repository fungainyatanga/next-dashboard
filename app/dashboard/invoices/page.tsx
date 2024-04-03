import Search from '@/app/ui/search';
import {CreateInvoice } from '@/app/ui/invoices/buttons';


import { lusitana } from '@/app/ui/fonts/fonts';

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Search placeholder="Search invoices..." />
        <CreateInvoice  />
      </div>
    </div>
  );
}
