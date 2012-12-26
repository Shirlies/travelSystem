for(var i = 0; i < 78; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u16'] = 'center';u46.tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u76'] = 'top';u48.tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游线路.html');

}
});
gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u62'] = 'top';document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游专家.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u19'] = 'center';u49.tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('风景图库.html');

}
});
gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u45'] = 'center';document.getElementById('u75_img').tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('机票预订.html'), "");

}
});
u66.tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('注册.html');

}
});
gv_vAlignTable['u66'] = 'top';document.getElementById('u57_img').tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('导游信息.html'), "");

}
});
gv_vAlignTable['u3'] = 'center';u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u47'] = 'top';u77.tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('个人空间.html'), "");

}
});
gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u20'] = 'top';u50.tabIndex = 0;

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游地图.html');

}
});
gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u54'] = 'center';document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

}
});
document.getElementById('u61_img').tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	NewTab('#', "");

	NewTab($axure.globalVariableProvider.getLinkUrl('旅游达人分享.html'), "");

}
});
gv_vAlignTable['u35'] = 'top';u65.tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

}
});
gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u5'] = 'center';
u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', u33Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u33LinksClick'></div>")
var u33LinksClick = document.getElementById('u33LinksClick');
function u33Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u33LinksClick');
}

InsertBeforeEnd(u33LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u33Clicku9f11f28cfc284794a0298b4964a796f6(event)'>If login succeeds</div>");
function u33Clicku9f11f28cfc284794a0298b4964a796f6(e)
{

	self.location.href='#';

	ToggleLinks(e, 'u33LinksClick');
}

InsertBeforeEnd(u33LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u33Clicku1e1aa6c35d48496aac944aeebc6d5ec3(event)'>If login fails</div>");
function u33Clicku1e1aa6c35d48496aac944aeebc6d5ec3(e)
{

	SetPanelVisibility('u34','','none',500);

	ToggleLinks(e, 'u33LinksClick');
}
document.getElementById('u63_img').tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('驴友论坛.html'), "");

}
});
gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u14'] = 'center';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('酒店预订.html'), "");

}
});
gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u29'] = 'top';document.getElementById('u59_img').tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('旅行社信息.html'), "");

}
});
