"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82898,11223],{11223:function(e,t,a){function n(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}a.r(t),a.d(t,{concatHex:function(){return n}})},82898:function(e,t,a){a.r(t),a.d(t,{connectSmartWallet:function(){return ew},disconnectSmartWallet:function(){return eb},isSmartWallet:function(){return eg},personalAccountToSmartAccountMap:function(){return ev}});var n=a(85946);let r=2n**96n-1n;var i=a(95810),s=a(57621),o=a(26182);let c=[{type:"address",name:"owner"},{type:"address",name:"spender"}],d=[{type:"uint256"}];async function p(e){return(0,o.readContract)({contract:e.contract,method:["0xdd62ed3e",c,d],params:[e.owner,e.spender]})}var u=a(98445),l=a(47537),m=a(7529),y=a(98511),f=a(75403);function h(e){if(["string","number"].includes(typeof e)&&!Number.isInteger(Number(e)))throw Error(`Expected value to be an integer to convert to a bigint, got ${e} of type ${typeof e}`);return e instanceof Uint8Array?BigInt((0,f.dg)(e)):BigInt(e)}var g=a(11223),v=a(83159),G=a(11692);let w=e=>{let t=function(e){let{gas:t,nonce:a,to:n,from:r,value:i,maxFeePerGas:s,maxPriorityFeePerGas:o,paymaster:c,paymasterInput:d,gasPerPubdata:p,data:u}=e;return{txType:113n,from:BigInt(r),to:n?BigInt(n):0n,gasLimit:t??0n,gasPerPubdataByteLimit:p??50000n,maxFeePerGas:s??0n,maxPriorityFeePerGas:o??0n,paymaster:c?BigInt(c):0n,nonce:a?BigInt(a):0n,value:i??0n,data:u||"0x0",factoryDeps:[],paymasterInput:d||"0x"}}(e);return{domain:{name:"zkSync",version:"2",chainId:e.chainId},types:{Transaction:[{name:"txType",type:"uint256"},{name:"from",type:"uint256"},{name:"to",type:"uint256"},{name:"gasLimit",type:"uint256"},{name:"gasPerPubdataByteLimit",type:"uint256"},{name:"maxFeePerGas",type:"uint256"},{name:"maxPriorityFeePerGas",type:"uint256"},{name:"paymaster",type:"uint256"},{name:"nonce",type:"uint256"},{name:"value",type:"uint256"},{name:"data",type:"bytes"},{name:"factoryDeps",type:"bytes32[]"},{name:"paymasterInput",type:"bytes"}]},primaryType:"Transaction",message:t}};async function b(e){let{account:t,eip712Transaction:a,chainId:n}=e,r=w(a),i=await t.signTypedData({...r});return function(e){let{chainId:t,gas:a,nonce:n,to:r,from:i,value:s,maxFeePerGas:o,maxPriorityFeePerGas:c,customSignature:d,factoryDeps:p,paymaster:u,paymasterInput:l,gasPerPubdata:y,data:h}=e,v=[n?(0,f.NC)(n):"0x",c?(0,f.NC)(c):"0x",o?(0,f.NC)(o):"0x",a?(0,f.NC)(a):"0x",r??"0x",s?(0,f.NC)(s):"0x",h??"0x0",(0,f.NC)(t),(0,f.NC)(""),(0,f.NC)(""),(0,f.NC)(t),i??"0x",y?(0,f.NC)(y):(0,f.NC)(50000n),p??[],d??"0x",u&&l?[u,l]:[]];return(0,g.concatHex)(["0x71",(0,m.LV)(v)])}({...a,chainId:n,customSignature:i})}async function x(e){let{account:t,transaction:a}=e,[n,r,i,s,o,c,d]=await Promise.all([(0,G.encode)(a),(0,v.q)(a.to),(0,v.q)(a.value),(0,v.q)(a.gas),(0,v.q)(a.maxFeePerGas),(0,v.q)(a.maxPriorityFeePerGas),(0,v.q)(a.eip712).then(e=>e?.gasPerPubdata)]);if(!s||!o||!c){let e=(0,y.getRpcClient)(a),p=await e({method:"zks_estimateFee",params:[{from:t.address,to:r,data:n,value:i?(0,f.eC)(i):void 0}]});s=h(p.gas_limit),o=2n*h(p.max_fee_per_gas),c=h(p.max_priority_fee_per_gas)||1n,d=2n*h(p.gas_per_pubdata_limit)}return{...await (0,l.n)({transaction:{...a,gas:s,maxFeePerGas:o,maxPriorityFeePerGas:c},from:t.address}),...a.eip712,gasPerPubdata:d,from:t.address}}var A=a(4159),L=a(26485),P=a(16327),O=a(8988),I=a(59505),C=a(99910),D=a(75100),T=a(49329),V=a(52749);let U=()=>{let e=BigInt(Math.floor(4294967296*Math.random())),t=BigInt(Math.floor(4294967296*Math.random())),a=BigInt(Math.floor(4294967296*Math.random())),n=BigInt(Math.floor(4294967296*Math.random())),r=BigInt(Math.floor(4294967296*Math.random())),i=BigInt(Math.floor(4294967296*Math.random()));return e<<BigInt(160)|t<<BigInt(128)|a<<BigInt(96)|n<<BigInt(64)|r<<BigInt(32)|i};function B(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,null==t||(0,V.v)(t)?t:(0,f.NC)(t)]))}async function N(e){return H({...e,operation:"eth_sendUserOperation",params:[B(e.userOp),e.options.entrypointAddress??T.Ex]})}async function _(e){let t=await H({...e,operation:"eth_estimateUserOperationGas",params:[B(e.userOp),e.options.entrypointAddress??T.Ex]});return{preVerificationGas:(0,f.y_)(t.preVerificationGas),verificationGas:(0,f.y_)(t.verificationGas),verificationGasLimit:(0,f.y_)(t.verificationGasLimit),callGasLimit:(0,f.y_)(t.callGasLimit)+T.X_,paymasterVerificationGasLimit:void 0!==t.paymasterVerificationGasLimit?(0,f.y_)(t.paymasterVerificationGasLimit):void 0,paymasterPostOpGasLimit:void 0!==t.paymasterPostOpGasLimit?(0,f.y_)(t.paymasterPostOpGasLimit):void 0}}async function M(e){let t=await H({...e,operation:"thirdweb_getUserOperationGasPrice",params:[]});return{maxPriorityFeePerGas:(0,f.y_)(t.maxPriorityFeePerGas),maxFeePerGas:(0,f.y_)(t.maxFeePerGas)}}async function E(e){let t=await k(e);if(t){if(!1===t.success){let e=(0,O.h)({events:[function(e={}){return(0,I.R)({signature:"event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",filters:e})}(),function(e={}){return(0,I.R)({signature:"event PostOpRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",filters:e})}()],logs:t.logs}),a=e[0]?.args?.revertReason;if(!a)throw Error(`UserOp failed at txHash: ${t.receipt.transactionHash}`);let n=(0,P.p)({data:a});throw Error(`UserOp failed with reason: '${n.args.join(",")}' at txHash: ${t.receipt.transactionHash}`)}return t.receipt}}async function k(e){let t=await H({options:e,operation:"eth_getUserOperationReceipt",params:[e.userOpHash]});if(t)return function(e){let{receipt:t}=e,a={...t,transactionHash:t.transactionHash,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs,to:t.to?t.to:null,transactionIndex:t.transactionIndex,status:t.status,type:t.type};return t.blobGasPrice&&(a.blobGasPrice=BigInt(t.blobGasPrice)),t.blobGasUsed&&(a.blobGasUsed=BigInt(t.blobGasUsed)),{...e,receipt:a,userOpHash:e.userOpHash,actualGasCost:BigInt(e.actualGasCost),actualGasUsed:BigInt(e.actualGasUsed),nonce:BigInt(e.nonce)}}(t)}async function $(e){let t=await H({options:e.options,operation:"zk_paymasterData",params:[e.transaction]});return{paymaster:t.paymaster,paymasterInput:t.paymasterInput}}async function F(e){return{transactionHash:(await H({options:e.options,operation:"zk_broadcastTransaction",params:[{...e.transaction,signedTransaction:e.signedTransaction}]})).transactionHash}}async function H(e){let{options:t,operation:a,params:n}=e;T.eM&&console.debug(`>>> sending ${a} with payload:`,n);let r=(0,T.bI)(t.entrypointAddress||T.Ex),i=t.bundlerUrl??(0,T.Rg)(t.chain,"v0.6"===r?"v1":"v2"),s=(0,C.NX)(t.client),o=await s(i,{method:"POST",headers:{"Content-Type":"application/json"},body:(0,D.P)({jsonrpc:"2.0",id:1,method:a,params:n})}),c=await o.json();if(!o.ok||c.error){let e=c.error||o.statusText;"object"==typeof e&&(e=JSON.stringify(e));let t=c.code||"UNKNOWN";throw Error(`${a} error: ${e}
Status: ${o.status}
Code: ${t}`)}return T.eM&&console.debug(`<<< ${a} result:`,c),c.result}var R=a(21690);async function S(e){let{factoryContract:t,predictAddressOverride:a,adminAddress:n,accountSalt:r,accountAddress:i}=e;if(a)return a(t);if(i)return i;if(!n)throw Error("Account address is required to predict the smart wallet address.");let s=(0,f.$G)(r??"");return(0,o.readContract)({contract:t,method:"function getAddress(address, bytes) returns (address)",params:[n,s]})}function z(e){let{adminAddress:t,factoryContract:a,createAccountOverride:n,accountSalt:r}=e;return n?n(a):(0,R.A)({contract:a,method:"function createAccount(address, bytes) returns (address)",params:[t,(0,f.$G)(r??"")]})}function q(e){let{accountContract:t,transaction:a,executeOverride:n}=e;return n?n(t,a):(0,R.A)({contract:t,method:"function execute(address, uint256, bytes)",params:[a.to||"",a.value||0n,a.data||"0x"]})}var j=a(57040);let W=[{type:"address",name:"sender"},{type:"uint192",name:"key"}],J=[{type:"uint256",name:"nonce"}];async function K(e){return(0,o.readContract)({contract:e.contract,method:["0x35567e1a",W,J],params:[e.sender,e.key]})}let X=[{type:"tuple",name:"userOp",components:[{type:"address",name:"sender"},{type:"uint256",name:"nonce"},{type:"bytes",name:"initCode"},{type:"bytes",name:"callData"},{type:"uint256",name:"callGasLimit"},{type:"uint256",name:"verificationGasLimit"},{type:"uint256",name:"preVerificationGas"},{type:"uint256",name:"maxFeePerGas"},{type:"uint256",name:"maxPriorityFeePerGas"},{type:"bytes",name:"paymasterAndData"},{type:"bytes",name:"signature"}]}],Y=[{type:"bytes32"}];async function Q(e){return(0,o.readContract)({contract:e.contract,method:["0xa6193531",X,Y],params:[e.userOp]})}let Z=[{type:"tuple",name:"userOp",components:[{type:"address",name:"sender"},{type:"uint256",name:"nonce"},{type:"bytes",name:"initCode"},{type:"bytes",name:"callData"},{type:"bytes32",name:"accountGasLimits"},{type:"uint256",name:"preVerificationGas"},{type:"bytes32",name:"gasFees"},{type:"bytes",name:"paymasterAndData"},{type:"bytes",name:"signature"}]}],ee=[{type:"bytes32"}];async function et(e){return(0,o.readContract)({contract:e.contract,method:["0x22cdde4c",Z,ee],params:[e.userOp]})}var ea=a(19500),en=a(60689),er=a(24951),ei=a(61769),es=a(92106);let eo=e=>({sender:e.sender,nonce:e.nonce,initCode:e.factory?(0,j.zo)([e.factory,e.factoryData||"0x"]):"0x",callData:e.callData,accountGasLimits:(0,j.zo)([(0,ei.vk)((0,es.NC)(e.verificationGasLimit),{size:16}),(0,ei.vk)((0,es.NC)(e.callGasLimit),{size:16})]),preVerificationGas:e.preVerificationGas,gasFees:(0,j.zo)([(0,ei.vk)((0,es.NC)(e.maxPriorityFeePerGas),{size:16}),(0,ei.vk)((0,es.NC)(e.maxFeePerGas),{size:16})]),paymasterAndData:e.paymaster?(0,j.zo)([e.paymaster,(0,ei.vk)((0,es.NC)(e.paymasterVerificationGasLimit||BigInt(0)),{size:16}),(0,ei.vk)((0,es.NC)(e.paymasterPostOpGasLimit||BigInt(0)),{size:16}),e.paymasterData||"0x"]):"0x",signature:e.signature});async function ec(e){let{userOp:t,paymasterOverride:a,client:n,chain:r,entrypointAddress:i}=e;if(a)return a(t);let s=i??T.Ex,o=(0,T.bI)(s),c=(0,T.Rg)(r,"v0.6"===o?"v1":"v2"),d=(0,C.NX)(n),p=await d(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"pm_sponsorUserOperation",params:[B(t),s]})}),u=await p.json();if(!p.ok){let e=u.error||p.statusText,t=u.code||"UNKNOWN";throw Error(`Paymaster error: ${e}
Status: ${p.status}
Code: ${t}`)}if(T.eM&&console.debug("Paymaster result:",u),u.result)return"string"==typeof u.result?{paymasterAndData:u.result}:{paymasterAndData:u.result.paymasterAndData,verificationGasLimit:u.result.verificationGasLimit?(0,f.y_)(u.result.verificationGasLimit):void 0,preVerificationGas:u.result.preVerificationGas?(0,f.y_)(u.result.preVerificationGas):void 0,callGasLimit:u.result.callGasLimit?(0,f.y_)(u.result.callGasLimit):void 0,paymaster:u.result.paymaster,paymasterData:u.result.paymasterData,paymasterVerificationGasLimit:u.result.paymasterVerificationGasLimit?(0,f.y_)(u.result.paymasterVerificationGasLimit):void 0,paymasterPostOpGasLimit:u.result.paymasterPostOpGasLimit?(0,f.y_)(u.result.paymasterPostOpGasLimit):void 0};let l=u.error?.message||u.error||p.statusText||"unknown error";throw Error(`Paymaster error from ${c}: ${l}`)}async function ed(e){let t=e.timeoutMs||12e4,a=e.intervalMs||1e3,n=Date.now()+t;for(;Date.now()<n;){let t=await E(e);if(t)return t;await new Promise(e=>setTimeout(e,a))}throw Error("Timeout waiting for userOp to be mined")}async function ep(e){let{transaction:t,accountContract:a,factoryContract:n,adminAddress:r,overrides:i,sponsorGas:s}=e,o=t.chain,c=t.client,d={client:c,chain:o,entrypointAddress:i?.entrypointAddress},p=(0,T.bI)(e.overrides?.entrypointAddress||T.Ex),[u,l,m,y]=await Promise.all([(0,en.isContractDeployed)(a),(0,G.encode)(t),eu({executeTx:t,bundlerOptions:d,chain:o,client:c}),eh({accountContract:a,chain:o,client:c,entrypointAddress:i?.entrypointAddress,getNonceOverride:i?.getAccountNonce})]),{maxFeePerGas:f,maxPriorityFeePerGas:h}=m;return"v0.7"===p?el({bundlerOptions:d,factoryContract:n,accountContract:a,adminAddress:r,sponsorGas:s,overrides:i,isDeployed:u,nonce:y,callData:l,maxFeePerGas:f,maxPriorityFeePerGas:h}):em({bundlerOptions:d,factoryContract:n,accountContract:a,adminAddress:r,sponsorGas:s,overrides:i,isDeployed:u,nonce:y,callData:l,maxFeePerGas:f,maxPriorityFeePerGas:h})}async function eu(e){let{executeTx:t,bundlerOptions:a,chain:n,client:r}=e,{maxFeePerGas:i,maxPriorityFeePerGas:s}=t,o=(0,T.bI)(a.entrypointAddress||T.Ex),c=a?.bundlerUrl??(0,T.Rg)(n,"v0.6"===o?"v1":"v2");if((0,C.Rm)(c)){let e=await M({options:a});i=e.maxFeePerGas,s=e.maxPriorityFeePerGas}else{let[e,t]=await Promise.all([(0,v.q)(i),(0,v.q)(s)]);if(e&&t)i=e,s=t;else{let a=await (0,ea.E)(r,n);s=t??a.maxPriorityFeePerGas??0n,i=e??a.maxFeePerGas??0n}}return{maxFeePerGas:i,maxPriorityFeePerGas:s}}async function el(e){let{bundlerOptions:t,isDeployed:a,factoryContract:n,accountContract:r,adminAddress:i,sponsorGas:s,overrides:o,nonce:c,callData:d,maxFeePerGas:p,maxPriorityFeePerGas:u}=e,{chain:l,client:m}=t,y=a?void 0:n.address,f=a?"0x":await (0,G.encode)(z({factoryContract:n,adminAddress:i,accountSalt:o?.accountSalt,createAccountOverride:o?.createAccount})),h={sender:r.address,nonce:c,callData:d,maxFeePerGas:p,maxPriorityFeePerGas:u,callGasLimit:0n,verificationGasLimit:0n,preVerificationGas:0n,factory:y,factoryData:f,paymaster:void 0,paymasterData:"0x",paymasterVerificationGasLimit:0n,paymasterPostOpGasLimit:0n,signature:T.Ld};if(s){let e=await ec({userOp:h,chain:l,client:m,entrypointAddress:o?.entrypointAddress,paymasterOverride:o?.paymaster});if(e.paymaster&&e.paymasterData&&(h.paymaster=e.paymaster,h.paymasterData=e.paymasterData),e.callGasLimit&&e.verificationGasLimit&&e.preVerificationGas&&e.paymasterPostOpGasLimit&&e.paymasterVerificationGasLimit)h.callGasLimit=e.callGasLimit,h.verificationGasLimit=e.verificationGasLimit,h.preVerificationGas=e.preVerificationGas,h.paymasterPostOpGasLimit=e.paymasterPostOpGasLimit,h.paymasterVerificationGasLimit=e.paymasterVerificationGasLimit;else{let a=await _({userOp:h,options:t});h.callGasLimit=a.callGasLimit,h.verificationGasLimit=a.verificationGasLimit,h.preVerificationGas=a.preVerificationGas,h.paymasterPostOpGasLimit=e.paymasterPostOpGasLimit||0n,h.paymasterVerificationGasLimit=e.paymasterVerificationGasLimit||0n;let n=await ec({userOp:h,chain:l,client:m,entrypointAddress:o?.entrypointAddress,paymasterOverride:o?.paymaster});n.paymaster&&n.paymasterData&&(h.paymaster=n.paymaster,h.paymasterData=n.paymasterData)}}else{let e=await _({userOp:h,options:t});h.callGasLimit=e.callGasLimit,h.verificationGasLimit=e.verificationGasLimit,h.preVerificationGas=e.preVerificationGas,h.paymasterPostOpGasLimit=e.paymasterPostOpGasLimit||0n,h.paymasterVerificationGasLimit=e.paymasterVerificationGasLimit||0n}return{...h,signature:"0x"}}async function em(e){let{bundlerOptions:t,isDeployed:a,factoryContract:n,accountContract:r,adminAddress:i,sponsorGas:s,overrides:o,nonce:c,callData:d,maxFeePerGas:p,maxPriorityFeePerGas:u}=e,{chain:l,client:m}=t,y=a?"0x":await ef({factoryContract:n,adminAddress:i,accountSalt:o?.accountSalt,createAccountOverride:o?.createAccount}),f={sender:r.address,nonce:c,initCode:y,callData:d,maxFeePerGas:p,maxPriorityFeePerGas:u,callGasLimit:0n,verificationGasLimit:0n,preVerificationGas:0n,paymasterAndData:"0x",signature:T.Ld};if(s){let e=await ec({userOp:f,chain:l,client:m,entrypointAddress:o?.entrypointAddress,paymasterOverride:o?.paymaster}),a="paymasterAndData"in e?e.paymasterAndData:"0x";if(a&&"0x"!==a&&(f.paymasterAndData=a),e.callGasLimit&&e.verificationGasLimit&&e.preVerificationGas)f.callGasLimit=e.callGasLimit,f.verificationGasLimit=e.verificationGasLimit,f.preVerificationGas=e.preVerificationGas;else{let e=await _({userOp:f,options:t});if(f.callGasLimit=e.callGasLimit,f.verificationGasLimit=e.verificationGasLimit,f.preVerificationGas=e.preVerificationGas,a&&"0x"!==a){let e=await ec({userOp:f,chain:l,client:m,entrypointAddress:o?.entrypointAddress,paymasterOverride:o?.paymaster}),t="paymasterAndData"in e?e.paymasterAndData:"0x";t&&"0x"!==t&&(f.paymasterAndData=t)}}}else{let e=await _({userOp:f,options:t});f.callGasLimit=e.callGasLimit,f.verificationGasLimit=e.verificationGasLimit,f.preVerificationGas=e.preVerificationGas}return{...f,signature:"0x"}}async function ey(e){let t;let{userOp:a,chain:n,entrypointAddress:r,adminAccount:i}=e;if("v0.7"===(0,T.bI)(r||T.Ex)){let i=eo(a);t=await et({contract:(0,s.u)({address:r||T.JK,chain:n,client:e.client}),userOp:i})}else t=await Q({contract:(0,s.u)({address:r||T.Ex,chain:n,client:e.client}),userOp:a});if(i.signMessage){let e=await i.signMessage({message:{raw:(0,er.nr)(t)}});return{...a,signature:e}}throw Error("signMessage not implemented in signingAccount")}async function ef(e){let{factoryContract:t,adminAddress:a,accountSalt:n,createAccountOverride:r}=e,i=z({factoryContract:t,adminAddress:a,accountSalt:n,createAccountOverride:r});return(0,j.zo)([t.address,await (0,G.encode)(i)])}async function eh(e){let{accountContract:t,chain:a,client:n,entrypointAddress:r,getNonceOverride:i}=e;return i?i(t):K({contract:(0,s.u)({address:r||T.Ex,chain:a,client:n}),key:U(),sender:t.address})}function eg(e){return"smart"===e.id}let ev=new WeakMap,eG=new WeakMap;async function ew(e,t,a){let{personalAccount:n,client:r,chain:o}=t;if(!n)throw Error("Personal wallet does not have an account");let c=a.factoryAddress??(0,T.yc)(a.overrides?.entrypointAddress),d=o??a.chain,p="gasless"in a?a.gasless:a.sponsorGas;if(324===d.id||300===d.id||302===d.id||11124===d.id)return[function(e){let{creationOptions:t,connectionOptions:a,chain:n}=e,r={address:a.personalAccount.address,async sendTransaction(s){let o={data:s.data,to:s.to??void 0,value:s.value??0n,chain:(0,i.XY)(s.chainId),client:a.client},c=await x({account:r,transaction:o});if(e.sponsorGas){let e=await $({options:{client:a.client,chain:n,bundlerUrl:t.overrides?.bundlerUrl,entrypointAddress:t.overrides?.entrypointAddress},transaction:c});c={...c,...e}}let d=await b({account:r,chainId:n.id,eip712Transaction:c});return{transactionHash:(await F({options:{client:a.client,chain:n,bundlerUrl:t.overrides?.bundlerUrl,entrypointAddress:t.overrides?.entrypointAddress},transaction:c,signedTransaction:d})).transactionHash,client:a.client,chain:n}},signMessage:async({message:e})=>a.personalAccount.signMessage({message:e}),async signTypedData(e){let t=(0,L.t)(e);return a.personalAccount.signTypedData(t)},onTransactionRequested:async e=>a.personalAccount.onTransactionRequested?.(e)};return r}({creationOptions:a,connectionOptions:t,chain:d,sponsorGas:p}),d];let u=(0,s.u)({client:r,address:c,chain:d}),l=await S({factoryContract:u,adminAddress:n.address,predictAddressOverride:a.overrides?.predictAddress,accountSalt:a.overrides?.accountSalt,accountAddress:a.overrides?.accountAddress}).then(e=>e).catch(e=>{throw Error(`Failed to get account address with factory contract ${u.address} on chain ID ${d.id}. Are you on the right chain?`,{cause:e})}),m=(0,s.u)({client:r,address:l,chain:d}),y=await ex({...a,chain:d,sponsorGas:p,personalAccount:n,accountContract:m,factoryContract:u,client:r});return ev.set(n,e),eG.set(e,n),[y,d]}async function eb(e){let t=eG.get(e);t&&(ev.delete(t),eG.delete(e))}async function ex(e){let{accountContract:t}=e,r={address:(0,A.Kn)(t.address),async sendTransaction(a){let n;let r=e.overrides?.erc20Paymaster;if(r){await eA({accountContract:t,erc20Paymaster:r,options:e});let a=async()=>({paymasterAndData:(0,g.concatHex)([r.address,r?.token]),paymaster:r.address,paymasterData:"0x"});n=e.overrides?.paymaster||a}return eP({executeTx:q({accountContract:t,transaction:a,executeOverride:e.overrides?.execute}),options:{...e,overrides:{...e.overrides,paymaster:n}}})},sendBatchTransaction:async a=>eP({executeTx:function(e){let{accountContract:t,transactions:a,executeBatchOverride:n}=e;return n?n(t,a):(0,R.A)({contract:t,method:"function executeBatch(address[], uint256[], bytes[])",params:[a.map(e=>e.to||""),a.map(e=>e.value||0n),a.map(e=>e.data||"0x")]})}({accountContract:t,transactions:a,executeBatchOverride:e.overrides?.executeBatch}),options:e}),async signMessage({message:n}){let i;let[{isContractDeployed:s},{readContract:o},{encodeAbiParameters:c},{hashMessage:d},{checkContractWalletSignature:p}]=await Promise.all([Promise.resolve().then(a.bind(a,60689)),Promise.resolve().then(a.bind(a,26182)),Promise.resolve().then(a.bind(a,39430)),a.e(31445).then(a.bind(a,31445)),a.e(46675).then(a.bind(a,46675))]);await s(t)||await eL({options:e,account:r,accountContract:t});let u=d(n),l=!1;try{await o({contract:t,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[u]}),l=!0}catch{}if(l){let a=c([{type:"bytes32"}],[u]);i=await e.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:e.chain.id,verifyingContract:t.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:a}})}else i=await e.personalAccount.signMessage({message:n});if(await p({contract:t,message:n,signature:i}))return i;throw Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")},async signTypedData(i){let s;let o=(0,L.t)(i),[{isContractDeployed:c},{readContract:d},{encodeAbiParameters:p},{checkContractWalletSignedTypedData:u}]=await Promise.all([Promise.resolve().then(a.bind(a,60689)),Promise.resolve().then(a.bind(a,26182)),Promise.resolve().then(a.bind(a,39430)),a.e(50228).then(a.bind(a,50228))]);if(o.domain?.verifyingContract?.toLowerCase()===t.address?.toLowerCase())return e.personalAccount.signTypedData(o);await c(t)||await eL({options:e,account:r,accountContract:t});let l=(0,n.Jv)(o),m=!1;try{await d({contract:t,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[l]}),m=!0}catch{}if(m){let a=p([{type:"bytes32"}],[l]);s=await e.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:e.chain.id,verifyingContract:t.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:a}})}else s=await e.personalAccount.signTypedData(o);if(await u({contract:t,data:o,signature:s}))return s;throw Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")},onTransactionRequested:async t=>e.personalAccount.onTransactionRequested?.(t)};return r}async function eA(e){let{accountContract:t,erc20Paymaster:a,options:n}=e,i=a.token,o=(0,s.u)({address:i,chain:t.chain,client:t.client});if(await p({contract:o,owner:t.address,spender:a.address})>0n)return;let c=(0,u.d)({contract:o,spender:a.address,amountWei:r-1n}),d=await (0,l.n)({transaction:c,from:t.address}),m=q({accountContract:t,transaction:d,executeOverride:n.overrides?.execute});await eP({executeTx:m,options:{...n,overrides:{...n.overrides,erc20Paymaster:void 0}}})}async function eL(e){let{options:t,account:n,accountContract:r}=e,[{sendTransaction:i},{prepareTransaction:s}]=await Promise.all([Promise.resolve().then(a.bind(a,75888)),Promise.resolve().then(a.bind(a,71316))]),o=s({client:t.client,chain:t.chain,to:r.address,value:0n,gas:50000n});return await i({transaction:o,account:n})}async function eP(e){let{executeTx:t,options:a}=e,n=await ep({transaction:t,factoryContract:a.factoryContract,accountContract:a.accountContract,adminAddress:a.personalAccount.address,sponsorGas:a.sponsorGas,overrides:a.overrides}),r=await ey({client:a.client,chain:a.chain,adminAccount:a.personalAccount,entrypointAddress:a.overrides?.entrypointAddress,userOp:n}),i={chain:a.chain,client:a.client,bundlerUrl:a.overrides?.bundlerUrl,entrypointAddress:a.overrides?.entrypointAddress},s=await N({options:i,userOp:r}),o=await ed({...a,userOpHash:s});return{client:a.client,chain:a.chain,transactionHash:o.transactionHash}}},7529:function(e,t,a){a.d(t,{LV:function(){return o}});var n=a(36117),r=a(11221),i=a(11187),s=a(92106);function o(e,t="hex"){let a=function e(t){return Array.isArray(t)?function(e){let t=e.reduce((e,t)=>e+t.length,0),a=c(t);return{length:t<=55?1+t:1+a+t,encode(n){for(let{encode:r}of(t<=55?n.pushByte(192+t):(n.pushByte(247+a),1===a?n.pushUint8(t):2===a?n.pushUint16(t):3===a?n.pushUint24(t):n.pushUint32(t)),e))r(n)}}}(t.map(t=>e(t))):function(e){let t="string"==typeof e?(0,i.nr)(e):e,a=c(t.length);return{length:1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+a+t.length,encode(e){1===t.length&&t[0]<128||(t.length<=55?e.pushByte(128+t.length):(e.pushByte(183+a),1===a?e.pushUint8(t.length):2===a?e.pushUint16(t.length):3===a?e.pushUint24(t.length):e.pushUint32(t.length))),e.pushBytes(t)}}}(t)}(e),n=(0,r.q)(new Uint8Array(a.length));return(a.encode(n),"hex"===t)?(0,s.ci)(n.bytes):n.bytes}function c(e){if(e<256)return 1;if(e<65536)return 2;if(e<16777216)return 3;if(e<4294967296)return 4;throw new n.G("Length is too large.")}},85946:function(e,t,a){a.d(t,{Jv:function(){return c}});var n=a(45444),r=a(57040),i=a(92106),s=a(49550),o=a(71352);function c(e){let{domain:t={},message:a,primaryType:n}=e,i={EIP712Domain:(0,o.cj)({domain:t}),...e.types};(0,o.iC)({domain:t,message:a,primaryType:n,types:i});let c=["0x1901"];return t&&c.push(function({domain:e,types:t}){return d({data:e,primaryType:"EIP712Domain",types:t})}({domain:t,types:i})),"EIP712Domain"!==n&&c.push(d({data:a,primaryType:n,types:i})),(0,s.w)((0,r.zo)(c))}function d({data:e,primaryType:t,types:a}){let r=function e({data:t,primaryType:a,types:r}){let o=[{type:"bytes32"}],c=[function({primaryType:e,types:t}){let a=(0,i.NC)(function({primaryType:e,types:t}){let a="",n=function e({primaryType:t,types:a},n=new Set){let r=t.match(/^\w*/u),i=r?.[0];if(n.has(i)||void 0===a[i])return n;for(let t of(n.add(i),a[i]))e({primaryType:t.type,types:a},n);return n}({primaryType:e,types:t});for(let r of(n.delete(e),[e,...Array.from(n).sort()]))a+=`${r}(${t[r].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return a}({primaryType:e,types:t}));return(0,s.w)(a)}({primaryType:a,types:r})];for(let d of r[a]){let[a,p]=function t({types:a,name:r,type:o,value:c}){if(void 0!==a[o])return[{type:"bytes32"},(0,s.w)(e({data:c,primaryType:o,types:a}))];if("bytes"===o){let e=c.length%2?"0":"";return c=`0x${e+c.slice(2)}`,[{type:"bytes32"},(0,s.w)(c)]}if("string"===o)return[{type:"bytes32"},(0,s.w)((0,i.NC)(c))];if(o.lastIndexOf("]")===o.length-1){let e=o.slice(0,o.lastIndexOf("[")),i=c.map(n=>t({name:r,type:e,types:a,value:n}));return[{type:"bytes32"},(0,s.w)((0,n.E)(i.map(([e])=>e),i.map(([,e])=>e)))]}return[{type:o},c]}({types:r,name:d.name,type:d.type,value:t[d.name]});o.push(a),c.push(p)}return(0,n.E)(o,c)}({data:e,primaryType:t,types:a});return(0,s.w)(r)}}}]);