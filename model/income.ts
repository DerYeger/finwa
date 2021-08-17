import {
  isOneTimeTransaction,
  isRecurringTransaction,
  OneTimeTransaction,
  RecurringTransaction,
} from '~/model/transaction'

export type OneTimeIncome = OneTimeTransaction

export type RecurringIncome = RecurringTransaction

export type Income = OneTimeIncome | RecurringIncome

export function isIncome(object: any | undefined): object is Income {
  return isOneTimeIncome(object) || isRecurringIncome(object)
}

export function isOneTimeIncome(
  object: any | undefined
): object is OneTimeIncome {
  return isOneTimeTransaction(object)
}

export function isRecurringIncome(
  object: any | undefined
): object is RecurringIncome {
  return isRecurringTransaction(object)
}
