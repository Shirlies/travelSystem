for(var i = 0; i < 27; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

$axure.eventManager.keyup('u8', function(e) {

if ((GetWidgetText('u8')) < Number('6')) {

	SetPanelVisibility('u22','','none',500);

}
});
gv_vAlignTable['u6'] = 'top';
u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', u15Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u15LinksClick'></div>")
var u15LinksClick = document.getElementById('u15LinksClick');
function u15Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u15LinksClick');
}

InsertBeforeEnd(u15LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u15Clickud1eaa918be56497c92c6b3848e8a4ef1(event)'>If login succeeds</div>");
function u15Clickud1eaa918be56497c92c6b3848e8a4ef1(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('home_log.html');

	ToggleLinks(e, 'u15LinksClick');
}

InsertBeforeEnd(u15LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u15Clicku666c795af0584a69b4a47374d9aabe0a(event)'>If login fails</div>");
function u15Clicku666c795af0584a69b4a47374d9aabe0a(e)
{

	SetPanelVisibility('u19','','none',500);

	ToggleLinks(e, 'u15LinksClick');
}
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u1'] = 'center';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('help.html'), "");

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u20'] = 'top';