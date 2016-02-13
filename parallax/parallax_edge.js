/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_4_sloi2',
                            type: 'image',
                            rect: ['-20px', '0px', '1280px', '542px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4_sloi.jpg",'0px','0px']
                        },
                        {
                            id: '_4_sloi',
                            type: 'image',
                            rect: ['-29px', '231px', '722px', '352px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4_sloi.png",'0px','0px']
                        },
                        {
                            id: '_3_sloi',
                            type: 'image',
                            rect: ['-216px', '59px', '1280px', '472px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3_sloi.png",'0px','0px']
                        },
                        {
                            id: '_2_sloi',
                            type: 'image',
                            rect: ['-378px', '53px', '1280px', '568px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2_sloi.png",'0px','0px']
                        },
                        {
                            id: 'first_plan',
                            symbolName: 'first_plan',
                            type: 'rect',
                            rect: ['-796px', '0', '1521', '600', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '720px', '600px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${_3_sloi}",
                            '0px',
                            '-216px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${_4_sloi}",
                            '39px',
                            '-29px'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${_2_sloi}",
                            '0px',
                            '-378px'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${_4_sloi2}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${first_plan}",
                            '0px',
                            '-796px'
                        ]
                    ]
                }
            },
            "first_plan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_1_sloi_4',
                            type: 'image',
                            rect: ['0px', '460px', '262px', '140px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/1_sloi_4.png', '0px', '0px']
                        },
                        {
                            id: '_1_sloi_3',
                            type: 'image',
                            rect: ['0px', '0px', '199px', '199px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/1_sloi_3.png', '0px', '0px']
                        },
                        {
                            id: '_1_sloi_2',
                            type: 'image',
                            rect: ['314px', '530px', '306px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/1_sloi_2.png', '0px', '0px']
                        },
                        {
                            rect: ['650px', '537px', '410px', '63px', 'auto', 'auto'],
                            id: '_1_sloi_1',
                            transform: [[], [], ['31']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/1_sloi_1.png', '0px', '0px']
                        },
                        {
                            rect: ['1107px', '517px', '410px', '81px', 'auto', 'auto'],
                            id: '_1_sloi_1Copy',
                            transform: [[], [], ['-6']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/1_sloi_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1521px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("parallax_edgeActions.js");
})("EDGE-125205194");
