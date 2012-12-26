for(var i = 0; i < 95; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('旅行社信息.html'), "");

}
});
gv_vAlignTable['u86'] = 'top';document.getElementById('u25_img').tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('驴友论坛.html'), "");

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u46'] = 'center';document.getElementById('u68_img').tabIndex = 0;

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('酒店预订.html'), "");

}
});
gv_vAlignTable['u48'] = 'center';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u93'] = 'center';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u32'] = 'center';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	NewTab('#', "");

	NewTab($axure.globalVariableProvider.getLinkUrl('旅游达人分享.html'), "");

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u34'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('导游信息.html'), "");

}
});
gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u81'] = 'top';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('风景图库.html');

}
});
gv_vAlignTable['u11'] = 'top';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游专家.html');

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u3'] = 'center';u28.tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('注册.html');

}
});
gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u82'] = 'top';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游地图.html');

}
});
gv_vAlignTable['u12'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游景点.html');

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u42'] = 'top';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游线路.html');

}
});
gv_vAlignTable['u10'] = 'top';
u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', u40Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u40LinksClick'></div>")
var u40LinksClick = document.getElementById('u40LinksClick');
function u40Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u40LinksClick');
}

InsertBeforeEnd(u40LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u40Clicku901af7b5a2b3470b8bfee0b0b3e18801(event)'>If login succeeds</div>");
function u40Clicku901af7b5a2b3470b8bfee0b0b3e18801(e)
{

	self.location.href='#';

	ToggleLinks(e, 'u40LinksClick');
}

InsertBeforeEnd(u40LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u40Clickuf09983a637e643b5b2ce18e0d39bb84c(event)'>If login fails</div>");
function u40Clickuf09983a637e643b5b2ce18e0d39bb84c(e)
{

	SetPanelVisibility('u41','','none',500);

	ToggleLinks(e, 'u40LinksClick');
}
document.getElementById('u70_img').tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('机票预订.html'), "");

}
});
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u91'] = 'center';