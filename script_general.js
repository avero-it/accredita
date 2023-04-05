(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"minWidth":0,"start":"this.init()","data":{"textToSpeechConfig":{"rate":1,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1},"locales":{"it":"locale/it.txt"},"defaultLocale":"it","name":"Player1005","history":{}},"propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","scrollBarColor":"#000000","layout":"absolute","scrollBarMargin":2,"hash": "27acc087ba9879ab4828d9a3dfa2776ac46f34c0114514e1d16e65695b9edba0", "definitions": [{"overlays":["this.overlay_5F84613E_51AD_5D92_4181_62D37EA019E3","this.overlay_5FEE174B_51AB_C5F2_41D0_8A11204F3C79","this.overlay_5EA7FC9D_51B5_4496_4195_E2DAFBAD5086","this.overlay_408FF427_51B5_3BB1_41D1_96864A327CD1","this.overlay_5E72FC39_51B4_CB9E_41CB_C2E7D4887017","this.overlay_5F008063_51BD_3BB1_41D2_B06A0281D8D9","this.overlay_5E87B7AA_51BD_44B3_41D0_46C4BC662492","this.overlay_5ED47102_51BD_3D72_41CD_1808FB2E56F2","this.overlay_41BFB1E5_51BC_DCB6_41C9_DBACE12A97E2","this.overlay_402C5CC0_51BB_C4EE_41CF_33A13C42F344"],"id":"panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF","label":trans('panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF.label'),"class":"Panorama","thumbnailUrl":"media/panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF_t.jpg","hfovMax":130,"vfov":180,"hfov":360,"frames":[{"thumbnailUrl":"media/panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF_t.jpg","cube":{"levels":[{"tags":"ondemand","height":4096,"colCount":48,"rowCount":8,"class":"TiledImageResourceLevel","url":"media/panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF_0/{face}/0/{row}_{column}.jpg","width":24576},{"tags":"ondemand","height":2048,"colCount":24,"rowCount":4,"class":"TiledImageResourceLevel","url":"media/panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF_0/{face}/1/{row}_{column}.jpg","width":12288},{"tags":"ondemand","height":1024,"colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF_0/{face}/2/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF_0/{face}/3/{row}_{column}.jpg","width":3072},{"tags":"mobilevr2gen","height":2048,"colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"data":{"label":"office_00001_reception"}},{"id":"MainViewer","toolTipFontSize":"1.11vmin","progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"progressOpacity":0.7,"subtitlesTextShadowHorizontalLength":1,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"progressBarBorderColor":"#000000","subtitlesBottom":50,"progressBarBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","playbackBarHeadWidth":6,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","subtitlesTop":0,"progressBackgroundColor":["#000000"],"playbackBarBorderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarRight":0,"progressBottom":10,"firstTransitionDuration":0,"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"vrPointerColor":"#FFFFFF","playbackBarProgressBorderSize":0,"progressHeight":2,"minHeight":50,"minWidth":100,"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarHeadBorderSize":0,"progressBarBorderRadius":2,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarLeft":0,"toolTipFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","progressBorderRadius":2,"width":"100%","propagateClick":false,"toolTipShadowColor":"#333138","playbackBarHeadShadow":true,"playbackBarHeight":10,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressLeft":"33%","height":"100%","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"toolTipPaddingBottom":4,"playbackBarHeadHeight":15,"class":"ViewerArea","vrPointerSelectionColor":"#FF6600","toolTipFontColor":"#606060","subtitlesFontFamily":"Arial","subtitlesBackgroundColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarBorderColor":"#FFFFFF","subtitlesGap":0,"toolTipPaddingRight":6,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBorderRadius":0,"playbackBarBottom":5,"subtitlesTextShadowOpacity":1,"playbackBarProgressBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","toolTipPaddingLeft":6,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingTop":4},{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF"}],"class":"PlayList"},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","aaEnabled":true,"class":"PanoramaPlayer","mode":"quality","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","arrowKeysAction":"translate"},{"id":"panorama_5D99E499_5174_C49E_41C0_BC67DA628DAF_camera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","initialSequence":"this.sequence_5A6FC072_5177_3B93_41D1_049B9B596EB8","enterPointingToHorizon":true},{"id":"overlay_5F84613E_51AD_5D92_4181_62D37EA019E3","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5C4131AA_51AD_5CB3_41D1_FB335D9F4968"],"useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","rotationY":17,"pitch":-0.12,"yaw":-169.37,"image":"this.res_418E785E_51D7_4B92_4191_5AC16ACD3FC1","hfov":10.5,"data":{"label":"A_di_accredita"},"vfov":10.5}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"A_di_accredita"}},{"id":"overlay_5FEE174B_51AB_C5F2_41D0_8A11204F3C79","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5FFEF755_51AB_C596_41C6_C81F5E6902A5"],"useHandCursor":true,"items":[{"distance":50,"class":"QuadHotspotPanoramaOverlayImage","vertices":[{"yaw":-29.9,"pitch":21.18,"class":"PanoramaPoint"},{"yaw":8.81,"pitch":23.83,"class":"PanoramaPoint"},{"yaw":8.89,"pitch":3.81,"class":"PanoramaPoint"},{"yaw":-30.01,"pitch":3.31,"class":"PanoramaPoint"}],"data":{"label":"LOGO_ACCREDITA_CLAIM"},"image":"this.res_418F485F_51D7_4B92_41C2_A87A01546585"}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"LOGO_ACCREDITA_CLAIM"}},{"id":"overlay_5EA7FC9D_51B5_4496_4195_E2DAFBAD5086","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5EA65C9E_51B5_4492_41CF_9DF41284E9ED"],"useHandCursor":true,"items":[{"distance":50,"class":"QuadHotspotPanoramaOverlayImage","vertices":[{"yaw":-12.46,"pitch":-17.57,"class":"PanoramaPoint"},{"yaw":12.79,"pitch":-18.05,"class":"PanoramaPoint"},{"yaw":13.32,"pitch":-32.31,"class":"PanoramaPoint"},{"yaw":-13.34,"pitch":-31.56,"class":"PanoramaPoint"}],"data":{"label":"iad_neg"},"image":"this.res_418FF860_51D7_4BAE_41D1_627BD8C28CA0"}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"iad_neg"}},{"id":"overlay_408FF427_51B5_3BB1_41D1_96864A327CD1","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_4093443E_51B5_3B93_41BA_AE04238C2B92"],"useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","vfov":10.64,"yaw":-92.96,"data":{"label":"iad_neg"},"image":"this.res_418FF860_51D7_4BAE_41D1_627BD8C28CA0","hfov":12.69,"opacity":0.8,"pitch":3.81}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"iad_neg"}},{"id":"overlay_5E72FC39_51B4_CB9E_41CB_C2E7D4887017","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5F1B3C85_51B4_CB71_41BC_64EDA2BF8F02"],"useHandCursor":true,"items":[{"distance":50,"rotationX":-5,"roll":2,"rotationY":-19,"scaleMode":"fit_inside","vfov":9.95,"class":"HotspotPanoramaOverlayImage","yaw":-110.52,"image":"this.res_418FD860_51D7_4BAE_41D1_97A24402FA69","hfov":12.62,"opacity":0.8,"data":{"label":"A_di_accredita"},"pitch":3.46}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"A_di_accredita"}},{"id":"overlay_5F008063_51BD_3BB1_41D2_B06A0281D8D9","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5F0860CC_51BD_3CF6_41CB_1F6F4008B602"],"useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","pitch":-1.39,"scaleMode":"fit_inside","yaw":177.26,"data":{"label":"iad"},"image":"this.res_418C2860_51D7_4BAE_4192_A6CAE7CF4DF1","hfov":9.71,"vfov":8.42}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"iad"}},{"id":"overlay_5E87B7AA_51BD_44B3_41D0_46C4BC662492","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5E90F7BC_51BD_4497_41C5_E17C06D539AF"],"useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","pitch":0.82,"scaleMode":"fit_inside","yaw":88.22,"data":{"label":"iad"},"image":"this.res_418C2860_51D7_4BAE_4192_A6CAE7CF4DF1","hfov":6.92,"vfov":5.89}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"iad"}},{"id":"overlay_5ED47102_51BD_3D72_41CD_1808FB2E56F2","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5F1B816B_51BD_3DB1_41C1_BC4CF0855314"],"useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","rotationY":-3,"pitch":0.84,"yaw":96.56,"image":"this.res_418C0860_51D7_4BAE_41BE_49F8A432C4C5","hfov":6.92,"data":{"label":"iad_logo_neg"},"vfov":5.89}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"iad_logo_neg"}},{"id":"overlay_41BFB1E5_51BC_DCB6_41C9_DBACE12A97E2","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_41BEB1E6_51BC_DCB2_41D1_690CC3BAF157"],"useHandCursor":true,"items":[{"distance":50,"class":"QuadHotspotPanoramaOverlayImage","vertices":[{"yaw":111.99,"pitch":2.27,"class":"PanoramaPoint"},{"yaw":118.26,"pitch":2.32,"class":"PanoramaPoint"},{"yaw":118.18,"pitch":-3.63,"class":"PanoramaPoint"},{"yaw":111.89,"pitch":-3.5,"class":"PanoramaPoint"}],"data":{"label":"A_di_accredita"},"image":"this.res_418E785E_51D7_4B92_4191_5AC16ACD3FC1"}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"A_di_accredita"}},{"id":"overlay_402C5CC0_51BB_C4EE_41CF_33A13C42F344","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_40292CC9_51BB_C4FE_4195_6BAF5DE079D1"],"useHandCursor":true,"items":[{"distance":50,"rotationX":-1,"roll":-1,"rotationY":63,"scaleMode":"fit_inside","vfov":8.3,"class":"HotspotPanoramaOverlayImage","yaw":68.04,"image":"this.res_418F485F_51D7_4B92_41C2_A87A01546585","hfov":20.04,"data":{"label":"LOGO_ACCREDITA_CLAIM"},"pitch":0.41}],"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"LOGO_ACCREDITA_CLAIM"}},{"id":"sequence_5A6FC072_5177_3B93_41D1_049B9B596EB8","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"HotspotPanoramaOverlayArea_5C4131AA_51AD_5CB3_41D1_FB335D9F4968","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_418E785E_51D7_4B92_4191_5AC16ACD3FC1","levels":[{"height":496,"class":"ImageResourceLevel","url":"media/res_418E785E_51D7_4B92_4191_5AC16ACD3FC1_0.png","width":496}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_5FFEF755_51AB_C596_41C6_C81F5E6902A5","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_418F485F_51D7_4B92_41C2_A87A01546585","levels":[{"height":136,"class":"ImageResourceLevel","url":"media/res_418F485F_51D7_4B92_41C2_A87A01546585_0.jpg","width":286}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_5EA65C9E_51B5_4492_41CF_9DF41284E9ED","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_418FF860_51D7_4BAE_41D1_627BD8C28CA0","levels":[{"height":206,"class":"ImageResourceLevel","url":"media/res_418FF860_51D7_4BAE_41D1_627BD8C28CA0_0.jpg","width":242}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_4093443E_51B5_3B93_41BA_AE04238C2B92","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_5F1B3C85_51B4_CB71_41BC_64EDA2BF8F02","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_418FD860_51D7_4BAE_41D1_97A24402FA69","levels":[{"height":206,"class":"ImageResourceLevel","url":"media/res_418FD860_51D7_4BAE_41D1_97A24402FA69_0.jpg","width":242}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_5F0860CC_51BD_3CF6_41CB_1F6F4008B602","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_418C2860_51D7_4BAE_4192_A6CAE7CF4DF1","levels":[{"height":206,"class":"ImageResourceLevel","url":"media/res_418C2860_51D7_4BAE_4192_A6CAE7CF4DF1_0.png","width":242}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_5E90F7BC_51BD_4497_41C5_E17C06D539AF","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_5F1B816B_51BD_3DB1_41C1_BC4CF0855314","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_418C0860_51D7_4BAE_41BE_49F8A432C4C5","levels":[{"height":206,"class":"ImageResourceLevel","url":"media/res_418C0860_51D7_4BAE_41BE_49F8A432C4C5_0.png","width":242}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_41BEB1E6_51BC_DCB2_41D1_690CC3BAF157","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_40292CC9_51BB_C4FE_4195_6BAF5DE079D1","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"gap":10,"width":"100%","height":"100%","scripts":{"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"cloneBindings":TDV.Tour.Script.cloneBindings,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"createTween":TDV.Tour.Script.createTween,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"translate":TDV.Tour.Script.translate,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"init":TDV.Tour.Script.init,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getKey":TDV.Tour.Script.getKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaByName":TDV.Tour.Script.getMediaByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupImage":TDV.Tour.Script.showPopupImage,"setLocale":TDV.Tour.Script.setLocale,"textToSpeech":TDV.Tour.Script.textToSpeech,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"executeJS":TDV.Tour.Script.executeJS,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"registerKey":TDV.Tour.Script.registerKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMainViewer":TDV.Tour.Script.getMainViewer,"getOverlays":TDV.Tour.Script.getOverlays,"clone":TDV.Tour.Script.clone,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playAudioList":TDV.Tour.Script.playAudioList,"quizStart":TDV.Tour.Script.quizStart,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setValue":TDV.Tour.Script.setValue,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"downloadFile":TDV.Tour.Script.downloadFile,"mixObject":TDV.Tour.Script.mixObject,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showWindow":TDV.Tour.Script.showWindow,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"existsKey":TDV.Tour.Script.existsKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"openLink":TDV.Tour.Script.openLink,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPixels":TDV.Tour.Script.getPixels,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizFinish":TDV.Tour.Script.quizFinish,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags},"minHeight":0,"backgroundColorRatios":[0],"watermark":false,"children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.3.js.map
})();
//Generated with v2023.0.3, Wed Apr 5 2023