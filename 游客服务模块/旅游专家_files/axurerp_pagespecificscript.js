for(var i = 0; i < 72; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游线路.html');

}
});
gv_vAlignTable['u21'] = 'top';document.getElementById('u46_img').tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('酒店预订.html'), "");

}
});
document.getElementById('u48_img').tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('机票预订.html'), "");

}
});
gv_vAlignTable['u27'] = 'center';
u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅行社信息.html');

}
});
document.getElementById('u32_img').tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('旅行社信息.html'), "");

}
});
u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游地图.html');

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u1'] = 'center';u38.tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

}
});
gv_vAlignTable['u38'] = 'top';
u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('导游信息.html');

}
});
document.getElementById('u30_img').tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('导游信息.html'), "");

}
});
gv_vAlignTable['u60'] = 'top';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	NewTab('#', "");

	NewTab($axure.globalVariableProvider.getLinkUrl('旅游达人分享.html'), "");

}
});

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', u64Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u64LinksClick'></div>")
var u64LinksClick = document.getElementById('u64LinksClick');
function u64Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u64LinksClick');
}

InsertBeforeEnd(u64LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u64Clickudb4c34da44d44de6a6288bad7f018035(event)'>If login succeeds</div>");
function u64Clickudb4c34da44d44de6a6288bad7f018035(e)
{

	self.location.href='#';

	ToggleLinks(e, 'u64LinksClick');
}

InsertBeforeEnd(u64LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u64Clicku9956557721094b92865191ed6ac02939(event)'>If login fails</div>");
function u64Clicku9956557721094b92865191ed6ac02939(e)
{

	SetPanelVisibility('u65','','none',500);

	ToggleLinks(e, 'u64LinksClick');
}
u19.tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u49'] = 'top';document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('驴友论坛.html'), "");

}
});
gv_vAlignTable['u66'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('风景图库.html');

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u6'] = 'center';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游景点.html');

}
});
gv_vAlignTable['u20'] = 'top';u39.tabIndex = 0;

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('注册.html');

}
});
gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u35'] = 'top';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u12'] = 'center';
u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('旅游达人分享.html');

}
});
document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u58'] = 'center';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('驴友论坛.html');

}
});
gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u4'] = 'center';