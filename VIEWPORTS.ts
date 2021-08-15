const VIEWPORTS: VIEWPORTSTYPE = {
    "1024x600": {
        width: 1024,
        height: 600,
    },
    "620x480": {
        width: 620,
        height: 480,
    }
}
export type vp = keyof typeof VIEWPORTS;
interface IVP {
    width: number;
    height: number;
}
type VIEWPORTSTYPE = {
    "1024x600": IVP,
    "620x480": IVP,
}
export default VIEWPORTS