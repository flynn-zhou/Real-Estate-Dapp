"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96840],{96840:function(e,a,s){s.d(a,{onSessionProposal:function(){return o}});var i=s(28644),n=s(39624);async function o(e){let{wallet:a,walletConnectClient:s,event:o,chains:p,onConnect:c}=e,d=a.getAccount();if(!d)throw Error("No account connected to provided wallet");let m=o.verifyContext?.verified?.origin;m&&await t({origin:m,walletConnectClient:s});let u=await r({account:d,walletConnectClient:s,sessionProposal:o,chains:p});await (0,n.Aj)(u),a.subscribe("disconnect",()=>{(0,i.$b)({session:u,walletConnectClient:s})}),c?.(u)}async function t({walletConnectClient:e,origin:a}){for(let s of(await (0,n.Rx)()))s.origin===a&&await (0,i.$b)({session:s,walletConnectClient:e})}async function r({account:e,walletConnectClient:a,sessionProposal:s,chains:i}){if(!s.params.requiredNamespaces?.eip155&&!s.params.optionalNamespaces?.eip155)throw Error("No EIP155 namespace found in Wallet Connect session proposal");let n={chains:[...Array.from(new Set([...s.params.requiredNamespaces?.eip155?.chains?.map(a=>`${a}:${e.address}`)??[],...s.params.optionalNamespaces?.eip155?.chains?.map(a=>`${a}:${e.address}`)??[],...i?.map(a=>`eip155:${a.id}:${e.address}`)??[]]))],methods:[...s.params.requiredNamespaces?.eip155?.methods??[],...s.params.optionalNamespaces?.eip155?.methods??[]],events:[...s.params.requiredNamespaces?.eip155?.events??[],...s.params.optionalNamespaces?.eip155?.events??[]]},o=await a.approve({id:s.id,namespaces:{eip155:{accounts:n.chains,methods:n.methods,events:n.events}}});return{topic:(await o.acknowledged()).topic,origin:s.verifyContext?.verified?.origin||"Unknown origin"}}}}]);