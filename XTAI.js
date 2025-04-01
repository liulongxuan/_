/*        
  炫图AI

[rewrite_local] 

^https?:\/\/xuantu\.pro\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/liulongxuan/_/refs/heads/main/XTAI.js

[MITM]
hostname = xuantu.pro


 */
 
var DG = JSON['parse']($response['body']);
DG = {
   "code" : 0,
  "data" : {
    "productId" : "lifetime_membership",
    "vip_create_at" : 1743476496,
    "outer_id" : "G6d1e2609139",
    "phone" : "",
    "register_at" : "2025-04-01 10:43:00",
    "vip_expired_days" : "9999999999",
    "nick_name" : "Luvian",
    "user_id" : 9999999,
    "is_benefit" : 9,
    "avatar" : "https://lh3.googleusercontent.com/a/ACg8ocJ8irmJiPIIOghsj610zK2GGt4N_C5sVvkBLg9yRBPS9ulmiw=s96-c",
    "vip_expired_at" : "9999-09-09 00:00:00",
    "vip_renewal_at" : "9999-09-09 00:00:00",
    "nickname" : "Luvian",
    "is_vip" : 1
  },
  "message" : "成功",
  "currentTime" : "2025-04-01 10:46:58"
};
$done({
    'body': JSON['stringify'](DG)
});;
