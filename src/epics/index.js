import 'rxjs'
import { combineEpics } from 'redux-observable'
import coinEpic from './coinEpic'

const rootEpic = combineEpics(coinEpic)

export default rootEpic
