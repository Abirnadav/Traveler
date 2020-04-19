export class Location {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    render() {
        return `<tr> 
        <td> ${this.x} </td>
        <td> ${this.y} </td>
        <td> 
        <tr onclick="onDelete()"> Delete </tr>
        <tr onclick="onUpdate()"> Update </tr>
        </td>
        </tr>`
    }
}


