for(var i = 0; i < 98; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u21'] = 'center';
u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('驴友论坛.html');

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u76'] = 'top';
u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u93_img').tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('酒店预订.html'), "");

}
});
u62.tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游线路.html');

}
});
gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u38'] = 'top';u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('个人空间.html'), "");

}
});
gv_vAlignTable['u97'] = 'top';document.getElementById('u67_img').tabIndex = 0;

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游专家.html');

}
});
u60.tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u94'] = 'top';document.getElementById('u89_img').tabIndex = 0;

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if (true) {

}
});
gv_vAlignTable['u34'] = 'top';u64.tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游地图.html');

}
});
gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u19'] = 'center';
u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅行社信息.html');

}
});
u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

}
});
gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u45'] = 'center';document.getElementById('u75_img').tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	NewTab('#', "");

	NewTab($axure.globalVariableProvider.getLinkUrl('旅游达人分享.html'), "");

}
});
gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u6'] = 'top';document.getElementById('u77_img').tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('驴友论坛.html'), "");

}
});
gv_vAlignTable['u90'] = 'center';
u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游达人分享.html');

}
});
gv_vAlignTable['u24'] = 'center';
u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', u39Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u39LinksClick'></div>")
var u39LinksClick = document.getElementById('u39LinksClick');
function u39Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u39LinksClick');
}

InsertBeforeEnd(u39LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u39Clickub015f33ffc8549dea1004ca1e800c73e(event)'>If login succeeds</div>");
function u39Clickub015f33ffc8549dea1004ca1e800c73e(e)
{

	self.location.href='#';

	ToggleLinks(e, 'u39LinksClick');
}

InsertBeforeEnd(u39LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u39Clicku1faa2f847fd04ce08a52f7a7e92f606b(event)'>If login fails</div>");
function u39Clicku1faa2f847fd04ce08a52f7a7e92f606b(e)
{

	SetPanelVisibility('u40','','none',500);

	ToggleLinks(e, 'u39LinksClick');
}
document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('导游信息.html'), "");

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u96'] = 'top';u61.tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游景点.html');

}
});
gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u95_img').tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('机票预订.html'), "");

}
});
gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u72'] = 'top';u63.tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('风景图库.html');

}
});
gv_vAlignTable['u63'] = 'top';u80.tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('注册.html');

}
});
gv_vAlignTable['u80'] = 'top';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('旅行社信息.html'), "");

}
});
gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u59'] = 'center';