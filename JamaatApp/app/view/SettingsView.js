Ext.define('JamaatApp.view.SettingsView', {
    extend: 'Ext.form.Panel',
    xtype: 'settingsview',
    
    config: {
	    items:[{
	        xtype: 'fieldset',
	        title: 'SettingsView',
	        instructions: 'In case you do not want the app to detect your location you can enter the city and country.',
	        items: [
	            {
	                name: 'geo',
	                xtype: 'togglefield',
	                label: 'Geo'
	            },
	            {
	                name: 'units',
	                xtype: 'selectfield',
	                label: 'Units'
	            },
	            {
	                name: 'city',
	                xtype: 'textfield',
	                label: 'City'
	            },
	            {
	                name: 'country',
	                xtype: 'textfield',
	                label: 'Country'
	            },
	            {
	                xtype: 'button',
	                text: 'Submit',
	                ui: 'confirm'
	            }
	        ]        
	    }]
	}

});