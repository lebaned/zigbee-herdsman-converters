const extend = require('../lib/extend');

module.exports = [
    {
        zigbeeModel: ['AJ-RGBCCT 5 in 1'],
        model: 'Aj_Zigbee_Led_Strip',
        vendor: 'Ajax Online',
        description: 'LED Strip',
        extend: extend.light_onoff_brightness_colortemp_color(),
    },
    {
        zigbeeModel: ['AJ_ZB30_GU10', 'AJ_ZB120_GU10'],
        model: 'AJ_ZB_GU10',
        vendor: 'Ajax Online',
        description: 'Smart Zigbee pro GU10 spotlight bulb',
        extend: extend.light_onoff_brightness_colortemp_color({colorTempRange: [158, 495], disableEffect: true}),
    },
    {
        zigbeeModel: ['AJ_ZBPROA60'],
        model: 'AJ_ZIGPROA60',
        vendor: 'Ajax Online',
        description: 'Smart Zigbee pro 12W A60 bulb',
        extend: extend.light_onoff_brightness_colortemp_color({colorTempRange: [158, 495]}),
        meta: {turnsOffAtBrightness1: true},
    },
];
