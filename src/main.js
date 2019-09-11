class App { // Classe que controla a aplicação
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers(); // Função que registra os eventos
    }

    registerHandlers() {
        this.formEl.onsubmit = (event) => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'GabrielGP',
            description: 'Aula de Ecma',
            avatar_url: 'https://avatars2.githubusercontent.com/u/38352545?s=400&u=601af018e865f6c00ba67c41580ec82a92583a8d&v=4',
            html_url: 'https://github.com/GarciaGP/Loki'
        });

        console.log(this.repositories);
    }

}

new App();

