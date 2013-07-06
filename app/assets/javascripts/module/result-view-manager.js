// manages behavior of results view list vs maps setting
define(['web-storage-proxy','map-view-manager'],function(webStorageProxy,mapViewManager) {
  'use strict';
	
		// PRIVATE PROPERTIES
		var listViewButton; 
		var mapViewButton;
		var listView; 
		var mapView;
		var selected;

		var storageName = "resultviewpref";

		// PUBLIC METHODS
		function init()
		{
			listViewButton = document.getElementById("list-view-btn");
			mapViewButton = document.getElementById("map-view-btn");
			
			listView = document.getElementById("list-view");
			mapView = document.getElementById("map-view");
			
			listViewButton.addEventListener( "mousedown" , _listClickHandler , false);
			mapViewButton.addEventListener( "mousedown" , _mapClickHandler , false);

			_updateButtonStates();
		}

		function _updateButtonStates()
		{
			if (webStorageProxy.getItem(storageName) == "map"){
				selected = mapViewButton;
				mapViewManager.init();
				listViewButton.disabled = "";
			}else{
				selected = listViewButton;
				mapViewButton.disabled = "";
			}

			selected.disabled = "disabled";
			if (selected == listViewButton) 
			{
				mapView.classList.add("hide");
				listView.classList.remove("hide");
			}
			else if (selected == mapViewButton)
			{
				listView.classList.add("hide");
				mapView.classList.remove("hide");
			}
		}

		// PRIVATE METHODS
		function _listClickHandler(evt)
		{
			webStorageProxy.setItem(storageName , "list");
			_updateButtonStates();
		}

		function _mapClickHandler(evt)
		{
			webStorageProxy.setItem(storageName , "map");
			_updateButtonStates();
		}

	return {
		init:init
	};
});