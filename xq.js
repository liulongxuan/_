/*        
  xq

[rewrite_local] 

^https?:\/\/wedobest\.xiangqi\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/liulongxuan/_/refs/heads/main/xq.js

[MITM]
hostname = wedobest.xiangqi


 */
 
var DG = JSON['parse']($response['body']);
DG = {
   "force_stop_single_live_process" : true,  
"allow_favorite" : true,
"allow_share" : true,
"allow_ka_feature" : true,
"allow_open_live_data_scope" : true,
"allow_silence_empower" : true,
"allow_comment" : true,
"enable_feed_no_ad" : true,
"live_download_flag" : 1,
"allow_auto_play" : true,
"use_pangle_plugin" : true,
"enable_keva" : true
};
$done({
    'body': JSON['stringify'](DG)
});;
