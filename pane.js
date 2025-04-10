[rewrite_local] 

^https?:\/\/firebaseappcheck\.googleapis\.com\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/liulongxuan/_/refs/heads/main/pane.js

[MITM]
hostname = firebaseappcheck.googleapis.com


 */
 
var DG = JSON['parse']($response['body']);
DG = {
   "code" : 0,
  "data" : {
    "productId" : "es.produkt.app.panels.iap.premium3",
"original_application_version" : "202404301230",
    "transaction_id" : "220002008512075",
    "original_transaction_id" : "220002008512075",
    "purchase_date" : "2024-05-08 01:00:25",
    "purchase_date_ms" : "1715130025000",
    "purchase_date_pst" : "2024-05-07 18:00:25",
   
  },
  "message" : "成功",
  "currentTime" : "2025-04-01 10:46:58"
};
$done({
    'body': JSON['stringify'](DG)
});;
