/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["incidentmanagement/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
