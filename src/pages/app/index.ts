import MainPage from "../main";
import Page from "../../core/templates/page";
import SettingsPage from "../settings";
import Statistics from "../statistics";

const enum PagesId {
    Main = 'main-page',
    Settings = 'settings-page',
    Statistics = 'statistics-page'
}

class App {
    private container: HTMLElement;
    private initialPage: MainPage

    static renderNewPage(idPage: string) {
        document.body.innerHTML = '';
        let page: Page | null = null
        if (idPage === PagesId.Main) {
            page = new MainPage(idPage)
        } else if (idPage === PagesId.Settings){
            page = new SettingsPage(idPage)
        } else if (idPage === PagesId.Statistics){
            page = new Statistics(idPage)
        }

        if(page){
            const pageHTML = page.render()
            document.body.append(pageHTML)
        }
    }

    private enableRouteChange(){
        window.addEventListener('hashchange',()=>{
            const hashValue = window.location.hash.slice(1)
            App.renderNewPage(hashValue)
        })
    }

    constructor() {
        this.container = document.body;
        this.initialPage = new MainPage('main-page')
    }

    run() {
        App.renderNewPage('statistics-page')
        this.enableRouteChange()
    }
}

export default App