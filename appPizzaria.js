document.addEventListener("DOMContentLoaded", function () {
    function montarPizza() {
        let custo = 0;
        let extra = "";
        let opcional = "";
        let descricao = "";

        // sabor selecionado
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked').value;

        // tamanho selecionado
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked').value;

        if (tamanhoSelecionado == "Brotinho" && saborSelecionado == "Margherita") {
            custo += 18.75;
        } else if (tamanhoSelecionado == "Padrão" && saborSelecionado == "Margherita") {
            custo += 25;
        } else if (tamanhoSelecionado == "Grande" && saborSelecionado == "Margherita") {
            custo += 31.25;
        } else if (tamanhoSelecionado == "Brotinho" && saborSelecionado == "Calabresa") {
            custo += 20;
        } else if (tamanhoSelecionado == "Padrão" && saborSelecionado == "Calabresa") {
            custo += 28;
        } else if (tamanhoSelecionado == "Grande" && saborSelecionado == "Calabresa") {
            custo += 35;
        } else if (tamanhoSelecionado == "Brotinho" && saborSelecionado == "Frango Com Catupiry") {
            custo += 19;
        } else if (tamanhoSelecionado == "Padrão" && saborSelecionado == "Frango Com Catupiry") {
            custo += 25;
        } else if (tamanhoSelecionado == "Grande" && saborSelecionado == "Frango Com Catupiry") {
            custo += 31.25;
        } else if (tamanhoSelecionado == "Brotinho" && saborSelecionado == "Portuguesa") {
            custo += 20;
        } else if (tamanhoSelecionado == "Padrão" && saborSelecionado == "Portuguesa") {
            custo += 26;
        } else if (tamanhoSelecionado == "Grande" && saborSelecionado == "Portuguesa") {
            custo += 32;
        }

        // borda selecionada
        let bordaSelecionado = document.querySelector('input[name="borda"]:checked').value;

        if (bordaSelecionado == "Sem Borda") {
            custo += 0.00;
        } else if (bordaSelecionado == "Tradicional") {
            custo += 0.00;
        } else if (bordaSelecionado == "Recheada com Catupiry") {
            custo += 2.00;
        } else if (bordaSelecionado == "Recheada com Cheddar") {
            custo += 3.00;
        }

        // ingrediente extra
        let queijoExtraCheck = document.querySelector('input[name="Extra Queijo"]:checked');
        if (queijoExtraCheck) {
            custo += 2.00;
            extra += "<br> - Queijo Extra";
        }
        let extraCheddarCheck = document.querySelector('input[name="Extra Cheddar"]:checked');
        if (extraCheddarCheck) {
            custo += 5.00;
            extra += "<br> - Queijo Cheddar Extra";
        }
        let extraBaconCheck = document.querySelector('input[name="Extra Bacon"]:checked');
        if (extraBaconCheck) {
            custo += 3.00;
            extra += "<br> - Bacon Extra";
        }
        let extraPepperoniCheck = document.querySelector('input[name="Extra Pepperoni"]:checked');
        if (extraPepperoniCheck) {
            custo += 3.00;
            extra += "<br> - Pepperoni Extra";
        }

        // ingrediente opcionais
        let opcionalOreganoCheck = document.querySelector('input[name="+ Oregano"]:checked');
        if (opcionalOreganoCheck) {
            extra += "<br> - Orégano opcional";
        }
        let opcionalAzeitonaCheck = document.querySelector('input[name="+ Azeitona"]:checked');
        if (opcionalAzeitonaCheck) {
            extra += "<br> - Azeitona opcional";
        }
        let opcionalAzeiteCheck = document.querySelector('input[name="+ Azeite"]:checked');
        if (opcionalAzeiteCheck) {
            extra += "<br> - Azeite opcional";
        }
        let opcionalPimentaReinoCheck = document.querySelector('input[name="+ Pimenta do Reino"]:checked');
        if (opcionalPimentaReinoCheck) {
            extra += "<br> - Pimenta do Reino opcional";
        }

        // montar pedido
        descricao += " - " + saborSelecionado + "<br> - " + tamanhoSelecionado + "<br> - " + bordaSelecionado + extra;

        // Enviar os dados para a página de pedido
        let pedidoJSON = JSON.stringify({
            descricao: descricao,
            total: custo.toFixed(2)
        });

        // Codificar os dados em URL
        let pedidoEncoded = encodeURIComponent(pedidoJSON);

        // Redirecionar para a página de resumo com os dados do pedido
        window.location.href = `/pedido?pedido=${pedidoEncoded}`;
    }

    // chama a função montarPizza ao clicar
    const button = document.querySelector("#montarPizza");
    button.addEventListener('click', montarPizza);
});
