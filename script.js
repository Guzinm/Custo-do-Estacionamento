class tabelaDePrecos {

    #valores = [[]];

    constructor(valores) {
        this.#valores = valores;
    };

    Comparar(Valor){

        for (let i = 0; i < this.#valores.length; i++) {
            const Preco = this.#valores[i][0];
            const Tempo = this.#valores[i][1];

            if (Valor >= Preco) {
                return [Valor - Preco, Tempo];
            };
        }

    };
};

class OperacoesDoSite {
    
    #objetoInput;
    #objetoOutput;
    #tabela;

    constructor(IDInput, Tabela, IDOutput){
        this.#objetoInput = document.getElementById(IDInput);
        this.#objetoOutput = document.getElementById(IDOutput);
        this.#tabela = Tabela;

        this.retorno = [];
    };

    #LimparCampo() {
        this.#objetoInput.value = '';
    }

    Calcular(){

        if (this.#objetoInput.value < 1) {
            alert("Insira um valor maior que R$1.00 !");
            this.#LimparCampo();
            return;
        };

        this.retorno = this.#tabela.Comparar(parseFloat(this.#objetoInput.value));
        
        this.#objetoOutput.textContent = `Seu tempo de estacionamento é ${this.retorno[1]} minutos, e seu troco é de R$${this.retorno[0].toFixed(2)}`;

        this.#LimparCampo();
    };

};

const TabelaInicial = new tabelaDePrecos([[3,120],[1.75,60],[1,30]]);
const Resultado = new OperacoesDoSite("Valor", TabelaInicial,"MostarResultado");