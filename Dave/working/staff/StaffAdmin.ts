import Stress from "../Stress";
import Employee from "./Employee";

export default class StaffAdmin {
    private stress: Stress;

    constructor() {
        this.stress = Stress.getInstance();
    }

    staffOffSick(staffList: Employee[]) {
        const possibleSickWorker: Employee =
            staffList[Math.floor(Math.random() * staffList.length)];
        const sickChance: number = Math.floor(Math.random() * 4);

        if (sickChance === 3) {
            possibleSickWorker.isHealthy = false;
            console.log(possibleSickWorker.name);
            this.stress.setSickWorker(possibleSickWorker.name);
        } else {
            for (let employee of staffList) {
                employee.isHealthy = true;
            }
        }
    }
}
