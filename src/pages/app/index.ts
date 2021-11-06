import MainPage from "../main";
import Page from "../../core/templates/page";
import SettingsPage from "../settings";
import Statistics from "../statistics";
import Header from "../../core/components/header";
import ErrorPage from "../error";
export const enum PagesId {
    Main = 'main-page',
    Settings = 'settings-page',
    Statistics = 'statistics-page'
}

class App {
    private static container: HTMLElement = document.body;
    private initialPage: MainPage
    private header: Header;
    private static defaultPageID: string = 'current-page'

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageID}`)
        if (currentPageHTML) {
            currentPageHTML.remove()
        }
        let page: Page | null = null
        if (idPage === PagesId.Main) {
            page = new MainPage(idPage)
        } else if (idPage === PagesId.Settings) {
            page = new SettingsPage(idPage)
        } else if (idPage === PagesId.Statistics) {
            page = new Statistics(idPage)
        } else {
            page = new ErrorPage(idPage,'404')
        }

        if (page) {
            const pageHTML = page.render()
            pageHTML.id = App.defaultPageID
            App.container.append(pageHTML)
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hashValue = window.location.hash.slice(1)
            App.renderNewPage(hashValue)
        })
    }

    constructor() {
        this.initialPage = new MainPage('main-page')
        this.header = new Header('header', 'header-container')
    }

    run() {
        App.container.append(this.header.render())
        App.renderNewPage('statistics-page')
        this.enableRouteChange()
    }
}

export default App