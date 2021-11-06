import Component from "../../templates/component";
import {PagesId} from "../../../pages/app";
import Page from "../../templates/page";

const Buttons = [
    {
        id: PagesId.Main,
        text: 'Go to Main Page'
    }, {
        id: PagesId.Settings,
        text: 'Go to Settings Page'
    }, {
        id: PagesId.Statistics,
        text: 'Go to Statistics Page'
    }

]

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div')
        Buttons.forEach(button=>{
            const buttonLinkHTML = document.createElement('a')
            const buttonDivHTML = document.createElement('div')
            buttonLinkHTML.href = `#${button.id}`;
            buttonLinkHTML.innerText = button.text
            buttonDivHTML.append(buttonLinkHTML)
            pageButtons.append(buttonDivHTML);
        })
        this.container.append(pageButtons)
    }

    render(): HTMLElement {
        this.renderPageButtons()
        return this.container;
    }
}

export default Header