class CaixaDaLanchonete {

    constructor() {

        this.cardapio = {
            'cafe': { descricao: 'Café', valor: 3.00 },
            'chantily': { descricao: 'Chantily (extra do Café)', valor: 1.50 },
            'suco': { descricao: 'Suco Natural', valor: 6.20 },
            'sanduiche': { descricao: 'Sanduíche', valor: 6.50 },
            'queijo': { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            'salgado': { descricao: 'Salgado', valor: 7.25 },
            'combo1': { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            'combo2': { descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        };

        this.formasDePagamentos = ['dinheiro', 'debito', 'credito'];

    }
    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.formasDePagamentos.includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let valorTotal = 0;
        const itensValidos = []; 
        

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            const menuItem = this.cardapio[codigo];

            if (!menuItem) {
                return "Item inválido!";
            }

            if (menuItem.descricao.includes('extra')) {
                const itemExtra = codigo.split(' ')[0];
             

                if(menuItem.descricao.includes(itemExtra)){
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
            
        
            else {
                itensValidos.push(codigo);
              
            }

            if (quantidade <= 0) {
                return "Quantidade inválida!";
            }

            valorTotal += menuItem.valor * quantidade;
    
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03;
        }

        return `R$ ${valorTotal.toFixed(2)}`;
        

   
    }
}


const caixa = new CaixaDaLanchonete()
console.log(caixa.calcularValorDaCompra('credito', ['combo1,1','cafe,2']));