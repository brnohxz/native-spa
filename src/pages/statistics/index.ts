import Page from "../../core/templates/page";

class Statistics extends Page{
    static TextObject = {
        MainTitle:'Statistics Page'
    }

    constructor(id:string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(Statistics.TextObject.MainTitle)
        this.container.append(title)
        return this.container
    }
}

export default Statistics