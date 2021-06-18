import { Entity } from '~/model/entity'

export interface Transaction extends Entity {
  name: string
  value: number
}

export interface OneTimeTransaction extends Transaction {
  monthId: string
}

export interface RecurringTransaction extends Transaction {
  startingMonthId: string
  frequency: number
}

export function isTransaction(object: any | undefined): object is Transaction {
  return object !== undefined && (object as any).name !== undefined && (object as any).value !== undefined
}

export function isOneTimeTransaction(object: any | undefined): object is OneTimeTransaction {
  return isTransaction(object) && object !== undefined && (object as any).monthId !== undefined
}

export function isRecurringTransaction(object: any | undefined): object is RecurringTransaction {
  return isTransaction(object) && (object as any).startingMonthId !== undefined && (object as any).frequency !== undefined
}
