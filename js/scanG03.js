
	var scanG03 = function($, doc){
	$.plusReady(function() {
			/************攝像頭掃描start*********************************/
					
					var main = plus.android.runtimeMainActivity(); //获取activity
					var context = plus.android.importClass('android.content.Context'); //上下文
					var receiver = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {
						onReceive: getReceive //实现onReceiver回调函数
					});
					var IntentFilter = plus.android.importClass('android.content.IntentFilter'); //引入过滤器
					var Intent = plus.android.importClass('android.content.Intent');
					var filter = new IntentFilter();
	
					filter.addAction("SYSTEM_BAR_READ"); //监听扫码广播
					main.registerReceiver(receiver, filter); //注册监听

					var BAR_READ_ACTION = "SYSTEM_BAR_READ";//条码广播
					var RFID_READ_ACTION="SYSTEM_RFID_READ";//RFID广播
					
					//onReceiver回调函数
					function getReceive(context, intent) {
						var action = intent.getAction();//獲取廣播中的action
						
						if(action==BAR_READ_ACTION){
                        	var BAR_value = intent.getStringExtra("BAR_VALUE");
							if(BAR_value=="ERROR"){
								console.log("扫码失败");
								plus.nativeUI.toast("扫码失败");
								return;
							}
							console.log(BAR_value);
							plus.nativeUI.toast("扫码成功");
							plus.nativeUI.toast("正式封裝的代碼");
						}else if(action==RFID_READ_ACTION){
                        	var RFID_value = intent.getStringExtra("RFID_VALUE");
							if(RFID_value=="ERROR"){
								console.log("扫码失败");
								plus.nativeUI.toast("扫码失败");
								return;
							}
							console.log(RFID_value);
							plus.nativeUI.toast("扫码成功");
						}
						plus.nativeUI.toast("扫码成功");
					}
	/************攝像頭掃描end************************************/
	});
}