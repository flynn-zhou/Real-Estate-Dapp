"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88482],{88482:function(a,e,t){t.d(e,{relayOpenZeppelinTransaction:function(){return p}});var r=t(57621),n=t(52749),s=t(75100),i=t(26182);async function o({account:a,serializableTransaction:e,transaction:t,gasless:n}){let s=(0,r.u)({address:n.relayerForwarderAddress,chain:t.chain,client:t.client}),o=await (0,i.readContract)({contract:s,method:"function getNonce(address) view returns (uint256)",params:[a.address]}),[p,u]=await (async()=>{if(!e.to)throw Error("OpenZeppelin transactions must have a 'to' address");if(!e.gas)throw Error("OpenZeppelin transactions must have a 'gas' value");if(!e.data)throw Error("OpenZeppelin transactions must have a 'data' value");if(n.experimentalChainlessSupport){let r={from:a.address,to:e.to,value:0n,gas:e.gas,nonce:o,data:e.data,chainid:BigInt(t.chain.id)};return[await a.signTypedData({domain:{name:"GSNv2 Forwarder",version:"0.0.1",verifyingContract:s.address},message:r,primaryType:"ForwardRequest",types:{ForwardRequest:c}}),r]}let r={from:a.address,to:e.to,value:0n,gas:e.gas,nonce:o,data:e.data};return[await a.signTypedData({domain:{name:n.domainName??"GSNv2 Forwarder",version:n.domainVersion??"0.0.1",chainId:t.chain.id,verifyingContract:s.address},message:r,primaryType:"ForwardRequest",types:{ForwardRequest:d}}),r]})();return{message:u,signature:p,messageType:"forward"}}let d=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"}],c=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"},{name:"chainid",type:"uint256"}];async function p(a){let{message:e,messageType:t,signature:r}=await o(a),i=await fetch(a.gasless.relayerUrl,{method:"POST",body:(0,s.P)({request:e,type:t,signature:r,forwarderAddress:a.gasless.relayerForwarderAddress})});if(!i.ok)throw i.body?.cancel(),Error(`Failed to send transaction: ${await i.text()}`);let d=await i.json();if(!d.result)throw Error(`Relay transaction failed: ${d.message}`);let c=JSON.parse(d.result).txHash;if((0,n.v)(c))return{transactionHash:c,chain:a.transaction.chain,client:a.transaction.client};throw Error(`Failed to send transaction: ${(0,s.P)(d)}`)}}}]);