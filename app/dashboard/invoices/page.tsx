import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mt-5"></div>
    </div>
  );
}
