import { RemoteButton } from '../app/hms';

const SUBWOOFER: String = 'subwoofer';
const LIGHT_CEILING: String = 'light_ceiling';
const DESKTOP: String = 'desktop';

export const SUBWOOFER_REMOTE: RemoteButton[] = [
	{ imageUrl: '/assets/images/MuteIcon.png', description: 'STUMM', remoteName: SUBWOOFER, buttonName: 'MUTE' },
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'AN / AUS', remoteName: SUBWOOFER, buttonName: 'POWER_TOGGLE' },
	{ imageUrl: '/assets/images/QuiterIcon.png', description: 'LEISER', remoteName: SUBWOOFER, buttonName: 'VOLUME_DOWN' },
	{ imageUrl: '/assets/images/LouderIcon.png', description: 'LAUTER', remoteName: SUBWOOFER, buttonName: 'VOLUME_UP' },
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '/assets/images/HigherIcon.png', description: 'BASS+', remoteName: SUBWOOFER, buttonName: 'BASS_UP' },
	{ imageUrl: '/assets/images/HigherIcon.png', description: 'SUBWOOFER+', remoteName: SUBWOOFER, buttonName: 'SUBWOOFER_UP' },
	{ imageUrl: '/assets/images/CDIcon.png', description: 'CD', remoteName: SUBWOOFER, buttonName: 'INPUT_CD' },
	{ imageUrl: '/assets/images/PCInIcon.png', description: 'PC', remoteName: SUBWOOFER, buttonName: 'INPUT_PC' },
	{ imageUrl: '/assets/images/LowerIcon.png', description: 'BASS-', remoteName: SUBWOOFER, buttonName: 'BASS_DOWN' },
	{ imageUrl: '/assets/images/LowerIcon.png', description: 'SUBWOOFER-', remoteName: SUBWOOFER, buttonName: 'SUBWOOFER_DOWN' },
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '/assets/images/OpticalIcon.png', description: 'OPTISCH', remoteName: SUBWOOFER, buttonName: 'INPUT_DIGITAL' }
];

export const LIGHT_CEILING_REMOTE: RemoteButton[] = [
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'AN', remoteName: LIGHT_CEILING, buttonName: 'POWER_ON' },
	{ imageUrl: '/assets/images/BrightnessLow.png', description: 'DUNKLER', remoteName: LIGHT_CEILING, buttonName: 'BRIGHTNESS_DOWN' },
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '/assets/images/BrightnessHigh.png', description: 'HELLER', remoteName: LIGHT_CEILING, buttonName: 'BRIGHTNESS_UP' },
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'AUS', remoteName: LIGHT_CEILING, buttonName: 'POWER_OFF' },
	{ imageUrl: '/assets/images/CandleMode.png', description: 'KERZENLICHT', remoteName: LIGHT_CEILING, buttonName: 'CANDLE_MODE' },
	{ imageUrl: '/assets/images/LightBulbMode.png', description: 'GLÜHBIRNLICHT', remoteName: LIGHT_CEILING, buttonName: 'LIGHT_BULB_MODE' },
	{ imageUrl: '/assets/images/SunMode.png', description: 'SONNENLICHT', remoteName: LIGHT_CEILING, buttonName: 'SUN_MODE' },
	{ imageUrl: '/assets/images/IceMode.png', description: 'KALTES LICHT', remoteName: LIGHT_CEILING, buttonName: 'ICE_MODE' },
	{ imageUrl: '/assets/images/NightMode.png', description: 'NACHT', remoteName: LIGHT_CEILING, buttonName: 'EVENING_MODE' },
	{ imageUrl: '/assets/images/SleepMode.png', description: 'SCHLAFEN', remoteName: LIGHT_CEILING, buttonName: 'SLEEP_MODE' },
	{ imageUrl: '/assets/images/ReadMode.png', description: 'LESEN', remoteName: LIGHT_CEILING, buttonName: 'READING_MODE' },
	{ imageUrl: '/assets/images/MeditationMode.png', description: 'MEDITATION', remoteName: LIGHT_CEILING, buttonName: 'MEDITATION_MODE' },
	{ imageUrl: '/assets/images/SunriseMode.png', description: 'SONNENAUFGANG', remoteName: LIGHT_CEILING, buttonName: 'MORNING_MODE' },
	{ imageUrl: '/assets/images/ColorMode.png', description: 'FARBEN', remoteName: LIGHT_CEILING, buttonName: 'CIRCLE_MODE' },
	{ imageUrl: '/assets/images/PartyMode.png', description: 'PARTY', remoteName: LIGHT_CEILING, buttonName: 'PARTY_MODE' },
	{ imageUrl: '/assets/images/BeachMode.png', description: 'URLAUB', remoteName: LIGHT_CEILING, buttonName: 'VACATION_MODE' },
	{ imageUrl: '/assets/images/OceanMode.png', description: 'WASSER', remoteName: LIGHT_CEILING, buttonName: 'OCEAN_MODE' },
	{ imageUrl: '/assets/images/FireMode.png', description: 'FEUER', remoteName: LIGHT_CEILING, buttonName: 'FIRE_MODE' },
	{ imageUrl: '/assets/images/RomanticMode.png', description: 'ROMANTIK', remoteName: LIGHT_CEILING, buttonName: 'LOVE_MODE' }
];

export const DESKTOP_REMOTE: RemoteButton[] = [
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'A AN', remoteName: DESKTOP, buttonName: 'A_ON' },
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'A AUS', remoteName: DESKTOP, buttonName: 'A_OFF' },
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'B AN', remoteName: DESKTOP, buttonName: 'B_ON' },
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'B AUS', remoteName: DESKTOP, buttonName: 'B_OFF' },
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'C AN', remoteName: DESKTOP, buttonName: 'C_ON' },
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'C AUS', remoteName: DESKTOP, buttonName: 'C_OFF' },
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'D AN', remoteName: DESKTOP, buttonName: 'D_ON' },
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '', description: '', remoteName: '', buttonName: ''},
	{ imageUrl: '/assets/images/PowerIcon.png', description: 'D AUS', remoteName: DESKTOP, buttonName: 'D_OFF' }
];