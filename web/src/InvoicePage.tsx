import InvoiceTable from './InvoiceTable.tsx';
import type { Invoice } from './InvoiceType.ts';

import {useState, useEffect} from 'react';

import { getAllInvoices } from './requestInvoice.ts';

import type { Invoice } from './InvoiceType.ts';

export default function InvoicePage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    async function get() {
      const response = await getAllInvoices();
      const data = await response.json();
      setInvoices(data);
    }
    get();
  }, []);

  return (
   <>
    <h1>Faturas</h1>
 
    <div className='panel'>
    <InvoiceTable datas={invoices} />
   </div>
  </>
  );
}