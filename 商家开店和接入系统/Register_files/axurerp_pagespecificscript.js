for(var i = 0; i < 40; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u30'] = 'top';
$axure.eventManager.keyup('u6', function(e) {

if ((GetWidgetText('u6')) == (GetWidgetText('u29'))) {

	SetPanelVisibility('u21','','none',500);

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u12'] = 'top';u39.tabIndex = 0;

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('help.html'), "");

}
});
gv_vAlignTable['u39'] = 'top';
u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	SetPanelVisibility('u27','','none',500);

}
});

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u20'] = 'top';
$axure.eventManager.keyup('u5', function(e) {

if ((GetWidgetText('u5')) < Number('6')) {

	SetPanelVisibility('u19','','none',500);

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u33'] = 'center';
u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u35','','none',500);

}
});
