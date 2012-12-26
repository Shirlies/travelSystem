for(var i = 0; i < 77; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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
gv_vAlignTable['u51'] = 'top';document.getElementById('u25_img').tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('驴友论坛.html'), "");

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u68'] = 'top';u76.tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('个人空间.html'), "");

}
});
gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u48'] = 'center';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

}
});
gv_vAlignTable['u27'] = 'top';u8.tabIndex = 0;

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
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u30'] = 'center';document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('机票预订.html'), "");

}
});
gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u64'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('导游信息.html'), "");

}
});
u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u11'] = 'top';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游专家.html');

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u3'] = 'center';u28.tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('注册.html');

}
});
gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u24'] = 'top';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

}
});
gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u26'] = 'top';u12.tabIndex = 0;

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
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u42'] = 'center';
u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', u72Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u72LinksClick'></div>")
var u72LinksClick = document.getElementById('u72LinksClick');
function u72Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u72LinksClick');
}

InsertBeforeEnd(u72LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u72Clicku88074761daef4d6f962b3f2bd9db4ee5(event)'>If login succeeds</div>");
function u72Clicku88074761daef4d6f962b3f2bd9db4ee5(e)
{

	self.location.href='#';

	ToggleLinks(e, 'u72LinksClick');
}

InsertBeforeEnd(u72LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u72Clicku7f77c6a5ff45446fad96b0e0bc413518(event)'>If login fails</div>");
function u72Clicku7f77c6a5ff45446fad96b0e0bc413518(e)
{

	SetPanelVisibility('u73','','none',500);

	ToggleLinks(e, 'u72LinksClick');
}
document.getElementById('u58_img').tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('酒店预订.html'), "");

}
});
u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游线路.html');

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u59'] = 'top';