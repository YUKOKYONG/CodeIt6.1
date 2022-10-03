// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v93 = stdlib.protect(ctc0, interact.payment, 'for Alice\'s interact field payment');
  
  const txn1 = await (ctc.sendrecv({
    args: [v93],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v93, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v97], secs: v99, time: v98, didSend: v29, from: v96 } = txn1;
      
      sim_r.txns.push({
        amt: v97,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v97], secs: v99, time: v98, didSend: v29, from: v96 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v106, time: v105, didSend: v38, from: v104 } = txn2;
  ;
  let v109 = stdlib.checkedBigNumberify('./index.rsh:33:20:decimal', stdlib.UInt_max, '0');
  let v110 = v105;
  
  let txn3 = txn2;
  while (await (async () => {
    const v121 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:35:23:decimal', stdlib.UInt_max, '0'));
    
    return v121;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v126], secs: v128, time: v127, didSend: v55, from: v125 } = txn4;
    ;
    const v129 = stdlib.addressEq(v104, v125);
    stdlib.assert(v129, {
      at: './index.rsh:41:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v132 = stdlib.protect(ctc0, await interact.getDecision(), {
      at: './index.rsh:45:66:application',
      fs: ['at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:23:function exp)'],
      msg: 'getDecision',
      who: 'Alice'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v96, v97, v104, v132],
      evt_cnt: 1,
      funcNum: 4,
      lct: v127,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:47:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v134], secs: v136, time: v135, didSend: v65, from: v133 } = txn5;
        
        ;
        const cv109 = v134;
        const cv110 = v135;
        
        await (async () => {
          const v109 = cv109;
          const v110 = cv110;
          
          if (await (async () => {
            const v121 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:35:23:decimal', stdlib.UInt_max, '0'));
            
            return v121;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v138 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:53:14:decimal', stdlib.UInt_max, '2'), v97);
            sim_r.txns.push({
              kind: 'from',
              to: v104,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v134], secs: v136, time: v135, didSend: v65, from: v133 } = txn5;
    ;
    const v137 = stdlib.addressEq(v96, v133);
    stdlib.assert(v137, {
      at: './index.rsh:47:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const cv109 = v134;
    const cv110 = v135;
    
    v109 = cv109;
    v110 = cv110;
    
    txn3 = txn5;
    continue;
    
    
    
    }
  const v138 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:53:14:decimal', stdlib.UInt_max, '2'), v97);
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v97], secs: v99, time: v98, didSend: v29, from: v96 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v96, v97],
    evt_cnt: 0,
    funcNum: 1,
    lct: v98,
    onlyIf: true,
    out_tys: [],
    pay: [v97, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v106, time: v105, didSend: v38, from: v104 } = txn2;
      
      sim_r.txns.push({
        amt: v97,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v109 = stdlib.checkedBigNumberify('./index.rsh:33:20:decimal', stdlib.UInt_max, '0');
      const v110 = v105;
      
      if (await (async () => {
        const v121 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:35:23:decimal', stdlib.UInt_max, '0'));
        
        return v121;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v138 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:53:14:decimal', stdlib.UInt_max, '2'), v97);
        sim_r.txns.push({
          kind: 'from',
          to: v104,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v106, time: v105, didSend: v38, from: v104 } = txn2;
  ;
  let v109 = stdlib.checkedBigNumberify('./index.rsh:33:20:decimal', stdlib.UInt_max, '0');
  let v110 = v105;
  
  let txn3 = txn2;
  while (await (async () => {
    const v121 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:35:23:decimal', stdlib.UInt_max, '0'));
    
    return v121;})()) {
    const v124 = stdlib.protect(ctc0, await interact.getFortune(), {
      at: './index.rsh:39:62:application',
      fs: ['at ./index.rsh:38:17:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)'],
      msg: 'getFortune',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v96, v97, v104, v124],
      evt_cnt: 1,
      funcNum: 3,
      lct: v110,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:41:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v126], secs: v128, time: v127, didSend: v55, from: v125 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v126], secs: v128, time: v127, didSend: v55, from: v125 } = txn4;
    ;
    const v129 = stdlib.addressEq(v104, v125);
    stdlib.assert(v129, {
      at: './index.rsh:41:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v134], secs: v136, time: v135, didSend: v65, from: v133 } = txn5;
    ;
    const v137 = stdlib.addressEq(v96, v133);
    stdlib.assert(v137, {
      at: './index.rsh:47:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const cv109 = v134;
    const cv110 = v135;
    
    v109 = cv109;
    v110 = cv110;
    
    txn3 = txn5;
    continue;
    
    
    
    }
  const v138 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:53:14:decimal', stdlib.UInt_max, '2'), v97);
  ;
  stdlib.protect(ctc2, await interact.acceptPayment(v97), {
    at: './index.rsh:57:31:application',
    fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:17:function exp)'],
    msg: 'acceptPayment',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAGAAEEBSACJgIBAAAiNQAxGEEB6ilkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQMMQACmSSQMQABHJBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQUXNf6ABPmLr3g0/hZQsDT/MQASRDT/NAMhBFs0A1coIDT+MgZCAN1IJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VyggNf1JNQUXNfyABNQMbNY0/BZQsDT9MQASRDT/NP4WUDT9UChLAVcASGdIJTUBMgY1AkIA4UkjDEAAOCMSRCM0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/gASai5F0sDT/iAEENANXACA0/zEAIjIGQgBGSIGgjQaIAO0iNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gAxzEANP8WUChLAVcAKGdIIzUBMgY1AkIAXTX/Nf41/TX8Nfs0/iISQQAbNPs0/BZQNP1QKEsBVwBIZ0gkNQEyBjUCQgAxsSKyASEFNPwLsggjshA0/bIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v134",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v134",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000e1938038062000e198339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610b6b80620002ae6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780638323075714610096578063a209ad4e146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046108d9565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b93660046108d9565b610256565b3480156100ca57600080fd5b506100d36103cf565b60405161007a9291906108fc565b61005d6100ef3660046108d9565b61046c565b6101046001600054146009610621565b61011e8135158061011757506001548235145b600a610621565b60008080556002805461013090610959565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610959565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c191906109aa565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f4929190610a0f565b60405180910390a161020d816020015134146008610621565b6102156107a7565b815181516001600160a01b039091169052602080830151825182015281513360409091015280820180516000905251439101526102518161064b565b505050565b6102666005600054146011610621565b6102808135158061027957506001548235145b6012610621565b60008080556002805461029290610959565b80601f01602080910402602001604051908101604052809291908181526020018280546102be90610959565b801561030b5780601f106102e05761010080835404028352916020019161030b565b820191906000526020600020905b8154815290600101906020018083116102ee57829003601f168201915b50505050508060200190518101906103239190610a4c565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03383604051610356929190610abf565b60405180910390a161036a3415600f610621565b8051610382906001600160a01b031633146010610621565b61038a6107a7565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152808201805185830135905251439101526102518161064b565b6000606060005460028080546103e490610959565b80601f016020809104026020016040519081016040528092919081815260200182805461041090610959565b801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b50505050509050915091509091565b61047c600460005414600d610621565b6104968135158061048f57506001548235145b600e610621565b6000808055600280546104a890610959565b80601f01602080910402602001604051908101604052809291908181526020018280546104d490610959565b80156105215780601f106104f657610100808354040283529160200191610521565b820191906000526020600020905b81548152906001019060200180831161050457829003601f168201915b50505050508060200190518101906105399190610a4c565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338360405161056c929190610abf565b60405180910390a16105803415600b610621565b604081015161059b906001600160a01b03163314600c610621565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845289890151821683526005909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261061b92600292909101906107f2565b50505050565b816106475760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6020810151516106d8576040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526004909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261025192600292909101906107f2565b8060000151604001516001600160a01b03166108fc6107006002846000015160200151610742565b6040518115909202916000818181858888f19350505050158015610728573d6000803e3d6000fd5b506000808055600181905561073f90600290610876565b50565b6000811580610766575082826107588183610ae6565b92506107649083610b13565b145b6107a15760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161063e565b92915050565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016107ed604051806040016040528060008152602001600081525090565b905290565b8280546107fe90610959565b90600052602060002090601f0160209004810192826108205760008555610866565b82601f1061083957805160ff1916838001178555610866565b82800160010185558215610866579182015b8281111561086657825182559160200191906001019061084b565b506108729291506108ac565b5090565b50805461088290610959565b6000825580601f10610892575050565b601f01602090049060005260206000209081019061073f91905b5b8082111561087257600081556001016108ad565b6000604082840312156108d357600080fd5b50919050565b6000604082840312156108eb57600080fd5b6108f583836108c1565b9392505050565b82815260006020604081840152835180604085015260005b8181101561093057858101830151858201606001528201610914565b81811115610942576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061096d57607f821691505b602082108114156108d357634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146109a557600080fd5b919050565b6000604082840312156109bc57600080fd5b6040516040810181811067ffffffffffffffff821117156109ed57634e487b7160e01b600052604160045260246000fd5b6040526109f98361098e565b8152602083015160208201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610a3d57600080fd5b80604085015250509392505050565b600060608284031215610a5e57600080fd5b6040516060810181811067ffffffffffffffff82111715610a8f57634e487b7160e01b600052604160045260246000fd5b604052610a9b8361098e565b815260208301516020820152610ab36040840161098e565b60408201529392505050565b6001600160a01b0383168152606081016108f5602083018480358252602090810135910152565b6000816000190483118215151615610b0e57634e487b7160e01b600052601160045260246000fd5b500290565b600082610b3057634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220935171483248176829627a75ffdafa16de896478a264313cab911dec3a63250964736f6c634300080c0033`,
  BytecodeLen: 3609,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:25:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:54:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:36:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:42:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
