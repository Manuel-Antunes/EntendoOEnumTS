import VIEWPORTS, { vp } from './VIEWPORTS.ts'
export default class User {
    private email: string;
    private password: string;
    private viewPort: vp
    constructor(email: string, password: string, viewPort: vp) {
        this.email = email;
        this.password = password;
        this.viewPort = viewPort;
    }

    public start() {
        const vp = VIEWPORTS[this.viewPort];
        return vp;
    }
}
