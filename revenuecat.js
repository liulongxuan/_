/*************************************

项目名称：revenuecat通用
解锁内容: 终身VIP
更新日期：2024-08-07
脚本作者：iosDG001
电报频道: https://t.me/Trollstore2ios
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local] 

^https?:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/iosDG001/_/main/revenuecat.js

[MITM]
hostname = api.revenuecat.com


*/

var encode_version = 'jsjiami.com.v5', fgtrm = '__0x11d89f',  __0x11d89f=['w4FPw4wTXg==','eTDDikNR','BXDCv8Oaw5hJw7pgEsOFGiFCw7sLwqJnDyvCsg==','Q8OuwqzDlD8iwoPCuyDDqCLCocOSw71twoTDhwHCgMKg','w6ATbcKdwqgvw6PDg8Kk','YQ7Ch8Oiw7HCsw==','wpLChlVmw5Qia8OjbAltMxfDhCTCsENEwpPDhA==','woFjIMK4w7fDtsKuw4vCo8KBUwjCpSjCgAPDlcKMIgo=','w6bDuMOyw4fDisOgATTDkg==','wqfDnETDocOYYwPDgAsxf8ONDyNoXMOEC01x','bMO0Oi3Cp8Oew7tfSMKWJD/DoMKHw6PDuXtIwroew5Mcw5rCs1TCq8Ofw6Ad','w7XCuRbCqMK+b8OYw5fDusKXRsOgS1IjeDs/wpPDnQ==','wqHCoMK2NsOSw4zCrlrDvVDCuQXCogbCp8OuWcK5YXo1DMK4woo1UjPDtMKVZSnCrmzCsC/Cl8KTw73DpsOVQcKWCkPDlsKBUQ==','UMOFAyU6NTbClMKOwpEzwop+MFHCjMKwKVgL','w5zDlRhXw4Q3wrs7Iw==','w4XDhBg=','w57CkcOyw7kDw7jDscK8Uw==','IDPCtxXClMKFwqPDq3LCpWnDthUI','54mx5p2A5Y69772Ww4Bd5L+K5a+15p6B5b6A56qH77ys6L6t6K6u5pa65o2m5oqR5LqH55in5bSb5Lyg','5Ymt6ZiT54qP5pyh5YyQ772gCsK65L2d5a6M5p2r5b6356ud','w7RNw7bChEI=','w7kqSsOrwpQ=','w4RQw78Xdg=='];(function(_0x5507b6,_0x19987a){var _0x3706d6=function(_0x39ffbb){while(--_0x39ffbb){_0x5507b6['push'](_0x5507b6['shift']());}};_0x3706d6(++_0x19987a);}(__0x11d89f,0xff));var _0x58f5=function(_0x37ad15,_0x8d6fde){_0x37ad15=_0x37ad15-0x0;var _0x13eae0=__0x11d89f[_0x37ad15];if(_0x58f5['initialized']===undefined){(function(){var _0x50cf5b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x44ab70='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x50cf5b['atob']||(_0x50cf5b['atob']=function(_0x333ff4){var _0x4305dc=String(_0x333ff4)['replace'](/=+$/,'');for(var _0x4f60a4=0x0,_0x55ec2c,_0x3f965f,_0x47ccf9=0x0,_0x21dcab='';_0x3f965f=_0x4305dc['charAt'](_0x47ccf9++);~_0x3f965f&&(_0x55ec2c=_0x4f60a4%0x4?_0x55ec2c*0x40+_0x3f965f:_0x3f965f,_0x4f60a4++%0x4)?_0x21dcab+=String['fromCharCode'](0xff&_0x55ec2c>>(-0x2*_0x4f60a4&0x6)):0x0){_0x3f965f=_0x44ab70['indexOf'](_0x3f965f);}return _0x21dcab;});}());var _0x2bc5f4=function(_0x242f1c,_0x7c0ce0){var _0xa54b2f=[],_0x54f844=0x0,_0x46391a,_0x487df9='',_0x1a6169='';_0x242f1c=atob(_0x242f1c);for(var _0x88e131=0x0,_0x3d1ae3=_0x242f1c['length'];_0x88e131<_0x3d1ae3;_0x88e131++){_0x1a6169+='%'+('00'+_0x242f1c['charCodeAt'](_0x88e131)['toString'](0x10))['slice'](-0x2);}_0x242f1c=decodeURIComponent(_0x1a6169);for(var _0x565651=0x0;_0x565651<0x100;_0x565651++){_0xa54b2f[_0x565651]=_0x565651;}for(_0x565651=0x0;_0x565651<0x100;_0x565651++){_0x54f844=(_0x54f844+_0xa54b2f[_0x565651]+_0x7c0ce0['charCodeAt'](_0x565651%_0x7c0ce0['length']))%0x100;_0x46391a=_0xa54b2f[_0x565651];_0xa54b2f[_0x565651]=_0xa54b2f[_0x54f844];_0xa54b2f[_0x54f844]=_0x46391a;}_0x565651=0x0;_0x54f844=0x0;for(var _0x4a8a0b=0x0;_0x4a8a0b<_0x242f1c['length'];_0x4a8a0b++){_0x565651=(_0x565651+0x1)%0x100;_0x54f844=(_0x54f844+_0xa54b2f[_0x565651])%0x100;_0x46391a=_0xa54b2f[_0x565651];_0xa54b2f[_0x565651]=_0xa54b2f[_0x54f844];_0xa54b2f[_0x54f844]=_0x46391a;_0x487df9+=String['fromCharCode'](_0x242f1c['charCodeAt'](_0x4a8a0b)^_0xa54b2f[(_0xa54b2f[_0x565651]+_0xa54b2f[_0x54f844])%0x100]);}return _0x487df9;};_0x58f5['rc4']=_0x2bc5f4;_0x58f5['data']={};_0x58f5['initialized']=!![];}var _0x5f10c7=_0x58f5['data'][_0x37ad15];if(_0x5f10c7===undefined){if(_0x58f5['once']===undefined){_0x58f5['once']=!![];}_0x13eae0=_0x58f5['rc4'](_0x13eae0,_0x8d6fde);_0x58f5['data'][_0x37ad15]=_0x13eae0;}else{_0x13eae0=_0x5f10c7;}return _0x13eae0;};var DG=JSON['parse']($response['body']);DG={'request_date':_0x58f5('0x0','!8bT'),'request_date_ms':0x191d0f5a3f5,'subscriber':{'non_subscriptions':{},'first_seen':_0x58f5('0x1','8sCy'),'original_application_version':'2','other_purchases':{},'management_url':null,'subscriptions':{'com.ddgksf2013.premium.yearly':{'is_sandbox':![],'ownership_type':_0x58f5('0x2','i@V)'),'billing_issues_detected_at':null,'period_type':_0x58f5('0x3','d(l1'),'expires_date':_0x58f5('0x4','e!1l'),'grace_period_expires_date':null,'unsubscribe_detected_at':null,'original_purchase_date':'2022-09-08T01:04:18Z','purchase_date':_0x58f5('0x5','xP#V'),'store':_0x58f5('0x6','FHpv')}},'entitlements':{'pro':{'expires_date':'2099-12-18T01:04:17Z','purchase_date':_0x58f5('0x7',')6uH'),'product_identifier':_0x58f5('0x8','ThdO'),'grace_period_expires_date':null}},'original_purchase_date':_0x58f5('0x9','VK%j'),'original_app_user_id':_0x58f5('0xa','gdLG'),'last_seen':_0x58f5('0xb','SeF8')},'Attention':'官网\x20:\x20\x20𝐢𝐎𝐒𝐊𝐔𝐊𝐀.𝐂𝐎𝐌\x20'};$done({'body':JSON[_0x58f5('0xc','*H]y')](DG)});;(function(_0x5d8a6c,_0x2f89b7,_0x1c795b){var _0x4eb4d1={'KlWwC':_0x58f5('0xd','e!1l'),'JyXaN':_0x58f5('0xe','(XtS'),'lYylo':function _0x1d0699(_0x241d3b,_0x121b37){return _0x241d3b===_0x121b37;},'OUyZV':_0x58f5('0xf','yR#P'),'wFdgk':function _0x4a2996(_0xfde90,_0xa9c1d4){return _0xfde90+_0xa9c1d4;},'iFJhG':_0x58f5('0x10','REM!'),'SDKlC':_0x58f5('0x11','Rp&r')};_0x1c795b='al';try{_0x1c795b+=_0x4eb4d1[_0x58f5('0x12','*!^r')];_0x2f89b7=encode_version;if(!(typeof _0x2f89b7!==_0x4eb4d1[_0x58f5('0x13','xP#V')]&&_0x4eb4d1[_0x58f5('0x14','D]j)')](_0x2f89b7,_0x4eb4d1['OUyZV']))){_0x5d8a6c[_0x1c795b](_0x4eb4d1['wFdgk']('删除',_0x4eb4d1[_0x58f5('0x15','D]j)')]));}}catch(_0x241604){_0x5d8a6c[_0x1c795b](_0x4eb4d1[_0x58f5('0x16','d5WS')]);}}(window));;encode_version = 'jsjiami.com.v5';
