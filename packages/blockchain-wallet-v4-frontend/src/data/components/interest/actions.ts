import { CoinType, FiatType, PaymentValue } from 'core/types'
import {
  InterestAccountBalanceType,
  InterestAccountType,
  InterestEligibleType,
  InterestInstrumentsType,
  InterestLimitsType,
  InterestRateType,
  InterestTransactionType,
  WithdrawalMinimumType
} from 'core/network/api/interest/types'

import * as AT from './actionTypes'
import {
  InterestActionTypes,
  InterestMinMaxType,
  InterestStep,
  InterestStepMetadata
} from './types'

// BALANCES
export const fetchInterestBalance = (coin?: CoinType) => ({
  type: AT.FETCH_INTEREST_BALANCE,
  payload: { coin }
})
export const fetchInterestBalanceFailure = (
  error: string
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_BALANCE_FAILURE,
  payload: { error }
})
export const fetchInterestBalanceLoading = (): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_BALANCE_LOADING
})
export const fetchInterestBalanceSuccess = (
  interestAccountBalance: InterestAccountBalanceType
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_BALANCE_SUCCESS,
  payload: { interestAccountBalance }
})

// ELIGIBLE
export const fetchInterestEligible = () => ({
  type: AT.FETCH_INTEREST_ELIGIBLE
})
export const fetchInterestEligibleFailure = (
  error: string
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_ELIGIBLE_FAILURE,
  payload: { error }
})
export const fetchInterestEligibleLoading = (): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_ELIGIBLE_LOADING
})
export const fetchInterestEligibleSuccess = (
  interestEligible: InterestEligibleType
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_ELIGIBLE_SUCCESS,
  payload: { interestEligible }
})

// INSTRUMENTS
export const fetchInterestInstruments = () => ({
  type: AT.FETCH_INTEREST_INSTRUMENTS
})
export const fetchInterestInstrumentsFailure = (
  error: string
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_INSTRUMENTS_FAILURE,
  payload: { error }
})
export const fetchInterestInstrumentsLoading = (): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_INSTRUMENTS_LOADING
})
export const fetchInterestInstrumentsSuccess = (
  interestInstruments: InterestInstrumentsType
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_INSTRUMENTS_SUCCESS,
  payload: { interestInstruments }
})

// LIMITS
export const fetchInterestLimits = (coin: CoinType, currency: FiatType) => ({
  type: AT.FETCH_INTEREST_LIMITS,
  coin,
  currency
})
export const fetchInterestLimitsFailure = (
  error: string
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_LIMITS_FAILURE,
  payload: { error }
})
export const fetchInterestLimitsLoading = (): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_LIMITS_LOADING
})
export const fetchInterestLimitsSuccess = (
  interestLimits: InterestLimitsType
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_LIMITS_SUCCESS,
  payload: { interestLimits }
})

export const setWithdrawalMinimimumsFailure = (error: string) => ({
  type: AT.SET_WITHDRAWAL_MINIMUMS_FAILURE,
  payload: {
    error
  }
})

export const setWithdrawalMinimimumsLoading = () => ({
  type: AT.SET_WITHDRAWAL_MINIMUMS_LOADING
})
export const setWithdrawalMinimimumsSuccess = (
  withdrawalMinimums: WithdrawalMinimumType
) => ({
  type: AT.SET_WITHDRAWAL_MINIMUMS_SUCCESS,
  payload: { withdrawalMinimums }
})

// ACCOUNT
export const fetchInterestAccount = (coin?: CoinType) => ({
  type: AT.FETCH_INTEREST_PAYMENT_ACCOUNT,
  coin
})
export const fetchInterestAccountFailure = (
  error: string
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_PAYMENT_ACCOUNT_FAILURE,
  payload: { error }
})
export const fetchInterestAccountLoading = (): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_PAYMENT_ACCOUNT_LOADING
})
export const fetchInterestAccountSuccess = (
  account: InterestAccountType
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_PAYMENT_ACCOUNT_SUCCESS,
  payload: { account }
})

// INTEREST RATES
export const fetchInterestRate = () => ({
  type: AT.FETCH_INTEREST_RATE
})
export const fetchInterestRateFailure = (
  error: string
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_RATE_FAILURE,
  payload: { error }
})
export const fetchInterestRateLoading = (): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_RATE_LOADING
})
export const fetchInterestRateSuccess = (
  interestRate: InterestRateType
): InterestActionTypes => ({
  type: AT.FETCH_INTEREST_RATE_SUCCESS,
  payload: { interestRate }
})

// TRANSACTIONS
export const fetchInterestTransactions = (reset: boolean) => ({
  payload: { reset },
  type: AT.FETCH_INTEREST_TRANSACTIONS
})
export const fetchInterestTransactionsFailure = (
  error: string
): InterestActionTypes => ({
  payload: { error },
  type: AT.FETCH_INTEREST_TRANSACTIONS_FAILURE
})
export const fetchInterestTransactionsLoading = (
  reset: boolean
): InterestActionTypes => ({
  payload: { reset },
  type: AT.FETCH_INTEREST_TRANSACTIONS_LOADING
})
export const fetchInterestTransactionsSuccess = (
  transactions: Array<InterestTransactionType>,
  reset: boolean
): InterestActionTypes => ({
  payload: { transactions, reset },
  type: AT.FETCH_INTEREST_TRANSACTIONS_SUCCESS
})
export const setTransactionsNextPage = (
  nextPage: string | null
): InterestActionTypes => ({
  payload: { nextPage },
  type: AT.SET_TRANSACTIONS_NEXT_PAGE
})

// DEPOSIT
export const initializeDepositModal = (): InterestActionTypes => ({
  type: AT.INITIALIZE_DEPOSIT_MODAL
})
export const initializeDepositForm = (coin: CoinType, currency: FiatType) => ({
  payload: { coin, currency },
  type: AT.INITIALIZE_DEPOSIT_FORM
})
export const setDepositLimits = (limits: InterestMinMaxType) => ({
  payload: { limits },
  type: AT.SET_INTEREST_DEPOSIT_LIMITS
})

export const submitDepositForm = (coin: CoinType) => ({
  payload: { coin },
  type: AT.SUBMIT_DEPOSIT_FORM
})

// WITHDRAWAL
export const initializeWithdrawalForm = (coin: CoinType) => ({
  payload: { coin },
  type: AT.INITIALIZE_WITHDRAWAL_FORM
})
export const requestWithdrawal = (
  coin: CoinType,
  withdrawalAmount: number
) => ({
  payload: { coin, withdrawalAmount },
  type: AT.REQUEST_WITHDRAWAL
})

// PAYMENTS
export const setPaymentFailure = (error: string): InterestActionTypes => ({
  type: AT.SET_PAYMENT_FAILURE,
  payload: {
    error
  }
})
export const setPaymentLoading = (): InterestActionTypes => ({
  type: AT.SET_PAYMENT_LOADING
})
export const setPaymentSuccess = (
  payment: PaymentValue
): InterestActionTypes => ({
  type: AT.SET_PAYMENT_SUCCESS,
  payload: {
    payment
  }
})

// MISC
export const routeToTxHash = (coin: CoinType, txHash: string) => ({
  payload: { coin, txHash },
  type: AT.ROUTE_TO_TX_HASH
})
export const setInterestStep = (
  name: InterestStep,
  data?: InterestStepMetadata
) => ({
  payload: { name, data },
  type: AT.SET_INTEREST_STEP
})

export const setCoinDisplay = (isCoinDisplayed: boolean) => ({
  payload: { isCoinDisplayed },
  type: AT.SET_COIN_DISPLAY
})

export const showInterestModal = (step: InterestStep, coin: CoinType) => ({
  payload: { step, coin },
  type: AT.SHOW_INTEREST_MODAL
})
