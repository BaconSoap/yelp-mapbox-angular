///<reference path="../leaflet/leaflet.d.ts" />

declare module L {
	export module mapbox {
		function map(elem: string, mapId: string): L.Map;
	}
}