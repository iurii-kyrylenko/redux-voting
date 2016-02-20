import {makeStore} from './src/store';

export const store = makeStore();

/**
 * 1. install locally babel-cli (npm i babel-cli -D)
 * 2. Launch a REPL (Read-Eval-Print-Loop)
 *
 * > node node_modules/babel-cli/bin/babel-node
 *
 * > var store = require('./index.js').store
 *
 * > store.getState()
 * => Map {}
 *
 * > store.dispatch({type: 'SET_ENTRIES', entries: ['entry#1', 'entry#2']})
 * > store.getState()
 * => Map { "entries": List [ "entry#1", "entry#2" ] }
 *
 * > store.dispatch({type: 'NEXT'})
 * > store.getState()
 * => Map { "entries": List [], "vote": Map { "pair": List [ "entry#1", "entry#2" ] } }
 *
 * > store.dispatch({type: 'VOTE', entry: 'entry#1'})
 * > store.getState()
 * => Map { "entries": List [], "vote": Map { "pair": List [ "entry#1", "entry#2" ], "tally": Map { "entry#1": 1 } } }
 *
 * > store.dispatch({type: 'NEXT'})
 * > store.getState()
 * => Map { "winner": "entry#1" }
 */
