 import InvoiceTable from './InvoiceTable.tsx';
 import { Invoice } from './InvoiceType.ts';
 
 const invoices: Invoice[] = [{
  id: 1,
  amount: 125037,
  status: 'pending',
  issueDate: '2024-06-01',
  dueDate: '2024-06-15',
  customer: {
    id: 3,
    name: 'John Doe',
    email: 'john.doe@example.com'
  }
 }, {
  id: 2,
  amount: 98765,
  status: 'paid',
  issueDate: '2024-06-02',
  dueDate: '2024-06-16',
  customer: {
    id: 7,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  }
 }, {
  id: 3,
  amount: 54321,
  status: 'pending',
  issueDate: '2024-06-03',
  dueDate: '2024-06-17',
  customer: {
    id: 9,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com'
  }
 }];

 export default function App() {
  return <>
    <InvoiceTable invoices={invoices} />
  </>
 }