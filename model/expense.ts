import { isOneTimeTransaction, isRecurringTransaction, OneTimeTransaction, RecurringTransaction } from '~/model/transaction'
import { Categorized, isCategorized } from '~/model/categorized'

export type OneTimeExpense = Categorized & OneTimeTransaction

export type RecurringExpense = Categorized & RecurringTransaction

export type Expense = OneTimeExpense | RecurringExpense

export function isExpense(object: any | undefined): object is Expense {
  return isOneTimeExpense(object) || isRecurringExpense(object)
}

export function isOneTimeExpense(object: any | undefined): object is OneTimeExpense {
  return isCategorized(object) && isOneTimeTransaction(object)
}

export function isRecurringExpense(object: any | undefined): object is RecurringExpense {
  return isCategorized(object) && isRecurringTransaction(object)
}
