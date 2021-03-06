import { actions } from 'data'
import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import React, { Component } from 'react'

import { getData } from './selectors'
import TransactionList from './template.success'

class TransactionListContainer extends Component<Props> {
  componentDidMount () {
    this.props.interestActions.fetchInterestTransactions(true)
  }

  render () {
    return this.props.data.cata({
      Success: val => <TransactionList {...val} {...this.props} />,
      Failure: () => null,
      Loading: () => null,
      NotAsked: () => null
    })
  }
}

const mapStateToProps = state => ({
  data: getData(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  interestActions: bindActionCreators(actions.components.interest, dispatch)
})
const connector = connect(mapStateToProps, mapDispatchToProps)

export type SuccessStateType = ReturnType<typeof getData>['data']

export type Props = ConnectedProps<typeof connector>

export default connector(TransactionListContainer)
