"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85810],{85810:function(t,o,s){s.d(o,{uploadBatch:function(){return r}});var a=s(88615),e=s(99910);async function r(t,o,s,r){let i=await (0,e.NX)(t)(`https://${(0,a.gc)().storage}/ipfs/upload`,{method:"POST",headers:{},body:o});if(!i.ok){if(i.body?.cancel(),401===i.status)throw Error("Unauthorized - You don't have permission to use this service.");throw Error(`Failed to upload files to IPFS - ${i.status} - ${i.statusText}`)}let u=(await i.json()).IpfsHash;if(!u)throw Error("Failed to upload files to IPFS - Bad CID");return r?.uploadWithoutDirectory?[`ipfs://${u}`]:s.map(t=>`ipfs://${u}/${t}`)}}}]);