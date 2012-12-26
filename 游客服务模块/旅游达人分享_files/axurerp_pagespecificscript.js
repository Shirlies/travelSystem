for(var i = 0; i < 92; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u86'] = 'center';u51.tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游地图.html');

}
});
gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u46'] = 'center';document.getElementById('u76_img').tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('机票预订.html'), "");

}
});
u48.tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游景点.html');

}
});
gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u32'] = 'center';document.getElementById('u62_img').tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	NewTab('#', "");

	NewTab($axure.globalVariableProvider.getLinkUrl('旅游达人分享.html'), "");

}
});
gv_vAlignTable['u1'] = 'center';
u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('驴友论坛.html');

}
});
gv_vAlignTable['u7'] = 'center';u67.tabIndex = 0;

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('注册.html');

}
});
gv_vAlignTable['u67'] = 'top';document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('旅行社信息.html'), "");

}
});
gv_vAlignTable['u34'] = 'center';document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('驴友论坛.html'), "");

}
});
u49.tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游线路.html');

}
});
gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u15'] = 'center';
u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅行社信息.html');

}
});
gv_vAlignTable['u75'] = 'top';u66.tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

}
});
gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u3'] = 'center';u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u20'] = 'center';u50.tabIndex = 0;

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('风景图库.html');

}
});
gv_vAlignTable['u50'] = 'top';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游专家.html');

}
});
gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u61'] = 'top';
u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('导游信息.html');

}
});

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', u26Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u26LinksClick'></div>")
var u26LinksClick = document.getElementById('u26LinksClick');
function u26Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u26LinksClick');
}

InsertBeforeEnd(u26LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u26Clickuf84eb349020e484997ac9ad65fb4f6e3(event)'>If login succeeds</div>");
function u26Clickuf84eb349020e484997ac9ad65fb4f6e3(e)
{

	self.location.href='#';

	ToggleLinks(e, 'u26LinksClick');
}

InsertBeforeEnd(u26LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u26Clicku33a77098eac0486e9ae2eee796ce6282(event)'>If login fails</div>");
function u26Clicku33a77098eac0486e9ae2eee796ce6282(e)
{

	SetPanelVisibility('u27','','none',500);

	ToggleLinks(e, 'u26LinksClick');
}
gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u18'] = 'center';
u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u88'] = 'center';document.getElementById('u58_img').tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('导游信息.html'), "");

}
});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u40'] = 'center';document.getElementById('u70_img').tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

}
});
document.getElementById('u74_img').tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('酒店预订.html'), "");

}
});
gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u91'] = 'top';