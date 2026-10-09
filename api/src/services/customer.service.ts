import prisma from '../lib/prisma.ts';
import type { CreateCustomer } from '../schemas/customer.schema.ts';
import type { Customer } from '../types/customer.type.ts';
import type { UpdateCustomer } from '../schemas/customer.schema.ts';

export function findAllCustomers(): Promise<Customer[]> {
  return await prisma.customer.findMany({ orderBy: { createdAt: 'desc' } });

}

export async function findCustomerById(id: number): Promise<Customer> {
  const customer = prisma.customer.findUnique({ where: { id } });

  if (!customer) throw new Error(`Cliente não encontrado.`);
 
  return customer;
}

export async function insertCustomer(datas: CreateCustomer): Promise<Customer> {
  return await prisma.customer.create({ data: datas });
}

export async function modifyCustomer(datas: UpdateCustomer): Promise<Customer> {
  await findCustomerById(datas.id);

  const customer = await prisma.customer.update({
    where: { id },
    data: datas
  });

  return customer;

  export async function removeCustomer(id: number): Promise<Void> {
    await findCustomerById(id);

    await prisma.customer.delete({ where: { id } });
  }