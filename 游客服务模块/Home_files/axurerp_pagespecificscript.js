for(var i = 0; i < 124; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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
gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u51'] = 'center';document.getElementById('u25_img').tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('驴友论坛.html'), "");

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u76'] = 'center';document.getElementById('u48_img').tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游线路.html');

}
});
u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u119'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u8'] = 'top';document.getElementById('u32_img').tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

}
});
document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	NewTab('#', "");

	NewTab($axure.globalVariableProvider.getLinkUrl('旅游达人分享.html'), "");

}
});
document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游专家.html');

}
});
gv_vAlignTable['u1'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('机票预订.html'), "");

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u100'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('导游信息.html'), "");

}
});
gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u81'] = 'center';
u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', u112Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u112LinksClick'></div>")
var u112LinksClick = document.getElementById('u112LinksClick');
function u112Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u112LinksClick');
}

InsertBeforeEnd(u112LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u112Clicku017d492f14e2455aa84d69a68edf8af3(event)'>If login succeeds</div>");
function u112Clicku017d492f14e2455aa84d69a68edf8af3(e)
{

	self.location.href='#';

	ToggleLinks(e, 'u112LinksClick');
}

InsertBeforeEnd(u112LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u112Clicku1455bd63180f467386f222011886469b(event)'>If login fails</div>");
function u112Clicku1455bd63180f467386f222011886469b(e)
{

	SetPanelVisibility('u113','','none',500);

	ToggleLinks(e, 'u112LinksClick');
}
u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('风景图库.html');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u41'] = 'center';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游专家.html');

}
});
document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('酒店预订.html'), "");

}
});
document.getElementById('u75_img').tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('驴友论坛.html'), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}
});

$axure.eventManager.mouseover('u75', function(e) {
if (!IsTrueMouseOver('u75',e)) return;
if (true) {

	SetPanelVisibility('u120','','none',500);

}
});

$axure.eventManager.mouseout('u75', function(e) {
if (!IsTrueMouseOut('u75',e)) return;
if (true) {

	SetPanelVisibility('u120','hidden','none',500);

}
});
gv_vAlignTable['u87'] = 'top';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('风景图库.html'), "");

}
});
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u52'] = 'top';document.getElementById('u43_img').tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游景点.html');

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u47'] = 'top';document.getElementById('u90_img').tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('机票预订.html'), "");

}
});

$axure.eventManager.mouseover('u90', function(e) {
if (!IsTrueMouseOver('u90',e)) return;
if (true) {

	SetPanelVisibility('u116','','none',500);

}
});

$axure.eventManager.mouseout('u90', function(e) {
if (!IsTrueMouseOut('u90',e)) return;
if (true) {

	SetPanelVisibility('u116','hidden','none',500);

}
});
u28.tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('注册.html');

}
});
gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u39'] = 'top';document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('导游信息.html'), "");

}
});

$axure.eventManager.mouseover('u69', function(e) {
if (!IsTrueMouseOver('u69',e)) return;
if (true) {

	SetPanelVisibility('u57','','none',500);

}
});

$axure.eventManager.mouseout('u69', function(e) {
if (!IsTrueMouseOut('u69',e)) return;
if (true) {

	SetPanelVisibility('u57','hidden','none',500);

}
});
gv_vAlignTable['u114'] = 'top';document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('旅行社信息.html'), "");

}
});

$axure.eventManager.mouseover('u71', function(e) {
if (!IsTrueMouseOver('u71',e)) return;
if (true) {

	SetPanelVisibility('u61','','none',500);

}
});

$axure.eventManager.mouseout('u71', function(e) {
if (!IsTrueMouseOut('u71',e)) return;
if (true) {

	SetPanelVisibility('u61','hidden','none',500);

}
});
gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u95'] = 'center';u12.tabIndex = 0;

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
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u37'] = 'top';document.getElementById('u88_img').tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('酒店预订.html'), "");

}
});

$axure.eventManager.mouseover('u88', function(e) {
if (!IsTrueMouseOver('u88',e)) return;
if (true) {

	SetPanelVisibility('u84','','none',500);

}
});

$axure.eventManager.mouseout('u88', function(e) {
if (!IsTrueMouseOut('u88',e)) return;
if (true) {

	SetPanelVisibility('u84','hidden','none',500);

}
});
u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游线路.html');

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u70'] = 'center';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('旅游达人分享.html'), "");

}
});

$axure.eventManager.mouseover('u73', function(e) {
if (!IsTrueMouseOver('u73',e)) return;
if (true) {

	SetPanelVisibility('u65','','none',500);

}
});

$axure.eventManager.mouseout('u73', function(e) {
if (!IsTrueMouseOut('u73',e)) return;
if (true) {

	SetPanelVisibility('u65','hidden','none',500);

}
});
gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u74'] = 'center';u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('个人空间.html'), "");

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u91'] = 'center';