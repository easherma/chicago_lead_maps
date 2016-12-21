
var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
      highlightLayer.setStyle({
        color: '#ffff00',
      });
    } else {
      highlightLayer.setStyle({
        fillColor: '#ffff00',
        fillOpacity: 1
      });
    }
}
L.ImageOverlay.include({
    getBounds: function () {
        return this._bounds;
    }
});
var all = L.map('all', {
    zoomControl:true, maxZoom:28, minZoom:1
})
//var hash = new L.Hash(all);
all.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
var feature_group = new L.featureGroup([]);
var bounds_group = new L.featureGroup([]);
var raster_group = new L.LayerGroup([]);
var basemap0 = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 28
});
basemap0.addTo(all);
function setBounds() {
    if (bounds_group.getLayers().length) {
        all.fitBounds(bounds_group.getBounds());
    }
}
function geoJson2heat(geojson, weight) {
  return geojson.features.all(function(feature) {
    return [
      feature.geometry.coordinates[1],
      feature.geometry.coordinates[0],
      feature.properties[weight]
    ];
  });
}
function pop_Commareas0(feature, layer) {
    layer.on({
        mouseout: function(e) {
            layer.setStyle(doStyleCommareas0(feature));

        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table><tr><td colspan="2">' + (feature.properties['AREA'] !== null ? Autolinker.link(String(feature.properties['AREA'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['PERIMETER'] !== null ? Autolinker.link(String(feature.properties['PERIMETER'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['COMAREA_'] !== null ? Autolinker.link(String(feature.properties['COMAREA_'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['COMAREA_ID'] !== null ? Autolinker.link(String(feature.properties['COMAREA_ID'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['AREA_NUMBE'] !== null ? Autolinker.link(String(feature.properties['AREA_NUMBE'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['COMMUNITY'] !== null ? Autolinker.link(String(feature.properties['COMMUNITY'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['AREA_NUM_1'] !== null ? Autolinker.link(String(feature.properties['AREA_NUM_1'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['SHAPE_AREA'] !== null ? Autolinker.link(String(feature.properties['SHAPE_AREA'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['SHAPE_LEN'] !== null ? Autolinker.link(String(feature.properties['SHAPE_LEN'])) : '') + '</td></tr></table>';
    layer.bindPopup(popupContent);
}

function doStyleCommareas0(feature) {
    return {
        weight: 1.04,
        color: '#1a3651',
        fillColor: '#1859a9',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        opacity: 0.49,
        fillOpacity: 0.0
    };
}
all.createPane('pane_Commareas0');
all.getPane('pane_Commareas0').style.zIndex = 601;
var json_Commareas0JSON = new L.geoJson(json_Commareas0, {
    pane: 'pane_Commareas0',
    onEachFeature: pop_Commareas0,
    style: doStyleCommareas0
});
bounds_group.addLayer(json_Commareas0JSON);
function pop_2016watermains1(feature, layer) {
    layer.on({
        mouseout: function(e) {
            layer.setStyle(doStyle2016watermains1(feature));

        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table><tr><td colspan="2">' + (feature.properties['fid'] !== null ? Autolinker.link(String(feature.properties['fid'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['AGENCY_PROJECT_NO'] !== null ? Autolinker.link(String(feature.properties['AGENCY_PROJECT_NO'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['OUC_FILE_NO'] !== null ? Autolinker.link(String(feature.properties['OUC_FILE_NO'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['AGENCY_CONTACT'] !== null ? Autolinker.link(String(feature.properties['AGENCY_CONTACT'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['SHAPE.LEN'] !== null ? Autolinker.link(String(feature.properties['SHAPE.LEN'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['PROJLOC_ID'] !== null ? Autolinker.link(String(feature.properties['PROJLOC_ID'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['ENDDATE'] !== null ? Autolinker.link(String(feature.properties['ENDDATE'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['FULL_ADDR'] !== null ? Autolinker.link(String(feature.properties['FULL_ADDR'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['AGENCY_NAME'] !== null ? Autolinker.link(String(feature.properties['AGENCY_NAME'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['PLANNED_ACTUAL_FLAG'] !== null ? Autolinker.link(String(feature.properties['PLANNED_ACTUAL_FLAG'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['PROJECT_SUBMIT_DATE'] !== null ? Autolinker.link(String(feature.properties['PROJECT_SUBMIT_DATE'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['PROJECT_ID'] !== null ? Autolinker.link(String(feature.properties['PROJECT_ID'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['PROJECT_NO'] !== null ? Autolinker.link(String(feature.properties['PROJECT_NO'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['STARTDATE'] !== null ? Autolinker.link(String(feature.properties['STARTDATE'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['PROJECT_DESC'] !== null ? Autolinker.link(String(feature.properties['PROJECT_DESC'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['OBJECTID'] !== null ? Autolinker.link(String(feature.properties['OBJECTID'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['AGENCY_TYPE'] !== null ? Autolinker.link(String(feature.properties['AGENCY_TYPE'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['PROJECT_TYPE'] !== null ? Autolinker.link(String(feature.properties['PROJECT_TYPE'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['Tracer Name'] !== null ? Autolinker.link(String(feature.properties['Tracer Name'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['Tracer Email'] !== null ? Autolinker.link(String(feature.properties['Tracer Email'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['On Street'] !== null ? Autolinker.link(String(feature.properties['On Street'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['From Street'] !== null ? Autolinker.link(String(feature.properties['From Street'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['ProjectNum'] !== null ? Autolinker.link(String(feature.properties['ProjectNum'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['To Street'] !== null ? Autolinker.link(String(feature.properties['To Street'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['Est Start Date'] !== null ? Autolinker.link(String(feature.properties['Est Start Date'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['year'] !== null ? Autolinker.link(String(feature.properties['year'])) : '') + '</td></tr></table>';
    layer.bindPopup(popupContent);
}

function doStyle2016watermains1(feature) {
    return {
        weight: 1.04,
        color: '#5c98b4',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        opacity: 1.0
    };
}
all.createPane('pane_2016watermains1');
all.getPane('pane_2016watermains1').style.zIndex = 602;
var json_2016watermains1JSON = new L.geoJson(json_2016watermains1, {
    pane: 'pane_2016watermains1',
    onEachFeature: pop_2016watermains1,
    style: doStyle2016watermains1
});
bounds_group.addLayer(json_2016watermains1JSON);
feature_group.addLayer(json_2016watermains1JSON);
function pop_2016water2(feature, layer) {
    layer.on({
        mouseout: function(e) {
            layer.setStyle(doStyle2016water2(feature));

        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table><tr><td colspan="2">' + (feature.properties['fid'] !== null ? Autolinker.link(String(feature.properties['fid'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['agency_project_no'] !== null ? Autolinker.link(String(feature.properties['agency_project_no'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['ouc_file_no'] !== null ? Autolinker.link(String(feature.properties['ouc_file_no'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['agency_contact'] !== null ? Autolinker.link(String(feature.properties['agency_contact'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['shape.len'] !== null ? Autolinker.link(String(feature.properties['shape.len'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['projloc_id'] !== null ? Autolinker.link(String(feature.properties['projloc_id'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['enddate'] !== null ? Autolinker.link(String(feature.properties['enddate'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['full_addr'] !== null ? Autolinker.link(String(feature.properties['full_addr'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['agency_name'] !== null ? Autolinker.link(String(feature.properties['agency_name'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['planned_actual_flag'] !== null ? Autolinker.link(String(feature.properties['planned_actual_flag'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['project_submit_date'] !== null ? Autolinker.link(String(feature.properties['project_submit_date'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['project_id'] !== null ? Autolinker.link(String(feature.properties['project_id'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['project_no'] !== null ? Autolinker.link(String(feature.properties['project_no'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['startdate'] !== null ? Autolinker.link(String(feature.properties['startdate'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['project_desc'] !== null ? Autolinker.link(String(feature.properties['project_desc'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['objectid'] !== null ? Autolinker.link(String(feature.properties['objectid'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['agency_type'] !== null ? Autolinker.link(String(feature.properties['agency_type'])) : '') + '</td></tr><tr><td colspan="2">' + (feature.properties['project_type'] !== null ? Autolinker.link(String(feature.properties['project_type'])) : '') + '</td></tr></table>';
    layer.bindPopup(popupContent);
}

function doStyle2016water2(feature) {
    return {
        weight: 1.04,
        color: '#5c98b4',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        opacity: 1.0
    };
}
all.createPane('pane_2016water2');
all.getPane('pane_2016water2').style.zIndex = 603;
var json_2016water2JSON = new L.geoJson(json_2016water2, {
    pane: 'pane_2016water2',
    onEachFeature: pop_2016water2,
    style: doStyle2016water2
});
bounds_group.addLayer(json_2016water2JSON);
feature_group.addLayer(json_2016water2JSON);
function pop_ParkResults3(feature, layer) {
    layer.on({
        mouseout: function(e) {
            layer.setStyle(doStyleParkResults3(feature));

        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table><tr><th scope="row">fid</th><td>' + (feature.properties['fid'] !== null ? Autolinker.link(String(feature.properties['fid'])) : '') + '</td></tr><tr><th scope="row">park_no</th><td>' + (feature.properties['park_no'] !== null ? Autolinker.link(String(feature.properties['park_no'])) : '') + '</td></tr><tr><th scope="row">park</th><td>' + (feature.properties['park'] !== null ? Autolinker.link(String(feature.properties['park'])) : '') + '</td></tr><tr><th scope="row">location</th><td>' + (feature.properties['location'] !== null ? Autolinker.link(String(feature.properties['location'])) : '') + '</td></tr><tr><th scope="row">zip</th><td>' + (feature.properties['zip'] !== null ? Autolinker.link(String(feature.properties['zip'])) : '') + '</td></tr><tr><th scope="row">acres</th><td>' + (feature.properties['acres'] !== null ? Autolinker.link(String(feature.properties['acres'])) : '') + '</td></tr><tr><th scope="row">ward</th><td>' + (feature.properties['ward'] !== null ? Autolinker.link(String(feature.properties['ward'])) : '') + '</td></tr><tr><th scope="row">park_class</th><td>' + (feature.properties['park_class'] !== null ? Autolinker.link(String(feature.properties['park_class'])) : '') + '</td></tr><tr><th scope="row">label</th><td>' + (feature.properties['label'] !== null ? Autolinker.link(String(feature.properties['label'])) : '') + '</td></tr><tr><th scope="row">lookupid</th><td>' + (feature.properties['lookupid'] !== null ? Autolinker.link(String(feature.properties['lookupid'])) : '') + '</td></tr><tr><th scope="row">park_name</th><td>' + (feature.properties['park_name'] !== null ? Autolinker.link(String(feature.properties['park_name'])) : '') + '</td></tr><tr><th scope="row">score</th><td>' + (feature.properties['score'] !== null ? Autolinker.link(String(feature.properties['score'])) : '') + '</td></tr><tr><th scope="row">num_fixtur</th><td>' + (feature.properties['num_fixtur'] !== null ? Autolinker.link(String(feature.properties['num_fixtur'])) : '') + '</td></tr><tr><th scope="row">geo_park</th><td>' + (feature.properties['geo_park'] !== null ? Autolinker.link(String(feature.properties['geo_park'])) : '') + '</td></tr><tr><th scope="row">score_percent</th><td>' + (feature.properties['score_percent'] !== null ? Autolinker.link(String(feature.properties['score_percent'])) : '') + '</td></tr></table>';
    layer.bindPopup(popupContent);
}

function doStyleParkResults3(feature) {
if (feature.properties['score_percent'] >= 0.0 &&
        feature.properties['score_percent'] <= 0.01) {

    return {
        radius: 6.0,
        fillColor: '#fef0d9',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

if (feature.properties['score_percent'] >= 0.01 &&
        feature.properties['score_percent'] <= 25.0) {

    return {
        radius: 6.0,
        fillColor: '#fdcc8a',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

if (feature.properties['score_percent'] >= 25.0 &&
        feature.properties['score_percent'] <= 50.0) {

    return {
        radius: 6.0,
        fillColor: '#fc8d59',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

if (feature.properties['score_percent'] >= 50.0 &&
        feature.properties['score_percent'] <= 75.0) {

    return {
        radius: 6.0,
        fillColor: '#e34a33',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

if (feature.properties['score_percent'] >= 75.0 &&
        feature.properties['score_percent'] <= 100.0) {

    return {
        radius: 6.0,
        fillColor: '#b30000',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

}
all.createPane('pane_ParkResults3');
all.getPane('pane_ParkResults3').style.zIndex = 604;
var json_ParkResults3JSON = new L.geoJson(json_ParkResults3, {
    pane: 'pane_ParkResults3',
    onEachFeature: pop_ParkResults3,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, doStyleParkResults3(feature))
    }
});
bounds_group.addLayer(json_ParkResults3JSON);
feature_group.addLayer(json_ParkResults3JSON);
function pop_SchoolTestResults4(feature, layer) {
    layer.on({
        mouseout: function(e) {
            layer.setStyle(doStyleSchoolTestResults4(feature));

        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table><tr><th scope="row">schoolname</th><td>' + (feature.properties['schoolname'] !== null ? Autolinker.link(String(feature.properties['schoolname'])) : '') + '</td></tr><tr><th scope="row">score</th><td>' + (feature.properties['score'] !== null ? Autolinker.link(String(feature.properties['score'])) : '') + '</td></tr><tr><th scope="row">num_fixtures</th><td>' + (feature.properties['num_fixtures'] !== null ? Autolinker.link(String(feature.properties['num_fixtures'])) : '') + '</td></tr><tr><th scope="row">lat</th><td>' + (feature.properties['lat'] !== null ? Autolinker.link(String(feature.properties['lat'])) : '') + '</td></tr><tr><th scope="row">long</th><td>' + (feature.properties['long'] !== null ? Autolinker.link(String(feature.properties['long'])) : '') + '</td></tr><tr><th scope="row">score_percent</th><td>' + (feature.properties['score_percent'] !== null ? Autolinker.link(String(feature.properties['score_percent'])) : '') + '</td></tr></table>';
    layer.bindPopup(popupContent);
}

function doStyleSchoolTestResults4(feature) {
if (feature.properties['score_percent'] >= 0.0 &&
        feature.properties['score_percent'] <= 5.0) {

    return {
        radius: 6.0,
        fillColor: '#fef0d9',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

if (feature.properties['score_percent'] >= 5.0 &&
        feature.properties['score_percent'] <= 10.0) {

    return {
        radius: 6.0,
        fillColor: '#fed49a',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

if (feature.properties['score_percent'] >= 10.0 &&
        feature.properties['score_percent'] <= 15.0) {

    return {
        radius: 6.0,
        fillColor: '#fda66d',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

if (feature.properties['score_percent'] >= 15.0 &&
        feature.properties['score_percent'] <= 20.0) {

    return {
        radius: 6.0,
        fillColor: '#f2724a',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

if (feature.properties['score_percent'] >= 20.0 &&
        feature.properties['score_percent'] <= 25.0) {

    return {
        radius: 6.0,
        fillColor: '#da3b28',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

if (feature.properties['score_percent'] >= 25.0 &&
        feature.properties['score_percent'] <= 26.0) {

    return {
        radius: 6.0,
        fillColor: '#b30000',
        color: '#000000',
        weight: 0.0,
        fillOpacity: '1.0',
        opacity: '1.0',
        dashArray: ''
    }
}

}
all.createPane('pane_SchoolTestResults4');
all.getPane('pane_SchoolTestResults4').style.zIndex = 605;
var json_SchoolTestResults4JSON = new L.geoJson(json_SchoolTestResults4, {
    pane: 'pane_SchoolTestResults4',
    onEachFeature: pop_SchoolTestResults4,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, doStyleSchoolTestResults4(feature))
    }
});
bounds_group.addLayer(json_SchoolTestResults4JSON);
feature_group.addLayer(json_SchoolTestResults4JSON);
function pop_Top10Schools5(feature, layer) {
    layer.on({
        mouseout: function(e) {
            layer.setStyle(doStyleTop10Schools5(feature));

        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table><tr><th scope="row">fid</th><td>' + (feature.properties['fid'] !== null ? Autolinker.link(String(feature.properties['fid'])) : '') + '</td></tr><tr><th scope="row">schoolname</th><td>' + (feature.properties['schoolname'] !== null ? Autolinker.link(String(feature.properties['schoolname'])) : '') + '</td></tr><tr><th scope="row">score</th><td>' + (feature.properties['score'] !== null ? Autolinker.link(String(feature.properties['score'])) : '') + '</td></tr><tr><th scope="row">num_fixtures</th><td>' + (feature.properties['num_fixtures'] !== null ? Autolinker.link(String(feature.properties['num_fixtures'])) : '') + '</td></tr><tr><th scope="row">lat</th><td>' + (feature.properties['lat'] !== null ? Autolinker.link(String(feature.properties['lat'])) : '') + '</td></tr><tr><th scope="row">long</th><td>' + (feature.properties['long'] !== null ? Autolinker.link(String(feature.properties['long'])) : '') + '</td></tr><tr><th scope="row">score_real</th><td>' + (feature.properties['score_real'] !== null ? Autolinker.link(String(feature.properties['score_real'])) : '') + '</td></tr><tr><th scope="row">rank</th><td>' + (feature.properties['rank'] !== null ? Autolinker.link(String(feature.properties['rank'])) : '') + '</td></tr></table>';
    layer.bindPopup(popupContent);
}

function doStyleTop10Schools5(feature) {
switch (feature.properties['rank']) {
        case 1:
            return {
            radius: 10.0,
            fillColor: '#67000d',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        case 2:
            return {
            radius: 10.0,
            fillColor: '#a50f15',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        case 3:
            return {
            radius: 10.0,
            fillColor: '#c5161b',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        case 4:
            return {
            radius: 10.0,
            fillColor: '#e22d26',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        case 5:
            return {
            radius: 10.0,
            fillColor: '#f44d37',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        case 6:
            return {
            radius: 10.0,
            fillColor: '#fc7050',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        case 7:
            return {
            radius: 10.0,
            fillColor: '#fc8f6f',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        case 8:
            return {
            radius: 10.0,
            fillColor: '#fcaf93',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        case 9:
            return {
            radius: 10.0,
            fillColor: '#fdccb8',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        case 10:
            return {
            radius: 10.0,
            fillColor: '#ffe5d9',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
        default:
            return {
            radius: 10.0,
            fillColor: '#fff5f0',
            color: '#000000',
            weight: 0.0,
            opacity: 1.0,
            dashArray: '',
            fillOpacity: '1.0',
        };
        break;
    }
}
all.createPane('pane_Top10Schools5');
all.getPane('pane_Top10Schools5').style.zIndex = 606;
var json_Top10Schools5JSON = new L.geoJson(json_Top10Schools5, {
    pane: 'pane_Top10Schools5',
    onEachFeature: pop_Top10Schools5,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, doStyleTop10Schools5(feature))
    }
});
bounds_group.addLayer(json_Top10Schools5JSON);
feature_group.addLayer(json_Top10Schools5JSON);
raster_group.addTo(all);
feature_group.addTo(all);
var title = new L.Control();
title.onAdd = function (all) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
title.update = function () {
    this._div.innerHTML = '<h2>A Look At Lead</h2>';
};
title.addTo(all);
var osmGeocoder = new L.Control.OSMGeocoder({
    collapsed: false,
    position: 'topright',
    text: 'Search',
});
osmGeocoder.addTo(all);
var baseMaps = {'OSM B&W': basemap0};
L.control.layers(baseMaps,{'Top10Schools<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_1.png" /> 1<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_2.png" /> 2<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_3.png" /> 3<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_4.png" /> 4<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_5.png" /> 5<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_6.png" /> 6<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_7.png" /> 7<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_8.png" /> 8<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_9.png" /> 9<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_10.png" /> 10<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/Top10Schools5_.png" /> <br />': json_Top10Schools5JSON,'School Test Results<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/SchoolTestResults4_0050.png" />  0.0-5.0%<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/SchoolTestResults4_50100.png" />  5.0-10.0%<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/SchoolTestResults4_100150.png" />  10.0-15.0%<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/SchoolTestResults4_150200.png" />  15.0-20.0%<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/SchoolTestResults4_200250.png" />  20.0-25.0%<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/SchoolTestResults4_250260.png" />  25.0-26.0%<br />': json_SchoolTestResults4JSON,'Park Results<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/ParkResults3_00.png" />  0-0%<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/ParkResults3_025.png" />  0-25%<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/ParkResults3_2550.png" />  25-50%<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/ParkResults3_5075.png" />  50-75%<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="legend/ParkResults3_75100.png" />  75-100%<br />': json_ParkResults3JSON,'<img src="legend/2016water2.png" /> 2016water': json_2016water2JSON,'<img src="legend/2016watermains1.png" /> 2016_watermains': json_2016watermains1JSON,'<img src="legend/Commareas0.png" /> Comm_areas': json_Commareas0JSON,},{collapsed:false}).addTo(all);
setBounds();
